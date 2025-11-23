'use strict';

const tvForm = document.querySelector('#tv-form');
const target = document.querySelector('#results')
tvForm.addEventListener('submit', async function(evnt){
    evnt.preventDefault();
    target.innerHTML='';
    const keyword = document.querySelector('input[name=q]').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`);
    const jsonData = await response.json();
    console.log(jsonData);
    for (const tvShow of jsonData){
        const h2 = document.createElement('h2');
        h2.innerText = tvShow.show.name;

        const a = document.createElement('a');
        a.href = tvShow.show.url;
        a.target = '_blank';
        a.innerText = 'link to site';

        const img = document.createElement('img');
        img.alt = tvShow.show.name;
        img.src = tvShow.show.image?.medium;

        const summary = document.createElement('div');
        summary.innerText = tvShow.show.summary;

        const article = document.createElement('article')

        article.append(h2, a, img, summary);
        target.append(article);
    }


});
