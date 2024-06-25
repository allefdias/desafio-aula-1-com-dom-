function calcularSalario() {
    var valorHora = parseFloat(document.getElementById("valorHora").value);
    var horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);

    var salarioBruto = valorHora * horasTrabalhadas;
    var impostoRenda = salarioBruto * 0.11;
    var inss = salarioBruto * 0.08;
    var sindicato = salarioBruto * 0.05;
    var salarioLiquido = salarioBruto - impostoRenda - inss - sindicato;

    document.getElementById("salarioBruto").textContent = salarioBruto.toFixed(2);
    document.getElementById("descontoINSS").textContent = inss.toFixed(2);
    document.getElementById("descontoSindicato").textContent = sindicato.toFixed(2);
    document.getElementById("salarioLiquido").textContent = salarioLiquido.toFixed(2);
}

document.getElementById("calcularBtn").addEventListener("click", calcularSalario);
