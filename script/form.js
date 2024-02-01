const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const assunto = document.querySelector('#assunto')
const mensagem = document.querySelector('#mensagem')
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
let isValide = false



const reset = () => {
    const input = document.querySelector('form').elements
    Array.from(input).forEach(item => item.value='')
    nome.setAttribute('placeholder','nome')
    email.setAttribute('placeholder', 'email')
    assunto.setAttribute('placeholder', 'assunto')
    mensagem.setAttribute('placeholder', 'mensagem')
}


//request before send
const request = () => {
    const data = new FormData(document.forms[0])
    const caminho = document.forms[0].getAttribute('action')

    fetch(caminho, {
        method: document.forms[0].method,
        body: data,
        headers: {'Content-Type':'application/json'} // convert json
    }).then(response => {
        console.log(response)
        return response()
    }).then(data => {
        console.log(data)
    }).catch(error => {
        console.log(`Message: ${error}`)
    })
}

//validation inputs
const validation = () => {
    isValide = false
    if(!nome.value.trim()){
        nome.setAttribute('placeholder','favor informe seu nome')
        nome.setAttribute('style','outline: 2px solid red')
        return false
    }

    if(!email.value.match(regex) || !regex.test(email.value)){
        email.setAttribute('placeholder','email incorreto')
        email.setAttribute('style','outline: 2px solid red')
        return false
    }

    if(!assunto.value.trim()){
        assunto.setAttribute('placeholder','favor informe a mensagem')
        assunto.setAttribute('style','outline: 2px solid red')
        return false
    }

    if(!mensagem.value.trim()){
        mensagem.setAttribute('placeholder','favor informe a mensagem')
        mensagem.setAttribute('style','outline: 2px solid red')
        return false
    }

    //array items of the form
    Array.from(document.forms[0].elements).forEach(item => {
        if(item.value){
            item.setAttribute('style','outline: none')
            isValide = true
            console.log('enviado com sucesso')
        }

    })

    reset()
}


//button submit form
document.forms[0].addEventListener('submit', e => {
    e.preventDefault()
    validation()
    isValide ? request() : console.log('falha de validação')
})




/*
function removeBorder(nome, email, assunto, mensagem){
    nome = $("#nome"); email = $("#email"); 
    assunto = $("#assunto"); mensagem = $("#mensagem"); 
  
    $(nome).blur(function (e) {
        if($(this).val().trim()){
            $(this).css("border", "1px solid #ced4da");
        }
    });

    $(email).blur(function(e){
        if($(this).val().trim()){
            $(this).css("border", "1px solid #ced4da");
        }
    });

    $(assunto).blur(function(e){
        if($(this).val().trim()){
            $(this).css("border","1px solid #ced4da");
        }
    });

    $(mensagem).blur(function(e){
        if($(this).val().trim()){
            $(this).css("border","1px solid #ced4da");
        }
    });
    
}

//será usado em outras funções
function cleanInput(){
    $("input").css("border","1px solid #ced4da");
    $("textarea").css("border","1px solid #ced4da");
    $("#formulario").trigger('reset');
    $("#nome").attr('placeholder','informe seu nome');
    $("#email").attr('placeholder','informe seu email');
    $("#assunto").attr('placeholder','assunto');
    $("textarea").attr('placeholder','');
}

function trataErro(){
    var error = [];
    var nome = $("#nome"),
    email = $("#email"),
    assunto = $("#assunto"),
    mensagem = $("#mensagem");

    $("button:submit").click(function(e){
        if(!$(nome).val().trim()){
            error = "favor preencha o nome";
            $(nome).attr("placeholder", error);
            $(nome).css("border","2px solid red");
            return false;
        }
        
        if(!$(email).val().trim()){
            error = "favor preencha o email";
            $(email).attr("placeholder", error);
            $(email).css("border", "2px solid red");
            return false;
        }

        if(!$(assunto).val().trim()){
            error = "favor preencha o assunto";
            $(assunto).attr("placeholder", error);
            $(assunto).css("border", "2px solid red");
            return false;
        }

        if(!$(mensagem).val().trim()){
            error = "favor preencha a mensagem";
            $(mensagem).attr("placeholder", error);
            $(mensagem).css("border", "2px solid red");
            return false;
        }
      
    });

     mensagemEnvio();

}


function actionReset(){
    $("button:reset").click(function(){
        cleanInput();
    });
}



function mensagemEnvio(){
    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "formularios/form.php",
            data: $('#formulario').serialize(),
            dataType: "html",
        }).done(function(response){
            $("#alert").css({
                'font-size':'16px',
                'text-align':'center'
            });
            $("#alert").html(response);
            $("#alert").fadeIn('slow');
            setTimeout(function(){
                $("#alert").fadeOut('slow');
            }, 2000);
            cleanInput();
            
        }).fail(function(xhr, status, statusText, er){
            alert('xhr:'+xhr.status+
                '\nxhrStatus: '+xhr.statusText+
                '\nstatus: '+status+
                '\nstatusText: '+statusText);
                cleanInput();
        });
    })

}


$(document).ready(function(){
    var nome = $("#nome"),
    email = $("#email"),
    assunto = $("#assunto"),
    mensagem = $("#mensagem");


    removeBorder(nome, email, assunto, mensagem);
    trataErro();
    actionReset(); 
   
});

*/