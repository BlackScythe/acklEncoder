countdown = function ( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;
    
    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "None! You can now fetch another secret! (Refresh the page :3)";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

callCountDown = function (){

    if (secrets.find().fetch().length > 0) {
        secret = secrets.find({},{sort:{date:-1}}).fetch()[0];      
        min = parseInt((secret.date+3600000 - Date.now())/1000/60);
        sec = (secret.date+3600000 - Date.now())/1000/60%1;
        sec = parseInt(sec * 60);
        if (min >= 0&& sec >= 0) {      
            countdown("countdown",min,sec);
        }           
    }
}