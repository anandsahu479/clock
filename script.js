
        let timerDiv = document.querySelector('.digitalClock')
        console.log(timerDiv)
        setInterval(()=>{
            let date = new Date();
            let hour = date.getHours()
            let minute = date.getMinutes()
            let second = date.getSeconds()
            timerDiv.innerHTML = `${hour}:${minute}:${second}`
        })

        let hr = document.getElementById('hr')
        let min = document.getElementById('min')
        let sec = document.getElementById('sec')

        setInterval(() => {
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            let s = d.getSeconds();

            let hrDeg = h * 30 + m * 0.5;
            let minDeg = m * 6 + s * 0.1;
            let secDeg = s * 6;

            hr.style.transform = `rotate(${hrDeg}deg)`;
            min.style.transform = `rotate(${minDeg}deg)`;
            sec.style.transform = `rotate(${secDeg}deg)`;
        }, 1000);

        let audio = new Audio()
        audio.src = 'alarm.mp3'

        let alarmDate;
        let x;

        function dateChanger(event){
            alarmDate = new Date(event.target.value);
            console.log(alarmDate)
        }
        function setAlarm(){
            let date = new Date()
            let alarm = new Date(alarmDate)
            let timeGap = alarm - date

            console.log(date)
            console.log(alarm)
            console.log(timeGap)

            x = setTimeout(()=>{
                audio.loop = true;
                audio.play()
            }, timeGap)
            alert('Alarm Set')
        }

        function stopAlarm(){
            audio.pause();
            clearInterval(x);
            alert('Alarm Stopped')
        }


        let container = document.querySelector('.container')
        let needalClock = document.querySelector('.needleClock')
        let alarmClock = document.querySelector('.alarmClock')
        let digitalClock = document.querySelector('.digitalClock')

        function digitalClockChange(){
            digitalClock.classList.add('active')
            needalClock.classList.remove('active')
            alarmClock.classList.remove('active')
        }
        function needalClockChange(){
            digitalClock.classList.remove('active')
            needalClock.classList.add('active')
            alarmClock.classList.remove('active')
        }
        function alarmClockChange(){
            digitalClock.classList.remove('active')
            needalClock.classList.remove('active')
            alarmClock.classList.add('active')
        }