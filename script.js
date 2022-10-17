
let btnBigFive = document.querySelectorAll('big-five-list .big-five-button');
let btnRemoveList = document.getElementById('remove-all-button');
let btnRemoveFirst = document.getElementById('remove-first-item-button');
const bigFiveListUl = document.querySelector('div ul');

// console.log(bigFiveListUl);

bigFiveListUl.addEventListener('click', function(e){
    let btnTxt = e.target.textContent; //tekst van de list item
    console.log(btnTxt);
    // console.log(e.target);
    // console.log(e.target.parentElement);
    // console.log(e.target.parentNode);

    if(e.target.className == 'big-five-button'){
        const li = e.target.parentElement;
        // console.log(li);

        let btnTxt = e.target.textContent; //tekst van de list item

        li.parentNode.removeChild(li)

        let newLi = document.createElement('li');
        let spottedList = document.getElementById('spotted-animals-list');
        spottedList.appendChild(newLi)
        newLi.setAttribute('class', 'spotted-animals-list-item');
        newLi.innerHTML = btnTxt;
    }
});

btnRemoveFirst.addEventListener('click', function(e){

    let spottedList = document.querySelector('#spotted-animals-list li')

    let liItems = document.getElementsByClassName('spotted-animals-list-item')[0].textContent;

    let li = document.getElementsByClassName('spotted-animals-list-item')[0];
    spottedList.parentNode.removeChild(li);

    let newLi = document.createElement('li');
    let newBtn = document.createElement('button');

    bigFiveListUl.appendChild(newLi);
    newLi.appendChild(newBtn);
    newLi.setAttribute('class', 'big-five-list-item');
    newBtn.setAttribute('class', 'big-five-button');
    newBtn.innerHTML = liItems;
    
});

btnRemoveList.addEventListener('click', function(e){

});