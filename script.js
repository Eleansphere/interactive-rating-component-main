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
      console.log(`${item.value}`);
    });
  });

  // changing the page

  submitBtn.addEventListener("click",()=>{
    if (
      ratingValue.innerText != 0
    ) {
      ratingStart.style.display = 'none';
      ratingEnd.style.display = 'flex';
      //resetting checked state before reload
      ratingButtons.forEach((item)=>{
        item.checked = false;
      });
      setInterval(()=>{location.reload()},4000);
    } else {
      submitBtn.disabled = true;
      
      setInterval(resetButton, 3500);
    }
  });

 
//reset button
  function resetButton() {
    submitBtn.disabled = false;
    
  }