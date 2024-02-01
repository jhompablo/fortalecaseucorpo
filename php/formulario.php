<?php
    header("Content-type: application/json; charset-utf=8");

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $destino = "contato@fortalecaseucorpo.com";
    $assunto = "inscrição";
    $mensagem = "realizou a inscrição";

    $header  = "From: ".$nome."\r\n";
    $header .= "Reply-To: ".$email."\r\n";
    $header .= "X-Mailer: PHP/".phpversion();

    $enviar = mail($destino, $assunto, $mensagem, $header);

    if($enviar){
        $mensagem = "Formulário enviado com sucesso!";
    }else{
        $mensagem = "Formulário não foi enviado!";
    }

    echo $mensagem;

}

?>