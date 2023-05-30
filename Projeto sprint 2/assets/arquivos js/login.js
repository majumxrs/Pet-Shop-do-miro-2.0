function BTNentrar()
{
    let Nomeo = document.getElementById("nome").value;
    let Senha = document.getElementById("senha").value;
    let existe = false;
    let nome = "";
    let lista_usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(Nomeo != "" && Senha != "")
    {
        if(lista_usuarios != "")
        {
            for(i = 0; i < lista_usuarios.length; i++)
            {
                if(lista_usuarios[i].Nome == Nomeo)
                {
                    if(lista_usuarios[i].senha == Senha)
                    {
                        nomeo = lista_usuarios[i].nomeo;
                        existe = true;
                    }                    
                }
            }
        }
    }
       
    if(existe)
    {
        document.innerHTML =  alert("Usuário não encontrado");
        
    }
    else
    {
        document.innerHTML = alert("Seja bem vindo" + nome);
        window.location.href = "home.html";

    }  
}