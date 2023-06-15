// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**
if (gender === "male" // se o genero é exatamente igual a masculino
&& height >= 1.70 // e a altura é maior ou igual a 1.70
&& (barReps >= 6 || barSeconds >= 15) // e o número de repetições na barra é maior ou igual a 6 OU o tempo das repetições com barra é maior ou igual a 15
&& abs >= 41 // e o número de abdominais é igual ou maior que 41
&& ((runDistance >= 3000 && runTime <= 720) // e a distância de corrida é maior ou igual a 3000 e o tempo de corrida é igual ou menor que 720
|| (runDistance >= 5000 && runTime <=1200)) // ou a distância de corrida é maior ou igual a 5000 e o tempo de corrida é igual ou menos que 1200
&& ((swimDistance >= 100 && swimTime <=60) // e a distância da natação for igual ou maior que 100 e o tempo da natação for menor ou igual a 60
|| (diveTime <= 30))) // ou o tempo de mergulho é igual ou menor que 30
{
    passed = true //então a variável passed será verdadeira
}

else if (gender === "female" // se não, se o gênero for exatamente igual a feminino
&& height >= 1.60 // e a altura é maior ou igual a 1.60
&& (barReps >= 5 || barSeconds >= 12) // e o número de repetições na barra é maior ou igual a 5 OU o tempo das repetições com barra é maior ou igual a 12
&& abs >= 41 // e o número de abdominais é igual ou maior que 41
&& ((runDistance >= 4000 && runTime <= 900) // e a distância de corrida é maior ou igual a 4000 e o tempo de corrida é igual ou menor que 900
|| (runDistance >= 6000 && runTime <=1320)) // ou a distância de corrida é maior ou igual a 6000 e o tempo de corrida é igual ou menos que 1320
&& ((swimDistance >= 100 && swimTime <=60) // e a distância da natação for igual ou maior que 100 e o tempo da natação for menor ou igual a 60
|| (diveTime <= 30)))  // ou o tempo de mergulho é igual ou menor que 30
{
    passed = true //então a variável passed será verdadeira
}

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed); //console exibirá o valor da variável passed