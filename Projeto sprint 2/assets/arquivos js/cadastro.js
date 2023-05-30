function SalvarLogin()
{
    // PEGA OS VALORES DOS CAMPOS
    let Nome = document.getElementById("nome").value;
    let Nomepet= document.getElementById("pet").value;
    let Tel = document.getElementById("name").value;
    let CPF = document.getElementById("cpf").value;
    let Email = document.getElementById("email").value;
    let Cidade = document.getElementById("cit").value;
    let Endereco = document.getElementById("end").value;
    let Senha = document.getElementById("senha").value;
    let Comfisenha = document.getElementById("senha-co").value;

    // CRIA A 'TABELA' NO LOCAL STORANGE
    var usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    // ADICIONA OS ITENS NA LISTA
    usuarios.push({
        nome: Nome,
        Nomepet: Nomepet,
        Tel: Tel,
        CPF: CPF,
        Email: Email,
        Cidade: Cidade,
        Endereco: Endereco,
        senha: Senha,
        Comfisenha: Comfisenha
    });

    // Salva a lista alterada
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
   
    document.getElementById( "resposta" ).innerHTML = "Cadastro Realizado com Sucesso!";
}