// const menu = document.querySelector('.nav-bar-list');
// const ham = document.querySelector('.ham');
// const xIcon = document.querySelector('.xIcon');
// const menuIcon = document.querySelector('.menuIcon');

// function toggleMenu() {
//   if (menu.classList.contains('showMenu')) {
//     menu.classList.remove('showMenu');
//     xIcon.style.display = 'none';
//     menuIcon.style.display = 'block';
//   } else {
//     menu.classList.add('showMenu');
//     xIcon.style.display = 'block';
//     menuIcon.style.display = 'none';
//   }
// }

// ham.addEventListener('click', toggleMenu);

// const menuLinks = document.querySelectorAll('.menuLink');

// menuLinks.forEach((menuLink) => {
//   menuLink.addEventListener('click', toggleMenu);
// });

const speakerData = [
    {
        id: 1,
        speakerName: 'Carla Harris',
        speakerImg: './images/carla_harris.png',
        altText: 'CarlaHarris',
        work: 'In 2013, Ms. Harris was appointed by  then president Barack Obama as chairperson of the National Women’s Council',
        detail: ' A couple of books she wrote include Strategize to Win and Expect to Win.',
    },
    {
        id: 2,
        speakerName: 'Brené Brown',
        speakerImg: './images/secondSpeaker.png',
        altText: 'BreneBrown',
        work: 'She has years of experience in research and specializes in social work',
        detail: '  Ms. Brown has authored several bestselling self-help books, including The Gifts of Imperfection, and Daring Greatly',
    },
    {
        id: 3,
        speakerName: 'Arianna Huffington',
        speakerImg: './images/arianna_huffington.png',
        altText: 'Arianna',
        work: 'She is the founder and CEO of Thrive Global, a company that helps people unlock their potential.',
        detail: ' In her work, she discusses success, well-being, and science-based methods for improving personal performance.',
    },
    {
        id: 4,
        speakerName: 'Iyanla Vanzant',
        speakerImg: './images/iyanla_vanzant.jpg',
        altText: 'Iyanla',
        work: 'She is a lawyer, life coach, spiritual teacher, motivational speaker, and TV personality',
        detail: ' She wrote a number of books, including Peace from Broken Pieces, where she talks about personal healing',
    },
    {
        id: 5,
        speakerName: 'Dianna David',
        speakerImg: './images/dianna_david.jpg',
        altText: 'Diana',
        work: 'She is the founder of the Red Ball Movement',
        detail: '  She left her job as an engineer to pursue her dream of becoming a performer.During her talks and performances, she combines dance, contact juggling',
    },
    {
        id: 6,
        speakerName: 'Gretchen Rubin',
        speakerImg: './images/gretchen_rubin.jpg',
        altText: 'Gretchen',
        work: 'She worked as a courtroom clerk, but left this job to become a writer.',
        detail: '  Ms. Rubin is the author of several books, including The Happiness Project, where she discusses personal transformation, and Better Than Before',
    },
   
];

function speakerTemplate(speaker) {
    return `
    <ul class="speakerIntro">
    <li><img src=${speaker.speakerImg} alt=${speaker.altText}></li>
    <li>
        <ul class="speakerInfo">
            <li><h1>${speaker.speakerName}</h1>
            <h2>${speaker.work} </h2></li>
            <li>
                <p>${speaker.detail} </p>
            </li>
        </ul>
    </li>
</ul> `;
  }
  

document.getElementById('dynamicList').innerHTML = `${speakerData.map(speakerTemplate).join('')}`;
