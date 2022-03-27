//Objeto JSON com os personagens
const characters = {
    "Mel Medarda": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "mel.png"
    },
    "Caitlyn Kiramman": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "caitlyn.png"
    },
    "Jayce Talis": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "jayce.png"
    },
    "Powder(Jinx)": {
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "jinx.png"
    },
    "Heimerdinger": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "heimerdinger.png"
    },
    "Violet(Vi)": {
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "vi-arcane.jpg"
    },
    "viktor": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "viktor.png"
    },
    "Ekko": {
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "ekko.png"
    }
}

function showInfo(characters, index = 0) {
    const infoSection = document.querySelector(".character-info")
    const characterName = Object.keys(characters)
    const characterInfo = Object.values(characters)

    for (let i = 0; i < characterName.length; i++) {
        //modelando a DOM
        infoSection.innerHTML = `
            <p>${characterInfo[index].locality}</p>
            <h1>${characterName[index]}</h1>
            <p>${characterInfo[index].info}</p>
        `
    }
}

function nextCharacter(characters) {
    const next = document.querySelector(".next-character")

    let index = 0

    next.addEventListener('click', () => {

        index++

        showInfo(characters, index)
        changeImage(characters, index)
    })

}

function changeImage(characters, index = 0) {
    const body = document.querySelector("body")
    const characterInfo = Object.values(characters)

    body.style.backgroundImage = `url('img/${characterInfo[index].image}')`

}

function openCloseMenuLogo() {
    const logo = document.querySelector(".logo")
    const logo2 = document.querySelector(".logo2")
    const menuLogo = document.querySelector(".menu-logo")
    const close = document.querySelector(".close")

    logo.addEventListener('click', () => {
        menuLogo.classList.add('active')
    })

    logo2.addEventListener('click', () => {
        menuLogo.classList.remove('active')
    })

    close.addEventListener('click', () => {
        menuLogo.classList.remove('active')
    })

}

function byCallingTheFunctions() {
    nextCharacter(characters)
    showInfo(characters)
    changeImage(characters)
    openCloseMenuLogo()
}

byCallingTheFunctions()

//VOLTAR PARA O INICIO QUANDO CHEGAR NA ULTIMA IMAGEM
//FECHAR O MENU QUANDO CLICAR NA PARTE QUE SOBRA DA TELA QUANDO O MENU ESTA ABERTO