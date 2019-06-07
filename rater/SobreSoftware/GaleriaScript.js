
		var y = 1;
		var t =1;
		$(".btnR").click(
			function(){
				if(y<=13){
					$('#imgGaleria').attr('src', 'imagenstela/'+ (y= y+1) +'.png');
				}else{
					$('#imgGaleria').attr('src', 'imagenstela/'+ (y= y-13) +'.png');
				}

				t=y;

				if (t == 1) {
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Login");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Tela inicial do aplicativo, nela deverão" +
						"ser inseridos o nome e a senha dos usuários cadastrados no software para.");

				}else if(t==2){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Menu do Entrevistador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Tela inicial do aplicativo para os usuários comuns (entrevistadores), onde os mesmos terão acesso às opções: “Nova Entrevista”, “Gerenciar Entrevistas”, “Critérios de Avaliação” e “Perfil”.");

				}else if(t==3){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Nova Entrevista");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Função acessada ao clicar no botão “Nova entrevista” localizado no menu, para iniciar a entrevista o entrevistador deve inserir as informações do entrevistado e prosseguir.");

				}else if(t==4){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Entrevista em Andamento");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Para avaliar o entrevistado, o entrevistador deve percorrer a página marcando as “checkboxes” correspondentes aos critérios de avaliação caso o mesmo os apresente ou os deixando em branco caso o contrário. Ele também poderá utilizar o espaço disponível para fazer comentários.");

				}else if(t==6){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Dados da Entrevista");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Após o término da entrevista, os dados serão dispostos ao entrevistador para uma verificação final(caso a entrevista esteja em espera). Após a confirmação, os dados serão salvos no banco de dados da empresa e automaticamente enviados para o e-mail do entrevistado.");

				}else if(t==7){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Gerenciar Entrevistas");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Tela acessada ao clicar na terceira opção do menu do entrevistador, aqui estão dispostos a quantidade de entrevistas efetuadas, candidatos aprovados e reprovados e a lista de entrevistas.");

				}else if(t==8){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Definir Critérios de Avaliação");
					$('.textImgs').hide().delay("15").fadeIn("slow").text(" A tela será acessada através do quarto botão do menu do entrevistador, aqui poderão ser definidos os critérios de avaliação para cada cargo cadastrados pelo entrevistador. Um novo critério poderá ser adicionado através do botão “Novo Critério”, um critério já existente poderá ser deletado através do botão “Deletar” e seus nomes poderão ser alterados ao clicar sobre os mesmos. Cada novo critério criado irá gerar mais uma “checkbox” e caixa de texto na página de entrevista.");

				}else if(t==9){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Visualizar Perfil do Entrevistador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("A tela será acessada ao clicar na foto de perfil do entrevistador, nela serão mostradas as informações básicas do dono da conta e um botão para ir direto à lista de entrevistas.");

				}else if(t==10){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Menu do Administrador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Será a tela inicial do usuário superior (administrador), nela estarão dispostas as mesmas opções do Menu do Entrevistador, porém com alguns adendos: A opção de gerenciar entrevistadores, cadastrar novo cargo e de gerenciar as informações da própria empresa.");

				}else if(t==11){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Gerenciar Entrevistadores");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("A tela será acessada através da quarta opção do menu do administrador, nela estará à mostra a quantidade atual de entrevistadores e uma lista contendo os mesmos.");

				}else if(t==12){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Visualizar Informações do Entrevistador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("A tela será acessada através de um double click sob entrevistador selecionado, nela estarão dispostas as informações básicas do entrevistador selecionado, assim como seu número de entrevistas efetuadas e um botão para acessar a lista de entrevistas do mesmo. O administrador poderá não somente checar o progresso do entrevistador e suas informações básicas como também poderá alterá-las. ");
				}else if(t==13){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Cadastrar novo entrevistador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Tala onde será possivel cadastrar um novo entrevistador e preenchendo os campos obrigatorios.");
				}else if(t==14){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Gerenciar Dados do Administrador e da Empresa");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("A tela será acessada ao clicar na foto de perfil do administrador, aqui duas opções serão exibidas: “Informações do Administrador” e ”Informações da Empresa”.");
				}


			}
		);



		$(".btnL").click(
			function(){
							if(y>1){
								$('#imgGaleria').attr('src', 'imagenstela/'+ (y= y-1) +'.png');
							}else{
								$('#imgGaleria').attr('src', 'imagenstela/'+ (y= y+13) +'.png');
							}

							t=y;

				if (t == 1) {
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Login");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Tela inicial do aplicativo, nela deverão" +
						"ser inseridos o nome e a senha dos usuários cadastrados no software para.");

				}else if(t==2){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Menu do Entrevistador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Tela inicial do aplicativo para os usuários comuns (entrevistadores), onde os mesmos terão acesso às opções: “Nova Entrevista”, “Gerenciar Entrevistas”, “Critérios de Avaliação” e “Perfil”.");

				}else if(t==3){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Nova Entrevista");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Função acessada ao clicar no botão “Nova entrevista” localizado no menu, para iniciar a entrevista o entrevistador deve inserir as informações do entrevistado e prosseguir.");

				}else if(t==4){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Entrevista em Andamento");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Para avaliar o entrevistado, o entrevistador deve percorrer a página marcando as “checkboxes” correspondentes aos critérios de avaliação caso o mesmo os apresente ou os deixando em branco caso o contrário. Ele também poderá utilizar o espaço disponível para fazer comentários.");

				}else if(t==6){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Dados da Entrevista");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Após o término da entrevista, os dados serão dispostos ao entrevistador para uma verificação final(caso a entrevista esteja em espera). Após a confirmação, os dados serão salvos no banco de dados da empresa e automaticamente enviados para o e-mail do entrevistado.");

				}else if(t==7){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Gerenciar Entrevistas");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Tela acessada ao clicar na terceira opção do menu do entrevistador, aqui estão dispostos a quantidade de entrevistas efetuadas, candidatos aprovados e reprovados e a lista de entrevistas.");

				}else if(t==8){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Definir Critérios de Avaliação");
					$('.textImgs').hide().delay("15").fadeIn("slow").text(" A tela será acessada através do quarto botão do menu do entrevistador, aqui poderão ser definidos os critérios de avaliação para cada cargo cadastrados pelo entrevistador. Um novo critério poderá ser adicionado através do botão “Novo Critério”, um critério já existente poderá ser deletado através do botão “Deletar” e seus nomes poderão ser alterados ao clicar sobre os mesmos. Cada novo critério criado irá gerar mais uma “checkbox” e caixa de texto na página de entrevista.");

				}else if(t==9){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Visualizar Perfil do Entrevistador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("A tela será acessada ao clicar na foto de perfil do entrevistador, nela serão mostradas as informações básicas do dono da conta e um botão para ir direto à lista de entrevistas.");

				}else if(t==10){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Menu do Administrador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Será a tela inicial do usuário superior (administrador), nela estarão dispostas as mesmas opções do Menu do Entrevistador, porém com alguns adendos: A opção de gerenciar entrevistadores, cadastrar novo cargo e de gerenciar as informações da própria empresa.");

				}else if(t==11){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Gerenciar Entrevistadores");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("A tela será acessada através da quarta opção do menu do administrador, nela estará à mostra a quantidade atual de entrevistadores e uma lista contendo os mesmos.");

				}else if(t==12){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Visualizar Informações do Entrevistador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("A tela será acessada através de um double click sob entrevistador selecionado, nela estarão dispostas as informações básicas do entrevistador selecionado, assim como seu número de entrevistas efetuadas e um botão para acessar a lista de entrevistas do mesmo. O administrador poderá não somente checar o progresso do entrevistador e suas informações básicas como também poderá alterá-las. ");
				}else if(t==13){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Cadastrar novo entrevistador");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("Tala onde será possivel cadastrar um novo entrevistador e preenchendo os campos obrigatorios.");
				}else if(t==14){
					$('.tituloImgs').hide().delay("15").fadeIn("slow").text("Gerenciar Dados do Administrador e da Empresa");
					$('.textImgs').hide().delay("15").fadeIn("slow").text("A tela será acessada ao clicar na foto de perfil do administrador, aqui duas opções serão exibidas: “Informações do Administrador” e ”Informações da Empresa”.");
				}

						}

					);
