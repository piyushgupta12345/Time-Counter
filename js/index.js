const givenTime = document.getElementById('given-time');
const inputs = document.querySelectorAll('input');


setInterval(() => {

    const Time = new Date(givenTime.innerText);
    const nowTime = new Date();
    const diffTime = (Time - nowTime) / 1000;

    if (diffTime >= 0) {
        // Time in Days
        const Days = Math.floor(diffTime / 3600 / 24)
        inputs[0].value = Days

        // Time in Hours
        const Hours = Math.floor(diffTime / 3600) % 24
        inputs[1].value = Hours

        // Time in Minutes
        const Minutes = Math.floor(diffTime / 60) % 60
        inputs[2].value = Minutes

        // Time in Seconds
        const Seconds = Math.floor(diffTime) % 60
        inputs[3].value = Seconds
    }
}, 1000);