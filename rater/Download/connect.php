<?php

	if(!$con = mysqli_connect('localhost', 'root', '')){
		echo "Erro ao conectar";
	}
	if(!mysqli_select_db($con, 'RATER')){
		echo "Erro ao selecionar db";
	}

	mysqli_query($con, "SET NAME UTF-8");

?>