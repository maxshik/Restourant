let fon = document.getElementById('main_background_photo');
if (document.documentElement.clientWidth < 800) {
  fon.setAttribute('src', './img/main_background(small).jpg');
}
else {
  fon.setAttribute('src', './img/main_background.jpg');
}
