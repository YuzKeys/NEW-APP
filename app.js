const imgTurningCookie = document.getElementById('image1Sur1')
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
const infoContainer = document.getElementById('infoContainer')
const imageContainer = document.getElementById('imageContainer')
const cookyName = document.getElementById('cookyName')

btnLeft.addEventListener('click', function () {
    imgTurningCookie.src = '/images/Chuncky Chocolat CookieDetoure.png'
    infoContainer.style.backgroundColor = "white"
    cookyName.innerHTML = "Chuncky Chocolat"
    // imageContainer.style.backgroundImage = "url('https://media1.giphy.com/"
});

btnRight.addEventListener('click', function () {
    imgTurningCookie.src = '/images/Caramel Naughty.png'
    infoContainer.style.backgroundColor = "white"
    cookyName.innerHTML = "Crunchy Caramel"
    // imageContainer.style.backgroundImage = "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmdjbTVhM25ydWdkZ3Rna2UwanptNWpma3diZ3ZtYWt4ZjAwMWhycyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTkcEYaBTfgoTUuO2c/giphy.webp"
})