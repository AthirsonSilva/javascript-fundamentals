class ValidateForm{
    constructor(){
        this.form = document.querySelector('.form')
        
        this.event()
    }
    event(){
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event)
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const validFields = this.checkField()
        const validPasswords = this.validatePassword()

        if(validFields && validPasswords){
            alert('Submitting your form')
            this.form.submit()
        }
    }

    checkField(){
        let isValid = true

        for(let eTxt of this.form.querySelectorAll('.error')){
            eTxt.remove()
        }

        for(let field of this.form.querySelectorAll('.validate')){
            const label = field.previousElementSibling.innerText
            if(!field.value) {
                this.createError(field, `${label} can not be left blank`)
                isValid = false
            }
            if(field.classList.contains('cpf')){
                if(!this.validateCPF(field)) isValid = false

            }
            if(field.classList.contains('username')){
                if(!this.validateUser(field)) isValid = false
            }
        }
        return isValid
    }

    createError(field, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error')
        field.insertAdjacentElement('afterend', div)
    }

    validateCPF(field){
        const cpf = new ValidateCPF(field.value)

        if(!cpf.validate()){
            this.createError(field, 'Invalid CPF')
            return false
        }

        return true
    }

    validateUser(field){
        const user = field.value
        let isValid = true
        if(user.length > 12 || user.length < 3){
            this.createError(field, 'Username must have between 3 and 12 characters')
            isValid = false
        }
        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(field, 'Username must contain only letters or numbers')
            isValid = false
        }
        return isValid
    }

    validateName(field){
        const name = field.value
        let isValid = true
        if(!name.match(/^[a-zA-Z]+$/g)){
            if(field.classList.contains('name')) this.createError(field, `Your name must contain only letters`)
            if(field.classList.contains('surname')) this.createError(field, `Your surname must contain only letters`)
            isValid = false
        }
        return isValid
    }

    validatePassword(){
        const password = form.querySelector('.password')
        const repeatPassword = form.querySelector('.repeat-password')
        let isValid = true
        if(password.value.length < 6 || password.value.length > 16){
            isValid = false
            this.createError(password, 'Password must have between 6 and 16 characters')
        }
        if(password.value !== repeatPassword.value){
            isValid = false
            this.createError(password, 'Both password and repeat password must be equals')
            this.createError(repeatPassword, 'Both password and repeat password must be equals')
        }
        return isValid
    }
}

const validate = new ValidateForm()