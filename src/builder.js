import projectFactory from './project';
import articleFactory from './article';

const project1 = projectFactory(
  'Learning Tracker',
  'NOTE: Use "testuser" to log in to the app. <br> This is a learning tracker application which lets the user register learning sessions in terms of number of Pomodoros per session. Sessions can also be included in groups when created, and new groups can be created as well.',
  './img/app.png',
  '',
  'https://learning-tracker-ror.herokuapp.com/',
  'https://github.com/sebGilR/learning_tracker',
);


const project2 = projectFactory(
  'Restaurant Page',
  'This is a single page restaurant website that was built to practice the use of Webpack together with loaders. The website elements are loaded dynamically by each of the created JS modules.',
  './img/restaurant.png',
  '',
  'http://sebgil.me/restaurant_home/',
  'https://github.com/sebGilR/restaurant_home',
);

const project3 = projectFactory(
  'Swipex',
  'This is a website for a responsive social network based on a design by Vlad Ermakov.',
  './img/swipex.png',
  '',
  'https://rawcdn.githack.com/lBuggie/social-network/8d2ca79745691ab21801c74c85b9c185bbcf2c68/index.html',
  'https://github.com/sebGilR/social-network',
);

export const projects = [project1, project2, project3];

const article1 = articleFactory(
  'Boost Your CSS with BEM Naming and SASS Nesting',
  'We all have struggled with keeping our CSS classes ordered, maintainable, and more specific. SASS nesting and the BEM (Block - Element - Modifier) structure will help us to get rid of this concern.',
  'https://hackernoon.com/drafts/lr2z3yjd.png',
  'https://hackernoon.com/boost-your-css-with-bem-naming-and-sass-nesting-3x5d3ywo',
);

export const articles = [article1];