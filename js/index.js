document.body.onload = f_load()
let area = document.getElementsByName('icon')
let componentsa = document.getElementById('components')

function f_load() {
    let wd = new Date('07/02/2024')
    let tdd = new Date()
    let def = wd.getTime() - tdd.getTime()
    var days = Math.ceil(def / (1000 * 60 * 60 * 24));
    let wedding = 20//02/06!!
    let numCircles = 80;
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
            // circle__btn.setAttribute('title', 'היום זה לא לחיץ😉');
            // circle__back1.setAttribute('title', 'היום זה לא לחיץ😉')
            // circle__back2.setAttribute('title', 'היום זה לא לחיץ😉')
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
    // let tdayc = document.createElement('section')
    // let tdaycdiv = document.createElement('div')
    // let tdaycspan = document.createElement('span')
    // tdayc.setAttribute('class', 'neon-block')
    // tdaycdiv.setAttribute('class', 'block')
    // tdaycspan.setAttribute('class', 'rainbow')
    // tdaycspan.textContent = '0'
    // tdaycdiv.appendChild(tdaycspan)
    // tdayc.appendChild(tdaycdiv)
    // document.getElementById('Gsteps').appendChild(tdayc);

    // let a=document.createElement('div')
    // let b=document.createElement('div')
    // document.getElementById('Gsteps').appendChild(a);
    // document.getElementById('Gsteps').appendChild(b);
}

function action() {
// הוסיפי את מחלקת האנימציה לדף
document.body.classList.add('fade-out');

// קבעי מאזין לאירוע לסיום האנימציה
document.body.addEventListener('animationend', function() {
    // לאחר סיום האנימציה, בצעי מעבר לדף הבא
    window.location.assign('file:///C:/Users/This%20User/Desktop/calagame/html/enter.html');
});

    // window.location.assign('file:///C:/Users/This%20User/Desktop/calagame/html/enter.html');
    // window.location.href = '../html/enter.html';
}