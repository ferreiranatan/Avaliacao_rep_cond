let peso = 57
let altura =parseFloat (1.70) 
let imc =(altura+altura)/peso
// usei Parsefloat para "converter" string em numeros racionais
if (parseFloat(imc<18.5)){
    console.log('Abaixo do peso')
}else if ((parseFloat(imc=>18.5 && (imc<25)))){
    console.log('Peso normal')
}else if(imc=>25 && imc<30){
    console.log('Acima do peso')
}else(imc>30);{
    console.log('Obeso')
}