// Fontes primarias

const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const input = document.getElementById('input-real')
const dolar = 5.43
const euro = 6.37
const btc = 465476.39

// Botão conversão

const convertValues = () => {
    const inputInReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValeuText = document.getElementById('currency-value-text')

    const resultToDolar = (inputInReal / dolar)
    const resultToEuro = (inputInReal / euro)
    const resultToBTC = (inputInReal / btc).toFixed(7)

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputInReal);

    if (select.value === "US$ Dolar Americano") {
        currencyValeuText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(resultToDolar);
    }

    if (select.value === "€ Euro") {
        currencyValeuText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(resultToEuro);
    }

    if (select.value === "₿ BitCoin") {
        currencyValeuText.innerHTML = resultToBTC + " BTC"
    }

}

button.addEventListener('click', convertValues)
input.addEventListener('keydown', convertValues)
// Fim Botão conversão

// Selecionar Moeda
changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyimg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyimg.src = "./img/euro.png"
    }

    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = "Dolar Americano"
        currencyimg.src = "./img/estados-unidos (1) 1.png"
    }

    if (select.value === '₿ BitCoin') {
        currencyName.innerHTML = "BitCoin"
        currencyimg.src = "./img/btc (1) 1.png"
    }
    convertValues()
}

select.addEventListener("change", changeCurrency)
// Fim Selecionar Moeda