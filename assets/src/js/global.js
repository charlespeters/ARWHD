//for FIT SUITE

window.onload = function() {
  fitVids('.entry');
};


// Menu 
var navicon = document.getElementById('navicon');
var navEl = document.getElementById('siteNav');

function toggleMenu(){
	navEl.classList.toggle('hidden');
	console.log('i am clicked');
}

navicon.addEventListener("click", toggleMenu, false);
