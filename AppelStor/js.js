let listShow = document.querySelector('.list')

listShow.onclick = () => {
    if (document.querySelector('.container .header ul').style.display === 'none') {
        document.querySelector('.container .header ul').style.display = 'flex'
    } else {
        document.querySelector('.container .header ul').style.display = 'none'
    }
}


let image = document.querySelector('.image img')
let imageList = document.querySelectorAll('.iphonlist li img')
let btnProduct = document.querySelector('.text button')

imageList.forEach((list) => {
    list.addEventListener('click', () => {
        document.body.style.backgroundColor = list.className
        image.src = list.src
        btnProduct.style.cssText = `
        background-color: ${document.body.style.backgroundColor};
        `
    })
})




