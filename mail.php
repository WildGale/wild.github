<?php

$recepient = "justguy1999@gmail.com";
$sitename = "WildGale";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nМыло: $email \nТема: $subject \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>