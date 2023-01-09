class ValidateCPF{
    constructor(cpf){
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }
    sequence(){
        return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length)
        === this.cleanCPF
    }

    createCPF(){
        const partialCPF = this.cleanCPF.slice(0, -2)
        const digOne = ValidateCPF.digit(partialCPF)
        const digTwo = ValidateCPF.digit(partialCPF + digOne)
        this.newCPF = partialCPF + digOne + digTwo
    }

    static digit(partialCPF){
        let total = 0
        let reverse = partialCPF.length + 1

        for(let strNum of partialCPF){
            total += reverse * Number.parseInt(strNum)
            reverse--
        }
        const digit = 11 - (total % 11)
        return digit <= 9 ? String(digit) : '0'
    }

    validate(){
        if(!this.cleanCPF) return false
        if(typeof this.cleanCPF !== 'string') false
        if(this.cleanCPF.length !== 11) return false
        if(this.sequence()) return false
        this.createCPF() 

        return this.newCPF === this.cleanCPF
    }
}

/* let valCPF = new ValidateCPF('070.987.720-03')
// valCPF = new ValidateCPF('999.999.999-99')

if(valCPF.validate()){
    console.log('Valid CPF')
}else{
    console.log('Invalid CPF')
} */