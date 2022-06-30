function getArticleGenerator(articles) {

    return function showNext() {
        if (articles.length > 0) {
            let div = document.getElementById('content');
            let newArticle = document.createElement('article');
            newArticle.textContent = articles.shift();
            div.appendChild(newArticle);
        }
    }

}
