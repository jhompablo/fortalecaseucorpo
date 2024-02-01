function corrigirCampos(){
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const form = document.querySelector("form");
    const btnEnviar = document.querySelector("[input='submit']");
    const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    form.addEventListener('submit', function(e){
        // e.preventDefault();
        if(!nome.value.trim()){
            nome.value = "";
            nome.setAttribute("placeholder", "Favor informe seu nome");
            nome.style.cssText = "box-shadow: 0 0 0 0.25rem rgba(204, 14, 14, 0.510)";
            e.preventDefault();
            return false;
        }

        if(!email.value.trim()){
            email.value = "";
            email.setAttribute("placeholder","Favor informe o email");
            email.style.cssText = "box-shadow: 0 0 0 0.25rem rgba(204, 14, 14, 0.510)";
            e.preventDefault();
            return false;
        }

        if(!regex.test(email.value)){
            email.value="";
            email.setAttribute("placeholder","Email incorreto!");
            email.style.cssText = "box-shadow: 0 0 0 0.25rem rgba(204, 14, 14, 0.510)";
            e.preventDefault();
            return false;
        }

        if(nome.value && email.value){
           e.preventDefault(); 
           const formData = new FormData(form);
           fetch(form.action, {
               method: form.method,
               body: formData,
            //    body: JSON.stringify({nome:nome, email:email}),
               headers: {'Content-Type':'application/json; charset-utf=8'} //Accept:application/json
           }).then(function (response){
               return response;
           }).catch(function (error){
               alert("não funcionou "+error.message);
               return error;
           });

        }

    });

    

    document.querySelector("[type='reset']").addEventListener('click', function(){
        nome.value = "";
        email.value ="";
        nome.setAttribute("placeholder", "Nome completo");
        email.setAttribute("placeholder", "Email");
    });
    
}




window.onload = function(){
    corrigirCampos();
}













