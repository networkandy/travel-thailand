
const sliderModal = document.getElementById('slider');
const images = document.querySelectorAll('.spot-img');
const imgContainer = document.querySelector('.img-slider');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const closeBtn = document.getElementById('cloceBtn');

let slider = [];
let counter = 0;

// console.log(images);
// console.log(slider);



//add all the images to the array
images.forEach((img) => {
    slider.push(img.src);
    // console.log(slider);
});


//Open Modal 
images.forEach((img) => {
    img.addEventListener('click', (e) => {
        
        sliderModal.classList.add('showSlider');
    });
    
});

//Close slider modal
closeBtn.addEventListener('click', () => {
    
    sliderModal.classList.remove('showSlider');
});


//Add clicked image to the slider show image
images.forEach((img) => {
    img.addEventListener('click', (e) => {
        
        let src = e.target.src;
        counter = slider.indexOf(src);
        // console.log(counter);
        imgContainer.style.backgroundImage = `url(${src})`;
    });
});


//right button slider
rightBtn.addEventListener('click', () => {
        counter++;
        if(counter > slider.length - 1){
            counter = 0;
        }
        // console.log(counter);
    imgContainer.style.backgroundImage = `url(${slider[counter]})`;
});


//left button slider
leftBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = slider.length - 1;
    }
    // console.log(counter);
    imgContainer.style.backgroundImage = `url(${slider[counter]})`;
});
