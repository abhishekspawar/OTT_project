// import Data from "./Data.js";

// import vincenzo from './images/vincenzo.jpg';
// import dots from './images/dots.jpg';
// import vagabond from './images/vagabond.jpg';
// import drromantic_s1 from './images/drromantic_s1.webp';
// import waikiki_s1 from './images/waikiki_s1.jpg';
// import goblin from './images/goblin.jpg';



const Data = [
    {
        id: 1,
        name: 'Vincenzo',
        imgsrc: './images/vincenzo.jpg',
        description: 'During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice.',
        link: 'https://www.netflix.com/in/title/81365087'
    },
    {
        id: 2,
        name: 'Descendants of the Sun',
        imgsrc: './images/dots.jpg',
        tag: 'Netflix original Series',
        description: 'After a chance meeting in a hospital, an ardent soldier falls for a gifted surgeon. Opposing philosophies tear them apart, but fate has other plans.',
        link: 'https://www.netflix.com/in/title/80123798'
    },
    {
        id: 3,
        name: 'Vagabond',
        imgsrc: './images/vagabond.jpg',
        tag: 'Netflix original Series',
        description: 'When his nephew dies in a plane crash, stunt man Cha Dal-geon resolves to find out what happened, with the help of covert operative Go Hae-ri.',
        link: 'https://www.netflix.com/in/title/81095101'
    },
    {
        id: 4,
        name: 'Welcome to Waikiki',
        imgsrc: './images/waikiki_s1.jpg',
        tag: 'Netflix original Series',
        description: 'To finance their own film project, an aspiring director, actor and screenwriter run a Seoul guesthouse that brings antics and romance into their lives',
        link: 'https://www.netflix.com/in/title/81029926'
    },
    {
        id: 5,
        name: 'Dr. Romantic',
        imgsrc: './images/drromantic_s1.webp',
        tag: 'Netflix original Series',
        description: 'An eccentric, triple board-certified virtuoso surgeon leaves a top job in Seoul and ends up at a provincial hospital, where he mentors young doctors.',
        link: 'https://www.netflix.com/in/title/80998941'
    },
    {
        id: 6,
        name: 'Goblin',
        imgsrc: './images/goblin.jpg',
        tag: 'Netflix original Series',
        description: 'In his quest for a bride to break his immortal curse, a 939-year-old guardian of souls meets a grim reaper and a sprightly student with a tragic past.',
        link: 'https://www.netflix.com/in/title/81012510'
    },
];


// export default Data;

const ncard = (val) =>{
    const card = document.createElement('div');
    card.className = 'card';
    const cardImg = document.createElement('div')
    cardImg.className = 'card-img';
    const Img = document.createElement('img');
    Img.src = val.imgsrc;
    Img.alt = 'Card Image';
    cardImg.append(Img);

    const cardDetails = document.createElement('div')
    cardDetails.className = 'card-details';
    const H2 = document.createElement('h2');
    H2.innerHTML = val.name;
    const Para = document.createElement('p');
    Para.innerHTML = val.description;
    const btn = document.createElement('button');
    btn.innerHTML = 'WATCH NOW';
    cardDetails.append(H2,Para,btn);
    
    card.append(cardImg,cardDetails);

    return card;
}
let x = Data.map(ncard);

const cardDisplay = document.getElementById('cardDisplay');
cardDisplay.append(...x)

