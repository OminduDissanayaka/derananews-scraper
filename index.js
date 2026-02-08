const { BreakingNews, MainNews, TrendingNews, InternationalNews } = require('./lib/main');

class Derana {
    constructor() {
        this.BreakingNews = BreakingNews;
        this.MainNews = MainNews;
        this.TrendingNews = TrendingNews;
        this.InternationalNews = InternationalNews;
    }
}

module.exports = Derana;
