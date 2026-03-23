let score = 0;

function check(answer, correct, id) {
const res = document.getElementById(id);

if(answer === correct){
res.textContent = "✅ Correcto";
score++;
} else {
res.textContent = "❌ Incorrecto";
}
}

function copyCommand(cmd){
navigator.clipboard.writeText(cmd);
alert("Comando copiado: " + cmd);
}