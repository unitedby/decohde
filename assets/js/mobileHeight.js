let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');

window.onresize = function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
};