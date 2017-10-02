const logo = require('./logo.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess = require('./villianess.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess2 = require('./villianess2.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess3 = require('./villianess3.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess4 = require('./villianess4.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');



[logo, villianess, villianess2, villianess3, villianess4].forEach((src) => {
  const image = new Image();
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(max-width: 1400px) 100vw, 1400px';
  image.style = 'width: 100%';
  const container = document.getElementById ("container");
  container.appendChild (image);
});

//import lazysizes from 'lazysizes';
