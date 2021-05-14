const boxes = document.querySelectorAll('.box');

const links = [
  'https://silvesterspath.github.io/github_finder/',
  'https://silvesterspath.github.io/Incrementing-Counter/',
  'https://silvesterspath.github.io/Animated-Navigation/',
  'https://silvesterspath.github.io/Random-Picker/',
  'szilva',
  'repa',
  'retek',
  'mogyoro',
  'koran',
  'reggel',
  'ritkán',
  'rikkant',
  'a',
  'rigó',
];

const images = [
  './img/github_finder.png',
  './img/counter.png',
  './img/animated_nav.png',
  './img/random_choice.png',
];

const texts = [
  'Gihub Finder',
  'Incrementing Counter',
  'Animated Navigation',
  'Random Choice',
];

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const trigger = (window.innerHeight / 5) * 3;

  boxes.forEach((i, index) => {
    i.style.backgroundImage = `url(${images[index]})`;
    i.style.backgroundSize = 'cover';

    i.setAttribute('href', `${links[index]}`);
    i.innerHTML = `<h3 style="opacity: 1">${texts[index]}</h3>`;
    const boxTop = i.getBoundingClientRect().top;

    if (boxTop < trigger) {
      i.classList.add('show');
    } else {
      i.classList.remove('show');
    }
  });
}
