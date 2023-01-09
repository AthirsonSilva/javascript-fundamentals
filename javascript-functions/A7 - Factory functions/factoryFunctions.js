function createPerson(name, surname, height, weight){
    return{
        name,
        surname,
        get fullName(){
            return`${this.name} ${this.surname}`
        },
        speak: function(subject = 'nothing special...'){
            return `${this.name} is speaking about ${subject}`
        },
        weight,
        height,
        imc: function(){
            return `The IMC of ${fullName()} is: ${
                (this.weight / (this.height * this.height)).toFixed(2)}`
        },
        // Getter
        get aboveEighteen(){
            if(this.age >= 18){
                return true
            }else{
                return false
            }
        },
        // Setter
        set fullName(value){
            value= value.split(' ')
            this.name = value.shift()
            this.surname = value.join(' ')
        }
    }
}

const p1 = createPerson('Athirson', 'Silva', 1.85, 63)
p1.fullName = 'Athirson Barreto da Silva'
console.log(p1.name)
console.log(p1.surname)