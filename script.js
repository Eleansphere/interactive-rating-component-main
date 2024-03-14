//DOM 
const ratingButtons = document.querySelectorAll('input');
const ratingValue = document.getElementById('rating-value');
const submitBtn = document.getElementById('submitBtn');
const ratingStart = document.getElementById('rating-start');
const ratingEnd = document.getElementById('rating-end');

ratingValue.innerText = 0;

//control click on radio
  ratingButtons.forEach((item)=>{
    item.addEventListener("click", ()=>{
      ratingValue.innerText = item.value;
  //inserting value
    });
  });

  // changing the page

  submitBtn.addEventListener("click",()=>{
    if (
      ratingValue.innerText != 0
    ) {
      ratingStart.style.display = 'none';
      ratingEnd.style.display = 'flex';
      setInterval(()=>{location.reload()},3500);
    } else {
      submitBtn.disabled = true;
      submitBtn.style.opacity = 0.2;
      setInterval(resetButton, 3500);
    }
  });

 
//reset button
  function resetButton() {
    submitBtn.disabled = false;
    submitBtn.style.opacity = 1;
  }