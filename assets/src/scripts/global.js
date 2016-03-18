const prism   = require('prismjs');
const fitvids = require('fitvids');
const stylesheet = require('./lib/css');

var fonts = '//cloud.typography.com/7107912/754766/css/fonts.css';

var arwhd = window.arwhd || {};

arwhd.CSS = stylesheet(fonts);
arwhd.Tracking = require('./lib/tracking');
arwhd.Highlighting = prism;
arwhd.Fit = fitvids('._s-entry');

window.arwhd = arwhd;
