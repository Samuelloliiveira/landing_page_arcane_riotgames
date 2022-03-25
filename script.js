//Objeto JSON com os personagens
const characters = {
    "Mel Medarda": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia."
    },
    "Caitlyn Kiramman": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia."
    },
    "Jayce Talis": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia."
    },
    "Powder(Jinx)": {
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia."
    },
    "Heimerdinger": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia."
    },
    "Violet(Vi)": {
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia."
    },
    "viktor": {
        "locality": "Piltover",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia."
    },
    "Ekko": {
        "locality": "Zaun",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit vero obcaecati sint dicta corporis sapiente molestias illum, tempore cum a culpa beatae praesentium possimus deleniti sequi voluptates itaque quia."
    }
}

function showInfo(characters, index) {
    const infoSection = document.querySelector(".character-info")
    const characterName = Object.keys(characters)
    const characterInfo = Object.values(characters)

    for (let i = 0; i < characterName.length; i++) {
        //modelando a DOM
        infoSection.innerHTML = `
            <section class="character-info">
                <!-- os dados são adicionados pela DOM -->
                <p>${characterInfo[index].locality}</p>
                <h1>${characterName[index]}</h1>
                <p>${characterInfo[index].info}</p>
            </section>
        `
    }
}

function nextCharacter(characters) {
    const next = document.querySelector(".next-character")

    next.addEventListener("click", () => {
        //criar uma forma de passar o index
        //sempre que chegar no final do array de objeto voltar para o inicio
    })

    showInfo(characters, index = 0)


}

nextCharacter(characters)