const countTime  = function() {
    const time = document.getElementById('timer');
    if (time.textContent >= 1) {
        time.textContent --;
    } else if(time.textContent == 0) {
        clearInterval(time);
        alert('Вы победили в конкурсе!');
    }
}

setInterval(countTime,1000);