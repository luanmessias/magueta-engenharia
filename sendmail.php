<?php

//$to = "ricardo.pestana@maguetaengenharia.com.br";
$to = "luanmessias10@gmail.com";
$subject = "[SITE] - Formulário de contato";  

$from = $to;
$email_text = "";
$title = "Formulário de contato <br><br>";
$nome = "<strong>Nome:</strong> " . $_POST["name"] . "<br>";
$contato = "<strong>E-Mail:</strong> " . $_POST["email"] . "<br>";
$obs = "<strong>Observações:</strong> " . $_POST["message"];

if ($_POST["email"] != "") {
 $from = $_POST["email"];
}

//$email_text.= "Autor: ".$_POST["autor"]." - Menssagem: ".$_POST["message"];

$email_text.= $title . $nome . $contato . $obs;


$header = "From: $from\n" . "MIME-Version: 1.0\n" . "Content-type: text/html; charset=utf-8\n";

if (!mail($to, $subject, $email_text, $header)) {
  mail($to, $subject, $email_text);
}

header( 'Location: http://www.maguetaengenharia.com.br/enviada.html' ) ;
exit;

?>