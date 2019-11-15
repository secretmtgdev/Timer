(function(){
    var startTime = Date.now();
    var currTime = 0;
    var timer;

    var startTimer = () => {
        currTime = 0;
        startTime = Date.now();
        timer = setInterval(function() {
            var delta = Date.now() - startTime;
            currTime = Math.round(delta/1000);
            document.querySelector('#timer').innerHTML = `${currTime}s`;
        }, 1000);
    }

    var stopTimer = () => {
        clearInterval(timer);
        markTime();
    }

    function markTime() {
        if(timer && typeof timer !== 'undefined'){ 
            let timeSection = document.querySelector('#times');
            let li = document.createElement('li');
            li.innerText = `Time elapsed: ${currTime}`
            timeSection.appendChild(li);
            currTime = 0;
            timer = null;
            document.querySelector('#timer').innerHTML = `${currTime}s`;
        }
    }

    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindTime);
    } else {
        bindTime();
    }


    function bindTime() {
        document.querySelector('#start').addEventListener('click', startTimer);
        document.querySelector('#stop').addEventListener('click', stopTimer);
        document.querySelector('#clear').addEventListener('click', () => document.querySelector('#times').innerHTML = '');
    }

  
})();