# T002 Report

## Completed
- Reset `test` from current `main`
- Implemented homepage itinerary restructure on EN + ZH
- Added Yunnan toast interaction with auto-fade
- Added `font-feature-settings: 'lnum'` to `.section-title`
- Added dark navbar support for non-hero pages
- Removed About link from navbar
- Updated trip pages (EN + ZH):
  - added hero banner
  - reordered sections
  - removed redundant highlights section
  - converted FAQ to homepage-style accordion
- Updated handbook pages (EN + ZH):
  - removed top route/duration/price cards
  - removed itinerary table
  - replaced itinerary section with trip-page link
- Removed homepage About section on EN + ZH
- Added comment to about pages: `Uncomment navbar link when team bios are finalized`

## Verification
- `npm run build` ✅ passed

## Notes
- Homepage toast text:
  - EN homepage shows bilingual toast copy per brief/source note
  - ZH homepage shows Chinese toast copy
