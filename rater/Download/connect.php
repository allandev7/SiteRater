<?php

	if(!$pdo = new PDO('mysql:host=localhost;dbname=rater', 'root', '')){
		echo "Erro ao conectar com o banco de dados";
	}
	$con = mysqli_connect('localhost', 'root', '');	
	mysqli_query($con, "SET NAME UTF-8");

?>