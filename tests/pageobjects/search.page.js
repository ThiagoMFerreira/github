class SearchPage {
    
    labelResultRepo(index) { return $(`.repo-list li:nth-child(${index}) a`) };
    
}

module.exports = new SearchPage();