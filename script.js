//Array de objetos com os persongens e outro com as imagens do menu
const characters = [

    {
        "name": "Mel Medarda",
        "locality": "Piltover",
        "info": "É um aristocrata noxiana e membro do conselho governante de Piltover. Herdeira renegada do Clã Medarda , Mel é uma política ambiciosa disposta a fazer qualquer coisa para se colocar no topo. Usando suas proezas políticas, as ações que ela fez mudaram para sempre o curso da história de Piltover. ",
        "image": "mel.png"
    },
    {
        "name": "Caitlyn Kiramman",
        "locality": "Piltover",
        "info": "Uma descendente do Kiramman Clan , uma das casas governantes de Piltover. Ansiosa para ver o mundo por si mesma e desdenhosa do estilo de vida elitista tradicional em que seus pais a criaram, Caitlyn se juntou aos Executores quando jovem para fazer seu nome.",
        "image": "caitlyn.png"
    },
    {
        "name": "Jayce Talis",
        "locality": "Piltover",
        "info": "Cientista e inovador e, após anos de sucesso liderando o progresso científico da cidade e consequentemente seu progresso econômico, é atualmente o chefe do Conselho.",
        "image": "jayce.png"
    },
    {
        "name": "Powder(Jinx)",
        "locality": "Zaun",
        "info": "Quando ela era uma menina, seus pais foram mortos em uma revolta fracassada contra Piltover , levando Vander , o líder franco da cidade subterrânea, para adotar ela e Vi como suas próprias filhas. Depois que uma série de eventos forçaram Jinx e sua irmã a se separarem de várias maneiras, ela foi fundamentalmente e irrevogavelmente mudada, transformando-a na assassina demente que ela é hoje.",
        "image": "jinx.png"
    },
    {
        "name": "Heimerdinger",
        "locality": "Piltover",
        "info": "Figura renomada e respeitada em Piltover. Cientista, professor, reitor e ex-chefe do Conselho, Heimerdinger ajudou a moldar as mentes de jovens acadêmicos da Academia enquanto viveu por mais de três séculos, na esperança de orientá-los e alertá-los dos riscos potenciais da ciência e da magia.",
        "image": "heimerdinger.png"
    },
    {
        "name": "Violet(Vi)",
        "locality": "Zaun",
        "info": "A irmã mais velha de Jinx . Uma mulher impetuosa e destemida que se destaca na luta e gosta de resolver seus problemas com os punhos, ela empunha um par de manoplas hextec poderosas que podem perfurar edifícios - e pessoas - com poucos problemas.",
        "image": "vi-arcane.jpg"
    },
    {
        "name": "viktor",
        "locality": "Piltover",
        "info": "Ambicioso inventor zaunita que reside em Piltover , trabalhando como sócio de Jayce Talis . Uma vez trazido para a Academia como assistente de Heimerdinger , Viktor subiu da cidade subterrânea na esperança de melhorar a vida, mas sua pesquisa foi complicada ao descobrir que ele estava em estado terminal. No entanto, Viktor não deixa que sua doença o detenha e permanece firme na busca de uma cura.",
        "image": "viktor.png"
    },
    {
        "name": "Ekko",
        "locality": "Zaun",
        "info": "Inventor Zaunita e o chefe dos Firelights . Ele também é amigo de infância de Vi e Jinx. Um indivíduo agressivo e endurecido pela batalha, Ekko aspira libertar a cidade subterrânea do governo de Silco e está disposto a colocar tudo o que tem, incluindo sua própria vida, em risco para alcançá-lo.",
        "image": "ekko.png"
    }
]

const imagesMenu = [
    {
        "img": "riotxarcane.jpg",
        "alt": "conheça o evento riotx arcane"
    },
    {
        "img": "lol.jpg",
        "alt": "league of legends"
    },
    {
        "img": "valorant.jpg",
        "alt": "valorant"
    },
    {
        "img": "arcane.jpg",
        "alt": "série arcane"
    },
    {
        "img": "universo.jpg",
        "alt": "o maravilhoso universo riot"
    },
    {
        "img": "riot_music.jpeg",
        "alt": "riot music"
    },
    {
        "img": "riot_empresa.png",
        "alt": "empresa riot"
    },
    {
        "img": "mobile_riot.jpg",
        "alt": "jogos mobile"
    },
    {
        "img": "suporteriot.png",
        "alt": "suporte riot"
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
    const sectionMain = document.querySelector(".section-main")


    infoSection.innerHTML = `
        <p>${characters[index].locality}</p>
        <h1>${characters[index].name}</h1>
        <p>${characters[index].info}</p>
    `

    sectionMain.style.backgroundImage = `url('img/${characters[index].image}')`

}

function openCloseMenuLogo() {
    const logo = document.querySelector(".logo")
    const logo2 = document.querySelector(".logo2")
    const menuLogo = document.querySelector(".menu-logo")
    const close = document.querySelector(".close")
    const main = document.querySelector("main")

    function remove() {
        return menuLogo.classList.remove('active')
    }

    logo.addEventListener('click', () => {
        menuLogo.classList.add('active')
    })

    logo2.addEventListener('click', () => {
        remove()
    })

    close.addEventListener('click', () => {
        remove()
    })

    main.addEventListener("click", () => {
        remove()
    })

}

function openCloseArrow(games) {
    const submenu = document.querySelector(".games-submenu")
    const containsActive = submenu.classList.contains('active')

    //trocar a seta de lado na opção jogos no menu
    if (containsActive) {
        games.innerHTML = `
            <a href="#"></a>JOGOS
            <img src="img/close.svg" alt="seta mostrando que o menu de jogos esta aberto">
        `
    } else {
        games.innerHTML = `
            <a href="#"></a>JOGOS
            <img src="img/open.svg" alt="seta mostrando que o menu de jogos está fechado">
        `
    }
}

function openCloseSubMenu() {
    const games = document.querySelector(".games")
    const submenu = document.querySelector(".games-submenu")
    const main = document.querySelector("main")

    function remove() {
        return submenu.classList.remove('active')
    }

    games.addEventListener("mouseover", () => {
        submenu.classList.add('active')
        openCloseArrow(games)
    })

    main.addEventListener("mouseout", () => {
        remove()
        openCloseArrow(games)
    })

    main.addEventListener("click", () => {
        remove()
        openCloseArrow(games)
    })
}

function imagesInMenuLogo(imagesMenu) {
    const topic = document.querySelectorAll(".sub-topic")
    const cover = document.querySelector(".cover")

    for (let i = 0; i < 9; i++) {
        topic[i].addEventListener("mouseover", () => {
            cover.innerHTML = `
                <img src="img/${imagesMenu[i].img}" alt="${imagesMenu[i].alt}">
            `
        })
    }
}

function byCallingTheFunctions() {
    nextCharacter(characters)
    showCharacterInfo()
    openCloseMenuLogo()
    openCloseSubMenu()
    imagesInMenuLogo(imagesMenu)
}

byCallingTheFunctions()