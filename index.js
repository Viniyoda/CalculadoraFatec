const { createApp } = Vue;

createApp({
    data() {
        return {
            display: "0",
            value: ''
        }
    },
    setup() {
        const numberAfter = 0;
        const numberBefore = 0;
        const operator = '';
        const value = 0;
    },
    methods: {
        lidarBotao(botao) {
            switch (botao)
            {
                case 'X':
                case '/':
                case '-':
                case '+':
                    this.handlerOperator(botao);
                    break;

                case '.':
                    this.handlerDecimal();
                    break;

                case 'C':
                    this.handlerClear();
                    break;

                case '=':
                    this.handlerEquals();
                    break;

                default:
                    this.handlerNumber(botao);
            }
        },
        handlerClear() {
            this.display = '0';
            numberAfter = 0;
            numberBefore = 0;
            operator = '';
            this.value = 0;
        },
        handlerOperator(botao) {
            this.display = botao;
            operator = botao;
            numberBefore = numberAfter;
            numberAfter = 0;
            console.log(numberBefore);
            console.log(numberAfter);
        },
        handlerDecimal() {
            console.log("Entrou no decimal")
            this.display += '.';
        },
        handlerEquals() {
            console.log("Entrou no igual");
            if (operator === '/'){
                this.value = numberBefore / numberAfter;
                console.log(this.value);
            }
            if (operator === 'X'){
                this.value = numberBefore * numberAfter;
                console.log(this.value);
            }
            if (operator === '-'){
                this.value = numberBefore - numberAfter;
                console.log(this.value);
            }
            if (operator === '+'){
                this.value = numberBefore + numberAfter;
                console.log(this.value);
            }
            numberAfter = this.value;
            this.display = this.value;
        },
        handlerNumber(botao) {
            if (['0', '/', 'X', '-', '+', this.value].includes(this.display)) {
                this.display = botao.toString();
            } else {
                this.display += botao.toString();
            }
            numberAfter = parseFloat(this.display);
            console.log(numberAfter);
        }
    }
}).mount(app);