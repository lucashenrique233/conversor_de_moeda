// Projeto 2A
document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault(); 

    // Obter valores de entrada informados pelo usuario
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('from-currency').value;
    const paraMoeda = document.getElementById('from-currency').value;
    
    // Definir taxas de cambio fixas
    const exchangeRates = {
        USD: {BRL: 5.70, EUR: 0.93 },
        BRL: {USD: 5.70, EUR: 0.93 },
        EUR: {USD: 1.08,  BRL: 6.16 },
    };
});

