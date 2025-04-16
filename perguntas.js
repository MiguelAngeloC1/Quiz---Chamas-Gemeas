const perguntas = [
  {
    pergunta: "Qual é o rio mais longo do mundo?",
    alternativas: ["Nilo", "Amazonas", "Yangtzé", "Mississippi"],
    correta: 1
  },
  {
    pergunta: "Quem foi o primeiro presidente do Brasil?",
    alternativas: ["Getúlio Vargas", "Deodoro da Fonseca", "Floriano Peixoto", "Juscelino Kubitschek"],
    correta: 1
  },
  {
    pergunta: "Em que ano foi proclamada a independência do Brasil?",
    alternativas: ["1820", "1822", "1824", "1825"],
    correta: 1
  },
  {
    pergunta: "Qual é a capital da França?",
    alternativas: ["Madrid", "Berlim", "Paris", "Roma"],
    correta: 2
  },
  {
    pergunta: "Qual é o maior continente?",
    alternativas: ["África", "América", "Ásia", "Europa"],
    correta: 2
  },
  {
    "pergunta": "Qual é o rio mais longo do mundo?",
    "alternativas": ["Nilo", "Amazonas", "Yangtzé", "Mississippi"],
    "correta": 1
  },
  {
    "pergunta": "Quantos lados tem um hexágono?",
    "alternativas": ["5", "6", "7", "8"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o maior oceano da Terra?",
    "alternativas": ["Atlântico", "Índico", "Ártico", "Pacífico"],
    "correta": 3
  },
  {
    "pergunta": "Quem pintou o teto da Capela Sistina?",
    "alternativas": ["Da Vinci", "Michelangelo", "Raphael", "Donatello"],
    "correta": 1
  },
  {
    "pergunta": "Qual o elemento químico representado por 'O'?",
    "alternativas": ["Ouro", "Oxigênio", "Prata", "Ferro"],
    "correta": 1
  },
  {
    "pergunta": "Qual planeta é o mais próximo do Sol?",
    "alternativas": ["Terra", "Marte", "Vênus", "Mercúrio"],
    "correta": 3
  },
  {
    "pergunta": "Quem foi o primeiro homem a pisar na Lua?",
    "alternativas": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    "correta": 1
  },
  {
    "pergunta": "Qual é a capital do Canadá?",
    "alternativas": ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    "correta": 1
  },
  {
    "pergunta": "Quem escreveu 'Dom Quixote'?",
    "alternativas": ["Miguel de Cervantes", "Shakespeare", "Camões", "Victor Hugo"],
    "correta": 0
  },
  {
    "pergunta": "Em que ano terminou a Segunda Guerra Mundial?",
    "alternativas": ["1943", "1944", "1945", "1946"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a moeda oficial do Japão?",
    "alternativas": ["Yen", "Won", "Renminbi", "Dólar"],
    "correta": 0
  },
  {
    "pergunta": "Quem foi Albert Einstein?",
    "alternativas": ["Pintor", "Físico", "Cantor", "Engenheiro"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o idioma mais falado no mundo?",
    "alternativas": ["Inglês", "Espanhol", "Chinês", "Hindi"],
    "correta": 2
  },
  {
    "pergunta": "Em que continente fica o Egito?",
    "alternativas": ["Ásia", "Europa", "África", "América"],
    "correta": 2
  },
  {
    "pergunta": "Qual instrumento mede terremotos?",
    "alternativas": ["Termômetro", "Barômetro", "Sismógrafo", "Anemômetro"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o símbolo químico do ferro?",
    "alternativas": ["Fe", "Ir", "Fr", "F"],
    "correta": 0
  },
  {
    "pergunta": "Quem escreveu 'O Pequeno Príncipe'?",
    "alternativas": ["Victor Hugo", "Saint-Exupéry", "J.K. Rowling", "Machado de Assis"],
    "correta": 1
  },
  {
    "pergunta": "Qual o maior país do mundo em extensão territorial?",
    "alternativas": ["Canadá", "China", "Estados Unidos", "Rússia"],
    "correta": 3
  },
  {
    "pergunta": "O que é H2O?",
    "alternativas": ["Ácido", "Gás carbônico", "Água", "Hidrogênio"],
    "correta": 2
  },
  {
    "pergunta": "Quem pintou a Mona Lisa?",
    "alternativas": ["Michelangelo", "Da Vinci", "Van Gogh", "Rembrandt"],
    "correta": 1
  },
  {
    "pergunta": "Quantos continentes existem?",
    "alternativas": ["5", "6", "7", "8"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a capital da Austrália?",
    "alternativas": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "correta": 2
  },
  {
    "pergunta": "Qual a montanha mais alta do mundo?",
    "alternativas": ["Everest", "K2", "Kilimanjaro", "Aconcágua"],
    "correta": 0
  },
  {
    "pergunta": "O que é um mamífero?",
    "alternativas": ["Animal com asas", "Animal que põe ovos", "Animal que amamenta", "Animal marinho"],
    "correta": 2
  },
  {
    "pergunta": "Quem descobriu a América?",
    "alternativas": ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Américo Vespúcio"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o plural de 'cão'?",
    "alternativas": ["Cões", "Cães", "Cãos", "Cãez"],
    "correta": 1
  },
  {
    "pergunta": "Em que estado brasileiro está a cidade de Gramado?",
    "alternativas": ["SC", "PR", "RS", "MG"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o maior planeta do sistema solar?",
    "alternativas": ["Terra", "Júpiter", "Saturno", "Marte"],
    "correta": 1
  },
  {
    "pergunta": "Quem escreveu 'Os Lusíadas'?",
    "alternativas": ["Eça de Queirós", "Fernando Pessoa", "Camões", "Machado de Assis"],
    "correta": 2
  },
  {
    "pergunta": "Quantos segundos há em um minuto?",
    "alternativas": ["60", "100", "30", "90"],
    "correta": 0
  },
 {
    "pergunta": "Qual o menor país do mundo?",
    "alternativas": ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"],
    "correta": 1
  },
  {
    "pergunta": "Em que ano o homem pisou na Lua pela primeira vez?",
    "alternativas": ["1965", "1969", "1972", "1959"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o número do Pi (π) aproximado?",
    "alternativas": ["2,14", "3,14", "4,13", "3,41"],
    "correta": 1
  },
  {
    "pergunta": "Qual país tem a maior população do mundo?",
    "alternativas": ["Índia", "Estados Unidos", "Brasil", "China"],
    "correta": 3
  },
  {
    "pergunta": "Em qual continente está o Brasil?",
    "alternativas": ["África", "América do Sul", "Ásia", "Europa"],
    "correta": 1
  },
  {
    "pergunta": "Quantos graus tem um ângulo reto?",
    "alternativas": ["45º", "90º", "120º", "180º"],
    "correta": 1
  },
  {
    "pergunta": "Qual o nome do presidente dos EUA eleito em 2020?",
    "alternativas": ["Barack Obama", "Donald Trump", "Joe Biden", "George Bush"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a capital da França?",
    "alternativas": ["Londres", "Paris", "Berlim", "Madri"],
    "correta": 1
  },
  {
    "pergunta": "Quem é o autor de 'Romeu e Julieta'?",
    "alternativas": ["Shakespeare", "Tolstói", "Victor Hugo", "Dante"],
    "correta": 0
  },
  {
    "pergunta": "O que é fotossíntese?",
    "alternativas": ["Processo respiratório das plantas", "Transformação de luz em energia pelas plantas", "Reprodução vegetal", "Evaporação de água pelas folhas"],
    "correta": 1
  },
  {
    "pergunta": "Quantos estados tem o Brasil?",
    "alternativas": ["24", "25", "26", "27"],
    "correta": 2
  },
  {
    "pergunta": "Quem pintou 'O Grito'?",
    "alternativas": ["Edvard Munch", "Van Gogh", "Da Vinci", "Picasso"],
    "correta": 0
  },
  {
    "pergunta": "Qual é o maior mamífero do planeta?",
    "alternativas": ["Elefante africano", "Baleia azul", "Hipopótamo", "Orca"],
    "correta": 1
  },
  {
    "pergunta": "Quem descobriu a gravidade?",
    "alternativas": ["Einstein", "Newton", "Galileu", "Tesla"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o símbolo do ouro na tabela periódica?",
    "alternativas": ["Or", "Ag", "Au", "Gd"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o idioma falado na Austrália?",
    "alternativas": ["Inglês", "Espanhol", "Francês", "Alemão"],
    "correta": 0
  },
  {
    "pergunta": "Quem escreveu '1984'?",
    "alternativas": ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Jules Verne"],
    "correta": 1
  },
  {
    "pergunta": "Quantos dentes tem um adulto saudável (em média)?",
    "alternativas": ["30", "32", "28", "34"],
    "correta": 1
  },
  {
    "pergunta": "Qual o maior deserto do mundo?",
    "alternativas": ["Saara", "Antártida", "Gobi", "Kalahari"],
    "correta": 1
  },
  {
    "pergunta": "Quem inventou o avião (segundo brasileiros)?",
    "alternativas": ["Irmãos Wright", "Leonardo da Vinci", "Santos Dumont", "Graham Bell"],
    "correta": 2
  },
  {
    "pergunta": "Qual o país conhecido como 'Terra do Sol Nascente'?",
    "alternativas": ["China", "Japão", "Índia", "Coreia do Sul"],
    "correta": 1
  },
  {
    "pergunta": "Quantas cores tem o arco-íris?",
    "alternativas": ["5", "6", "7", "8"],
    "correta": 2
  },
  {
    "pergunta": "Qual o nome do processo que transforma água em vapor?",
    "alternativas": ["Condensação", "Evaporação", "Sublimação", "Filtração"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o maior osso do corpo humano?",
    "alternativas": ["Fêmur", "Tíbia", "Úmero", "Crânio"],
    "correta": 0
  },
  {
    "pergunta": "Qual é o planeta conhecido como 'Planeta Vermelho'?",
    "alternativas": ["Mercúrio", "Júpiter", "Saturno", "Marte"],
    "correta": 3
  },
  {
    "pergunta": "Qual animal é símbolo da paz?",
    "alternativas": ["Águia", "Coruja", "Pomba", "Leão"],
    "correta": 2
  },
  {
    "pergunta": "Quem foi o primeiro presidente do Brasil?",
    "alternativas": ["Getúlio Vargas", "Dom Pedro II", "Deodoro da Fonseca", "Juscelino Kubitschek"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o maior arquipélago do mundo?",
    "alternativas": ["Filipinas", "Indonésia", "Japão", "Maldivas"],
    "correta": 1
  },
  {
    "pergunta": "Qual o principal ingrediente do guacamole?",
    "alternativas": ["Tomate", "Pepino", "Abacate", "Cebola"],
    "correta": 2
  },
  {
    "pergunta": "Qual o nome da linha imaginária que divide o planeta em hemisférios norte e sul?",
    "alternativas": ["Trópico de Capricórnio", "Meridiano de Greenwich", "Linha do Equador", "Trópico de Câncer"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o esporte mais popular do mundo?",
    "alternativas": ["Tênis", "Futebol", "Basquete", "Críquete"],
    "correta": 1
  },
  {
    "pergunta": "Quantos músculos tem o corpo humano (aproximadamente)?",
    "alternativas": ["206", "639", "500", "700"],
    "correta": 1
  },
  {
    "pergunta": "Quem foi Charles Darwin?",
    "alternativas": ["Astrônomo", "Biólogo", "Físico", "Químico"],
    "correta": 1
  },
  {
    "pergunta": "Qual planeta tem os anéis mais visíveis?",
    "alternativas": ["Netuno", "Urano", "Saturno", "Júpiter"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o maior país da América do Sul?",
    "alternativas": ["Argentina", "Colômbia", "Chile", "Brasil"],
    "correta": 3
  },
  {
    "pergunta": "Quem escreveu 'A Metamorfose'?",
    "alternativas": ["Franz Kafka", "George Orwell", "Camus", "Nietzsche"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a fórmula da água?",
    "alternativas": ["CO2", "H2O", "NaCl", "O2"],
    "correta": 1
  },
  {
    "pergunta": "Qual o nome da estrela mais próxima da Terra?",
    "alternativas": ["Sirius", "Betelgeuse", "Sol", "Alpha Centauri"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a capital da Argentina?",
    "alternativas": ["Rosário", "Córdoba", "Buenos Aires", "Mendoza"],
    "correta": 2
  },
  {
    "pergunta": "Qual o principal gás do efeito estufa?",
    "alternativas": ["Oxigênio", "Metano", "Dióxido de carbono", "Nitrogênio"],
    "correta": 2
  },
  {
    "pergunta": "Qual o maior oceano do mundo?",
    "alternativas": ["Atlântico", "Índico", "Ártico", "Pacífico"],
    "correta": 3
  },
  {
    "pergunta": "Quem foi o criador da teoria da relatividade?",
    "alternativas": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileu Galilei"],
    "correta": 1
  },
  {
    "pergunta": "Quantos continentes existem?",
    "alternativas": ["5", "6", "7", "8"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o maior planeta do sistema solar?",
    "alternativas": ["Saturno", "Júpiter", "Marte", "Netuno"],
    "correta": 1
  },
  {
    "pergunta": "Quem pintou 'A Última Ceia'?",
    "alternativas": ["Michelangelo", "Leonardo da Vinci", "Rafael", "Caravaggio"],
    "correta": 1
  },
  {
    "pergunta": "Qual é a capital do Canadá?",
    "alternativas": ["Toronto", "Montreal", "Ottawa", "Vancouver"],
    "correta": 2
  },
  {
    "pergunta": "Qual metal é líquido em temperatura ambiente?",
    "alternativas": ["Cobre", "Mercúrio", "Ferro", "Zinco"],
    "correta": 1
  },
  {
    "pergunta": "Quem escreveu 'Dom Quixote'?",
    "alternativas": ["Miguel de Cervantes", "Fernando Pessoa", "José Saramago", "Machado de Assis"],
    "correta": 0
  },
  {
    "pergunta": "Qual é o rio mais extenso do mundo?",
    "alternativas": ["Amazonas", "Nilo", "Yangtzé", "Mississipi"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a língua oficial da Suíça?",
    "alternativas": ["Alemão", "Francês", "Italiano", "Todas estão corretas"],
    "correta": 3
  },
  {
    "pergunta": "Qual a capital da Austrália?",
    "alternativas": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    "correta": 2
  },
  {
    "pergunta": "Qual a fórmula química do sal de cozinha?",
    "alternativas": ["NaCl", "H2O", "CO2", "CaCO3"],
    "correta": 0
  },
  {
    "pergunta": "Quem pintou a Mona Lisa?",
    "alternativas": ["Leonardo da Vinci", "Picasso", "Van Gogh", "Michelangelo"],
    "correta": 0
  },
  {
    "pergunta": "Quantos lados tem um hexágono?",
    "alternativas": ["5", "6", "7", "8"],
    "correta": 1
  },
  {
    "pergunta": "Quem escreveu 'O Pequeno Príncipe'?",
    "alternativas": ["Antoine de Saint-Exupéry", "Victor Hugo", "Albert Camus", "Franz Kafka"],
    "correta": 0
  },
  {
    "pergunta": "Quantas cordas tem um violão tradicional?",
    "alternativas": ["4", "5", "6", "7"],
    "correta": 2
  },
  {
    "pergunta": "Qual o animal mais rápido do mundo?",
    "alternativas": ["Guepardo", "Falcão-peregrino", "Leão", "Antílope"],
    "correta": 1
  },
  {
    "pergunta": "Quem descobriu o Brasil?",
    "alternativas": ["Pedro Álvares Cabral", "Cristóvão Colombo", "Dom Pedro I", "Américo Vespúcio"],
    "correta": 0
  },
  {
    "pergunta": "Qual a capital da Espanha?",
    "alternativas": ["Barcelona", "Madrid", "Valência", "Sevilha"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o maior animal terrestre?",
    "alternativas": ["Rinoceronte", "Girafa", "Elefante africano", "Urso polar"],
    "correta": 2
  },
  {
    "pergunta": "Quantos segundos tem uma hora?",
    "alternativas": ["3.600", "6.000", "60.000", "360"],
    "correta": 0
  },
  {
    "pergunta": "Qual o nome do cientista que formulou as leis do movimento?",
    "alternativas": ["Einstein", "Newton", "Tesla", "Galileu"],
    "correta": 1
  },
  {
    "pergunta": "Qual é a capital da Alemanha?",
    "alternativas": ["Frankfurt", "Hamburgo", "Berlim", "Munique"],
    "correta": 2
  },
  {
    "pergunta": "Qual país tem o maior número de habitantes?",
    "alternativas": ["Índia", "Estados Unidos", "China", "Rússia"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o símbolo químico do ouro?",
    "alternativas": ["Au", "Ag", "Fe", "Go"],
    "correta": 0
  },
  {
    "pergunta": "Qual é o maior deserto do mundo?",
    "alternativas": ["Saara", "Atacama", "Gobi", "Antártida"],
    "correta": 3
  },
  {
    "pergunta": "Qual é o menor país do mundo?",
    "alternativas": ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"],
    "correta": 1
  },
  {
    "pergunta": "Quantos dentes tem um adulto (em média)?",
    "alternativas": ["28", "30", "32", "36"],
    "correta": 2
  },
  {
    "pergunta": "Quem pintou 'Guernica'?",
    "alternativas": ["Dalí", "Picasso", "Matisse", "Monet"],
    "correta": 1
  },
  {
    "pergunta": "O que é a fotossíntese?",
    "alternativas": ["Processo digestivo", "Processo respiratório", "Produção de clorofila", "Transformação de luz em energia pelas plantas"],
    "correta": 3
  },
  {
    "pergunta": "Qual é o plural de 'cidadão'?",
    "alternativas": ["Cidadões", "Cidadans", "Cidadãos", "Cidadães"],
    "correta": 2
  },
  {
    "pergunta": "Qual foi o primeiro país a utilizar papel-moeda?",
    "alternativas": ["Índia", "Egito", "Grécia", "China"],
    "correta": 3
  },
  {
    "pergunta": "Qual o nome do maior satélite natural da Terra?",
    "alternativas": ["Sol", "Lua", "Estrela do Norte", "Vênus"],
    "correta": 1
  },
  {
    "pergunta": "O que significa a sigla ONU?",
    "alternativas": ["Ordem Nacional Unida", "Organização das Nações Unidas", "Organização Nacional Urbana", "Ordem Universal das Nações"],
    "correta": 1
  },
  {
    "pergunta": "Qual é a moeda oficial do Japão?",
    "alternativas": ["Yen", "Won", "Yuan", "Dólar"],
    "correta": 0
  },
  {
    "pergunta": "Em que continente está o Egito?",
    "alternativas": ["Europa", "Ásia", "África", "América"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o maior mamífero do mundo?",
    "alternativas": ["Elefante africano", "Baleia azul", "Orca", "Hipopótamo"],
    "correta": 1
  },
  {
    "pergunta": "Quantos planetas existem no sistema solar?",
    "alternativas": ["7", "8", "9", "10"],
    "correta": 1
  },
  {
    "pergunta": "Qual é a capital da Itália?",
    "alternativas": ["Milão", "Veneza", "Nápoles", "Roma"],
    "correta": 3
  },
  {
    "pergunta": "Em que país nasceu Ludwig van Beethoven?",
    "alternativas": ["Áustria", "Alemanha", "França", "Itália"],
    "correta": 1
  },
  {
    "pergunta": "Quem foi o primeiro homem a pisar na Lua?",
    "alternativas": ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Alan Shepard"],
    "correta": 2
  },
  {
    "pergunta": "Quantas patas tem uma aranha?",
    "alternativas": ["6", "8", "10", "12"],
    "correta": 1
  },
  {
    "pergunta": "Qual é a fórmula da velocidade média?",
    "alternativas": ["v = d/t", "v = m/a", "v = f/a", "v = e/t"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a cor da esmeralda?",
    "alternativas": ["Azul", "Verde", "Vermelha", "Roxa"],
    "correta": 1
  },
  {
    "pergunta": "O que é um triângulo equilátero?",
    "alternativas": ["Todos os lados iguais", "Dois lados iguais", "Todos os ângulos retos", "Lados diferentes"],
    "correta": 0
  },
  {
    "pergunta": "Quem foi o primeiro imperador do Brasil?",
    "alternativas": ["Dom João VI", "Dom Pedro I", "Dom Pedro II", "Marechal Deodoro"],
    "correta": 1
  },
  {
    "pergunta": "Qual desses animais é um mamífero?",
    "alternativas": ["Cobra", "Tubarão", "Golfinho", "Pinguim"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a capital do México?",
    "alternativas": ["Cancún", "Guadalajara", "Cidade do México", "Acapulco"],
    "correta": 2
  },
  {
    "pergunta": "Em qual estado brasileiro fica o Pantanal?",
    "alternativas": ["Amazonas", "Mato Grosso do Sul", "Bahia", "Roraima"],
    "correta": 1
  },
  {
    "pergunta": "O que é um haicai?",
    "alternativas": ["Tipo de dança", "Poema curto japonês", "Desenho animado", "Estilo musical"],
    "correta": 1
  },
  {
    "pergunta": "Qual o nome do satélite artificial lançado pela URSS em 1957?",
    "alternativas": ["Apollo", "Sputnik", "Voyager", "Luna"],
    "correta": 1
  },
  {
    "pergunta": "Qual dessas palavras é um advérbio?",
    "alternativas": ["Correr", "Muito", "Bonito", "Mesa"],
    "correta": 1
  },
  {
    "pergunta": "Qual desses elementos químicos é um gás nobre?",
    "alternativas": ["Hidrogênio", "Oxigênio", "Hélio", "Nitrogênio"],
    "correta": 2
  },
  {
    "pergunta": "Quantas notas musicais existem?",
    "alternativas": ["5", "6", "7", "8"],
    "correta": 2
  },
  {
    "pergunta": "Qual o nome da camada de gás que protege a Terra dos raios UV?",
    "alternativas": ["Atmosfera", "Camada de ozônio", "Troposfera", "Estratosfera"],
    "correta": 1
  },
  {
    "pergunta": "Qual o nome do processo de formação das nuvens?",
    "alternativas": ["Evaporação", "Condensação", "Precipitação", "Sublimação"],
    "correta": 1
  },
  {
    "pergunta": "Qual dessas línguas é uma língua latina?",
    "alternativas": ["Alemão", "Inglês", "Português", "Russo"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o ponto mais alto da Terra?",
    "alternativas": ["Monte Everest", "Monte Fuji", "Pico da Neblina", "Kilimanjaro"],
    "correta": 0
  },
  {
    "pergunta": "Qual é o número atômico do oxigênio?",
    "alternativas": ["6", "7", "8", "9"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o nome da linha imaginária que divide a Terra em hemisférios norte e sul?",
    "alternativas": ["Trópico de Capricórnio", "Meridiano de Greenwich", "Equador", "Trópico de Câncer"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a capital do Canadá?",
    "alternativas": ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    "correta": 3
  },
  {
    "pergunta": "Quantos lados tem um hexágono?",
    "alternativas": ["5", "6", "7", "8"],
    "correta": 1
  },
  {
    "pergunta": "Qual é a função da mitocôndria na célula?",
    "alternativas": ["Produzir proteínas", "Armazenar água", "Produzir energia", "Proteger o núcleo"],
    "correta": 2
  },
  {
    "pergunta": "Quem escreveu a peça 'Romeu e Julieta'?",
    "alternativas": ["Machado de Assis", "William Shakespeare", "Camões", "Victor Hugo"],
    "correta": 1
  },
  {
    "pergunta": "O que é H2O?",
    "alternativas": ["Ácido", "Hidrogênio", "Água", "Gás"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a cor do sangue dentro das veias?",
    "alternativas": ["Vermelho escuro", "Azul", "Roxo", "Verde"],
    "correta": 0
  },
  {
    "pergunta": "Quantos continentes existem?",
    "alternativas": ["5", "6", "7", "8"],
    "correta": 2
  },
  {
    "pergunta": "Qual desses planetas é conhecido como 'planeta vermelho'?",
    "alternativas": ["Marte", "Júpiter", "Saturno", "Vênus"],
    "correta": 0
  },
  {
    "pergunta": "Quem escreveu 'Dom Casmurro'?",
    "alternativas": ["José de Alencar", "Machado de Assis", "Carlos Drummond", "Clarice Lispector"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o coletivo de lobos?",
    "alternativas": ["Manada", "Bando", "Alcateia", "Matilha"],
    "correta": 2
  },
  {
    "pergunta": "Quantos ossos tem o corpo humano adulto?",
    "alternativas": ["195", "206", "210", "218"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o maior oceano do planeta?",
    "alternativas": ["Atlântico", "Índico", "Ártico", "Pacífico"],
    "correta": 3
  },
  {
    "pergunta": "Qual a capital da Argentina?",
    "alternativas": ["Rosário", "Córdoba", "Buenos Aires", "Mendoza"],
    "correta": 2
  },
  {
    "pergunta": "Quantos estados tem o Brasil?",
    "alternativas": ["25", "26", "27", "28"],
    "correta": 2
  },
  {
    "pergunta": "Qual é o nome do composto químico responsável pelo sabor ácido dos limões?",
    "alternativas": ["Ácido sulfúrico", "Ácido acético", "Ácido cítrico", "Ácido lático"],
    "correta": 2
  },
  {
    "pergunta": "Quem foi Albert Einstein?",
    "alternativas": ["Escritor", "Matemático", "Cientista", "Físico"],
    "correta": 3
  },
  {
    "pergunta": "Qual a fórmula da água?",
    "alternativas": ["CO2", "H2O", "NaCl", "O2"],
    "correta": 1
  },
  {
    "pergunta": "Qual o maior país da América do Sul?",
    "alternativas": ["Argentina", "Brasil", "Chile", "Peru"],
    "correta": 1
  },
  {
    "pergunta": "Quem é o autor de 'O Pequeno Príncipe'?",
    "alternativas": ["Antoine de Saint-Exupéry", "Victor Hugo", "Jules Verne", "Voltaire"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a capital da Espanha?",
    "alternativas": ["Barcelona", "Valência", "Madri", "Sevilha"],
    "correta": 2
  },
  {
    "pergunta": "Em qual continente fica a Rússia?",
    "alternativas": ["Ásia", "Europa", "Ambos", "Oriente Médio"],
    "correta": 2
  },
  {
    "pergunta": "Quantos planetas são gasosos no Sistema Solar?",
    "alternativas": ["2", "4", "5", "6"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o símbolo químico do ferro?",
    "alternativas": ["Fe", "Ir", "F", "Fr"],
    "correta": 0
  },
  {
    "pergunta": "Qual é o menor osso do corpo humano?",
    "alternativas": ["Fêmur", "Tíbia", "Martelo", "Estape"],
    "correta": 3
  },
  {
    "pergunta": "Quem pintou a obra 'O Grito'?",
    "alternativas": ["Edvard Munch", "Van Gogh", "Picasso", "Kandinsky"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a fórmula da área do círculo?",
    "alternativas": ["πr²", "2πr", "πd", "πr"],
    "correta": 0
  },
  {
    "pergunta": "Qual é o maior planeta do Sistema Solar?",
    "alternativas": ["Saturno", "Júpiter", "Netuno", "Urano"],
    "correta": 1
  },
  {
    "pergunta": "O que significa 'IBGE'?",
    "alternativas": ["Instituto Brasileiro de Geografia e Estatística", "Instituto de Biologia e Geografia Escolar", "Instituto Brasileiro de Gestão Econômica", "Índice Brasileiro de Governo e Estatística"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a capital da França?",
    "alternativas": ["Paris", "Lyon", "Marselha", "Toulouse"],
    "correta": 0
  },
  {
    "pergunta": "Em que país se originou a língua portuguesa?",
    "alternativas": ["Brasil", "Portugal", "Espanha", "Itália"],
    "correta": 1
  },
  {
    "pergunta": "Qual é o idioma mais falado no mundo?",
    "alternativas": ["Inglês", "Espanhol", "Chinês mandarim", "Árabe"],
    "correta": 2
  },
  {
    "pergunta": "Em que ano o homem pisou na Lua pela primeira vez?",
    "alternativas": ["1965", "1969", "1971", "1975"],
    "correta": 1
  },
  {
    "pergunta": "Qual o nome do rio mais extenso do mundo?",
    "alternativas": ["Nilo", "Amazonas", "Yangtzé", "Mississippi"],
    "correta": 1
  },
  {
    "pergunta": "Quem descobriu a gravidade ao observar uma maçã cair?",
    "alternativas": ["Galileu", "Kepler", "Newton", "Einstein"],
    "correta": 2
  },
  {
    "pergunta": "Qual a capital de Pernambuco?",
    "alternativas": ["Natal", "João Pessoa", "Recife", "Maceió"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a capital do Pará?",
    "alternativas": ["Belém", "Manaus", "São Luís", "Macapá"],
    "correta": 0
  },
  {
    "pergunta": "O que significa 'BCE'?",
    "alternativas": ["Banco Central Europeu", "Biblioteca Central Educacional", "Bloco Comercial Europeu", "Base Científica Europeia"],
    "correta": 0
  },
  {
    "pergunta": "Quantas letras tem o alfabeto português?",
    "alternativas": ["24", "25", "26", "27"],
    "correta": 2
  },
  {
    "pergunta": "Em que continente está a maior parte da floresta amazônica?",
    "alternativas": ["África", "América do Sul", "Ásia", "Oceania"],
    "correta": 1
  },
  {
    "pergunta": "Qual desses é um polígono de 8 lados?",
    "alternativas": ["Pentágono", "Hexágono", "Octógono", "Decágono"],
    "correta": 2
  },
  {
    "pergunta": "Quem pintou a Mona Lisa?",
    "alternativas": ["Michelangelo", "Van Gogh", "Leonardo da Vinci", "Caravaggio"],
    "correta": 2
  },
  {
    "pergunta": "O que é um eclipse solar?",
    "alternativas": ["A Lua passa atrás da Terra", "O Sol desaparece da galáxia", "A Lua cobre o Sol", "O Sol cobre a Lua"],
    "correta": 2
  },
  {
    "pergunta": "Qual é a capital da Colômbia?",
    "alternativas": ["Medellín", "Bogotá", "Cali", "Cartagena"],
    "correta": 1
  },
  {
    "pergunta": "Qual o nome do processo de passagem do estado líquido para o gasoso?",
    "alternativas": ["Condensação", "Sublimação", "Evaporação", "Fusão"],
    "correta": 2
  },
  {
    "pergunta": "O que mede um barômetro?",
    "alternativas": ["Temperatura", "Umidade", "Pressão atmosférica", "Velocidade do vento"],
    "correta": 2
  },
  {
    "pergunta": "Qual o símbolo químico do ouro?",
    "alternativas": ["Au", "Ag", "Gd", "Or"],
    "correta": 0
  },
  {
    "pergunta": "Quem foi o 1º homem a viajar ao espaço?",
    "alternativas": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    "correta": 2
  },
  {
    "pergunta": "Qual o maior animal terrestre?",
    "alternativas": ["Rinoceronte", "Girafa", "Elefante africano", "Hipopótamo"],
    "correta": 2
  },
  {
    "pergunta": "Qual o maior país do mundo em extensão territorial?",
    "alternativas": ["Canadá", "Estados Unidos", "China", "Rússia"],
    "correta": 3
  },
  {
    "pergunta": "Em que ano foi proclamada a independência do Brasil?",
    "alternativas": ["1820", "1822", "1830", "1824"],
    "correta": 1
  },
  {
    "pergunta": "O que é a fotossíntese?",
    "alternativas": ["Respiração das plantas", "Reprodução vegetal", "Transformação de luz em energia", "Circulação da seiva"],
    "correta": 2
  },
  {
    "pergunta": "Qual o menor planeta do Sistema Solar?",
    "alternativas": ["Marte", "Mercúrio", "Vênus", "Plutão"],
    "correta": 1
  },
  {
    "pergunta": "Qual o nome do processo de separação de misturas por ebulição?",
    "alternativas": ["Filtração", "Decantação", "Destilação", "Centrifugação"],
    "correta": 2
  },
  {
    "pergunta": "Quantos cromossomos tem o ser humano?",
    "alternativas": ["44", "46", "48", "50"],
    "correta": 1
  },
  {
    "pergunta": "Qual o nome do satélite natural da Terra?",
    "alternativas": ["Lua", "Marte", "Estrela", "Meteorito"],
    "correta": 0
  },
  {
    "pergunta": "Qual é o número PI, arredondado?",
    "alternativas": ["3,14", "3,15", "3,16", "3,12"],
    "correta": 0
  },
  {
    "pergunta": "Qual destes elementos é um gás nobre?",
    "alternativas": ["Oxigênio", "Nitrogênio", "Argônio", "Hidrogênio"],
    "correta": 2
  },
  {
    "pergunta": "Qual o país com maior população do mundo?",
    "alternativas": ["Estados Unidos", "Índia", "China", "Indonésia"],
    "correta": 2
  },
  {
    "pergunta": "Qual o maior deserto do mundo?",
    "alternativas": ["Saara", "Gobi", "Antártida", "Kalahari"],
    "correta": 2
  },
  {
    "pergunta": "Quantas sílabas tem a palavra 'relógio'?",
    "alternativas": ["2", "3", "4", "5"],
    "correta": 1
  },
  {
    "pergunta": "O que é um haicai?",
    "alternativas": ["Gênero teatral", "Tipo de música", "Estilo de dança", "Poema curto japonês"],
    "correta": 3
  },
  {
    "pergunta": "Qual é a função do fígado?",
    "alternativas": ["Bombear sangue", "Produzir bile", "Controlar hormônios", "Digestão de açúcares"],
    "correta": 1
  },
  {
    "pergunta": "Quem escreveu 'A Odisséia'?",
    "alternativas": ["Platão", "Homero", "Sócrates", "Virgílio"],
    "correta": 1
  },
  {
    "pergunta": "Qual dessas figuras geométricas tem todos os lados iguais?",
    "alternativas": ["Retângulo", "Trapézio", "Quadrado", "Losango"],
    "correta": 2
  },
  {
    "pergunta": "Quem pintou 'A Última Ceia'?",
    "alternativas": ["Michelangelo", "Leonardo da Vinci", "Rafael", "Caravaggio"],
    "correta": 1
  },
  {
    "pergunta": "Quem criou o personagem Sherlock Holmes?",
    "alternativas": ["Agatha Christie", "Arthur Conan Doyle", "Dan Brown", "J.K. Rowling"],
    "correta": 1
  },
  {
    "pergunta": "Quantos planetas tem o Sistema Solar?",
    "alternativas": ["7", "8", "9", "10"],
    "correta": 1
  },
  {
    "pergunta": "Quem descobriu o Brasil?",
    "alternativas": ["Pedro Álvares Cabral", "Cristóvão Colombo", "Dom Pedro I", "Américo Vespúcio"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a moeda oficial da Inglaterra?",
    "alternativas": ["Euro", "Libra", "Dólar", "Franco"],
    "correta": 1
  },
  {
    "pergunta": "Quantos segundos tem uma hora?",
    "alternativas": ["3600", "3000", "1800", "1200"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a montanha mais alta do mundo?",
    "alternativas": ["Everest", "Aconcágua", "K2", "Makalu"],
    "correta": 0
  },
  {
    "pergunta": "Qual animal é símbolo da paz?",
    "alternativas": ["Coruja", "Águia", "Pomba", "Cisne"],
    "correta": 2
  },
  {
    "pergunta": "Quem pintou o teto da Capela Sistina?",
    "alternativas": ["Leonardo da Vinci", "Donatello", "Rafael", "Michelangelo"],
    "correta": 3
  },
  {
    "pergunta": "Em qual oceano estão localizadas as Ilhas Maldivas?",
    "alternativas": ["Atlântico", "Índico", "Pacífico", "Ártico"],
    "correta": 1
  },
  {
    "pergunta": "Quantas patas tem uma aranha?",
    "alternativas": ["6", "8", "10", "12"],
    "correta": 1
  },
  {
    "pergunta": "O que significa a sigla 'ONU'?",
    "alternativas": ["Organização Nacional Unificada", "Ordem das Nações Unidas", "Organização das Nações Unidas", "Ordem Neutral Universal"],
    "correta": 2
  },
  {
    "pergunta": "Qual o nome do processo de formação das nuvens?",
    "alternativas": ["Condensação", "Evaporação", "Sublimação", "Decantação"],
    "correta": 0
  },
  {
    "pergunta": "Qual é a raiz quadrada de 144?",
    "alternativas": ["11", "12", "13", "14"],
    "correta": 1
  },
  {
    "pergunta": "O que é cartografia?",
    "alternativas": ["Ciência das rochas", "Ciência dos climas", "Ciência dos mapas", "Ciência do solo"],
    "correta": 2
  },
  {
    "pergunta": "Quem compôs o Hino Nacional Brasileiro?",
    "alternativas": ["Carlos Gomes", "Dom Pedro I", "Francisco Manuel da Silva", "Heitor Villa-Lobos"],
    "correta": 2
  },
  {
    "pergunta": "Qual desses instrumentos mede a temperatura?",
    "alternativas": ["Barômetro", "Termômetro", "Higrômetro", "Anemômetro"],
    "correta": 1
  },
  {
    "pergunta": "Quantos vértices tem um cubo?",
    "alternativas": ["6", "8", "10", "12"],
    "correta": 1
  },
  {
    "pergunta": "Qual o maior órgão do corpo humano?",
    "alternativas": ["Fígado", "Pele", "Coração", "Pulmão"],
    "correta": 1
  },
  {
    "pergunta": "Em que continente está o Egito?",
    "alternativas": ["Ásia", "Europa", "África", "América"],
    "correta": 2
  },
  {
    "pergunta": "Qual a função dos glóbulos vermelhos?",
    "alternativas": ["Defesa do corpo", "Transporte de oxigênio", "Produção de hormônios", "Digestão"],
    "correta": 1
  },
  {
    "pergunta": "O que é um mamífero?",
    "alternativas": ["Animal com penas", "Animal com escamas", "Animal que põe ovos", "Animal que amamenta"],
    "correta": 3
  },
  {
    "pergunta": "Qual a capital do Chile?",
    "alternativas": ["Santiago", "Valparaíso", "La Paz", "Lima"],
    "correta": 0
  },
  {
    "pergunta": "Quantos litros tem um metro cúbico?",
    "alternativas": ["10", "100", "1000", "10000"],
    "correta": 2
  },
  {
    "pergunta": "Quem foi o primeiro presidente do Brasil?",
    "alternativas": ["Getúlio Vargas", "Deodoro da Fonseca", "Floriano Peixoto", "Juscelino Kubitschek"],
    "correta": 1
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    alternativas: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Monteiro Lobato"],
    correta: 0
  }
];