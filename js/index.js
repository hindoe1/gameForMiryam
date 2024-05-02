document.body.onload = f_load()
let area = document.getElementsByName('icon')
let componentsa = document.getElementById('components')
function f_load() {
    let wd = new Date('07/02/2024')
    let tdd = new Date()
    let def = wd.getTime() - tdd.getTime()
    var days = Math.ceil(def / (1000 * 60 * 60 * 24));
    let numCircles = 60;
    for (let i = numCircles; i > 0; i--) {
        if (i == days) {
            let wave = document.createElement('div')
            wave.setAttribute('class', 'circle')
            let circle__btn = document.createElement('button')
            let circle__back1 = document.createElement('span')
            let circle__back2 = document.createElement('span')
            circle__btn.setAttribute('class', 'circle__btn')
            circle__back1.setAttribute('class', 'circle__back-1')
            circle__back2.setAttribute('class', 'circle__back-2')
            circle__btn.addEventListener('click', action);
            wave.appendChild(circle__btn)
            wave.appendChild(circle__back1)
            wave.appendChild(circle__back2)
            document.getElementById('Gsteps').appendChild(wave)
        }
        else {
            let circle = document.createElement("div");
            circle.setAttribute("class", "icon__home")
            circle.setAttribute("id", `step-${i}`)
            document.getElementById('Gsteps').appendChild(circle);
            let paragraph = document.createElement("p");
            if (i == 2)
                paragraph.textContent = '!!!!';
            else if (i == 1)
                paragraph.textContent = '👰🏼';
            else
                paragraph.textContent = i;
            paragraph.setAttribute('title', 'היום זה לא לחיץ😉');
            document.getElementById(`step-${i}`).appendChild(paragraph);
        }
    }
}

function action() {

    // process.env.SENDGRID_API_KEY
    sendEmail()
    document.body.classList.add('fade-out');
    document.body.addEventListener('animationend', function () {
        // window.location.assign('file:///C:/Users/This%20User/Desktop/calagame/html/enter.html');
        window.location.href = './html/enter.html';

    });
}
function sendEmail() {
        const to ='hindoe.ap@gmail.com'
        const subject = '🎉🎉הייי היא פתחהההה';
        const message = '⚔️⚔️יאלללה למשימה'

        // Configure SMTPJS
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "hindoe.ap@gmail.com",
            Password: "A2F0542F74DEAE3AC3C0739D323F1BBCD390",
            // סיסמא של אימות דו משלבי rasu cubt wqqk ztfv
            To: to,
            From: "hindoe.ap@gmail.com",
            Subject: subject,
            Body: message
        }).then(function(response) {
            // alert('Email sent successfully!');
            console.log("response:",response);
        }).catch(function(error) {
            console.error('Error:', error);
            // alert('Failed to send email. Please try again later.');
        });
    }
// סיסמא אימות דו משלבי - vjhr qquf sztt hymj
// pubkey-cab64469d8959d5dabe820662645f2c7
// קוד API של
// 4FC7510606E71900E55C3C80D5AF1B0499B84DE91ADD15976AA460D75437CD795EE06B24ACE4B7F04412EEFC6559D400