document.body.onload = f_load()
let area = document.getElementsByName('icon')
let componentsa = document.getElementById('components')
{/* <div class="icon__home"></div> */ }

function f_load() {
    let wedding = 20//02/06!!
    let numCircles = 80;
    let radius = 100;
    let centerX = 200;
    let centerY = 200;
    let angleIncrement = (2 * Math.PI) / numCircles;
    var currentDate = new Date();
    var dayOfMonth = currentDate.getDate();
    for (let i = 0; i < numCircles; i++) {
        if (numCircles - i == wedding-dayOfMonth) {
            let wave = document.createElement('div')
            wave.setAttribute('class', 'circle')
            let circle__btn = document.createElement('button')
            let circle__back1 = document.createElement('span')
            let circle__back2 = document.createElement('span')
            circle__btn.setAttribute('class', 'circle__btn')
            circle__back1.setAttribute('class', 'circle__back-1')
            circle__back2.setAttribute('class', 'circle__back-2')
            circle__back2.setAttribute('value', '23')
            circle__back1.setAttribute('value', '23')
            // circle__btn.setAttribute('textcontent', '23')
            circle__btn.addEventListener('click', action);
            wave.appendChild(circle__btn)
            wave.appendChild(circle__back1)
            wave.appendChild(circle__back2)
            document.getElementById('Gsteps').appendChild(wave)
        }
        else {
            // const angle = i * angleIncrement;
            // const x = centerX + radius * Math.cos(angle);
            // const y = centerY + radius * Math.sin(angle);
            let circle = document.createElement("div");
            circle.setAttribute("class", "icon__home")
            circle.setAttribute("id", `step-${i}`)
            // circle.style.left = x + 'px';
            // circle.style.top = y + 'px';
            document.getElementById('Gsteps').appendChild(circle);

            // צור אלמנט p בתוך כל עיגול והוסף לו את הערך של i
            let paragraph = document.createElement("p");
            paragraph.textContent = numCircles - i;
            document.getElementById(`step-${i}`).appendChild(paragraph);
            if (i / 5 == 0) {
                document.getElementById('Gsteps').appendChild(document.createElement("br"))
            }
        }
    }
}

function action(){

}