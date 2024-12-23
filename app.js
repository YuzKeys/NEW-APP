const imgTurningCookie = document.getElementById('image1Sur1')
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
const infoContainer = document.getElementById('infoContainer')
const imageContainer = document.getElementById('imageContainer')
const cookyName = document.getElementById('cookyName')
const contentList = document.getElementById('contentList')

btnLeft.addEventListener('click', function () {
    imgTurningCookie.src = 'images/Chuncky Chocolat CookieDetoure.png'
    infoContainer.style.backgroundColor = "white"
    cookyName.innerHTML = "Chuncky Chocolat"
    // imageContainer.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnprbTQwN2Zud2dpNWlxaGh5MTlrNzg4bjQ1dXk0cWR6c2xqZzU1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEdv1GbekAakxXO8g/giphy.webp')"

    contentList.innerHTML = ''
    const l1 = document.createElement('li')
    l1.textContent = 'Œufs'
    const l2 = document.createElement('li')
    l2.textContent = 'Sucre'
    const l3 = document.createElement('li')
    l3.textContent = 'Farine'
    const l4 = document.createElement('li')
    l4.textContent = 'Beurre'
    const l5 = document.createElement('li')
    l5.textContent = 'Vanille'
    const l6 = document.createElement('li')
    l6.textContent = 'Chocolat'
    contentList.append(l1, l2, l3, l4, l5, l6)
});

btnRight.addEventListener('click', function () {
    imgTurningCookie.src = 'images/Caramel Naughty.png'
    infoContainer.style.backgroundColor = "white"
    cookyName.innerHTML = "Crunchy Caramel"
    // imageContainer.style.backgroundImage = "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXRxcmRrOGdwaG1hNWNhZDE1MWtiMzJvYjNmY3lwOXJtMzBwYWl1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JlCWAFQLTnYx4Sly1c/giphy.webp')"

    contentList.innerHTML = ''
    const l1 = document.createElement('li')
    l1.textContent = 'Œufs'
    const l2 = document.createElement('li')
    l2.textContent = 'Sucre'
    const l3 = document.createElement('li')
    l3.textContent = 'Farine'
    const l4 = document.createElement('li')
    l4.textContent = 'Beurre'
    const l5 = document.createElement('li')
    l5.textContent = 'Caramel Sauce'
    const l6 = document.createElement('li')
    l6.textContent = 'Nutts Topping'
    contentList.append(l1, l2, l3, l4, l5, l6)

})