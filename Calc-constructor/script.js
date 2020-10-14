function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear(el);
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value)

            if(!conta) { 
                alert('conta inválida')
                return
            }

        this.display.value = conta;
        }catch(e){
            alert('conta inválida')
            return;
        }
    };

    this.capturaEnter = (e) =>{
        this.display.addEventListener('keyup' , e => {
            if(e.keyCode !== 13) return;
            this.realizaConta();
        });
    };
}

let calc = new Calculadora();
calc.inicia(); 
