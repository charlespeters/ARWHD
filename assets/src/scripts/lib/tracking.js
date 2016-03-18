module.exports = function () {
  var _gauges = _gauges || [];
  var t   = document.createElement('script');
  t.type  = 'text/javascript';
  t.async = true;
  t.id    = 'gauges-tracker';
  t.setAttribute('data-site-id', '5564877392c6ac7126004377');
  t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif');
  t.src = 'https://track.gaug.es/track.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(t, s);
};
