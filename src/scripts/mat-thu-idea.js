function collapse() {
  const coll = document.getElementsByClassName('collapsible');
  for (let i = 0; i < coll.length; ++i) {
    coll[i].addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
}
collapse();

function copy(id) {
  const copyText = document.getElementById(id);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
}

window.onresize = resize;

function resize() {
  const con = document.getElementsByClassName('content');
  for (let i = 0; i < con.length; ++i) {
    if (con[i].style.maxHeight) {
      con[i].style.maxHeight = con[i].scrollHeight + 'px';
    }
  }
}
