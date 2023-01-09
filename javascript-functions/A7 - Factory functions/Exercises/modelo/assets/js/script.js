function createCalculator(){
    return{
        display: document.querySelector('.display'),
        start(){
            this.clickBtn()
            this.keyPress()
        },
        keyPress(){
            this.display.addEventListener('keyup'), event => {
                if(event.keyCode === 13){
                    this.finishOperation()
                }
            }
        },
        clearDisplay(){
            this.display.value = ''
        },
        deleteBtn(){
            this.display.value = this.display.value.slice(0, -1)
        },
        finishOperation(){
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
        },
        clickBtn(){
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
        },
        btnDisplay(value){
            this.display.value += value
        }
    }
}

const calculator = createCalculator()
calculator.start()