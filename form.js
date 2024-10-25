// Projeto 2A
document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault(); 

    // Obter valores de entrada informados pelo usuario
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;
    
    // Definir taxas de cambio fixas
    const exchangeRates = {
        USD: {BRL: 5.70, EUR: 0.93 },
        BRL: {USD: 5.70, EUR: 0.93 },
        EUR: {USD: 1.08,  BRL: 6.16 }
    };

    // conversão simples de moeda
    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor  * exchangeRates[daMoeda][paraMoeda];
    }

  const conversão = document.getElementById('conversão');

});

