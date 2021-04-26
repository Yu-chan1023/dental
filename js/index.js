$(function() {
  let open = false;
  let btn = document.getElementById('menu-btn');
  let lists = document.querySelector('.lists');
  btn.addEventListener('click', () => {
    if (open === false) {
      lists.classList.add('trans')
    } else {
      lists.classList.remove('trans')
    }
    open =! open
  })
})