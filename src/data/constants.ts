// ─────────────────────────────────────────────────────────────
// Shared runtime constants — prices and policy.
//
// This is a LEAF module: it imports nothing from src/data, so
// trip files, the registry, pages, and the apply form can all
// depend on it without creating cycles.
//
// This is also the ONLY file where CAD price digits may appear.
// The quality gate (scripts/quality-gate.mjs) fails the build if
// a price literal shows up in pages or components — change a
// price here and every consumer follows.
// ─────────────────────────────────────────────────────────────

export const EAST_CHINA_PRICE_CAD = 2488;
export const SOUTH_CHINA_PRICE_CAD = 1688;

/** Flat fee added on top of both trip prices for the back-to-back combo
 *  (covers the Beijing → Xiamen transition flight + gap-day logistics). */
export const COMBO_TRANSITION_FEE_CAD = 400;

/** Prose estimate shown in the apply form for international flights
 *  (not included in trip price). */
export const FLIGHT_ESTIMATE_RANGE = '$1,600–$2,000';

export const POLICY = {
  depositPct: 30,
  balanceDueNote: '1 month before departure',
  balanceDueNoteZh: '出发前一个月',
  refundBeforeDeadline: 'Full refund minus deposit',
  refundBeforeDeadlineZh: '全额退款（定金不退）',
  refundAfterDeadline: '30% of total trip cost',
  refundAfterDeadlineZh: '退还总费用的30%',
  refundDeadline: '30 days before departure',
  refundDeadlineZh: '出发前30天',
} as const;
