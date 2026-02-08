const Derana = require('./index');
const api = new Derana()
async function News() {
    try {
        const News = await api.MainNews();
        console.log(News);
       
    } catch (error) {
        console.error('Error getting Main news data:', error.message);
    }
}

News();