function clock(){
    function createSeconds(seconds){
        const date = new Date(seconds * 1000)
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    const timer = document.querySelector('.timer')
    let seconds = 0
    let tempo
    
    document.addEventListener('click', function(event){
        const el = event.target
    
        if(el.classList.contains('start')){
            tempo = setInterval(function(){
                timer.classList.remove('redTimer')
                seconds++
                timer.innerHTML = createSeconds(seconds)
            }, 1000)
        }
        if(el.classList.contains('pause')){
            clearInterval(tempo)
            timer.classList.add('redTimer')
        }
        if(el.classList.contains('clear')){
            clearInterval(tempo)
            seconds = 0
            timer.innerHTML = '00:00:00'
        }
    })
}

clock()