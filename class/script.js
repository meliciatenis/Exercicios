class ControlRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instacia

    aumentar() {
        this.volume += 2;
    }

    dimunir() {
        this.volume -= 2;
    }

    //metodo estático
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }
}

const c1 = new ControlRemoto('LG');

console.log(c1)

ControlRemoto.trocaPilha();