function contar() {

    let ini = document.getElementById('txt1')

    let fim = document.getElementById('txt2')

    let passo = document.getElementById('txt3')

    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        window.alert('ERROR! fill in the data')
        res.innerHTML = 'Impossible to count!'

    } else {

        res.innerHTML = '\u{1F913} Contando... <br> '

        let i = Number(ini.value)

        let f = Number(fim.value)

        let p = Number(passo.value)

        if( p <= 0 ){
            window.alert('Invalid step.Considering step to 1')

            p = 1 
        }

        if (i < f) {
            //CONTAGEM CRESCENTE 
            for (let c = i; c <= f; c += p) {

                res.innerHTML += `${c} \u{1F916}`
            }


        } else {
            //CONTAGEM REGRESSIVA 
            for (let c = i; c >= f; c -= p) {

                res.innerHTML += `${c} \u{1F916}`

            }
        }

    }

}