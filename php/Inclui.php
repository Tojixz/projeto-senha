<?php

	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	date_default_timezone_set('America/Sao_Paulo');	
	
	include('ConexaoSenha.php'); 
	
	$data = new DateTime(); 
	
    $sdata = $data->format('Y-m-d');

   
    $pass = $_GET['email'];
	$name = $_GET['senha'];

	try 
	{ 
		// Grava banco de dados
		
		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $ , $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));		
		
        $query = "INSERT INTO tb01_login ( tb01_Usuário, tb01_Senha) VALUES ('$email', '$senha')";
				  
		$grava = $conecta->prepare($query);
		$grava->execute(array()); 
				
	} 
	catch(PDOException $e) 
	{ 
		echo('Deu erro: ' . $e->getMessage()); 
	}
 
?>
