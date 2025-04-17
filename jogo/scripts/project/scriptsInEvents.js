

const scriptsInEvents = {

	async FolhaFase2_Event15(runtime, localVars)
	{
		
	},

	async FolhaFase2_Event14_Act1(runtime, localVars)
	{
		let tempo = runtime.globalVars.tempoRestante;
		
		if (tempo === 10) {
		    const aviso = runtime.objects.txtAviso.getFirstInstance();
		
		    // Mostra o texto
		    aviso.text = "⚠️ Faltam 10 segundos!";
		
		    // Aguarda 3 segundos e depois limpa o texto
		    setTimeout(() => {
		        aviso.text = "";
		    }, 3000);
		}
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
