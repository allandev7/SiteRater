<!DOCTYPE html>
<html>
<head>
	<title>Alterar senha</title>
	<link rel="stylesheet" type="text/css" href="esqueciminhasenha.css">
</head>
<body>
	
	<div class="popup">
		<form class="formulario" method="post" action="#">
			<label class="lbl" >Nova senha: </label>
			<input class="txt" type="password" name="senha"><br><br>
			<label class="lbl" >Confirmar senha: </label>
			<input class="txt" type="password" name="csenha"><br><br>
			<input type="submit" class="btn" name="btnEnviar">
		</form>
	</div>


	<?php
		$id = $_GET['id'];
		if (isset($_POST['btnEnviar'])) {//verificar se apertou o botao
			$senha = $_POST['senha'];
			$csenha = $_POST['csenha'];

			if($senha == $csenha){
				//PARTE DO BANCO
				require("connect.php");
				$stmt = $pdo->prepare("UPDATE `empresa` SET `SENHA`= md5(:senha) WHERE md5(id) = :id");
				$stmt->bindvalue(':senha', $senha);
				$stmt->bindvalue(':id', $id);
				$run = $stmt->execute();
				print "<script>alert('A senha foi alterada com sucesso');</script>";
			}else{
				print "<script>alert('As senhas não conferem');</script>";
			}
		}
	?>
</body>
</html>