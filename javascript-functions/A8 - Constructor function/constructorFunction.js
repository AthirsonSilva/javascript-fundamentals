// Constructor function -> Creates functions
// Factory function -> Fabricates functions

function Person(name, surname){
    const ID = 123456
    const innerMethod = () => {

    }

    this.name = name,
    this.surname = surname

    this.method = function(){
        console.log(this.name + ' is a method')
    }
}

const p1 = new Person('Athirson', 'Silva')
p1.method()