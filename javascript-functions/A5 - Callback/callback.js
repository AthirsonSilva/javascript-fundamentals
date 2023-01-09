function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min
    return Math.round(num)
}
console.log(rand())

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback()
    }, 500)
}

function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback()
    }, 1000)
}

function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback()
    }, 1500) 
}


function methodOne(){
    f1(function(){
        f2(function(){
            f3(function(){
                setTimeout(function(){
                    console.log('Hello, world.')
                }, 2000)     
            })
        })
    })
}

function methodTwo(){
    f1(f1Callback)

    function f1Callback(){
        f2(f2Callback)
    }

    function f2Callback(){
        f3(f3Callback)
    }

    function f3Callback(){
        console.log('Hello, world!')
    }
}

methodTwo()