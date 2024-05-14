let dia, mes, ano, hora, minutos, segundos;

var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[8]; 
	msg.volume = 1; // From 0 to 1
	msg.rate = 1; // From 0.1 to 10
	msg.pitch = 0; // From 0 to 2
	msg.lang = 'es';

// Monta data e hora
	
	function montaData()
	{
		const dataAtual = new Date();

		dia = String(dataAtual. getDate()). padStart(2, '0');
		mes = addZero(dataAtual.getMonth() + 1);
		ano = addZero(dataAtual.getFullYear());

		horas = addZero(dataAtual.getHours());
		minutos = addZero(dataAtual.getMinutes());
		segundos = addZero(dataAtual.getSeconds());

		document.getElementById('data').innerHTML = dia + "/" + mes + "/" + ano;
		document.getElementById('hora').innerHTML = horas + ":" + minutos + ":" + segundos;
	}
	
	function addZero(i)
	{
		if (i < 10) {i = "0" + i}
			return i;
	}

	
	// Movimenta o papel da senha para esquerda

	function movimento(duracao)
	{
		// posição final a esquerda

		var lfinal = -338;

		// valor da posição a esquerda do elemento
		var left 	= document.getElementById('papel').clientright;

		// função a ser chamada até chegar a posição informada

		function deslocamento()
		{

		// verificando se chegou ao ponto horizontal

			if (left > lfinal)
				{
					left--;    // movimenta para a esquerda		
					document.getElementById('papel').style.left = left + 'px';  // aplicando estilo no elemento
				}

			// interrompe o processo de deslocamento ao chegar ao destino

			if (left == lfinal)
			{
				clearInterval(id);
				msg.text = "Retire sua Senha";
				window.speechSynthesis.speak(msg);	
			}
		}
		// desloca o elemento até 10 segundos
		// aumentando o valor, vai demorar mais para chegar

		var id = setInterval(deslocamento, duracao);

	}