let slider = document.querySelector('.slider'),
sliderbox = document.querySelector('.sliderbox'),
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next')

let items = slider.getElementsByClassName('slide')

nextBtn.addEventListener('click', ()=>{
    slider.append(items[0]);
})

prevBtn.addEventListener('click', ()=>{
    slider.prepend(items[items.length -1])
})

