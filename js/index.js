document.addEventListener('click', documentClick);
function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
  }
}

//--------------------------------------------------

let countdownTime = 2 * 60 * 60; 
const timerElement = document.getElementById('timer');

function updateTimer() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;
    const formattedTime = 
        String(hours).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');
    
    timerElement.textContent = formattedTime;
    countdownTime--;
    if (countdownTime < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time Out";
    }
}

//----------------------------------------------------
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

document.addEventListener("DOMContentLoaded", function() {
  const dateElement = document.getElementById('order-date');

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `Order date: ${day}.${month}.${year}`;

  dateElement.textContent = formattedDate;
});
