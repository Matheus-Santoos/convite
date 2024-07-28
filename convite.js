document.addEventListener('DOMContentLoaded', function () {
    const diaRadio = document.getElementById('dia');
    const noiteRadio = document.getElementById('noite');
    const opcoesDia = document.getElementById('opcoes-dia');
    const opcoesNoite = document.getElementById('opcoes-noite');

    const toggleOptions = () => {
        if (diaRadio.checked) {
            opcoesDia.style.display = 'block';
            opcoesNoite.style.display = 'none';
        } else if (noiteRadio.checked) {
            opcoesDia.style.display = 'none';
            opcoesNoite.style.display = 'block';
        }
    };

    diaRadio.addEventListener('change', toggleOptions);
    noiteRadio.addEventListener('change', toggleOptions);

    // Inicializa a exibição correta com base na seleção padrão
    toggleOptions();
});
