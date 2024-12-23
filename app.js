const imgTurningCookie = document.getElementById('image1Sur1')
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
const infoContainer = document.getElementById('infoContainer')
const imageContainer = document.getElementById('imageContainer')
const cookyName = document.getElementById('cookyName')

btnLeft.addEventListener('click', function () {
    imgTurningCookie.src = 'images/Chuncky Chocolat CookieDetoure.png'
    infoContainer.style.backgroundColor = "white"
    cookyName.innerHTML = "Chuncky Chocolat"
    imageContainer.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnprbTQwN2Zud2dpNWlxaGh5MTlrNzg4bjQ1dXk0cWR6c2xqZzU1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEdv1GbekAakxXO8g/giphy.webp')"
});

btnRight.addEventListener('click', function () {
    imgTurningCookie.src = 'images/Caramel Naughty.png'
    infoContainer.style.backgroundColor = "white"
    cookyName.innerHTML = "Crunchy Caramel"
    imageContainer.style.backgroundImage = "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXRxcmRrOGdwaG1hNWNhZDE1MWtiMzJvYjNmY3lwOXJtMzBwYWl1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JlCWAFQLTnYx4Sly1c/giphy.webp')"
})