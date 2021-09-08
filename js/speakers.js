const SPEAKERS = [
  {
    img: '../src/axel.png',
    name: 'Axel',
    ocupation: 'Microsoft Dev',
    description: 'I got my job thanks to you guys, just the best coding bootcamp I ever had',
  },
  {
    img: 'https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/1:1/w_741,h_741,c_limit/best-face-oil.png',
    name: 'Diana',
    ocupation: 'Google Dev',
    description: 'If you want an amazing job I strongly recommend CodeFire, these guys are just amazing!!',
  },
  {
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Miguel',
    ocupation: 'Airbnb Dev',
    description: 'It has such a professional enviroment that makes you excel in programming',
  },
  {
    img: 'https://546458-1766807-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wordpress/d5f1425700d7460bb2aa1e1e8e1b7e49.jpg',
    name: 'Sasha',
    ocupation: 'Twitter Dev',
    description: 'It is incredible how far I could go thanks to you guys, definitely recommended',
  },
];

function searchID(id) {
  return document.getElementById(id);
}

function loadSpeakers() {
  const speakersWrapper = searchID('speakers-wrapper');
  SPEAKERS.forEach((elem) => {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker');
    const image = document.createElement('img');
    image.classList.add('speakerimg');
    image.src = elem.img;

    speaker.appendChild(image);

    const description = document.createElement('div');
    description.classList.add('speakerdesc');

    const name = document.createElement('h3');
    name.innerText = elem.name;

    const ocupation = document.createElement('span');
    ocupation.classList.add('ocupation');
    ocupation.innerText = elem.ocupation;

    const comment = document.createElement('span');
    comment.classList.add('comment');
    comment.innerText = elem.description;

    description.appendChild(name);
    description.appendChild(ocupation);
    description.appendChild(comment);

    speaker.appendChild(description);
    speakersWrapper.appendChild(speaker);
  });
}

window.onload = () => {
  loadSpeakers();
};