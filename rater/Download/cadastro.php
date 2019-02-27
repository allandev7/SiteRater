<html>
<head>
	<title>RATER</title>
</head>
<?php
	require('connect.php');

	//pegar as inforrmações do formulário via POST
	$nomeEmpresa = $_POST['nomeEmpresa'];
	$emailEmpresa = $_POST['emailEmpresa'];
	$cnpj = $_POST['cnpj'];
	$senha = $_POST['senha'];
	$senhaC = $_POST['senhaC'];
	

	//verificação dos campos
	if ($nomeEmpresa != "" && $emailEmpresa !="" && $senha!= "") {
		//verificação das condições de senha
		if (strlen($senha)>=8 && preg_match('/\d+/', $senha)>0) {
	
			//verificação se as senhas confere,
			if($senha == $senhaC){
				//INSERT no banco junto com verificação para tratamento de erros
				if (mysqli_query($con, "INSERT INTO `adm` (`nomeEmpresa`, `emailEmpresa`, `CNPJ`, `senha`, `	status`) VALUES ('$nomeEmpresa', '$emailEmpresa', '$cnpj', '$senha', 0);")) {

					//condições caso seja inserido

					//query para pegar ultimo id
					$query = mysqli_query($con,"SELECT LAST_INSERT_ID();");
					//resultado da query em tabela
					$resul = mysqli_fetch_array($query);

					//pegar id apartir da primeira e unica linha do resul, e já transforma-lo em md5
					$id = md5($resul[0]);
					//criar link com a variavel id
					$link= "http://localhost/rater/download/confirmar.php?id=$id";
					//enviar email com link de verificação
					mail($emailEmpresa, "CONFIRMAR EMAIL RATER", "clique neste link para confirmar o seu 	email ".$link);
					//avisar sobre a mensagem para o usuário
					print "<script>alert('Foi enviado uma mensagem de confirmação no seu email ');</script>"	;
					//voltar para a page down
   					print "<script>location.href='download.html';</script>";
				}else{
					//condições caso nao de o insert

					//alertar sobre erro e retornar para a pagina
					print "<script>alert('Erro no banco de dados');</script>";
   					print "<script>location.href='download.html';</script>";
				}
			}else{

				//condições caso as senhas não sejam iguais

				//alertar sobre erro e retornar para a pagina
				print "<script>alert('As senhas não conferem');</script>";
   				print "<script>location.href='download.html';</script>";
			}
		}else{
			//condições caso as senhas não possua os requisitos

			//alertar sobre erro e retornar para a pagina
			print "<script>alert('A senha deve contar com ao menos um número e no mínimo 8 caracteres');</script>";
   			print "<script>location.href='download.html';</script>";
		}
	}else{
		//condições caso os dados não foreem inseridos

		//alertar sobre erro e retornar para a pagina
		print "<script>alert('Informe todos os dados obrigatórios');</script>";
   		print "<script>location.href='download.html';</script>";
	}

?>
</html>