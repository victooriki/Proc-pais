document.getElementById('card').style.setProperty('display', 'none', 'important')


function procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}`
    console.log(finalURL)
    fetch(finalURL)
    .then(function(response){
        return response.json('')
    })
    .then(function(data){
        console.log(data[0])
        console.log(data[0].population)
        console.log(data[0].capital[0])
        console.log(data[0].continents[0])
    

    let bandeira = document.getElementById('bandeira')
    let nome = document.getElementById('nome')
    let populacao = document.getElementById('populacao')
    let capital = document.getElementById('capital')
    let continente = document.getElementById('continente')

    nome.innerHTML = pais
    populacao.innerHTML = data[0].population
    capital.innerHTML = data[0].capital[0]
    continente.innerHTML = data[0].continents[0]
    bandeira.src = data[0].flags.svg
    })
}