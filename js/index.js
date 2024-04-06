document.body.onload = f_load()
let area = document.getElementsByName('icon')
let componentsa = document.getElementById('components')
{/* <div class="icon__home"></div> */ }

function f_load() {
    debugger
    // צור את העיגולים
    // let numCircles = 30;
    // let radius = 100;
    // let centerX = 200;
    // let centerY = 200;
    // let angleIncrement = (2 * Math.PI) / numCircles;

    // for (let i = 0; i < numCircles; i++) {
    //     const angle = i * angleIncrement;
    //     const x = centerX + radius * Math.cos(angle);
    //     const y = centerY + radius * Math.sin(angle);
    //     let circle = document.createElement("div");
    //     circle.setAttribute("class", "icon__home")
    //     circle.setAttribute("id", `step-${i}`)
    //     circle.style.left = x + 'px';
    //     circle.style.top = y + 'px';
    //     // area.appendChild(circle)
    //     document.body.appendChild(circle);
    //      document.getElementById(`step-${i}`).appendChild(document.createElement("p").setAttribute("value", i))

    // }
    let wedding = 20
    let numCircles = 30;
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
            let circle__btn = document.createElement('span')
            let circle__back1 = document.createElement('span')
            let circle__back2 = document.createElement('span')
            circle__btn.setAttribute('class', 'circle__btn')
            circle__back1.setAttribute('class', 'circle__back-1')
            circle__back2.setAttribute('class', 'circle__back-2')
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
    //     <div class="circle">
    //     <span class="circle__btn"></span>
    //     <span class="circle__back-1"></span>
    //     <span class="circle__back-2"></span>
    // </div>

    // let cover = document.createElement("input")
    // cover.setAttribute("type", "button")
    // cover.setAttribute("id", i)
    // cover.setAttribute("class", "char")
    // cover.setAttribute("value", "_")
    // sec.appendChild(cover)
}
// sec.appendChild(document.createElement("br"))
// let arrabc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// let index = 0
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 8; j++) {
//         let b = document.createElement("input")
//         b.setAttribute("id", index)
//         b.setAttribute("class", "mayBtn")
//         b.setAttribute("type", "button")
//         b.setAttribute("data_i", i)
//         b.setAttribute("data_j", j)
//         b.setAttribute("value", arrabc[index++])
//         b.setAttribute("title", "לחץ עלי")
//         b.addEventListener("click", function () { f_click(realWord); });
//         sec.appendChild(b)
//     }
//     sec.appendChild(document.createElement("br"))
// }
// }