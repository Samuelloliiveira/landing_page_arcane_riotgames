//Objeto JSON com os personagens
const characters = [
    {
        "name": "Mel Medarda",
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "mel.png"
    },
    {
        "name": "Caitlyn Kiramman",
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "caitlyn.png"
    },
    {
        "name": "Jayce Talis",
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "jayce.png"
    },
    {
        "name": "Powder(Jinx)",
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "jinx.png"
    },
    {
        "name": "Heimerdinger",
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "heimerdinger.png"
    },
    {
        "name": "Violet(Vi)",
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "vi-arcane.jpg"
    },
    {
        "name": "viktor",
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "viktor.png"
    },
    {
        "name": "Ekko",
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia.",
        "image": "ekko.png"
    }
]

function nextCharacter(characters) {
    const nextCharacter = document.querySelector(".next-character")
    let index = 0

    nextCharacter.addEventListener('click', () => {
        index++

        //cria um loop nas informações
        if (index == characters.length) {
            index = 0
        }

        showCharacterInfo(index)

    })
}

function showCharacterInfo(index = 0) {
    const infoSection = document.querySelector(".character-info")
    const body = document.querySelector("body")


    infoSection.innerHTML = `
        <p>${characters[index].locality}</p>
        <h1>${characters[index].name}</h1>
        <p>${characters[index].info}</p>
    `

    body.style.backgroundImage = `url('img/${characters[index].image}')`

}

function openCloseMenuLogo() {
    const logo = document.querySelector(".logo")
    const logo2 = document.querySelector(".logo2")
    const menuLogo = document.querySelector(".menu-logo")
    const close = document.querySelector(".close")
    const main = document.querySelector("main")

    logo.addEventListener('click', () => {
        menuLogo.classList.add('active')
    })

    logo2.addEventListener('click', () => {
        menuLogo.classList.remove('active')
    })

    close.addEventListener('click', () => {
        menuLogo.classList.remove('active')
    })

    main.addEventListener("click", () => {
        menuLogo.classList.remove('active')
    })

}

function closeArrow(games) {
    //trocar seta do lado de jogos
    games.innerHTML = `
        <a href="#"></a>JOGOS
        <img src="img/close.svg" alt="">
    `
}

function openArrow(games) {
    //trocar seta do lado de jogos
    games.innerHTML = `
        <a href="#"></a>JOGOS
        <img src="img/open.svg" alt="">
    `
}

function openCloseSubMenu() {
    const games = document.querySelector(".games")
    const submenu = document.querySelector(".games-submenu")
    const main = document.querySelector("main")

    games.addEventListener("mouseover", () => {
        submenu.classList.add('active')
        closeArrow(games)
    })

    main.addEventListener("mouseout", () => {
        submenu.classList.remove('active')
        openArrow(games)
    })

    main.addEventListener("click", () => {
        submenu.classList.remove('active')
        openArrow(games)
    })
}

function byCallingTheFunctions() {
    nextCharacter(characters)
    showCharacterInfo()
    openCloseMenuLogo()
    openCloseSubMenu()
}

byCallingTheFunctions()

//PASSAR IMAGEM NO MENU LOGO