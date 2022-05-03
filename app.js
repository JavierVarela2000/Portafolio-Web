



const imagenes = document.querySelectorAll('.imgGaleria');
const imgBox = document.querySelector('.imgBox');
const imgFull = document.querySelector('.imgFull');
const salirGaleria = document.querySelector('.salirGaleria');
const btnR = document.querySelector('.R');
const btnL = document.querySelector('.L');
let j = 0;

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function () {
        imgBox.style.display = 'flex';
        imgFull.style.display = 'block';
        j = i + 1;
        imgFull.innerHTML = `<img src="img/gallery${j}.jpg" alt="">`
    })
}

salirGaleria.addEventListener('click', function () {
    imgBox.style.display = 'none';
})
btnR.addEventListener('click',nextImage);
btnL.addEventListener('click',prevImage)

function nextImage() {
    
    j+=1;
    if(j==17){
        j=1
    }
    imgFull.innerHTML = `<img src="img/gallery${j}.jpg" alt="">`
    
    
}

function prevImage() {
    
    j-=1;
    if(j<=0){
        j=16
    }
    
    imgFull.innerHTML = `<img src="img/gallery${j}.jpg" alt="">`
    
    
    
}