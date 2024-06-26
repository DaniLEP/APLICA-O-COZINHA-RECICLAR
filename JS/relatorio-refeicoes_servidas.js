document.addEventListener('DOMContentLoaded', function() {
    const dashboard = document.getElementById('dashboard');
    const ctxCafedamanha = document.getElementById('chartCafedamanha').getContext('2d');
    const ctxAlmoco = document.getElementById('chartAlmoco').getContext('2d');
    const ctxLanchedatarde = document.getElementById('chartLanchedatarde').getContext('2d');
    const ctxJantar = document.getElementById('chartJantar').getContext('2d');
  
    // Dados dos produtos (exemplo)
    const produtos = [
        { TurmaFuncionario: 'Turma 1', quantidadeCafedamanha: 30, quantidadeAlmoco: 25, quantidadeLanchedatarde: 20, quantidadeJantar: 15, dataConsumo: '2024-06-01' },
        { TurmaFuncionario: 'Funcionarios', quantidadeCafedamanha: 40, quantidadeAlmoco: 35, quantidadeLanchedatarde: 30, quantidadeJantar: 25, dataConsumo: '2024-06-02' },
        { TurmaFuncionario: 'Turma 3', quantidadeCafedamanha: 50, quantidadeAlmoco: 45, quantidadeLanchedatarde: 40, quantidadeJantar: 35, dataConsumo: '2024-06-03' },
        { TurmaFuncionario: 'Funcionarios', quantidadeCafedamanha: 60, quantidadeAlmoco: 55, quantidadeLanchedatarde: 50, quantidadeJantar: 45, dataConsumo: '2024-06-04' }
    ];
  
    // Função para formatar a data no formato dd/mm/yyyy
    function formatarData(data) {
        const date = new Date(data);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
  
    // Gerar dados para o gráfico de Café da Manhã (pie chart)
    const labelsCafedamanha = produtos.map(produto => produto.TurmaFuncionario);
    const dataCafedamanha = produtos.map(produto => produto.quantidadeCafedamanha);
  
    new Chart(ctxCafedamanha, {
        type: 'pie',
        data: {
            labels: labelsCafedamanha,
            datasets: [{
                label: 'Café da Manhã',
                data: dataCafedamanha,
                backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
            }]
        }
    });
  
    // Gerar dados para o gráfico de Almoço (pie chart)
    const labelsAlmoco = produtos.map(produto => produto.TurmaFuncionario);
    const dataAlmoco = produtos.map(produto => produto.quantidadeAlmoco);
  
    new Chart(ctxAlmoco, {
        type: 'pie',
        data: {
            labels: labelsAlmoco,
            datasets: [{
                label: 'Almoço',
                data: dataAlmoco,
                backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
            }]
        }
    });
  
    // Gerar dados para o gráfico de Lanche da Tarde (pie chart)
    const labelsLanchedatarde = produtos.map(produto => produto.TurmaFuncionario);
    const dataLanchedatarde = produtos.map(produto => produto.quantidadeLanchedatarde);
  
    new Chart(ctxLanchedatarde, {
        type: 'pie',
        data: {
            labels: labelsLanchedatarde,
            datasets: [{
                label: 'Lanche da Tarde',
                data: dataLanchedatarde,
                backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
            }]
        }
    });
  
    // Gerar dados para o gráfico de Jantar (pie chart)
    const labelsJantar = produtos.map(produto => produto.TurmaFuncionario);
    const dataJantar = produtos.map(produto => produto.quantidadeJantar);
  
    new Chart(ctxJantar, {
        type: 'pie',
        data: {
            labels: labelsJantar,
            datasets: [{
                label: 'Jantar',
                data: dataJantar,
                backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
            }]
        }
    });
  
    // Renderizar os produtos no dashboard
    produtos.forEach(produto => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        const produtoInfo = `
            <div class="product-info">
                <div><strong>Turma/Funcionário:</strong> ${produto.TurmaFuncionario}</div>
                <div><strong>Quantidade de Café da Manhã:</strong> ${produto.quantidadeCafedamanha}</div>
                <div><strong>Quantidade de Almoço:</strong> ${produto.quantidadeAlmoco}</div>
                <div><strong>Quantidade de Lanche da Tarde:</strong> ${produto.quantidadeLanchedatarde}</div>
                <div><strong>Quantidade de Jantar:</strong> ${produto.quantidadeJantar}</div>
                <div><strong>Data de Consumo:</strong> ${formatarData(produto.dataConsumo)}</div>
            </div>
        `;
  
        productDiv.innerHTML = produtoInfo;
        dashboard.appendChild(productDiv);
    });
});
