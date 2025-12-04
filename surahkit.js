export const SurahKit = {
  /* ------------------------------------------
   * NEW FUNCTION: loadAll()
   * ------------------------------------------ */
  async loadAll(language) {
    if (!language) throw new Error("Language is required.");

    const url = `https://cdn.jsdelivr.net/npm/@mdkva/surahkit/data/${language}.json`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Language file '${language}.json' not found.`);

    return res.json();
  },

  /* ------------------------------------------
   * NEW FUNCTION: searchById()
   * ------------------------------------------ */
  async searchById(language, id) {
    if (!id) throw new Error("Surah ID is required.");

    const quran = await this.loadAll(language);
    const surahId = String(id).trim();
    const surah = quran.find(s => s.id === surahId);

    if (!surah) throw new Error(`Surah with ID '${id}' not found in '${language}'.`);
    return surah;
  },

  /* ------------------------------------------
   * NEW FUNCTION: searchByName()
   * ------------------------------------------ */
  async searchByName(language, keyword) {
    if (!keyword) return [];
    const quran = await this.loadAll(language);
    const term = keyword.toLowerCase();
    return quran.filter(s => s.surah.toLowerCase().includes(term));
  },

  /* ------------------------------------------
   * NEW FUNCTION: searchByPhrase()
   * ------------------------------------------ */
  async searchByPhrase(language, phrase) {
    if (!phrase) return [];
    const quran = await this.loadAll(language);
    const term = phrase.toLowerCase();
    return quran.filter(s => s.text.toLowerCase().includes(term));
  },

  /* ------------------------------------------
   * OLD API (kept for backward compatibility)
   * These forward calls to the new methods
   * ------------------------------------------ */

  // Old: surahKit.load(language)
  async load(language) {
    return this.loadAll(language);
  },

  // Old: surahKit.getById(language, id)
  async getById(language, id) {
    return this.searchById(language, id);
  },

  // Old: surahKit.search(language, phrase)
  async search(language, phrase) {
    return this.searchByPhrase(language, phrase);
  }
};

// camelCase convention... for those that don't prefer PascalCase
export const surahKit = SurahKit;