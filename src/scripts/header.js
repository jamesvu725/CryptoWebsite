window.onresize = resizeHead;

function resizeHead() {
  const navbar = document.getElementsByClassName('navbar');
  const header = document.getElementsByTagName('header');
  header[0].style.marginTop = (navbar[0].scrollHeight + 10) + 'px';
}

resizeHead();
