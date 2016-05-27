module.exports = function (link) {
  var stsh = document.querySelectorAll('[data-font-link]');
  stsh[0].setAttribute('href', link);
};
