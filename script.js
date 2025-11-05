// --- DADOS COMPLETOS DAS MATÉRIAS (Para o Pop-up e Links Externos) ---
const materiasData = {
    // MATÉRIA PRINCIPAL (Neurociência - Mantida)
    'neurociencia': {
        titulo: 'Revolução da Neurociência: Cientistas Decodificam o Efeito do Estresse Crônico no Cérebro',
        imagem: './imagens/img_principal.jpg', 
        data: '29 de Outubro de 2025', 
        texto: `
            <div style="column-span: all; margin-bottom: 20px;">
                <p style="font-style: normal; column-span: all; font-size: 1.1em; text-align: justify;">Novas técnicas de mapeamento cerebral, utilizando ressonância magnética funcional avançada, revelam as alterações estruturais e químicas causadas pelo estresse de longo prazo. A descoberta abre caminho para tratamentos mais eficazes.</p>
            </div>
            <br>
            A pesquisa, publicada no "Journal of Advanced Neuroscience", detalha como o hipocampo, a área do cérebro responsável pela memória e emoções, sofre atrofia significativa em indivíduos com estresse crônico não tratado. A atrofia do hipocampo está diretamente ligada à dificuldade de regulação emocional e à falha na formação de novas memórias, sintomas comuns em casos de depressão e ansiedade severas.
            <br><br>
            Os cientistas esperam que esses achados possam levar ao desenvolvimento de intervenções farmacológicas e terapêuticas mais direcionadas, marcando um avanço significativo no tratamento de distúrbios relacionados ao estresse crônico.
        `
    },
    
    // MATÉRIA 1: SAÚDE MENTAL (Mantida)
    'saude_mental': { 
        titulo: 'Saúde Mental em Crise: O Impacto da Sobrecarga de Mídia e Tensão Contínua',
        imagem: './imagens/img1.jpg',
        data: '28 de Outubro de 2025',
        texto: `
            O clima de incerteza e a constante exposição a notícias negativas e redes sociais têm cobrado um preço alto na saúde mental da população. Psiquiatras alertam para o aumento da Síndrome de Burnout e de transtornos de ansiedade.
            <br><br>
            A sobrecarga informativa e a dificuldade em desconectar-se contribuem para um estado de alerta constante, esgotando os recursos cognitivos e emocionais. Profissionais de saúde recomendam a delimitação estrita de horários de exposição à mídia e a utilização de ferramentas que ajudem na regulação emocional, como a meditação e o exercício físico.
            
            <br><br>
            <div class="links-adicionais-popup" style="column-span: all;">
                <strong>Links de Aprofundamento:</strong>
                <ul>
                    <li><a href="https://oncocentermedicos.com.br/5-aplicativos-para-ajudar-a-cuidar-da-sua-saude-mental-e-emocional/" target="_blank">Artigo: 5 Aplicativos para Cuidar da Sua Saúde Mental e Emocional</a></li>
                    <li><a href="https://www.youtube.com/watch?v=hvU-WUGF8_w" target="_blank">Vídeo (YouTube): Qual é o impacto das redes sociais na sua saúde mental?</a></li>
                </ul>
            </div>
        `
    },
    
    // MATÉRIA 2: NUTRIÇÃO DO FUTURO (Mantida)
    'nutricao': { 
        titulo: 'Nutrição do Futuro: Proteínas Alternativas Impulsionam Alimentação Saudável e Sustentável',
        imagem: './imagens/img2.jpg',
        data: '27 de Outubro de 2025',
        texto: `
            O investimento maciço em alimentos sustentáveis e proteínas alternativas (como as vegetais e a base de insetos) está revolucionando a economia global. O setor atinge patamares recordes, impulsionado pela demanda por hábitos alimentares mais saudáveis e ecologicamente corretos.
            <br><br>
            Relatórios de mercado apontam que esta nova fronteira da nutrição é a principal responsável pelo crescimento inesperado. No entanto, levantam cautela quanto à necessidade de regulamentação para garantir a segurança alimentar e a aceitação do consumidor. O debate sobre segurança alimentar e sustentabilidade é crucial para o futuro da saúde pública.
            
            <br><br>
            <div class="links-adicionais-popup" style="column-span: all;">
                <strong>Links de Aprofundamento:</strong>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=4wDwns2fJDI" target="_blank">Vídeo (YouTube): Nutrição do Futuro - Alimentação saudável e sustentável no século XXI</a></li>
                    <li><a href="https://conexaociencia.com.br/a-alimentacao-do-futuro-proteinas-alternativas/" target="_blank">Artigo: A Alimentação do Futuro: Proteínas Alternativas</a></li>
                </ul>
            </div>
        `
    },
    
    // MATÉRIA 3: FITNESS E I.A. (Mantida)
    'fitness_ia': { 
        titulo: 'Tecnologia no Treino: Como a Inteligência Artificial Aumenta a Adesão ao Exercício Físico',
        imagem: './imagens/img3.jpg',
        data: '26 de Outubro de 2025',
        texto: `
            A Inteligência Artificial (I.A.) está transformando a forma como as pessoas se exercitam, oferecendo personalização e motivação para quebrar o sedentarismo. Aplicativos e dispositivos vestíveis usam I.A. para criar rotinas sob medida e monitorar o desempenho com precisão.
            <br><br>
            Especialistas em educação física e tecnologia afirmam que o feedback em tempo real e a gamificação dos exercícios são chaves para aumentar a adesão a longo prazo. O uso da I.A. no treino em casa democratiza o acesso a programas de alta qualidade que antes só estavam disponíveis com treinadores pessoais, tornando o bem-estar acessível a todos.
            
            <br><br>
            <div class="links-adicionais-popup" style="column-span: all;">
                <strong>Links de Aprofundamento:</strong>
                <ul>
                    <li><a href="https://www.eefe.usp.br/destaque-eefe/intelig%C3%AAncia-artificial-pode-ajudar-aumentar-ades%C3%A3o-ao-exerc%C3%ADcio-f%C3%ADsico" target="_blank">Artigo: Inteligência Artificial pode ajudar a aumentar adesão ao exercício físico</a></li>
                    <li><a href="https://www.youtube.com/watch?v=i7QwQPiAa0A" target="_blank">Vídeo (YouTube): Treino em Casa com Inteligência Artificial | Dicas e Apps</a></li>
                </ul>
            </div>
        `
    },

    // --- MATÉRIAS SECUNDÁRIAS E EXTERNAS (Corrigidas) ---
    // Links Externos Corrigidos (Abrem link diretamente)
    'depressao': { linkExterno: 'https://revistaft.com.br/depressao-a-doenca-do-seculo-xxi/' },
    'cardiovascular': { linkExterno: 'https://abccardiol.org/article/estatistica-cardiovascular-brasil-2023/' },
    'ergonomica': { linkExterno: 'https://www.ufpb.br/lat/contents/documentos/artigos-das-noticias/analise-ergonomica-em-postos-de-trabalho-remoto.pdf' },
    
    // NOTÍCIAS INTERNACIONAIS CORRIGIDAS (links de artigo mantidos, link de vídeo atualizado)
    'ineficiencia_eua': { 
        linkExterno: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2119468', // Artigo real de estudo de eficácia
        videoLink: 'https://www.youtube.com/watch?v=B1BmEtY2bmc' // Link de Vídeo Explicativo CORRIGIDO
    },
    'ineficiencia_europa': { 
        linkExterno: 'https://www.bbc.com/portuguese/internacional-52040181' 
    },
    'ineficiencia_asia': { 
        linkExterno: 'https://futurodasaude.com.br/hospitais-inteligentes-artigo/' 
    },

    // Matérias Controversas (Mantidas - Abrem pop-up com texto interno)
    'vacinacao': {
        titulo: 'Vacinação COVID: Debate sobre Mandato Obrigatório em Meio a Nova Onda',
        imagem: './imagens/img_vac.jpg',
        data: '04 de Novembro de 2025', 
        texto: `
            <div style="column-count: 1; margin-bottom: 20px;">
                <p style="font-style: normal; column-span: all; font-size: 1.1em;">Com o ressurgimento de novas variantes, a discussão sobre a obrigatoriedade da vacinação ganhou os holofotes. Apresentamos os argumentos dos principais comentaristas da área de saúde:</p>
            </div>
            
            <div style="margin-top: 20px; column-span: all;">
                <h3 style="color: green; border-bottom: 2px solid green; padding-bottom: 5px;">Argumento A FAVOR: Dr. Eduardo Santos</h3>
                <p>O mandato de vacinação não é uma violação de liberdade, mas um pacto social. A saúde pública deve prevalecer sobre o individualismo, especialmente em uma crise. A queda nas taxas de hospitalização prova que a imunização em massa é a única saída sustentável para a economia e para salvar vidas.</p>
                <br>
                <h3 style="color: red; border-bottom: 2px solid red; padding-bottom: 5px;">Argumento CONTRA: Dra. Helena Costa</h3>
                <p>A coerção mina a confiança na ciência. A liberdade de escolha, baseada no consentimento informado, é fundamental. O foco deveria estar na melhoria das terapias e na proteção dos grupos de risco, não na imposição de um medicamento a toda a população, independentemente da idade ou histórico médico.</p>
            </div>
        `
    },
    'ia': {
        titulo: 'I.A. e Empregos: Ameaça Global ou Nova Fronteira de Produtividade?',
        imagem: './imagens/img_ia.jpg', 
        data: '03 de Novembro de 2025', 
        texto: `
            <div style="column-count: 1; margin-bottom: 20px;">
                <p style="font-style: normal; column-span: all; font-size: 1.1em;">A expansão da Inteligência Artificial nos setores de serviços e indústria levanta questões urgentes sobre o futuro do trabalho. Duas visões opostas dominam o debate:</p>
            </div>
            
            <div style="margin-top: 20px; column-span: all;">
                <h3 style="color: green; border-bottom: 2px solid green; padding-bottom: 5px;">Argumento A FAVOR: Economista Marcos Viana</h3>
                <p>A I.A. é uma ferramenta de produtividade sem precedentes. A história mostra que cada revolução tecnológica cria mais empregos do que destrói, apenas em novas categorias. Precisamos de requalificação profissional maciça, não de medo. A automação libera o capital humano para tarefas mais complexas.</p>
                <br>
                <h3 style="color: red; border-bottom: 2px solid red; padding-bottom: 5px;">Argumento CONTRA: Socióloga Lígia Mendes</h3>
                <p>Desta vez é diferente. A I.A. atinge o trabalho cognitivo, não apenas o manual. Milhões de empregos de "colarinho branco" estão em risco, e a velocidade da mudança impede a adaptação. Isso levará a uma desigualdade social extrema e exigirá uma renda básica universal.</p>
            </div>
        `
    },
    'energia': {
        titulo: 'Transição Energética: Rapidez Total ou Segurança Logística e Econômica?',
        imagem: './imagens/img_eolica.jpg', 
        data: '02 de Novembro de 2025', 
        texto: `
            <div style="column-count: 1; margin-bottom: 20px;">
                <p style="font-style: normal; column-span: all; font-size: 1.1em;">A meta de zero carbono gera um dilema entre a urgência climática e a estabilidade da infraestrutura global. O debate se concentra em quão rápido o mundo deve abandonar os combustíveis fósseis:</p>
            </div>
            
            <div style="margin-top: 20px; column-span: all;">
                <h3 style="color: green; border-bottom: 2px solid green; padding-bottom: 5px;">Argumento A FAVOR: Ambientalista Pedro Alves</h3>
                <p>Não há mais tempo. Cada atraso significa um aumento irreversível de danos climáticos. A tecnologia limpa já existe; o que falta é vontade política e investimento. A transição rápida é, na verdade, a única forma de garantir a segurança econômica de longo prazo.</p>
                <br>
                <h3 style="color: red; border-bottom: 2px solid red; padding-bottom: 5px;">Argumento CONTRA: Engenheiro Fábio Nogueira</h3>
                <p>Apressar a transição sem infraestrutura de armazenamento de energia confiável (baterias) levará a apagões e picos de preço, penalizando o consumidor. Devemos manter o gás natural (menos poluente) como ponte, garantindo a segurança energética antes de um salto perigoso.</p>
            </div>
        `
    }
};

// --- SELEÇÃO DE ELEMENTOS (Mantida) ---
const materiaPrincipal = document.getElementById('materia-principal');
const notasSecundarias = document.querySelectorAll('.nota-secundaria');
const popup = document.getElementById('popup-materia');
const fecharPopup = document.getElementById('fechar-popup');
const popupTitulo = document.getElementById('popup-titulo');
const popupImagem = document.getElementById('popup-imagem');
const popupTextoCompleto = document.getElementById('popup-texto-completo');


// --- FUNÇÃO CENTRALIZADA PARA ABRIR O POPUP (Mantida) ---
function abrirPopup(key) {
    const materia = materiasData[key];

    if (!materia || materia.linkExterno) {
        return; 
    }

    popupTitulo.textContent = materia.titulo;
    
    if (materia.imagem) {
        popupImagem.src = materia.imagem;
        popupImagem.style.display = 'block';
    } else {
        popupImagem.src = '';
        popupImagem.style.display = 'none';
    }
    
    let conteudoCompleto = materia.texto;
    if (materia.data) {
        conteudoCompleto += `<br><br><span class="data-producao" style="column-span: all; border-top: 1px dashed #555; padding-top: 10px; margin-top: 20px;">Produzido em: ${materia.data}</span>`;
    }

    popupTextoCompleto.innerHTML = conteudoCompleto;
    popup.style.display = 'block';
}

// --- FUNCIONALIDADE CLIQUE (Mantida) ---
materiaPrincipal.addEventListener('click', () => {
    abrirPopup(materiaPrincipal.getAttribute('data-materia'));
});

notasSecundarias.forEach(nota => {
    nota.addEventListener('click', () => {
        const key = nota.getAttribute('data-materia');
        const materia = materiasData[key];

        if (materia) {
            // Se tiver linkExterno, ABRE O LINK em nova aba
            if (materia.linkExterno) {
                window.open(materia.linkExterno, '_blank');
                
                // NOVIDADE: Abre o vídeo também, se ele existir
                if (materia.videoLink) {
                    window.open(materia.videoLink, '_blank');
                }
                return;
            }
            abrirPopup(key);
        }
    });
});

// --- FUNCIONALIDADE DE FECHAR POPUP (Mantida) ---
fecharPopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});