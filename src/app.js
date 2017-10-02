const logo = require('./logo.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess = require('./villianess.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');



[logo, villianess].forEach((src) => {
  const image = new Image();
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(max-width: 1400px) 100vw, 1400px';
  image.style = 'width: 100%';
  document.body.appendChild(image);
});

//import lazysizes from 'lazysizes';
