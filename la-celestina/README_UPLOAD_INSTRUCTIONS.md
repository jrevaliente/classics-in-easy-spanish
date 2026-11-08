# La Celestina B2 — Reader Companion (installed)

Live site: https://jrevaliente.github.io/classics-in-easy-spanish/la-celestina/
Repository source: https://github.com/jrevaliente/classics-in-easy-spanish/tree/main/la-celestina

## Current installation — 2026-11-08

- `index.html`: responsive light editorial design, native cover proportions (270 CSS px wide, height auto), chapter search, speed control, 30 audio players.
- `assets/cover-high-resolution.jpg`: uploaded and Git blob verified. Dimensions 1600 x 2560 RGB JPEG; derived by resampling from the owner's 992 x 1586 PNG. Resampling does not generate genuinely new detail.
- `downloads/LA_CELESTINA_PRINTABLE_READING_COMPANION_B2.pdf`: uploaded and Git blob verified. 19 pages A4, chapter exercises C01–C30, reading goals and personal vocabulary.
- `downloads/la_celestina_b2_vocabulary.csv`: 183 chapter-level Story Word records taken from the Spanish editorial master. 173 distinct headwords and 10 words repeated in separate chapters. UTF-8 with BOM.
- `downloads/la_celestina_b2_anki.tsv`: 183 cards with distinct chapter-labelled Fronts; Anki headers for Tab, Basic, Front/Back/Tags and a named deck. No column-name card and no repeated term collapsing under normal first-field duplicate checking.
- `downloads/conflict_timeline.html`: 30 chapter-specific story events and causal points; spoiler warning.
- `downloads/character_conflict_map.html`: 11 character/person groups and relationship references.
- `downloads/printable_reading_companion.html`: printable HTML with direct PDF link.
- `audio/manifest.json`: 30 unique owner-provided MP3 URLs in chapter order, streamed from Internet Archive rather than stored in GitHub.
- An accidentally uploaded FireShot webpage screenshot was removed from the repository.

## Basic tests and open gates

GitHub file-tree readback, content readback, all 7 homepage local resource paths and uniqueness of 183 Anki fronts: PASS. Supplied PDF and JPEG Git blob SHA matched the original uploaded local files.

The owner reports audio plays. Independent continuous-listening QA and word-for-word alignment with Spanish editorial master V12 were not performed as part of this web repair, so AUDIO CLAIM/production publication gates are not conferred here. The current web renderer/Cache/Dark Reader compatibility was not visually re-tested in a live browser; recheck after GitHub Pages propagates.

## Rollback and recovery

Previous GitHub states remain in commit history. Recover a path via GitHub History, or with `git restore --source=<PREVIOUS_COMMIT> -- la-celestina/index.html` from a local clone, commit, and push. Do not roll back unrelated books.

## Anki import

File → Import → select TSV; choose Basic note type; verify three columns Front, Back and Tags. Official text import reference: https://docs.ankiweb.net/importing/text-files.html
