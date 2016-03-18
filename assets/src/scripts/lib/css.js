const loadCSS = require('fg-loadcss');

module.exports = () => {
  loadCSS('//cloud.typography.com/7107912/754766/css/fonts.css');
  console.log('Loaded loadCSS');
};
