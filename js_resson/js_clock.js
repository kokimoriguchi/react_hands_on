//setInterval()はメソッドで(関数, 時間の指定）を引数にする。下記では関数logClockTimeを1秒毎に実施するという形
setInterval(logClockTime, 1000);

//関数getClockTimeをtime変数に入れている。そして一度コンソールをクリアにしtime変数つまりgetClockTime関数の実施
function logClockTime() {
    let time = getClockTime();
    console.clear();
    console.log(time);
}

function getClockTime() {
    let date = new Date();
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    };

    if (time.hours == 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12;
    }

    if (time.hours < 10) {
        time.hours = "0" + time.hours;
    }

    if (time.minutes < 10) {
        time.minutes = "0" + time.minutes;
    }

    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    return time.hours + ":" + time.minutes + ":" + time.seconds + "" + time.ampm;
}