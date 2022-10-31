// Vaste variablen
const filterLijst = document.querySelectorAll('#side-list .side-radio-option');
const imgHolder = document.querySelector('#content');
const imdbMainLink = 'https://www.imdb.com/title/';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const opdrachtJaar = '2000';

let basicList = movies.forEach(function(e){// Basis vulling

    let createLink = document.createElement('a');
    let createImg = document.createElement('img');
    imgHolder.appendChild(createLink);
    createLink.appendChild(createImg);

    createLink.setAttribute('class', 'movie-poster-link');
    createLink.setAttribute('href', imdbMainLink + e.imdbID + '/');
    createLink.setAttribute('target', '_blank');
    
    createImg.setAttribute('class', 'movie-poster');
    createImg.setAttribute('src', e.poster);
    createImg.setAttribute('alt', e.title);
    createImg.setAttribute('title', e.title);

});

Array.from(filterLijst).forEach(function(radio){
    radio.addEventListener('click', function(e){
        // Capture search titel and convert to string
        let movieTitle = e.target.title.toString();

        if(movieTitle == 'New-movies'){
            // console.log(currentYear);
            let result = movies.filter(year => year.year >= opdrachtJaar).sort((a,b) => b.year-a.year);
            // let result = movies.filter(year => year.year >= currentYear).sort((a,b) => b.year-a.year);

            // Remove basic list
            imgHolder.replaceChildren();

            // create new list
            result.forEach(function(e){
            let createLink = document.createElement('a');
            let createImg = document.createElement('img');
            imgHolder.appendChild(createLink);
            createLink.appendChild(createImg);

            createLink.setAttribute('class', 'movie-poster-link');
            createLink.setAttribute('href', imdbMainLink + e.imdbID + '/');
            createLink.setAttribute('target', '_blank');

            createImg.setAttribute('class', 'movie-poster');
            createImg.setAttribute('src', e.poster);
            createImg.setAttribute('alt', e.title);
            createImg.setAttribute('title', e.title);
        })}
        
        if(movieTitle == 'Avengers'){
            let result2 = movies.filter(titel => titel.title.includes(movieTitle));

            // Remove basic list
            imgHolder.replaceChildren();

            // create new list
            result2.forEach(function(e){
            let createLink = document.createElement('a');
            let createImg = document.createElement('img');
            imgHolder.appendChild(createLink);
            createLink.appendChild(createImg);

            createLink.setAttribute('class', 'movie-poster-link');
            createLink.setAttribute('href', imdbMainLink + e.imdbID + '/');
            createLink.setAttribute('target', '_blank');

            createImg.setAttribute('class', 'movie-poster');
            createImg.setAttribute('src', e.poster);
            createImg.setAttribute('alt', e.title);
            createImg.setAttribute('title', e.title);
        })}

        if(movieTitle == 'X-Men'){
            let result2 = movies.filter(titel => titel.title.includes(movieTitle));

            // Remove basic list
            imgHolder.replaceChildren();

            // create new list
            result2.forEach(function(e){
            let createLink = document.createElement('a');
            let createImg = document.createElement('img');
            imgHolder.appendChild(createLink);
            createLink.appendChild(createImg);

            createLink.setAttribute('class', 'movie-poster-link');
            createLink.setAttribute('href', imdbMainLink + e.imdbID + '/');
            createLink.setAttribute('target', '_blank');

            createImg.setAttribute('class', 'movie-poster');
            createImg.setAttribute('src', e.poster);
            createImg.setAttribute('alt', e.title);
            createImg.setAttribute('title', e.title);
        })}

        if(movieTitle == 'Princess'){
            let result2 = movies.filter(titel => titel.title.includes(movieTitle));

            // Remove basic list
            imgHolder.replaceChildren();

            // create new list
            result2.forEach(function(e){
            let createLink = document.createElement('a');
            let createImg = document.createElement('img');
            imgHolder.appendChild(createLink);
            createLink.appendChild(createImg);

            createLink.setAttribute('class', 'movie-poster-link');
            createLink.setAttribute('href', imdbMainLink + e.imdbID + '/');
            createLink.setAttribute('target', '_blank');

            createImg.setAttribute('class', 'movie-poster');
            createImg.setAttribute('src', e.poster);
            createImg.setAttribute('alt', e.title);
            createImg.setAttribute('title', e.title);
        })}

        if(movieTitle == 'Batman'){
            let result2 = movies.filter(titel => titel.title.includes(movieTitle));

            // Remove basic list
            imgHolder.replaceChildren();

            // create new list
            result2.forEach(function(e){
            let createLink = document.createElement('a');
            let createImg = document.createElement('img');
            imgHolder.appendChild(createLink);
            createLink.appendChild(createImg);

            createLink.setAttribute('class', 'movie-poster-link');
            createLink.setAttribute('href', imdbMainLink + e.imdbID + '/');
            createLink.setAttribute('target', '_blank');

            createImg.setAttribute('class', 'movie-poster');
            createImg.setAttribute('src', e.poster);
            createImg.setAttribute('alt', e.title);
            createImg.setAttribute('title', e.title);
        })}
    
    })})