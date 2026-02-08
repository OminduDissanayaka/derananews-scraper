const Scrapely = require('@omindu/scrapely');

const scraper = new Scrapely({
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
    }
});

const formatNews = (html) => {
    if (!html) return '';
    let text = html.replace(/<br\s*\/?>/gi, ' \n')
                   .replace(/<[^>]+>/g, '');
    
    return text.split('.').map(sentence => sentence.trim())
               .filter(sentence => sentence.length > 0)
               .join('.\n') + '.';
};

async function extractNewsData(urlSelector) {
    try {
        const baseUrl = 'https://sinhala.adaderana.lk/';
        const newsUrl = await scraper.getAttribute(baseUrl, urlSelector, 'href');
        
        if (!newsUrl) throw new Error('Unable to extract news URL');
        
        const fullUrl = baseUrl + newsUrl;
        const data = await scraper.extract(fullUrl, {
            title: { selector: '.news-heading', type: 'text' },
            news: { 
                selector: '.news-content', 
                type: 'html',
                transform: (html) => formatNews(html) 
            },
            date: { selector: '.news-datestamp', type: 'text' }
        });

        return { ...data, link: fullUrl };
    } catch (error) {
        console.error('Error extracting news data:', error.message);
        throw error;
    }
}

async function BreakingNews() {
    const results = await extractNewsData('.story-heading+ #news_list_item_apc h3 a');
    return { 
        code: 200, 
        message: 'Educational demo using @omindu/scrapely',
        creator: { name: 'Omindu_Dissanayaka', github: '@OminduDissanayaka' }, 
        results 
    };
}

async function MainNews() {
    const results = await extractNewsData('.col-md-5 h3 a');
    return { 
        code: 200, 
        message: 'Educational demo using @omindu/scrapely',
        creator: { name: 'Omindu_Dissanayaka', github: '@OminduDissanayaka' }, 
        results 
    };
}

async function TrendingNews() {
    const results = await extractNewsData('.order-2 .ex-vdo-sm:nth-child(1) .trend-vd-tittle a');
    return { 
        code: 200, 
        message: 'Educational demo using @omindu/scrapely',
        creator: { name: 'Omindu_Dissanayaka', github: '@OminduDissanayaka' }, 
        results 
    };
}

async function InternationalNews() {
    const results = await extractNewsData('.order-3 .ex-vdo-sm:nth-child(1) .trend-vd-tittle a');
    return { 
        code: 200, 
        message: 'Educational demo using @omindu/scrapely',
        creator: { name: 'Omindu_Dissanayaka', github: '@OminduDissanayaka' }, 
        results 
    };
}

module.exports = { BreakingNews, MainNews, TrendingNews, InternationalNews };