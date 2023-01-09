function ValidateCPF(cpf){
    Object.defineProperty(this, 'cleanCPF', {
        enumerable: true,
        get: () => cpf.replace(/\D+/g, '')
    })
}

ValidateCPF.prototype.validate = function() {
    if(typeof this.cleanCPF === 'undefined') return false
    if(this.cleanCPF.length !== 11) return false
    if(this.isSequence()) return false

    const partialCPF = this.cleanCPF.slice(0, -2)
    const digitOne = this.digit(partialCPF)
    const digitTwo = this.digit(partialCPF + digitOne)
    
    const newCPF = partialCPF + digitOne + digitTwo

    return true
}

ValidateCPF.prototype.digit = function(partialCPF) {
    const cpfArray = Array.from(partialCPF)
    
    let regressive = cpfArray.length + 1
    let total = cpfArray.reduce((stack, value) => {
        stack += (regressive * Number(value))
        regressive--
        return stack  
    }, 0)

    const digit = 11 - (total % 11)
    return digit > 9 ? '0' : String(digit)
}

ValidateCPF.prototype.isSequence = function(){
    const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length)
    return sequence === this.cleanCPF
}

const cpf = new ValidateCPF('111.111.111-11')

if(cpf.validate()){
    console.log('Valid CPF')
}else{
    console.log('Invalid CPF')
}