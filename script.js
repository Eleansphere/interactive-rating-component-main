//DOM model data
const arrBtn = document.querySelectorAll('input');
const ratingValue = document.getElementById('rating-value');
const btn = document.getElementById('value-check');
const ratingStart = document.getElementById('rating-start');
const ratingEnd = document.getElementById('rating-end');
//control click on radio
arrBtn.forEach((item)=>{
  item.addEventListener("click", ()=>{
    ratingValue.innerHTML = item.value;
//inserting value
  });
});
// changing the page
  function pageChange() {
    if (
      ratingValue != '0'
    ) {
      ratingStart.style.display = 'none';
      ratingEnd.style.display = 'flex';
    } else {
      btn.disabled = true;
      btn.style.opacity = 0.2;
      setInterval(resetButton, 3500);
    }
  }
//reset button
  function resetButton() {
    btn.disabled = false;
    btn.style.opacity = 1;
  }