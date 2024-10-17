const form = document.getElementById('cadastroForm');
const tabelaCorpo = document.getElementById('cadastroTableBody');

function atualizarTabela() {
    tabelaCorpo.innerHTML = ''; 
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; 

    usuarios.forEach(usuario => {
        const novaLinha = document.createElement('tr');

        const celulaNome = document.createElement('td');
        celulaNome.textContent = usuario.nome;
        const celulaEmail = document.createElement('td');
        celulaEmail.textContent = usuario.email;
        const celulaSenha = document.createElement('td');
        celulaSenha.textContent = '••••••••'; 

        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaEmail);
        novaLinha.appendChild(celulaSenha);

        tabelaCorpo.appendChild(novaLinha);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; 
    usuarios.push({ nome, email, senha }); 
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); 

    atualizarTabela(); 

    form.reset(); 
});

atualizarTabela();
