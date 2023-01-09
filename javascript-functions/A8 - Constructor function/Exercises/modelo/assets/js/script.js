function Calculator(display){
        this.display = display;
        this.start = function(){
            this.clickBtn()
            this.keyPress()
        };
        this.keyPress = function(){
            this.display.addEventListener('keyup'), event => {
                if(event.keyCode === 13){
                    this.finishOperation()
                }
            }
        };
        this.clearDisplay = function(){
            this.display.value = ''
        };
        this.deleteBtn = function(){
            this.display.value = this.display.value.slice(0, -1)
        };
        this.finishOperation = function(){
            let operation = this.display.value
            try{
                operation = eval(operation)
                if(!operation){
                    window.alert('Invalid operation attempt.')
                    return
                }
                this.display.value = String(operation)
            }catch(error){
                window.alert('Invalid operation attempt.')
            }
        };
        this.clickBtn = function(){
            document.addEventListener('click', event =>{
                const element = event.target

                if(element.classList.contains('btn-num')){
                    this.btnDisplay(element.innerText)
                }
                if(element.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(element.classList.contains('btn-del')){
                    this.deleteBtn()
                }
                if(element.classList.contains('btn-eq')){
                    this.finishOperation()
                }
            })
        };
        this.btnDisplay = function(value){
            this.display.value += value
        }
}

display = document.querySelector('.display');
const calculator = new Calculator(display)
calculator.start()