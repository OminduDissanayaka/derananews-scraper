<p align="center">
  <a href="" rel="noopener">
 <img src="https://sinhala.adaderana.lk/2021/assets/images/header-new-logo-sinhala_2019.png" alt="Derana News Logo"></a>
</p>

<h2 align="center">Derana News Scraper</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/OminduDissanayaka/derananews-scraper.svg)](https://github.com/OminduDissanayaka/derananews-scraper/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/OminduDissanayaka/derananews-scraper.svg)](https://github.com/OminduDissanayaka/derananews-scraper/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Educational demonstration of web scraping using @omindu/scrapely
    <br> 
</p>
<p align="center"> This is an <strong>open-source educational project</strong> demonstrating how to build a news scraper using the <a href="https://www.npmjs.com/package/@omindu/scrapely">@omindu/scrapely</a> npm package. Created by Omindu Anjana to showcase the capabilities of the scrapely library. News content from https://sinhala.adaderana.lk/ belongs to Ada Derana. <br><br> 
⚠️ <strong>This is NOT an npm package</strong> - it's a demonstration/educational project for learning purposes only. <br> </p>

## 🎯 Purpose <a name = "purpose"></a>

This project was created to demonstrate how to use the [@omindu/scrapely](https://www.npmjs.com/package/@omindu/scrapely) npm package for building news scrapers. It serves as a practical example and learning resource for developers interested in web scraping.

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

- Node.js installed on your machine
- Basic understanding of JavaScript and async/await

### Installation

Clone this repository:

```sh
git clone https://github.com/OminduDissanayaka/derananews-scraper.git
cd derananews-scraper
```

Install dependencies:

```sh
npm install
```

or

```sh
yarn install
```

### Run Test

```sh
npm test
```

or

```sh
node test.js
```

## 🎈 Usage <a name="usage"></a>

This project demonstrates how to use [@omindu/scrapely](https://www.npmjs.com/package/@omindu/scrapely) for web scraping:

```javascript
const Derana = require('./index');
const api = new Derana();
```

## Get Latest Breaking News
```javascript
const News = await api.BreakingNews();
console.log(News);
```

**Example Output:**
```javascript
{
  code: 200,
  message: 'Educational demo using @omindu/scrapely',
  creator: {
    name: 'Omindu_Dissanayaka',
    github: '@OminduDissanayaka'
  },
  results: {
    title: 'ප්‍රදේශ කිහිපයකට පවතින වැසි තත්ත්වයේ තාවකාලික අඩුවීමක්',
    news: 'දිවයිනේ දැනට පවතින වැසි තත්ත්වයේ තාවකාලික අඩුවීමක් පෙබරවාරි මස 08 සිට 11 දක්වා බලාපොරොත්තු විය හැකි බව කාලගුණ විද්‍යා දෙපාර්තමේන්තුව පවසයි...',
    date: 'February 8, 2026  06:04 am',
    link: 'https://sinhala.adaderana.lk/news/220989'
  }
}
```

## Get Latest Main News
```javascript
const News = await api.MainNews();
console.log(News);
```

**Example Output:**
```javascript
{
  code: 200,
  message: 'Educational demo using @omindu/scrapely',
  creator: {
    name: 'Omindu_Dissanayaka',
    github: '@OminduDissanayaka'
  },
  results: {
    title: 'ප්‍රධාන පුවත් ශීර්ෂය',
    news: 'ප්‍රධාන පුවත් විස්තරය...',
    date: 'February 8, 2026  06:04 am',
    link: 'https://sinhala.adaderana.lk/news/XXXXXX'
  }
}
```

## Get Latest Trending News
```javascript
const News = await api.TrendingNews();
console.log(News);
```

**Example Output:**
```javascript
{
  code: 200,
  message: 'Educational demo using @omindu/scrapely',
  creator: {
    name: 'Omindu_Dissanayaka',
    github: '@OminduDissanayaka'
  },
  results: {
    title: 'ප්‍රවණතා පුවත් ශීර්ෂය',
    news: 'ප්‍රවණතා පුවත් විස්තරය...',
    date: 'February 8, 2026  06:04 am',
    link: 'https://sinhala.adaderana.lk/news/XXXXXX'
  }
}
```

## Get Latest International News
```javascript
const News = await api.InternationalNews();
console.log(News);
```

**Example Output:**
```javascript
{
  code: 200,
  message: 'Educational demo using @omindu/scrapely',
  creator: {
    name: 'Omindu_Dissanayaka',
    github: '@OminduDissanayaka'
  },
  results: {
    title: 'ජාත්‍යන්තර පුවත් ශීර්ෂය',
    news: 'ජාත්‍යන්තර පුවත් විස්තරය...',
    date: 'February 8, 2026  06:04 am',
    link: 'https://sinhala.adaderana.lk/news/XXXXXX'
  }
}
```

## Complete Example
```javascript
const Derana = require('./index');
const api = new Derana();

async function getNews() {
    try {
        const breaking = await api.BreakingNews();
        const main = await api.MainNews();
        const trending = await api.TrendingNews();
        const international = await api.InternationalNews();
        
        console.log('Breaking News:', breaking);
        console.log('Main News:', main);
        console.log('Trending News:', trending);
        console.log('International News:', international);
    } catch (error) {
        console.error('Error fetching news:', error.message);
    }
}

getNews();
```

## ⛏️ Built Using <a name = "built_using"></a>

- [@omindu/scrapely](https://www.npmjs.com/package/@omindu/scrapely) - Modern web scraping library (This is what we're demonstrating!)
- [Node.js](https://nodejs.org/) - Server Environment

## 📚 Learn More About @omindu/scrapely

This scraper is built using the [@omindu/scrapely](https://www.npmjs.com/package/@omindu/scrapely) package, which provides:
- Simple and intuitive API for web scraping
- HTML parsing and data extraction
- Attribute extraction
- Custom transformations
- Error handling

Check out the package on [npm](https://www.npmjs.com/package/@omindu/scrapely) to learn more!

## ✍️ Author <a name = "authors"></a>

- [@OminduDissanayaka](https://github.com/OminduDissanayaka) - Initial work

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

**Educational Purpose Only:** This project is created solely for educational purposes to demonstrate the usage of the @omindu/scrapely npm package. It is not intended for production use or commercial purposes.

**Not an NPM Package:** This is NOT published as an npm package. It's an open-source demonstration project on GitHub.

**Content Rights:** All news content belongs to Ada Derana (https://sinhala.adaderana.lk/). This scraper is for learning purposes only. Please respect the website's terms of service and robots.txt.

---
<p align="center">Made with ❤️ by Omindu Dissanayaka</p>
