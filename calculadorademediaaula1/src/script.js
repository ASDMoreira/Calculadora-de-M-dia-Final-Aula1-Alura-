//Primeira atividade

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 10
var notaDoTerceiroBimestre = 9
var notaDoQuartoBimestre = 7

var somaDasNotas = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre 

var notaFinal = somaDasNotas / 4

//funcao que arredonda a nota (toFixed + casas decimais)
var notaFixada = notaFinal.toFixed(1)

if(notaFixada >= 7)
  console.log("O aluno foi aprovado, sua nota final foi: " + notaFixada)
else
  console.log("O aluno foi reprovado, sua nota final foi: " + notaFixada)
