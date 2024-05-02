document.body.onload = f_load()
let area = document.getElementsByName('icon')
let componentsa = document.getElementById('components')
function f_load() {
    let wd = new Date('07/02/2024')
    let tdd = new Date()
    let def = wd.getTime() - tdd.getTime()
    var days = Math.ceil(def / (1000 * 60 * 60 * 24));
    let numCircles = 61;
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
    // sendEmail()
    document.body.classList.add('fade-out');
    document.body.addEventListener('animationend', function () {
        // window.location.assign('file:///C:/Users/This%20User/Desktop/calagame/html/enter.html');
        window.location.href = './html/enter.html';

    });
}
// function sendEmail() {
//     const apiKey = 'pubkey-cab64469d8959d5dabe820662645f2c7';
//     const domain = 'YOUR_MAILGUN_DOMAIN';
   
//     const emailData = {
//         from: 'hindoe.ap@gmail.com',
//         to: 'ayala.amt@gmail.com',
//         subject: 'Subject of the Email',
//         text: 'Body of the Email'
//     };

//     const url = `https://api.mailgun.net/v3/${domain}/messages`;

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Basic ${btoa(`api:${apiKey}`)}`,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: new URLSearchParams(emailData).toString()
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Mailgun response:', data);
//             alert('Email sent successfully!');
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//             alert('Failed to send email. Please try again later.');
//         });
// 


// pubkey-cab64469d8959d5dabe820662645f2c7
