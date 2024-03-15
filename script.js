//DOM 
const ratingButtons = document.querySelectorAll('input');
const ratingValue = document.getElementById('rating-value');
const submitBtn = document.getElementById('submitBtn');
const sections = document.querySelectorAll('section');

ratingValue.innerText = 0;

//control click on radio
  ratingButtons.forEach((item)=>{
    item.addEventListener("click", ()=>{
//inserting value
      ratingValue.innerText = item.value;
    });
  });

  // changing the page

  submitBtn.addEventListener("click",()=>{
    if (
      ratingValue.innerText != 0
    ) {
      sections[0].style.display = 'none';
      sections[1].style.display = 'flex';
      //resetting checked state before reload
      ratingButtons.forEach((item)=>{
        item.checked = false;
      });
      setInterval(()=>{location.reload()},4000);
    } else {
      submitBtn.disabled = true;      
      setInterval(()=>{submitBtn.disabled = false}, 3500);
    }
  });
