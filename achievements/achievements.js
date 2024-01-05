const imgOne = document.querySelector('.ImgRotateImg1')
const imgTwo = document.querySelector('.ImgRotateImg2')
let rtdeg = 0;
setInterval(() => {
    rtdeg++;
    if (rtdeg == 360) {
        rtdeg = 0
    }
    imgOne.style.transform = 'rotate(' + rtdeg + 'deg)';
    imgTwo.style.transform = 'rotate(' + rtdeg + 'deg)';
}, 100)

