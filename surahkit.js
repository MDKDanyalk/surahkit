export const surahKit = {
  /**
   * Load the full Surah dataset for a given language.
   * @param {string} language - Language file (e.g., "english", "arabic").
   * @returns {Promise<Array>} - Array of Surahs
   */
  async load(language) {
    if (!language) throw new Error("Language is required.");

    // Local path
    const url = `https://cdn.jsdelivr.net/npm/@mdkva/surahkit/data/${language}.json`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Language file '${language}.json' not found.`);

    return res.json();
  },

  /**
   * Get a Surah by its unique ID (string).
   * Works for IDs like "1", "3b", "2c", etc.
   * @param {string} language
   * @param {string} id - Surah ID
   * @returns {Promise<Object>} - Surah object
   */
  async getById(language, id) {
    if (!id) throw new Error("Surah ID is required.");

    const quran = await this.load(language);
    const surahId = String(id).trim();
    const surah = quran.find(s => s.id === surahId);

    if (!surah) throw new Error(`Surah with ID '${id}' not found in '${language}'.`);
    return surah;
  },

  /**
   * Search Surah names for a keyword.
   * @param {string} language
   * @param {string} keyword
   * @returns {Promise<Array>} - Array of matching Surahs
   */
  async searchByName(language, keyword) {
    if (!keyword) return [];
    const quran = await this.load(language);
    const term = keyword.toLowerCase();
    return quran.filter(s => s.surah.toLowerCase().includes(term));
  },

  /**
   * Search inside the Surah text.
   * @param {string} language
   * @param {string} phrase
   * @returns {Promise<Array>} - Array of matching Surahs
   */
  async search(language, phrase) {
    if (!phrase) return [];
    const quran = await this.load(language);
    const term = phrase.toLowerCase();
    return quran.filter(s => s.text.toLowerCase().includes(term));
  }
};