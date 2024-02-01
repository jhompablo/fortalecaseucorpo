
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const limpar = document.querySelector('input[type=reset]')
const enviar = document.forms[0]
const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/



const validacao = () => {
    if(nome.value.trim() == ''){
        nome.setAttribute('placeholder', 'favor informe o nome')
        return false
    }

    if(!regex.test(email.value.trim()) && !email.value.trim() == null){
        email.setAttribute('placeholder', 'e-mail incorreto')
        return false
    }

    if(email.value.trim() == ''){
        email.setAttribute('placeholder', 'favor preencha seu e-mail')
        return false
    }

}

enviar.addEventListener('submit', e => {
    e.preventDefault()
    validacao()
})

limpar.addEventListener('click', () => {
    document.forms[0].reset()
})  




/*


function inputCleanBorder(){
    $("#nome, #email").blur(function(e){
        if($(this).val().trim()){
            $(this).css({
                "box-shadow":"none",
                "border-color":"#80bdff"
            });
        }
    });
}



function inputValidation(){
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    $("button:submit").click(function(e){
        
        if(!$("#nome").val().trim()){
            $("#nome").attr("placeholder","favor informe seu nome");
            $("#nome").css({
                "border-color":"#d62a2a",
                "outline": 0,
                "box-shadow": "0 0 0 2pt #d62a2a"
            });
            return false;
        }

        if(!$("#email").val().trim()){
            $("#email").attr("placeholder","favor informe seu email");
            $("#email").css({
                "border-color":"#d62a2a",
                "outline":0,
                "box-shadow":"0 0 0 2pt #d62a2a"
            });
            return false;
        }

        if(!regex.test($("#email").val().trim())){
            $("#email").val("");
            $("#email").attr("placeholder","email incorreto!");
            $("#email").css({
                "border-color":"#d62a2a",
                "outline":0,
                "box-shadow":"0 0 0 2pt #d62a2a"
            });
            return false;
        }

    });
    
    submitForm();

}


function submitForm(){
    
    $("form").submit(function(e){
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "formularios/inscricao.php",
            data: $(this).serialize(),
            cache: false,
            dataType: "html"
        }).done(function(response){
            alert(response);
            $(".modal").addClass("modal-abrir");
            cleanInputs();
            window.location.href = "https://www.fortalecaseucorpo.com";
        }).fail(function(xhr, status, statusText){
            alert('xhr:'+xhr.status+
                '\nxhrStatus: '+xhr.statusText+
                '\nstatus: '+status+
                '\nstatusText: '+statusText);
                cleanInput();
        });    
    });
    
}



function resetForm(){
    $("button:reset").click(function(){
        cleanInputs();
    });
}

function cleanInputs(){
    $("input").val("");
    $("#nome, #email").css({
        "box-shadow":"none",
        "border-color":"#80bdff"
    });
    $("#nome").attr("placeholder","seu nome");
    $("#email").attr("placeholder","seu email");
}

$(document).ready(function(){
    inputValidation();
    inputCleanBorder();
    resetForm();
});

*/