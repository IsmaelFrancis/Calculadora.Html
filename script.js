document.addEventListener('DOMContentLoaded', () => {
    const calculatorForm = document.getElementById('calculatorForm');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const resultValue = document.getElementById('resultValue');

    calculatorForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;
        let result;

        // Validação para garantir que os valores são números
        if (isNaN(num1) || isNaN(num2)) {
            resultValue.textContent = 'Erro!';
            alert('Por favor, insira números válidos.');
            return;
        }

        // Realiza a operação com base na seleção
        switch (operation) {
            case 'soma':
                result = num1 + num2;
                break;
            case 'subtracao':
                result = num1 - num2;
                break;
            case 'multiplicacao':
                result = num1 * num2;
                break;
            case 'divisao':
                // Evita divisão por zero
                if (num2 === 0) {
                    resultValue.textContent = 'Indefinido';
                    alert('Não é possível dividir por zero.');
                    return;
                }
                result = num1 / num2;
                break;
            default:
                result = 'Erro!';
        }

        // Exibe o resultado com duas casas decimais, se necessário
        resultValue.textContent = result % 1 !== 0 ? result.toFixed(2) : result;
    });
});
