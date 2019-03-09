<?php
require("connect.php");

//pegar id do link
$id = $_GET['id'];
	
	//se o valor do id nao for vazio
	if (!empty($id)) {
		//executar update considerando que o MD5(id) seja igual ao GET
		mysqli_query($con, "UPDATE `adm` SET `status`= 1 WHERE MD5(id) = '$id' ");
		// alerta de email confirmado
		echo "<script> alert('Email confirmado com sucesso');</script>";
		print "<script>location.href='download.html';</script>";
	}else{
		//condições caso o id seja vazio

		//alertar sobre erro e retornar para a pagina
		echo "<script> alert('Não foi possivel confirmar o email, tente novamente mais tarde');</script>";
	}

?>