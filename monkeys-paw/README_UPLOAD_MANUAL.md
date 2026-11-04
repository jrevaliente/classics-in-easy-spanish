# The Monkey’s Paw — finishing the GitHub companion

**Current state:** HTML/CSS website, archive-hosted audio references, contextual vocabulary CSV, Anki TSV, the conflict timeline, character/conflict map, printable HTML workbook, structured JSON glossary and interactive flashcards are uploaded to `main`.

## Three binary files to upload manually

The current GitHub connector supports text files but cannot directly transfer the attached binary image/PDF bytes. The user download **THE_MONKEYS_PAW_GITHUB_ASSETS_MANUAL_UPLOAD_20261104.zip** includes the following files in their exact directories:

1. **Required:** `monkeys-paw/assets/cover-web.webp` — 640 × 1024 px, webpage cover.
2. **Required:** `monkeys-paw/assets/cover-high-resolution.png` — 1600 × 2560 px, downloadable enlarged front cover.
3. **Required:** `monkeys-paw/downloads/printable_reading_companion.pdf` — six-page US Letter printable PDF.
4. **Optional:** `monkeys-paw/assets/cover-kindle-1600x2560.jpg` — alternate 1600 × 2560 Kindle-facing JPEG.

From GitHub go to each matching folder, choose **Add file → Upload files**, select the file and **Commit changes** to `main`. Do **not** upload the ZIP itself or the files into the root of the repository.

**Source quality:** the supplied cover is 992 × 1586 px. Its high-resolution variants have been resampled to 1600 × 2560; this does not invent native detail and is not a final paperback full-wrap cover. KDP paperback cover calculation waits for final trim/spine/paper settings.

**Audio:** The three page players use Internet Archive links in `audio/source-manifest.json` that were provided in `Audio.txt`. Do not upload the three Cthulhu audio MP3s from the reference ZIP to this book.

**After manual upload:** visit [the live companion](https://jrevaliente.github.io/classics-in-easy-spanish/monkeys-paw/); confirm the exact image, PDF and audio URLs work in an ordinary browser. Publishing/build cache delays may occur.

No files outside `monkeys-paw/` are modified by this step.
