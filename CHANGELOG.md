## [0.1.0] - 2025-11-19
### Added
* Initial release of **@mdkva/surahkit**
* Core Surah utilities:
  * `surahKit.load(language)` — Load full Surah dataset for a language
  * `surahKit.getById(language, id)` — Retrieve Surah by unique ID
  * `surahKit.searchByName(language, keyword)` — Search Surah names
  * `surahKit.search(language, phrase)` — Search Surah text
* Support for multiple languages via `/data/[language].json` files
* Browser-ready ES module, zero dependencies
* Clear error handling for missing languages or invalid Surah IDs
* Usage examples included in README
* Published package on NPM
* Public GitHub repository created