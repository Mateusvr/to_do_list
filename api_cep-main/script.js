const findEstados = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        .then(response => response.json())
        .then(json => {
             //ordenar pelo atributo 'nome'
             json.sort((a, b) => (a.nome > b.nome) ? 1 : -1)

            console.log(json);
            let estados = "";
            json.forEach(estado =>estados = estados +  `<option value ="${estado.sigla}">${estado.nome}</option>`);

            // console.log(estados)
            let uf = document.getElementById('uf')
            uf.innerHTML = estados
        })
}
 findEstados()

const findByCep = (input) => {
    console.log(input.value)
    fetch(`https://viacep.com.br/ws/${input.value}/json/`)
        .then(response => response.json())
        .then(async json => {

            console.log(json)
            let logradouro = document.getElementById('logradouro')
            logradouro.value = json.logradouro

            let bairro = document.getElementById('bairro')
            bairro.value = json.bairro

            uf.value = json.uf
            await findCidades(uf.value)

            let cidade = document.getElementById('municipio')
            cidade.value = json.localidade

            //pega o elemento e o cursor mantém o foco nele
            document.getElementById('numero').focus();
        }
        )
}

const findCidades = async (uf) => {
        await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(response => response.json())
        .then(json => {
            let municipios = "";
            json.forEach(municipio => municipios = municipios +  `<option value ="${municipio.nome}">${municipio.nome}</option>`)

            let cidades = document.getElementById('municipio');
            cidades.innerHTML = municipios

        })
}