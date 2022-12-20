document.getElementById('rating-form').onclick = function () {
    const getRadio = document.querySelector(
      'input[name = rating]:checked'
    ).value;
    document.getElementById('rating-value').innerHTML = getRadio;
  };

  function pageChange() {
    if (
      document.getElementById('rating-value').innerHTML != '0'
    ) {
      document.getElementById('rating-start').style.display =
        'none';
      document.getElementById('rating-end').style.display =
        'flex';
    } else {
      document.querySelector('#value-check').disabled = true;
      document.querySelector('#value-check').style.opacity = 0.2;
      setInterval(resetButton, 3500);
    }
  }
  function resetButton() {
    document.querySelector('#value-check').disabled = false;
    document.querySelector('#value-check').style.opacity = 1;
  }