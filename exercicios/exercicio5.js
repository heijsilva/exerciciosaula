// exercicio5.js  
function exercicio5() {  
    const fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));  
    const celsius = (fahrenheit - 32) * (5 / 9);  
    alert("A temperatura em Celsius é: " + celsius.toFixed(2));  
}