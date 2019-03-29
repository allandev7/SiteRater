<html>
<head>
	<title>RATER</title>
</head>
<?php

	require('connect.php');

	require_once 'azure/vendor/autoload.php';
	use WindowsAzure\Common\ServicesBuilder;
	use MicrosoftAzure\Storage\Common\ServiceException;
	use MicrosoftAzure\Storage\File\FileRestProxy;


	//pegar as inforrmações do formulário via POST
	$nomeEmpresa = $_POST['nomeEmpresa'];
	$emailEmpresa = $_POST['emailEmpresa'];
	$cnpj = $_POST['cnpj'];
	$imgEmpresa = $_FILES['imgEmpresa'];
	$senha = $_POST['senha'];
	$senhaC = $_POST['senhaC'];






	//pegar extensao da imagem
	$extensao = substr($imgEmpresa['name'], -4);
	//configurar novo nome do arquivo
	$nomeArquivo = md5(time().$imgEmpresa['size']).$extensao;
	//mover arquivo para
	//move_uploaded_file($imgEmpresa['tmp_name'], "imgUsuarios/$nomeArquivo");
	
	//string de conexao
	$conexaoAzureStr = 'DefaultEndpointsProtocol=https;AccountName=rater;AccountKey=hWdeapYU1cxuqzSFUx1vCfzHBAsz/AkgnU0L08fGJ/5W+56LJ2bUCaSB5IYM5WnJu8OlUulV1bO4iUvXo8yo8A==;EndpointSuffix=core.windows.net';

	//instanciando servico que fará vc upar os arquivos pro azure
	//$blobRestProxy = ServicesBuilder::getInstance()->createBlobService($conexaoAzureStr);
	
	
	//$jooj = ServicesBuilder::getInstance()->createFileService($conexaoAzureStr);

	
	try{
		$fileClient = FileRestProxy::createFileService($conexaoAzureStr)->createFile("rater/imagens", $imgEmpresa['tmp_name'], $imgEmpresa['size']);
	  //$fileClient->createFile("rater/imagens", $imgEmpresa['tmp_name'], 400000);	
      //  $jooj->createBlockBlob("rater/imagens", "aaa", $imgAzure);
	

	} catch(ServiceException $e){
        // Handle exception based on error codes and messages.
        // Error codes and messages are here:
        // http://msdn.microsoft.com/library/azure/dd179439.aspx
        $code = $e->getCode();
        $error_message = $e->getMessage();
        echo $code.": ".$error_message."<br />";
    }



	//verificação dos campos
	if ($nomeEmpresa != "" && $emailEmpresa !="" && $senha!= "") {
		//verificação das condições de senha
		if (strlen($senha)>=8 && preg_match('/\d+/', $senha)>0) {
	
			//verificação se as senhas confere,
			if($senha == $senhaC){
				//criptografia da senha
				$senha = md5($senhaC);
				//INSERT no banco junto com verificação para tratamento de erros
				if (mysqli_query($con, "INSERT INTO `empresa` (`ID`, `EMAIL`, `SENHA`, `NOME`, `FOTO`, `CNPJ`, `EMAIL_VALIDO`) VALUES (NULL, '$emailEmpresa', '$senha', '$nomeEmpresa', '$nomeArquivo', '$cnpj', '0');")) {

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
					print "<script>alert('Foi enviado uma mensagem de confirmação no seu email  ');</script>"	;
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