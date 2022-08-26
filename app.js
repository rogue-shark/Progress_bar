const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')
const progLine = document.getElementById('progress')
const progBars = document.querySelectorAll('.progress-bar')

let currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive++
    if(currentActive > progBars.length){
        currentActive = progBars.length;
    }
    update()
})
prevButton.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1){
        currentActive = 1;
    }
    update()
})

function update() {
    progBars.forEach((bar, index) => {
        if(index < currentActive){
            bar.classList.add('active')
        }
        else{
            bar.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    
    progLine.style.width = (actives.length -1)/ (progBars.length - 1) * 100 + '%'

    if(currentActive === 1){
        prevButton.disabled = true
    }
    else if (currentActive === progBars.length){
        nextButton.disabled = true
    }
    else{
        prevButton.disabled = false
        nextButton.disabled = false
    }
}
