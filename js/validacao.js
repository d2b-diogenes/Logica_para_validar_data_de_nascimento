
// Esse arquivo foi criado com Referência à Aula 02 - Vídeo 2

// É criada uma constante 'dataNascimento' para receber a Entrada, o Input do formulário.
const dataNascimento = document.querySelector('#nascimento')
    /*
    A constante 'dataNascimento' é criada para receber a Entrada, o Input do formulário.
    'document.querySelector('#nascimento')' - Retornar do documento o input correspondente ao seletor indicado dentro dos parênteses 
    
    Document.querySelector()
    'Document.querySelector' - Busca dentro do documento o seletor indicado dentro dos parênteses.
    '()' - Dentro dos parênteses é indicado o seletor correspondente ao input que se quer retorar do documento. No caso, é passado o ID.
    Para indicar um ID é usado o '#'.

    FONTE: Tópico: Document.querySelector() https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector
    FONTE: Tópico: Document.querySelectorAll() https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll
    */

/*Funções
    Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de 
    JavaScript - um conjunto de instruções que executa um tarefa ou calcula um valor.
    Para usar uma função, você deve defini-la em um lugar no escopo do qual você quiser chamá-la.
    
    Declarando um função
        Consiste no uso da palavra 'function' seguida por:
        Nome da função, Lista de argumentos para a função, entre parênteses e separados por vírgulas.
        Declarações JavaScript que definem a função, entre chaves {}
        Por exemplo:
        function square(numero) {
            return numero * numero;
        }

        A declaração de função faz hoisting.
        Hoisting - é o deslocamento da declaração de todas as variáveis e funções para o topo do código. 
        A mudança (içamento) ocorre durante a fase de Criação do Contexto de Execução que move as declarações
        de variáveis e de funções para o início do script.

        FONTE: https://ricardo-reis.medium.com/hoisting-javascript-aa2642bd715e#:~:text=Hoisting%20JavaScript%20%C3%A9%20o%20deslocamento,para%20o%20in%C3%ADcio%20do%20script.
        FONTE: https://www.alura.com.br/artigos/hoisting-no-javascript

    
    Expressão de função (função anônima)
        Funções também podem ser criadas por uma expressão de função. Tal função pode ser anônima; ele não tem que ter um nome.
        Por exemplo, a função square poderia ter sido definida como:
        var square = function(numero) {return numero * numero};
        var x = square(4) //x recebe o valor 16

        No entanto, um nome pode ser fornecido com uma expressão de função e pode ser utilizado no interior 
        da função para se referir a si mesma, ou em um debugger para identificar a função em stack traces:
            var fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)}; // O nome da expressão 'fac' fui usada dentro da própria expressão.
            console.log(fatorial(3));
                ???Entender melhor o que há dentro do bloco de instruções {}???

        As expressões de função são convenientes ao passar uma função como um argumento para outra função. O exemplo a seguir mostra uma 
        função map sendo definida e, em seguida, chamada com uma função anônima como seu primeiro parâmetro:
            function map(f,a) {
                var result = []; // Cria um novo Array
                var i; // Criou a variável i 
                for (i = 0; i != a.length; i++) // Faz um laço usando o i como um contador, a condição é: enquando a variável 'i' for diferente da quantidade da lista dentro do objeto 'a', o laço será executado e fará o loop. A cada loop será acrescido 1 ao valor da variável 'i'.
                    result[i] = f(a[i]); // A cada loop será criada uma posição e nessa possição será adicionado o resultado da função 'f'. A função 'f' pega pega o valor de 'a', que será definico pelo valor do 'i' em um dado momento do laço, e iria multiplicar esse valor por ele mesmo 2 vezes (x*x*x) e irá guardar esse valor na posição do 'i' daquele dado momento do laço.
                return result; // Imprime o 'result'
            }

            map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
            a = [0, 1, 2, 5, 10]
            1º laço:
                result[0] = f(a[0])
                function(0) {return 0 * 0 * 0}
                result[0] = 0
            result = [0]
            .
            .
            .
            4º laço:
                result[3] = f(a[3])
                function(5) {return 5 * 5 * 5}
                result[3] = 150
            result = [0, 1, 8, 150]

            5º laço:
                result[4] = f(a[4])
                function(10) {return 10 * 10 * 10}
                result[4] = 1000

            result = [0, 1, 8, 150, 1000]

            Em JavaScript, uma função pode ser definida com base numa condição. Por exemplo, a seguinte definição de 
            função define minhaFuncao somente se num é igual a 0:
                var minhaFuncao; // Criou uma variável
                if (num == 0){ // Se essa condição for satisfeita, então será executada a instrução
                    minhaFuncao = function(objeto) { // a instução sendo executada, a variável irá se transformar em uma função que tem 'objeto' como argumento.
                        objeto.make = "Toyota" // Bloco de instrução da função
                    }
                }
    Arrow functions
         Arrow functions é uma abreviação da sintaxe para definir expressão de função.
        
        Expressão de função:
                let x = 20;
                    y = 10;
                let result = add(x,y);
                console.log(result);

                var add = function (x,y) {
                    return x + y;
                }
        
         Arrow functions:
                let x = 20;
                    y = 10;
                let result = add(x,y);
                console.log(result);

                var add = (x,y) => x + y;             
                

    FONTE: Tópico: Funções https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
Ref: Aula 02 - Vídeo 2
*/

const dataNascimento = document.querySelector('#nascimento') //Atribui o seletor '#nascimento', proveniente do documento, à constante 'dataNascimento' 

dataNascimento.addEventListener('blur', (evento) => {
    /* o 'addEventListener' adiciona o evento 'blur' ao argumento 'evento'
        'blur' - quando se perde o foco do campo-. 
        Quando ocorre o evento 'blur', ele é adicionado ao argumento 'evento' e executa a função anônima levando como argumento o 'evento'. 
        A função anônima executa a função 'validadeDataNascimento(evento.target)'
    */
    /* Element.addEventListener()

    elemento.addEventListener('evento', função);

    'dataNascimento.addEventListener('blur', (evento) => {'
        'dataNascimento' - Constante 'dataNascimento' é o elemento que será escutado para que se possa extrair o evento 'blur'.
        '.addEventListener' - É um 'escutador' de eventos que quando ocorrer um evento ele adiciona esse evento a um objeto.
        '('blur',' - É o evento que se quer escutar da constante 'dataNascimento'.
        '(evento)' - O termo 'evento' é um objeto. Esse objeto irá receber o evento 'blur'.
        Resumo: O '.addEventListener' escuta quando ocorre o evento 'blur' na contante 'dataNascimento' e adiciona esse evento 'blur' ao objeto 'evento'.

        1ª OBS.: Nesse momento 'evento' é um objeto que recebe o evento 'blur'.

    Element.addEventListener()

        É um método utilizado detro de um documento JavaScript, documento separado do HTML e CSS, para adicionar um evento a um elemento.
        addEventListener() registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um documento,
        o documento em si, uma janela, ou um XMLHttpRequest.

        Para registrar mais de uma espera de evento como alvo, chame addEventListener() para o mesmo alvo mas 
        com diferentes tipos de evento ou captura de parâmetros.

        alvo.addEventListener(type,listener[, options]);
        type - Uma linha de texto que representa o tipo de evento a ser esperado.
        listener - O objeto que recebe uma notificação quando um evento do tipo especificado ocorre. Esse objeto precisa implementar a interface do EventListener,
        ou simplesmente executar uma função JavaScript.

        FONTE: Tópico: Element.addEventListener() https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
            https://cibersistemas.pt/tecnologia/o-metodo-addeventlistener-codigo-de-exemplo-do-javascript-event-listener/    

    Ref: Aula 02 - Vídeo 2
    */
    /* Event blur
        O evento blur é acionado quando um elemento perde foco. A diferença principal entre este evento e focusout é que apenas o segundo 'borbulha'.

        FONTE: Tópico: blur (event) https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener

        Element: focusout event
            The focusout event fires when an element is about to lose focus. The main difference between this event and blur is that focusout bubbles while blur does not.
            FONTE: Tópico: focusout (evento) https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event
    Ref: Aula 02 - Vídeo 2
    */
    /* (evento) => {
        '(evento) => {}'
            Toda essa expressão é uma função anônima. Quando o evento 'blur' ocorre, ela será executada.
            O termo 'evento' é um objeto que recebeu o evento 'blur' da constante 'dataNascimento'.
            Por conta desse objeto 'evento' estar entre parênteses, ele é passado como argumento na função. E esse argumento será usado dentro do 
            bloco de instruções pela função 'validaDataNascimento'.

            2ª OBS.: Nesse momento o objeto 'evento' está sendo passado como argumento da função anônima.
        
        Funções
            Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de 
            JavaScript - um conjunto de instruções que executa um tarefa ou calcula um valor.
            Para usar uma função, você deve defini-la em um lugar no escopo do qual você quiser chamá-la.

            Existem 2 tipos de funções:
            1 - Declarando uma função
            2 - Expressão de função (função anônima)
        
        Expressão de função (função anônima)
            Funções também podem ser criadas por uma expressão de função. Tal função pode ser anônima; ele não tem que ter um nome.

            FONTE: Tópico: Funções https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
    Ref: Aula 02 - Vídeo 2
    */
    validaDataNascimento(evento.target) //A função 'validadeDataNascimento'é executado e leva dentro do argumento o valor do 'evento.target'
    /* Event.target
        '(evento.target)'
            Uma referência ao objeto que enviou o evento. É diferente de event.currentTarget quando o manipulador de eventos é chamado
            durante a fase de borbulhagem ou captura do evento.

            3ª OBS.: Nesse momento o objeto 'evento' está sendo levada pela função 'validaDataNascimento' como argumento juntamente com o '.target'.

            FONTE: Tópico: Event.target https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
    Ref: Aula 02 - Vídeo 2
    */
})

function validaDataNascimento (input) { //Essa função irá validar a data de nascimento recebida. O 'input' recebe o valor do 'evento.target'
    const dataRecebida = new Date (input.value)  //O valor do 'input' é uma string e será transformada em um formato valido de data.
        /*
        Ref: Aula 02 - Vídeo 2
        Há várias formas de se criar um objeto Date:
            var today = new Date (); - Irá pegar do sistema a data de hoje.
            var birthday = new Date ("December 17, 1995 03:24:00"); - É criada uma data específica com horário, minutos e segundos.
            var birthday = new Date ("1995-12-17T03:24:00"); É criada uma data específica com horário, minutos e segundos.
            var birthday = new Date (1995,11,17); - É criada uma data específica com horário, minutos e segundos. E nesse formato os meses vão de 0 (Janeiro) até 11 (Dezembro) e não é informado o horário
            var birthday = new Date (1995,11,17,3,24,0);- É criada uma data específica com horário, minutos e segundos. E nesse formato os meses vão de 0 (Janeiro) até 11 (Dezembro) e também é informado o horário
            FONTE: Tópico: DATE https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

        Analisando o (input.value)
            O método object.values() retorna um array ccujos elementos são os valores das propriedades enumeradas encontradas no objeto.
            Colocando o input.value irá pegar o valor do input e não o input inteiro.
            FONTE: Tópico: Object.values() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
        */   
    let mensagem = '' //Uma string vazia indica que não há um erro/uma mensagem de erro na validação no campo do argumento 'input'.

    if(!maiorQue18(dataRecebida)) { //Chama a função 'maiorQue18' que irá fazer a verificação das datas levando dentro do argumento o valor da constante 'dataRecebida'       

        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.' //O atributo 'mensagem' passando a ter contéudo, não sendo mais uma string vazia, passará a indicar que há uma mensagem de erro/um erro na validação.
    }
        /*Essa condição espera um valor 'True'            
            Essa condição espera um valor 'True' (maior de 18 anos) ou 'False' (menor de 18 anos)
            No caso da pessoa ser menor de 18 anos, a condição tem que ser executada para que a mensagem sejá altera e mostrada para o usuário.

            O retorno que vem da função 'maiorQue18(dataRecebida)' para o caso de ser menor de 18 anos é 'False', 
            mas o IF só irá ser executado se dentro da condição dele der 'True'.

            Para executar o IF será necessário transformar o 'False' em 'True' e para isso é usado o '!'.
            O '!' irá NEGAR o retorno da função 'maiorQue18(dataRecebida)', onde irá tornar o 'false' em 'true'.
            A condição dando 'true' o IF será executado e será atribuida uma mensagem ao atributo 'mensagem'.
        */ 

    input.setCustomValidity(mensagem)
    /*
    Função do input setCustomValidity()` irá definir uma mensagem de erro customizada
    Irá validar e customizar uma mensagem para o erro.
    
    setCustomValidity()
    The HTMLSelectElement.setCustomValidity() method sets the custom validity message for the selection element to the specified message. 
    Use the empty string to indicate that the element does not have a custom validity error.

    Lógica da criação do setCustomValidity()
    Há 3 estágios:
    1º estágio - É criada um atributo 'mensagem' que irá conter uma string vazia. 
        Uma string vazia indica que não há um erro/uma mensagem de erro na validação no campo do argumento 'input'.
    2º estágio - É criada uma condição. Caso essa condição retorne verdadeira, ela irá atribuir um conteúdo ao atributo 'mensagem'. 
        O atributo 'mensagem' passando a ter contéudo, não sendo mais uma string vazia, passará a indicar que há uma mensagem de erro/um erro na validação.
    3º estágio - O método input.setCustomValidity(mensagem) irá configurar uma validação customizada no argumento 'input' chamando o atributo 'mensagem'  
    */  
}

function maiorQue18(data) { //Função que irá fazer a comparação das datas
    const dataAtual = new Date() // Para obter automaticamente a data de hoje é só deixar os parenteses sem nenhum valor.

    /*Para fazer a comparação
        É necessário pegar a data recebida do input, 'data', e somar com o Ano + 18.
        O JS permite que comparações entre datas, se são maiores, menores ou iguais.
    Ref: Aula 02 - Vídeo 2
    */
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()) // 'data' é o argumento trazida pela função. 'data' é o valor da 'dataRecebida' do input. A constante 'dataMais18' irá receber a soma de 18 anos ao ano da 'dataRecebida'.
        /*É criada a constante 'dataMais18'
            É criada a constante 'dataMais18' para receber a soma da 'data' + 18 anos.
            'new Date' é um construtor de datas. ele irá desmenbrar o ano para somar a ele 18 anos e depois irá recompor a data com ano, mês e dia.
            Dentro do parenteses deve ser colocada a expressão no formato que o JS espera, pois somente nesse formato que será possível somar 18 anos ao ano trazido pelo argumento 'data'.
            
            Date.prototype.getUTC
            O método getUTCFullYear() retorna o ano na data indicada de acordo com o horário universal.
            FONTE: Tópico: Date.prototype.getUTCFullYear() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
            

            A função getUTCMonth() retorna o mês da data especificada de acordo com o horário universal, como um valor iniciado em zero (aonde zero indica o primeiro mês do ano).
            FONTE: Tópico: Date.prototype.getUTCMonth() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth


            O método getUTCDate() retorna o dia (data) do mês na data especificada de acordo com o horário universal.
            FONTE: Tópico: Date.prototype.getUTCDate() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate

            'const dataMais18' - Cria a constante para receber a nova data, data recebida + 18 anos.
            'new Date(' - Função que vai criar a nova data. 
            '(data.getUTCFullYear() + 18' - Para poder somar os 18 anos ao ano trazido pelo argumento 'data' é preciso pegar o ano usando o getUTCFullYear().
            Como está sendo criada a data, então preciso compor com o restante da data:
            'data.getUTCMonth()' - traz o argumento o mês.
            'data.getUTCDate())' - traz o argumento o dia.
        Ref: Aula 02 - Vídeo 2
        */
    
    return dataMais18 <= dataAtual
    /*A condição:
    Irá retornar TRUE, a pessoa é MAIOR de idade - 'dataMais18' é <= MENOR.
    Irá retornar FALSE, a pessoa é MENOR de idade -  'dataMais18' é > MAIOR.

    Irá retornar o valor da verificação: se a constante 'dataMais18' é MENOR ou igual a 'dataAtual'
    Se eu somo a data de nascimento + 18 anos, comparo com a data atual e dá menor ou igual, é pq a pessoa é maior de 18 anos, pois a pessoa
    já completou 18 anos antes da data atual.
    */
}
