<?php

$recepient = trim($_POST["form_email"]);
$sitename = "Tovxin";
$phone = trim($_POST["form_phone"]);


$massage = "Спасибо, регистрация завершена";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$success = mail($recepient, $pagetitle, $massage, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
var_dump($success);
return $success;
