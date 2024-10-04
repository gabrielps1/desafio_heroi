class Heroi {
    constructor(tipo) {
        this.tipo = tipo.toLowerCase()
    }

    atacar()
    {
        const ataques = {
            "mago" : "magia",
            "guerreiro" : "espada",
            "monge" : "artes marciais",
            "ninja" : "shuriken"
        }

        const ataque = ataques[this.tipo]

        if(ataque)
        {
            console.log("O " + this.tipo + " atacou usando " + ataque)
        }
        else
        {
            console.log("Não existe esse heroi.")
        }
    }
}

let guerreiro = new Heroi("ninja")

guerreiro.atacar()

