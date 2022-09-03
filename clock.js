var time = document.getElementById("time");

function UpdateTime(){
    var now = new Date();

    var Seconds = now.getSeconds();
    var Minutes = now.getMinutes();
    var Hours = now.getHours();
    console.log(Hours + ":" + Minutes + ":" + Seconds);

    if(Seconds <= 9){
        Seconds = "0" + Seconds;
    }

    if(Minutes <= 9){
        Minutes = "0" + Minutes;
    }

    if(Hours <= 9){
        Hours = "0" + Hours;
    }

    time.innerHTML = Hours + " : " + Minutes + " : " + Seconds;
}

setInterval(UpdateTime, 1000);