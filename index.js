var nota01 = document.getElementById('nota01');
var nota02 = document.getElementById('nota02');
var nota03 = document.getElementById('nota03');
var nota04 = document.getElementById('nota04');
var enviar = document.getElementById('enviar');
var txtMedia = document.getElementById('txtMedia');

enviar.addEventListener("click", function (event) {
  var valor01 = nota01.valueAsNumber || 0;
  var valor02 = nota02.valueAsNumber || 0;
  var valor03 = nota03.valueAsNumber || 0;
  var valor04 = nota04.valueAsNumber || 0;

  txtMedia.value = (valor01 + valor02 + valor03 + valor04)/4;

  var Media = (valor01 + valor02 + valor03 + valor04)/4;
  if(Media >= 7)
  if(Media==10)
   alert("Uau! Aprovado !!!!");
  else
   alert("Parabens, aprovado! Media "+Media);
 else
  alert("Reprovado!");




});