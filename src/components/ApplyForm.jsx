import { useState, useEffect } from "react";
import { EAST_CHINA_PRICE_CAD, SOUTH_CHINA_PRICE_CAD, POLICY } from "../data/registry";

const TRIP_SCHEDULE = [
  {
    id: "classic-jul",
    route: "Classic Route",
    cities: "Shanghai → Suzhou → Hangzhou → Beijing",
    dates: "Jul 8 – Jul 17",
    arrive: "Shanghai",
    depart: "Beijing → Toronto",
    price: `$${EAST_CHINA_PRICE_CAD.toLocaleString()}`,
    color: "#C47A32",
    month: "July",
  },
  {
    id: "south-jul",
    route: "South China Route",
    cities: "Xiamen → Quanzhou → Chaoshan → Shenzhen",
    dates: "Jul 20 – Jul 29",
    arrive: "Xiamen",
    depart: "Shenzhen / Hong Kong",
    price: `$${SOUTH_CHINA_PRICE_CAD.toLocaleString()}`,
    color: "#2E8B57",
    month: "July",
  },
];

const DIETARY = ["Omnivore", "Vegetarian", "Vegan", "Halal", "Gluten-free", "Other"];

const INTERESTS = [
  "Historical landmarks (Great Wall, Forbidden City, etc.)",
  "Local food & street food",
  "Nightlife & social experiences",
  "Cultural workshops & hands-on activities",
  "Nature & scenic spots",
  "University exchange & student conversations",
  "Shopping & city exploration",
  "Photography",
];

const HEARD_FROM = [
  "UTETC (UofT Exploration & Travel Club)",
  "Instagram / Social Media",
  "Friend / Word of Mouth",
  "University Club or Society",
  "Poster / Flyer on Campus",
  "Other",
];

const WHATSAPP_LINK = "https://chat.whatsapp.com/LRSahRadDrjCErYY7TMpnw?mode=hqctcli";

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxYWq3BSE7VNXmqdzoEDh_pKj8rcbYmV_WDrtxIDz9cEICevUKH7qLI-8X5H7iMrK9b_w/exec";

const sectionStyle = {
  marginBottom: 28,
  padding: "20px 24px",
  background: "var(--color-background-secondary, #f9f8f6)",
  borderRadius: 12,
  border: "1px solid var(--color-border-tertiary, rgba(0,0,0,0.08))",
};

const sectionTitle = {
  fontSize: 15,
  fontWeight: 600,
  marginBottom: 4,
  color: "var(--color-text-primary, #1a1a1a)",
};

const sectionSub = {
  fontSize: 12,
  color: "var(--color-text-tertiary, #999)",
  marginBottom: 16,
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  marginBottom: 5,
  color: "var(--color-text-primary, #1a1a1a)",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  fontSize: 14,
  border: "1px solid var(--color-border-tertiary, rgba(0,0,0,0.15))",
  borderRadius: 8,
  background: "var(--color-background-primary, #fff)",
  color: "var(--color-text-primary, #1a1a1a)",
  outline: "none",
  boxSizing: "border-box",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: 70,
  resize: "vertical",
  fontFamily: "inherit",
};

const fieldWrap = { marginBottom: 14 };

const noteStyle = {
  fontSize: 11,
  color: "var(--color-text-tertiary, #999)",
  marginTop: 4,
  lineHeight: 1.4,
};

const checkGroup = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 4,
};

const checkLabel = {
  fontSize: 12,
  display: "flex",
  alignItems: "center",
  gap: 5,
  padding: "5px 10px",
  borderRadius: 16,
  border: "1px solid var(--color-border-tertiary, rgba(0,0,0,0.1))",
  cursor: "pointer",
  userSelect: "none",
  background: "var(--color-background-primary, #fff)",
};

const radioGroup = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  marginTop: 4,
};

const radioLabel = {
  fontSize: 13,
  display: "flex",
  alignItems: "center",
  gap: 6,
  cursor: "pointer",
};

const required = { color: "#c0392b", marginLeft: 2 };

export default function ExplorechinaForm() {
  const [form, setForm] = useState({
    fullName: "", preferredName: "", email: "", phone: "",
    university: "", program: "", yearOfStudy: "",
    gender: "",
    nationality: "", canadianPassport: "",
    trips: [], unsureTiming: false, availableFrom: "", availableTo: "",
    heardFrom: "", heardFromOther: "",
    motivation: "",
    roomPreference: "", roommateRequest: "", roommateGender: "",
    snoring: "",
    dietaryType: "", dietaryOther: "", allergies: "",
    medicalConditions: "",
    emergencyName: "", emergencyPhone: "", emergencyRelation: "",
    passportValid: "", traveledChina: "",
    travelInsurance: "",
    utetcMember: "", wantsToJoinUtetc: false, customSouvenir: "", joinedWhatsapp: "",
    friendsApplied: "",
    interests: [], dreamCities: "", nervous: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 480
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const toggleArray = (key, val) => {
    setForm(f => {
      const arr = f[key];
      return { ...f, [key]: arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val] };
    });
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.nationality || (!form.trips.length && !form.unsureTiming)) {
      alert("Please fill in all required fields (name, email, nationality, trip selection).");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        ...form,
        trips: form.unsureTiming
          ? `Unsure — available: ${form.availableFrom || "?"} to ${form.availableTo || "?"}`
          : form.trips.map(id => {
              const t = TRIP_SCHEDULE.find(s => s.id === id);
              return t ? `${t.route} (${t.dates}) ${t.price}` : id;
            }).join("; "),
        interests: form.interests.join("; "),
        submittedAt: new Date().toISOString(),
      };

      if (GOOGLE_SHEET_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      setSubmitted(true);
    } catch (e) {
      alert("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>&#10003;</div>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Application received!</h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary, #666)", maxWidth: 380, margin: "0 auto", lineHeight: 1.5 }}>
          We'll review your application and get back to you within 5 business days at <strong>{form.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "8px 0" }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Trip Application</h1>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary, #666)", lineHeight: 1.5 }}>
          Takes about 5 minutes. We'll follow up by email within 5 business days.
        </p>
      </div>

      {/* ===== SECTION 1: BASIC INFO ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>About you</div>
        <div style={sectionSub}>Basic identity and contact info</div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
          <div style={fieldWrap}>
            <label style={labelStyle}>Full name (as on passport)<span style={required}>*</span></label>
            <input style={inputStyle} value={form.fullName} onChange={e => update("fullName", e.target.value)} />
          </div>
          <div style={fieldWrap}>
            <label style={labelStyle}>Preferred name / nickname</label>
            <input style={inputStyle} value={form.preferredName} onChange={e => update("preferredName", e.target.value)} />
          </div>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Email<span style={required}>*</span></label>
          <input style={inputStyle} type="email" value={form.email} onChange={e => update("email", e.target.value)} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Phone number (WhatsApp or WeChat preferred)</label>
          <input style={inputStyle} value={form.phone} onChange={e => update("phone", e.target.value)} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
          <div style={fieldWrap}>
            <label style={labelStyle}>University</label>
            <input style={inputStyle} value={form.university} onChange={e => update("university", e.target.value)} />
          </div>
          <div style={fieldWrap}>
            <label style={labelStyle}>Program / Major</label>
            <input style={inputStyle} value={form.program} onChange={e => update("program", e.target.value)} />
          </div>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Year of study</label>
          <input style={inputStyle} placeholder="e.g. 2nd year, graduating 2027" value={form.yearOfStudy} onChange={e => update("yearOfStudy", e.target.value)} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Gender</label>
          <div style={checkGroup}>
            {["Male", "Female", "Non-binary", "Prefer not to say"].map(v => (
              <label key={v} style={{ ...checkLabel, background: form.gender === v ? "rgba(196,122,50,0.08)" : undefined, borderColor: form.gender === v ? "#C47A32" : undefined }}>
                <input type="radio" name="gender" checked={form.gender === v} onChange={() => update("gender", v)} style={{ display: "none" }} /> {v}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SECTION 2: PASSPORT & VISA ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Passport & visa</div>
        <div style={sectionSub}>Helps us determine your visa requirements</div>

        <div style={{ padding: "10px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10, marginBottom: 14 }}>
          <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.55 }}>
            Not sure about visa requirements, entry rules, or what documents you need? Check our{" "}
            <a href="/handbook" target="_blank" rel="noopener noreferrer" style={{ color: "#C47A32", fontWeight: 600, textDecoration: "underline" }}>
              Participant Handbook
            </a>{" "}
            — it covers everything from visa-free entry to transit policies for different passport holders.
          </p>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Nationality / passport country<span style={required}>*</span></label>
          <input style={inputStyle} value={form.nationality} onChange={e => update("nationality", e.target.value)} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Do you hold a Canadian passport?</label>
          <div style={radioGroup}>
            {["Yes", "No"].map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="canadianPassport" checked={form.canadianPassport === v} onChange={() => update("canadianPassport", v)} /> {v}
              </label>
            ))}
          </div>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Is your passport valid for 6+ months beyond travel dates?</label>
          <div style={radioGroup}>
            {["Yes", "No", "I need to check / renew"].map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="passportValid" checked={form.passportValid === v} onChange={() => update("passportValid", v)} /> {v}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SECTION 3: TRIP SELECTION ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Which trips are you interested in?<span style={required}>*</span></div>
        <div style={sectionSub}>Select all that you'd like to join — you can pick more than one</div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary, #666)", marginBottom: 8, letterSpacing: 1, textTransform: "uppercase" }}>July 2026</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TRIP_SCHEDULE.map(trip => {
                const selected = form.trips.includes(trip.id);
                return (
                  <label key={trip.id} style={{
                    display: "block", padding: "12px 14px", borderRadius: 10, cursor: form.unsureTiming ? "default" : "pointer",
                    border: selected ? `1.5px solid ${trip.color}` : "1.5px solid rgba(0,0,0,0.08)",
                    background: selected ? `${trip.color}08` : "var(--color-background-primary, #fff)",
                    opacity: form.unsureTiming ? 0.35 : (trip.comingSoon ? 0.7 : 1),
                    position: "relative",
                    pointerEvents: form.unsureTiming ? "none" : "auto",
                  }}>
                    <input type="checkbox" checked={selected} onChange={() => toggleArray("trips", trip.id)} style={{ display: "none" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: selected ? trip.color : "var(--color-border-secondary, #ccc)" }} />
                        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary, #1a1a1a)" }}>{trip.route}</span>
                      </div>
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        {trip.comingSoon && (
                          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#fff", background: trip.color, padding: "2px 8px", borderRadius: 10 }}>Coming soon</span>
                        )}
                        <span style={{ fontSize: 12, fontWeight: 600, color: trip.color }}>{trip.dates}</span>
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: "var(--color-text-secondary, #666)", marginLeft: 16 }}>{trip.cities}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 16, marginTop: 3 }}>
                      <span style={{ fontSize: 11, color: "var(--color-text-tertiary, #999)" }}>Arrive: {trip.arrive} &nbsp;·&nbsp; Depart: {trip.depart}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: trip.color }}>{trip.price} CAD</span>
                    </div>
                  </label>
                );
            })}
          </div>
        </div>

        {!form.unsureTiming && form.trips.length >= 2 && (() => {
          const hasJulCombo = form.trips.includes("classic-jul") && form.trips.includes("south-jul");
          if (hasJulCombo) {
            return (
              <div style={{ padding: "14px 16px", background: "rgba(123,198,126,0.08)", border: "1px solid rgba(123,198,126,0.25)", borderRadius: 10, marginBottom: 14 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-primary, #1a1a1a)", marginBottom: 6 }}>Combo selected — Jul 8 to Jul 30 (~22 days)</p>
                <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6, marginBottom: 8 }}>
                  <strong>Combo price: ${(EAST_CHINA_PRICE_CAD + SOUTH_CHINA_PRICE_CAD + 400).toLocaleString()} CAD</strong> (vs ${(EAST_CHINA_PRICE_CAD + SOUTH_CHINA_PRICE_CAD).toLocaleString()} separately — the $400 difference covers your transition logistics between trips).
                </p>
                <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6, marginBottom: 8 }}>
                  <strong>We'll book your Beijing → Xiamen transition flight</strong> (~$400 CAD, included in the combo price). Hotel and transport during the 2-day gap between trips are also covered — you just enjoy the ride.
                </p>
                <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6 }}>
                  <strong>One round-trip flight from Toronto, 22 days in China.</strong> Way better value than two separate trips.
                </p>
              </div>
            );
          }
          return null;
        })()}

        <div style={{ padding: "12px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10, marginBottom: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-primary, #1a1a1a)", marginBottom: 6 }}>You can join multiple trips!</p>
          <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6, marginBottom: 8 }}>
            Each month's Classic Route (ends ~18th) connects seamlessly with the South China Route (starts ~20th). If you'd rather make one flight count and stay longer, we'll arrange the transition — flight, hotel, transport, everything in between.
          </p>
          <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6, marginBottom: 8 }}>
            <strong>About international flights (not included in trip price):</strong> A Toronto ↔ China round-trip is typically $1,600–$2,000 CAD, though this may be higher depending on fuel surcharges and booking timing. We recommend booking early.
          </p>
          <p style={{ fontSize: 11, color: "var(--color-text-tertiary, #999)", lineHeight: 1.5 }}>
            Classic Route: ${EAST_CHINA_PRICE_CAD.toLocaleString()} &nbsp;·&nbsp; South China Route: ${SOUTH_CHINA_PRICE_CAD.toLocaleString()} &nbsp;·&nbsp; Combo (same month): ${(EAST_CHINA_PRICE_CAD + SOUTH_CHINA_PRICE_CAD).toLocaleString()}
          </p>
        </div>

        <div style={{ marginBottom: 14 }}>
          <label style={{
            display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", borderRadius: 10, cursor: "pointer",
            border: form.unsureTiming ? "1.5px solid #6366F1" : "1.5px solid rgba(0,0,0,0.08)",
            background: form.unsureTiming ? "rgba(99,102,241,0.04)" : "var(--color-background-primary, #fff)",
          }}>
            <input type="checkbox" checked={form.unsureTiming} onChange={e => {
              update("unsureTiming", e.target.checked);
              if (e.target.checked) update("trips", []);
            }} style={{ marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary, #1a1a1a)" }}>I want to go, but I'm not sure about timing yet</div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary, #999)", marginTop: 2 }}>Tell us when you're available and we'll help match you to the right batch.</div>
            </div>
          </label>
          {form.unsureTiming && (
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginTop: 10, padding: "0 4px" }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Available from</label>
                <input type="date" style={inputStyle} value={form.availableFrom} onChange={e => update("availableFrom", e.target.value)} />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Available until</label>
                <input type="date" style={inputStyle} value={form.availableTo} onChange={e => update("availableTo", e.target.value)} />
              </div>
            </div>
          )}
        </div>

        <div style={{ ...fieldWrap, marginTop: 14 }}>
          <label style={labelStyle}>How did you hear about us?</label>
          <div style={radioGroup}>
            {HEARD_FROM.map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="heardFrom" checked={form.heardFrom === v} onChange={() => update("heardFrom", v)} /> {v}
              </label>
            ))}
          </div>
          {form.heardFrom === "Other" && (
            <input style={{ ...inputStyle, marginTop: 6 }} placeholder="Please specify" value={form.heardFromOther} onChange={e => update("heardFromOther", e.target.value)} />
          )}
        </div>
      </div>

      {/* ===== SECTION 4: MOTIVATION ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Why do you want to go?</div>
        <div style={sectionSub}>No right answer — just tell us what made you click Apply</div>

        <div style={fieldWrap}>
          <textarea style={textareaStyle} placeholder="A couple of sentences is perfect." value={form.motivation} onChange={e => update("motivation", e.target.value)} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Have you traveled to China before?</label>
          <div style={radioGroup}>
            {["Yes", "No"].map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="traveledChina" checked={form.traveledChina === v} onChange={() => update("traveledChina", v)} /> {v}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SECTION 5: ACCOMMODATION ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Accommodation</div>
        <div style={sectionSub}>Default is a shared twin room (included in price)</div>

        <div style={{ padding: "10px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10, marginBottom: 14 }}>
          <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.55 }}>
            All stays are 4–5 star hotels. We could have chosen cheaper options to lower the price — but we want you to come back to somewhere genuinely comfortable after a full day of exploring. A good night's rest is part of the experience.
          </p>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Room preference</label>
          <div style={radioGroup}>
            {["Shared twin room (default, included)", "Single room upgrade (additional cost)"].map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="roomPreference" checked={form.roomPreference === v} onChange={() => update("roomPreference", v)} /> {v}
              </label>
            ))}
          </div>
        </div>

        {form.roomPreference === "Shared twin room (default, included)" && (
          <div style={fieldWrap}>
            <label style={labelStyle}>Do you snore?</label>
            <div style={checkGroup}>
              {["No", "Sometimes", "Yes", "Not sure"].map(v => (
                <label key={v} style={{ ...checkLabel, background: form.snoring === v ? "rgba(196,122,50,0.08)" : undefined, borderColor: form.snoring === v ? "#C47A32" : undefined }}>
                  <input type="radio" name="snoring" checked={form.snoring === v} onChange={() => update("snoring", v)} style={{ display: "none" }} /> {v}
                </label>
              ))}
            </div>
            <div style={noteStyle}>Helps us pair roommates more thoughtfully.</div>
          </div>
        )}

        <div style={fieldWrap}>
          <label style={labelStyle}>Roommate request (optional)</label>
          <input style={inputStyle} placeholder="Name of a friend you'd like to room with, or leave blank for random" value={form.roommateRequest} onChange={e => update("roommateRequest", e.target.value)} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>If randomly assigned, gender preference for roommate?</label>
          <div style={radioGroup}>
            {["Same gender", "No preference"].map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="roommateGender" checked={form.roommateGender === v} onChange={() => update("roommateGender", v)} /> {v}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SECTION 6: DIETARY & HEALTH ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Dietary & health</div>
        <div style={sectionSub}>Tell us early so we can plan around it</div>

        <div style={{ padding: "10px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10, marginBottom: 14 }}>
          <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.55 }}>
            China is legendary for its food — and food culture is a huge part of the experience. If you have dietary restrictions, we'll absolutely accommodate you, but we want to be upfront: the more flexible you are, the more you'll get to taste. That said, everything we select is approachable and on the milder side — no surprises.
          </p>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Dietary type</label>
          <div style={checkGroup}>
            {DIETARY.map(d => (
              <label key={d} style={{ ...checkLabel, background: form.dietaryType === d ? "rgba(196,122,50,0.08)" : undefined, borderColor: form.dietaryType === d ? "#C47A32" : undefined }}>
                <input type="radio" name="dietaryType" checked={form.dietaryType === d} onChange={() => update("dietaryType", d)} style={{ display: "none" }} /> {d}
              </label>
            ))}
          </div>
          {form.dietaryType === "Other" && (
            <input style={{ ...inputStyle, marginTop: 8 }} placeholder="Please specify" value={form.dietaryOther} onChange={e => update("dietaryOther", e.target.value)} />
          )}
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Any food allergies?</label>
          <input style={inputStyle} placeholder="e.g. peanuts, shellfish, lactose — or 'none'" value={form.allergies} onChange={e => update("allergies", e.target.value)} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Any medical conditions or medications we should know about?</label>
          <textarea style={textareaStyle} placeholder="Leave blank if none" value={form.medicalConditions} onChange={e => update("medicalConditions", e.target.value)} />
        </div>
      </div>

      {/* ===== SECTION 7: EMERGENCY CONTACT ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Emergency contact</div>
        <div style={sectionSub}>Someone we can reach if needed</div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
          <div style={fieldWrap}>
            <label style={labelStyle}>Contact name</label>
            <input style={inputStyle} value={form.emergencyName} onChange={e => update("emergencyName", e.target.value)} />
          </div>
          <div style={fieldWrap}>
            <label style={labelStyle}>Relationship</label>
            <input style={inputStyle} placeholder="e.g. parent, friend" value={form.emergencyRelation} onChange={e => update("emergencyRelation", e.target.value)} />
          </div>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Contact phone</label>
          <input style={inputStyle} value={form.emergencyPhone} onChange={e => update("emergencyPhone", e.target.value)} />
        </div>
      </div>

      {/* ===== SECTION 8: TRAVEL INSURANCE ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Travel insurance</div>
        <div style={sectionSub}>Travel insurance is required for participation</div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Do you have travel insurance that covers this trip?</label>
          <div style={radioGroup}>
            {[
              "Yes, I already have coverage",
              "I have university coverage (e.g. UTGSU, GSU, UHIP) — I need to confirm",
              "No, I need to get travel insurance",
              "I'm not sure",
            ].map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="travelInsurance" checked={form.travelInsurance === v} onChange={() => update("travelInsurance", v)} /> {v}
              </label>
            ))}
          </div>
          <div style={noteStyle}>
            Many UofT students have travel insurance through UTGSU, GSU, or UHIP that may cover international travel. Check with your student union or benefits provider before purchasing a separate policy.
          </div>
        </div>
      </div>

      {/* ===== SECTION 9: INTERESTS & VIBE ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Interests & vibe</div>
        <div style={sectionSub}>Helps us fine-tune the experience — pick all that excite you</div>

        <div style={fieldWrap}>
          <label style={labelStyle}>What are you most excited about?</label>
          <div style={checkGroup}>
            {INTERESTS.map(i => (
              <label key={i} style={{ ...checkLabel, background: form.interests.includes(i) ? "rgba(196,122,50,0.08)" : undefined, borderColor: form.interests.includes(i) ? "#C47A32" : undefined }}>
                <input type="checkbox" checked={form.interests.includes(i)} onChange={() => toggleArray("interests", i)} style={{ display: "none" }} /> {i}
              </label>
            ))}
          </div>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Any cities or experiences you'd love to see?</label>
          <input style={inputStyle} placeholder="e.g. Chengdu for pandas, Chongqing hotpot, etc." value={form.dreamCities} onChange={e => update("dreamCities", e.target.value)} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Anything you're nervous or unsure about?</label>
          <textarea style={textareaStyle} placeholder="Totally optional — but it helps us support you better" value={form.nervous} onChange={e => update("nervous", e.target.value)} />
        </div>
      </div>

      {/* ===== SECTION 10: CLUB MEMBERSHIP & FRIENDS ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Club membership & friends</div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Are you a member of UofT Exploration & Travel Club (UTETC)?</label>
          <div style={radioGroup}>
            {["Yes, I'm a UTETC member", "No, but I'm interested in joining", "No"].map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="utetcMember" checked={form.utetcMember === v} onChange={() => update("utetcMember", v)} /> {v}
              </label>
            ))}
          </div>
          {form.utetcMember === "No, but I'm interested in joining" && (
            <div style={{ marginTop: 10, padding: "10px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10 }}>
              <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.55, marginBottom: 8 }}>
                UTETC membership is <strong>CAD $15</strong> — get access to member events, priority trip registration, and exclusive perks.
              </p>
              <label style={{ ...radioLabel, fontSize: 12 }}>
                <input type="checkbox" checked={form.wantsToJoinUtetc} onChange={e => update("wantsToJoinUtetc", e.target.checked)} />
                Register as a UTETC member (+CAD $15)
              </label>
            </div>
          )}
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Customized trip souvenir</label>
          {form.utetcMember === "Yes, I'm a UTETC member" ? (
            <div style={{ padding: "8px 14px", background: "rgba(123,198,126,0.06)", border: "1px solid rgba(123,198,126,0.2)", borderRadius: 10 }}>
              <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.5 }}>
                As a UTETC member, your souvenir is <strong>included for free</strong>!
              </p>
            </div>
          ) : (
            <>
              <div style={radioGroup}>
                {["Yes, I'd like one! (CAD $50)", "No thanks", "Maybe — tell me more later"].map(v => (
                  <label key={v} style={radioLabel}>
                    <input type="radio" name="customSouvenir" checked={form.customSouvenir === v} onChange={() => update("customSouvenir", v)} /> {v}
                  </label>
                ))}
              </div>
              <div style={noteStyle}>A personalized keepsake from your trip — details and design will be shared after registration.</div>
            </>
          )}
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Have any friends already applied? (optional)</label>
          <input style={inputStyle} placeholder="Their name(s) — we'll try to group you together" value={form.friendsApplied} onChange={e => update("friendsApplied", e.target.value)} />
          <div style={noteStyle}>If you're applying with friends, let us know and we'll do our best to place you in the same group and admission batch.</div>
        </div>
      </div>

      {/* ===== SECTION 11: ON-TRIP SUPPORT ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>What to expect on the ground</div>
        <div style={sectionSub}>So you know you're in good hands</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ padding: "10px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10 }}>
            <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.55 }}>
              <strong>Airport pickup & drop-off:</strong> We personally handle your arrival and departure — you'll be met at the airport and taken to your hotel. No figuring out taxis or trains on your own.
            </p>
          </div>
          <div style={{ padding: "10px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10 }}>
            <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.55 }}>
              <strong>Local student volunteers:</strong> Chinese university students will accompany the group throughout the trip — helping with translation, navigation, local tips, and making sure nothing gets lost in translation (literally). They're volunteers who genuinely want to help, so please treat them with kindness and respect.
            </p>
          </div>
          <div style={{ padding: "10px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10 }}>
            <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.55 }}>
              <strong>Every part of the journey is covered.</strong> From the moment you land to the moment you fly home, logistics are fully handled. You don't need to worry about language, transport, tickets, or getting lost. Come with an open mind — we'll take care of the rest.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 12: WHATSAPP ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Stay connected</div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Have you joined our WhatsApp group?</label>
          <div style={radioGroup}>
            {["Yes, already in the group", "Not yet"].map(v => (
              <label key={v} style={radioLabel}>
                <input type="radio" name="joinedWhatsapp" checked={form.joinedWhatsapp === v} onChange={() => update("joinedWhatsapp", v)} /> {v}
              </label>
            ))}
          </div>
          {form.joinedWhatsapp === "Not yet" && (
            <div style={{ marginTop: 8, padding: "10px 14px", background: "rgba(37,211,102,0.06)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: 10 }}>
              <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.5, marginBottom: 6 }}>
                Join <strong>Explorechina-2026-pre</strong> to get updates, meet other applicants, and ask questions before the trip.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#25D366", textDecoration: "none" }}>
                Join WhatsApp Group →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ===== PRICE SUMMARY ===== */}
      {!form.unsureTiming && form.trips.length > 0 && (() => {
        const isUtetc = form.utetcMember === "Yes, I'm a UTETC member";
        const wantsSouvenir = form.customSouvenir === "Yes, I'd like one! (CAD $50)";
        const hasJulCombo = form.trips.includes("classic-jul") && form.trips.includes("south-jul");

        let items = [];
        let total = 0;

        if (hasJulCombo) {
          const comboPrice = EAST_CHINA_PRICE_CAD + SOUTH_CHINA_PRICE_CAD + 400;
          items.push({ label: "Combo — Classic + South China (July)", price: comboPrice });
          total += comboPrice;
        } else {
          form.trips.forEach(id => {
            const t = TRIP_SCHEDULE.find(s => s.id === id);
            if (t) {
              const p = t.route.includes("Classic") ? EAST_CHINA_PRICE_CAD : SOUTH_CHINA_PRICE_CAD;
              items.push({ label: `${t.route} (${t.dates})`, price: p });
              total += p;
            }
          });
        }

        if (form.utetcMember === "No, but I'm interested in joining" && form.wantsToJoinUtetc) {
          items.push({ label: "UTETC membership registration", price: 15 });
          total += 15;
        }
        if (!isUtetc && wantsSouvenir) {
          items.push({ label: "Customized trip souvenir", price: 50 });
          total += 50;
        }
        if (isUtetc) {
          items.push({ label: "Customized trip souvenir (UTETC member — free)", price: 0 });
        }

        const deposit = Math.round(total * POLICY.depositPct / 100);

        return (
          <div style={sectionStyle}>
            <div style={sectionTitle}>Price summary</div>
            <div style={sectionSub}>Estimated total based on your selections (excludes international flights)</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
              {items.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--color-text-primary, #1a1a1a)" }}>
                  <span>{item.label}</span>
                  <span style={{ fontWeight: 600 }}>{item.price === 0 ? "FREE" : `$${item.price.toLocaleString()}`}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1.5px solid var(--color-border-tertiary, rgba(0,0,0,0.1))", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary, #1a1a1a)" }}>Total</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#C47A32" }}>CAD ${total.toLocaleString()}</span>
            </div>

            <div style={{ marginTop: 8, fontSize: 11, color: "var(--color-text-tertiary, #999)", lineHeight: 1.5 }}>
              Deposit to secure your spot: <strong>CAD ${deposit.toLocaleString()}</strong> ({POLICY.depositPct}% of total) · Balance due {POLICY.balanceDueNote}
            </div>
          </div>
        );
      })()}

      {/* ===== PAYMENT INSTRUCTIONS ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Payment</div>
        <div style={sectionSub}>How to pay after your application is confirmed</div>

        <div style={{ padding: "12px 14px", background: "rgba(196,122,50,0.06)", border: "1px solid rgba(196,122,50,0.15)", borderRadius: 10, marginBottom: 12 }}>
          <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6, marginBottom: 8 }}>
            <strong>Payment is processed through UTETC (UofT Exploration & Travel Club) official account.</strong>
          </p>
          <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6, marginBottom: 6 }}>
            E-transfer to:
          </p>
          <div style={{ padding: "8px 12px", background: "var(--color-background-primary, #fff)", border: "1px solid var(--color-border-tertiary, rgba(0,0,0,0.1))", borderRadius: 8, fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 600, color: "var(--color-text-primary, #1a1a1a)", marginBottom: 10 }}>
            uoft.travelclub@gmail.ca
          </div>
          <p style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6, marginBottom: 8 }}>
            When making your payment, please include in the notes/memo:
          </p>
          <div style={{ padding: "8px 12px", background: "var(--color-background-primary, #fff)", border: "1px solid var(--color-border-tertiary, rgba(0,0,0,0.1))", borderRadius: 8, fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.6 }}>
            Your full name + phone number<br/>
            If you are not a UofT student, also add: <strong>non-UofT</strong>
          </div>
        </div>

        <div style={{ padding: "12px 14px", background: "var(--color-background-primary, #fff)", border: "1px solid var(--color-border-tertiary, rgba(0,0,0,0.1))", borderRadius: 10 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary, #1a1a1a)", marginBottom: 8 }}>Deposit & refund policy</p>
          <div style={{ fontSize: 12, color: "var(--color-text-primary, #1a1a1a)", lineHeight: 1.7 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span style={{ color: "#C47A32", fontWeight: 600, flexShrink: 0 }}>Deposit:</span>
              <span>{POLICY.depositPct}% of your total trip cost, due upon confirmation to secure your spot.</span>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span style={{ color: "#C47A32", fontWeight: 600, flexShrink: 0 }}>Balance:</span>
              <span>Remaining {100 - POLICY.depositPct}% due no later than {POLICY.balanceDueNote}.</span>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--color-border-tertiary, rgba(0,0,0,0.08))", marginTop: 10, paddingTop: 10, fontSize: 12, color: "var(--color-text-secondary, #666)", lineHeight: 1.7 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 3 }}>
              <span style={{ fontWeight: 600, flexShrink: 0, minWidth: 130 }}>Before {POLICY.refundDeadline}:</span>
              <span>{POLICY.refundBeforeDeadline}</span>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 3 }}>
              <span style={{ fontWeight: 600, flexShrink: 0, minWidth: 130 }}>After {POLICY.refundDeadline}:</span>
              <span>{POLICY.refundAfterDeadline}</span>
            </div>
          </div>
          <div style={noteStyle}>
            If you find a replacement participant, a full refund is available at any time. We understand plans change — reach out as early as possible and we'll do our best to work with you.
          </div>
        </div>
      </div>

      {/* ===== KNOW MORE ===== */}
      <div style={sectionStyle}>
        <div style={sectionTitle}>Know more</div>
        <div style={sectionSub}>Learn about the trip, the club, and our partners</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <a href="https://www.instagram.com/journeytrip_explorechina/" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 14px", borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.08)", background: "var(--color-background-primary, #fff)",
            textDecoration: "none", color: "var(--color-text-primary, #1a1a1a)",
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>ExploreChina</div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary, #999)", marginTop: 1 }}>Student Travel Program from Canada</div>
            </div>
            <span style={{ fontSize: 12, color: "#C47A32", fontWeight: 600 }}>Instagram →</span>
          </a>

          <a href="https://www.instagram.com/utetc" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 14px", borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.08)", background: "var(--color-background-primary, #fff)",
            textDecoration: "none", color: "var(--color-text-primary, #1a1a1a)",
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>UTETC</div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary, #999)", marginTop: 1 }}>UofT Exploration & Travel Club</div>
            </div>
            <span style={{ fontSize: 12, color: "#E1306C", fontWeight: 600 }}>Partner →</span>
          </a>

          <a href="https://www.instagram.com/camcapysoc/" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 14px", borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.08)", background: "var(--color-background-primary, #fff)",
            textDecoration: "none", color: "var(--color-text-primary, #1a1a1a)",
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>CamCapy</div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary, #999)", marginTop: 1 }}>Cambridge student community</div>
            </div>
            <span style={{ fontSize: 12, color: "#E1306C", fontWeight: 600 }}>Partner →</span>
          </a>
        </div>
      </div>

      {/* ===== SUBMIT ===== */}
      <button
        onClick={handleSubmit}
        disabled={submitting}
        style={{
          width: "100%", padding: "14px 0", fontSize: 15, fontWeight: 700,
          background: submitting ? "#999" : "#C47A32", color: "#fff",
          border: "none", borderRadius: 10, cursor: submitting ? "wait" : "pointer",
          marginBottom: 12,
        }}
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
      <p style={{ fontSize: 11, color: "var(--color-text-tertiary, #999)", textAlign: "center", lineHeight: 1.5 }}>
        We'll review your application and follow up by email within 5 business days. Payment is only collected after confirmation.
      </p>
    </div>
  );
}
