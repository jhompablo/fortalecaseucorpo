<?php

header('Content-type: application/json; charset=utf-8');
ob_clean();

if(isset($_POST)){
    // variaveis
    // $nome = (isset($_POST["nome"])) ? $_POST["nome"]:"";
    // $email = (isset($_POST["email"])) ? $_POST["email"]:"";
    // $assunto = (isset($_POST["assunto"])) ? $_POST["assunto"]:"";
    // $mensagem = (isset($_POST["mensagem"])) ? $_POST["mensagem"]:"";

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $assunto = $_POST["assunto"];
    $mensagem = $_POST["mensagem"];


   // $destino = 'contato@fortalecaseucorpo.com';
    $destino = 'jhomrsantos@gmail.com'
    $header = 'From: '.$nome."\r\n".
                'Reply-To: '.$email."\r\n".
                'X-Mailer: PHP/'.phpversion();

    $enviar = mail($destino, $assunto, $mensagem, $header);

    if($enviar){
        $retorno = 'mensagem enviada com sucesso!';
        // $retorno = array('sucesso' => 'mensagem enviada com sucesso!');
        // $retorno = array('success', 'mensagem','mensagem enviada com sucesso!');
        // echo {'status'=>'success', 'mensagem'=>'mensagem foi enviada com sucesso'}

    }else{
        $retorno = 'mensagem não foi enviada, favor verificar!';
        // echo '{"status": "0", "mensagem":"Mensagem não foi enviada!"}';
        // $retorno = array('erro' => 'mensagem não foi enviada!');
        // $retorno = array('error', 'mensagem','mensagem não foi enviada!');
        // echo {'status'=>'error', 'mensagem'=>'mensagem não foi enviada com sucesso'}

    }
    echo $retorno;

}

    
?>