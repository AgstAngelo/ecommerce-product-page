var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
      el.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
    }
  }
);