**MDKVA SurahKit** is a lightweight, browser-ready Quran Surah loader designed for multilingual web and mobile applications.
It provides a clean and unified API for retrieving Surahs from any supported language, perfect for Islamic apps, educational tools, spiritual platforms, mobile apps, and multilingual UI development.

---

## **✨ Features**

* **`load(language)`** — Load the full Surah dataset for a language.
* **`getById(language, id)`** — Retrieve a Surah using its unique ID (string-safe; supports `"1"`, `"3b"`, `"2c"`, etc.).
* **`searchByName(language, keyword)`** — Find Surahs by name (e.g., “mankind”).
* **`search(language, phrase)`** — Search Surah text for any phrase.
* Works with **any language**, as long as a JSON file exists.
* **Simple, predictable JSON structure**:
* **Zero dependencies**, fully ES module compatible.

---

## **📦 Installation**

SurahKit is browser-first. You can load it via file path, CDN, or module bundlers.

### **CDN import (recommended):**

```html
<script type="module">
  import { surahKit } from "https://cdn.jsdelivr.net/npm/@mdkva/surahkit/surahkit.js";
</script>
```

---

## **🌐 Usage**

## **surahKit.load(language)**
```html
<div id="load-result"></div>

<script type="module">

  async function testLoad() {
    try {
      // Load the full dataset for English
      const allSurahs = await surahKit.load("english");

      console.log("load:", allSurahs);

      // Build HTML list of surahs
      const html = allSurahs.map(s => `
        <div class="surah-block">
          <h3>${s.id}: ${s.surah}</h3>
          <p><strong>Total Verses:</strong> ${s.verses}</p>
          <p>${s.text}</p>
          <hr>
        </div>
      `).join('');

      document.getElementById("load-result").innerHTML = html;

    } catch (err) {
      console.error("Error in load():", err);
      document.getElementById("load-result").innerText = err.message;
    }
  }

  testLoad();
</script>
```

## **surahKit.getById(language, id)**
```html
<div id="surah"></div>

<script type="module">

  async function run() {
    try {
      const surah = await surahKit.getById("english", "36");

      document.getElementById("surah").innerHTML = `
        <h2>${surah.id}: ${surah.surah}</h2>
        <p><strong>Total Verses:</strong> ${surah.verses}</p>
        <p>${surah.text}</p>
      `;
    } catch (err) {
      console.error(err);
      document.getElementById("surah").innerText = err.message;
    }
  }

  run();
</script>
```

## **surahKit.searchByName(language, keyword)**
```html
<div id="search-name-result"></div>

<script type="module">

  async function testSearchByName() {
    try {
      // Search for surahs containing "Mankind" in the name
      const results = await surahKit.searchByName("english", "mankind");

      console.log("searchByName:", results);

      if (results.length === 0) {
        document.getElementById("search-name-result").innerText = "No surahs found.";
        return;
      }

      const html = results.map(s => `
        <div class="surah-block">
          <h3>${s.id}: ${s.surah}</h3>
          <p><strong>Total Verses:</strong> ${s.verses}</p>
          <p>${s.text}</p>
          <hr>
        </div>
      `).join('');

      document.getElementById("search-name-result").innerHTML = html;

    } catch (err) {
      console.error("Error in searchByName():", err);
      document.getElementById("search-name-result").innerText = err.message;
    }
  }

  testSearchByName();
</script>
```

## **surahKit.search(language, phrase)**
```html
<div id="search-text-result"></div>

<script type="module">

  async function testSearchText() {
    try {
      // Search for the phrase "We have granted you a clear triumph" in surah text
      const results = await surahKit.search("english", "We have granted you a clear triumph");

      console.log("search:", results);

      if (results.length === 0) {
        document.getElementById("search-text-result").innerText = "No matches found.";
        return;
      }

      const html = results.map(s => `
        <div class="surah-block">
          <h3>${s.id}: ${s.surah}</h3>
          <p><strong>Total Verses:</strong> ${s.verses}</p>
          <p>${s.text}</p>
          <hr>
        </div>
      `).join('');

      document.getElementById("search-text-result").innerHTML = html;

    } catch (err) {
      console.error("Error in search():", err);
      document.getElementById("search-text-result").innerText = err.message;
    }
  }

  testSearchText();
</script>
```

---

## **🛠 Contributing**

Contributions are welcome!

* GitHub: [https://github.com/mdkva/surahkit](https://github.com/mdkva/surahkit)
* Submit issues, translations, improvements, or JSON corrections anytime.

---

## **🔗 Links**

* **Github:** [https://github.com/mdkva/surahkit](https://github.com/mdkva/surahkit)
* **Company Website:** [https://mdkva.com](https://mdkva.com)
* **Contact:** [contact@mdkva.com](mailto:contact@mdkva.com)

---

## **📄 License**

MIT License