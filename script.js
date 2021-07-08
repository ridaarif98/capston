const speakerData = [
  {
    id: 1,
    speakerName: 'Carla Harris',
    speakerImg: './images/Untitled-1.png',
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
    speakerName: 'Arianna',
    speakerImg: './images/arianna_huffington.png',
    altText: 'Arianna',
    work: 'She is the founder and CEO of Thrive Global, a company that helps people unlock their potential.',
    detail: ' In her work, she discusses success, well-being, and science-based methods for improving personal performance.',
  },
  {
    id: 4,
    speakerName: 'Iyanla',
    speakerImg: './images/iyanla_vanzant.jpg',
    altText: 'Iyanla',
    work: 'She is a lawyer, life coach, spiritual teacher, motivational speaker, and TV personality',
    detail: ' She wrote a number of books, including Peace from Broken Pieces, where she talks about personal healing',
  },
  {
    id: 5,
    speakerName: 'Dianna David',
    speakerImg: './images/dianna_david.png',
    altText: 'Diana',
    work: 'She is the founder of the Red Ball Movement',
    detail: '  She left her job as an engineer to pursue her dream of becoming a performer.During her talks and performances, she combines dance, contact juggling',
  },
  {
    id: 6,
    speakerName: 'Gretchen',
    speakerImg: './images/gretchen_rubin.jpg',
    altText: 'Gretchen',
    work: 'She worked as a courtroom clerk, but left this job to become a writer.',
    detail: '  Ms. Rubin is the author of several books, including The Happiness Project, where she discusses personal transformation, and Better Than Before',
  },

];

function guestSection(count) {
  return speakerData.slice(0, count).map((speaker) => `
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
 </ul>`).join('');
}

const speakerList = document.getElementById('dynamicList');
const guestList = guestSection();
speakerList.innerHTML = guestList;

const moreButton = document.getElementById('more-btn');
moreButton.addEventListener('click', () => {
  speakerList.innerHTML = guestSection(speakerData.length);
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    speakerList.innerHTML = guestSection(2);
  } else {
    speakerList.innerHTML = guestSection(6);
  }
});

window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    speakerList.innerHTML = guestSection(2);
  } else {
    speakerList.innerHTML = guestSection(6);
  }
});