const boxes = document.querySelectorAll('.box');
const scroll = document.querySelector('.scroll');
console.log(scroll);

const links = [
  'https://silvesterspath.github.io/github_finder/',
  'https://silvesterspath.github.io/MovieTime/',
  'https://silvesterspath.github.io/Incrementing-Counter/',
  'https://silvesterspath.github.io/Animated-Navigation/',
  'https://silvesterspath.github.io/Random-Picker/',
  'https://silvesterspath.github.io/How-many-Drinks/',
  'https://github.com/SilvesterSpath/FAQ-Collapse.git',
  'https://github.com/SilvesterSpath/Progress-steps.git',
  'https://github.com/SilvesterSpath/Blurry-loading.git',
  'https://github.com/SilvesterSpath/Wave-Effect.git',
  'https://github.com/SilvesterSpath/Search-Widget.git',
  'https://github.com/SilvesterSpath/Event-keyCodes.git',
];

const images = [
  './img/github_finder.png',
  './img/movie.png',
  './img/counter.png',
  './img/animated_nav.png',
  './img/random_choice.png',
  './img/drink_water.png',
  './img/faq.png',
  './img/steps.png',
  './img/blurry.png',
  './img/login.png',
  './img/search.png',
  './img/keycode.png',
];

const texts = [
  'Gihub Finder',
  'Find Your Movies',
  'Incrementing Counter',
  'Animated Navigation',
  'Random Choice Picker',
  'How many Drinks?',
  'FAQ',
  'Progress Steps',
  'Blurry Loading',
  'Wave Login',
  'Search Collapse',
  'KeyCodes',
];

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const trigger = (window.innerHeight / 5) * 2;
  let count = 0;

  boxes.forEach((i, index) => {
    i.style.backgroundImage = `url(${images[index]})`;
    i.style.backgroundSize = 'contain';

    i.setAttribute('href', `${links[index]}`);
    i.innerHTML = `<h3 >${texts[index]}</h3>`;
    const boxTop = i.getBoundingClientRect().top;

    if (boxTop < trigger) {
      i.classList.add('show');
      count++;
      console.log(count);
    } else {
      i.classList.remove('show');
      count--;
      console.log(count);
    }
    if (count > 9) {
      scroll.children[3].style.visibility = 'hidden';
      scroll.children[1].style.visibility = 'visible';
    } else {
      scroll.children[3].style.visibility = 'visible';
      scroll.children[1].style.visibility = 'hidden';
    }
  });
}
