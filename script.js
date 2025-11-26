// --- DADOS COMPLETOS DAS MATÉRIAS (Para o Pop-up e Links Externos) ---
const materiasData = {
    // MATÉRIA PRINCIPAL (Neurociência)
    'tecnologia_e_saude': {
        titulo: 'Revolução da Neurociência: Cientistas Decodificam o Efeito do Estresse Crônico no Cérebro',
        imagem: './imagens/img_materia_principal2.jpg', // CORRIGIDO PARA O NOME LOCAL
        data: '21 de Novembro de 2025', 
        texto: `
            <div style="column-span: all; margin-bottom: 20px;">
                <p style="font-style: normal; column-span: all; font-size: 1.1em; text-align: justify;">A inteligência artificial vem contribuindo significativamente para a transformação de vários setores da sociedade, inclusive na área da saúde. A implantação da tecnologia na medicina foi um grande avanço por possibilitar o desenvolvimento de diagnósticos mais precisos, tratamentos personalizados e aprimorar a eficiência de diferentes procedimentos médicos.</p>
            </div>
            <br>
            A cirurgia robótica é uma ferramenta cada vez mais popular em diferentes países. Ela permite aos médicos operarem pacientes com mais precisão, sem precisar fazer grandes incisões ou sacrificar outros órgãos. Isso significa que os pacientes geralmente se recuperam mais rapidamente e sentem menos dor, o que também pode reduzir os custos do cuidado.
            Os procedimentos cirúrgicos assistidos por robôs oferecem podemos citar a prostatectomia, a cirurgia de hérnia, de endometriose, entre outras. A robótica é capaz de auxiliar em procedimentos que exigem mais delicadeza e precisão, tornando os procedimentos mais seguros e com resultados mais eficazes.
            <a href="https://andrelug.com/a-revolucao-da-inteligencia-artificial-na-cirurgia-como-a-tecnologia-transforma-a-medicina/" target="_blank">Leia mais sobre a revolução da inteligência artificial na cirurgia</a>
        `
    },
    
    // MATÉRIA 1: Prevenção da Dengue
    'combate a dengue': { 
        titulo: 'Combate a dengue em Cubatão',
        imagem: './imagens/img_dengue.png', // CORRIGIDO PARA O NOME LOCAL
        data: '25 de Novembro de 2025',
        texto: `
            Agentes do Serviço de Controle de Zoonoses, da Secretaria Municipal de Saúde de Cubatão, percorrem a região do Jardim Costa e Silva de casa em casa para orientar os moradores sobre a importância da eliminação de possíveis criadouros do mosquito da dengue e outras arboviroses. As ações tiveram início na semana passada e prosseguem até amanhã (19). Na semana que vem, a previsão é de que os agentes estejam no Jardim 31 de Março....
            <br><br>
            A sobrecarga informativa e a dificuldade em desconectar-se contribuem para um estado de alerta constante, esgotando os recursos cognitivos e emocionais. Profissionais de saúde recomendam a delimitação estrita de horários de exposição à mídia e a utilização de ferramentas que ajudem na regulação emocional, como a meditação e o exercício físico.
            Semana de Educação em Saúde – Os agentes percorrem também nesta semana salas de aulas das escolas municipais para conversar com as crianças. É a Semana de Educação em Saúde. Eles estiveram também na semana passada, na Unidade Municipal de Ensino (UME) Amazonas, na Vila Nova. A programação continua nesta quarta, na UME Ulisses Guimarães, na Vila Natal, e, no dia 13, na UME Maranhão, no mesmo bairro.
            <br><br>
            <div class="links-adicionais-popup" style="column-span: all;">
                <strong>Links de Aprofundamento:</strong>
                <ul>
                    <li><a href="https://www.cubatao.sp.gov.br/combate-a-dengue-prefeitura-intensifica-visitas-de-agentes-no-jardim-costa-e-silva//" target="_blank">Como a prefeitura de Cubatão intensifica o combate à dengue.</a></li>
                    <li><a href="https://www.youtube.com/watch?v=eHtiqqaUJ3s" target="_blank">Vídeo (YouTube):Cubatão realizou ações no Dia D de Combate a Dengue. </a></li>
                </ul>
            </div>
        `
    },
    
    // MATÉRIA 2: Ciclovia em PG
    'acessibilidade': { 
        titulo: 'Acessibilidade e lazer são destaques do futuro Parque Mirim, em PG',
        imagem: './imagens/img_ciclo_pg.jpg', // CORRIGIDO PARA O NOME LOCAL
        data: '25 de Novembro de 2025',
        texto: `
            A ciclovia na Praia Grande está passando por melhorias significativas. As obras de reurbanização do trecho conhecido como Calipal, que abrange as Ruas Sérgio Gregório e João Roberto Correia, estão sendo realizadas e devem ser concluídas até o final de 2024. Entre as melhorias, haverá a duplicação das faixas de rolamento e a colocação de piso intertravado nas calçadas, além da transposição da ciclovia no centro da via. Essas melhorias visam aumentar a mobilidade e a acessibilidade na região, beneficiando um trecho de aproximadamente 2 quilômetros de extensão.
            <br><br>
            A inclusão no local já é iniciada do lado de fora, pois todo o passeio no arredor do parque contará com piso tátil (que serve para orientar no solo pessoas com deficiência visual ou baixa visão). Além disso, em cada entrada do parque serão instalados mapas táteis para que pessoas com deficiência visual possam se guiar para cada um dos pontos de interesse do parque e o piso de todo o parque foi escolhido para ser liso sem obstáculos.
            
            <br><br>
            <div class="links-adicionais-popup" style="column-span: all;">
                <strong>Links de Aprofundamento:</strong>
                <ul>
                    <li><a href="https://www.bing.com/videos/riverview/relatedvideo?&q=nova+ciclovia+na+mirim+praia+grande&&mid=B440550D3161721C667FB440550D3161721C667F&&FORM=VRDGAR" target="_blank">Vídeo : Nova ciclovia no bairro Mirim Praia Grande/SP</a></li>
                    <li><a href="https://www2.praiagrande.sp.gov.br/noticia/acessibilidade-e-lazer-sao-destaques-do-futuro-parque-mirim-em-pg" target="_blank">Artigo: Matéria sobre a ciclovia no bairro de Praia Grande/Prefeitura de Praia Grande.</a></li>
                </ul>
            </div>
        `
    },
    
    // MATÉRIA 3: \Prefeitura oferece aulas gratuitas de Pilates, Capoeira e Defesa Pessoal para pessoas na terceira idade
    'fitness': { 
        titulo: 'Tecnologia no Treino: Aumenta a Adesão ao Exercício Físico',
        imagem: './imagens/img_aulas_pilates2.jpeg', // CORRIGIDO PARA O NOME LOCAL
        data: '26 de Outubro de 2025',
        texto: `
         Com foco no envelhecimento ativo e saudável, São Vicente está oferecendo aulas gratuitas de Pilates, Capoeira 60+ e Defesa Pessoal para pessoas da terceira idade. A iniciativa é conduzida pela Secretaria de Esportes e Lazer no Complexo Esportivo Beija-Flor, localizado na Esplanada dos Barreiros, e já beneficiou mais de 1.200 moradores da cidade.
         Faça parte do grupo do Diário no WhatsApp e Telegram.
         Mantenha-se bem informado.
         A proposta vai além da atividade física. Além de ganhos físicos como equilíbrio, força e flexibilidade, os participantes relatam melhora na autoestima, na segurança e até no bem-estar emocional. As aulas são conduzidas por profissionais qualificados e continuam com vagas abertas para novas inscrições.
         
         <br><br>
            Compromisso com o bem-estar da terceira idade
            O projeto reforça o compromisso da cidade com o público da terceira idade, promovendo não apenas benefícios físicos, mas também sociais e emocionais. As atividades proporcionam autonomia, convivência e inclusão para idosos que desejam manter uma rotina ativa e mais saudável.

           <br><br>
            <div class="links-adicionais-popup" style="column-span: all;">
                <strong>Links de Aprofundamento:</strong>
                <ul>
                    <li><a href="https://www.diariodolitoral.com.br/sao-vicente/sao-vicente-amplia-acesso-ao-bem-estar-com-aulas-gratuitas-para-idosos/197365/" target="_blank">Artigo: Saude e Bem estar,Prefeitura de São Vicente</a></li>
                    <li><a href="https://www.youtube.com/watch?v=upVWEwi8tZA" target="_blank">Vídeo (YouTube): Aulas de Capoeira e Pilates.</a></li>
                </ul>
            </div>
        `
    },

    // --- MATÉRIAS SECUNDÁRIAS E EXTERNAS ---
    'burnout': { linkExterno: 'https://br.psicologia-online.com/sindrome-de-burnout-o-que-e-sintomas-e-tratamento-127.html' },
    'ansiedade': { linkExterno: 'https://www.cuf.pt/saude-a-z/ansiedade' },
    'doencas_de_2025': { linkExterno: 'https://www.alertasaude.com/blog-post35' },
    
    // NOTÍCIAS INTERNACIONAIS (Links Externos)
    'saude_eua': { 
        linkExterno: 'https://imigrareua.com/sistema-de-saude-nos-eua/', 
        videoLink: 'https://www.youtube.com/watch?v=XzXp0p6__0E' 
    },
    'saude_alemanha': { 
        linkExterno: 'https://www.eurodicas.com.br/sistema-de-saude-na-alemanha/',
        videoLink: 'https://www.youtube.com/watch?v=x028ibjgdtc'  
    },
    'saude_na_asia': { 
        linkExterno: 'https://internationalhealth.com/pt/Sistema-de-Saude-e-Seguro-Saude/China' ,
        videoLink: 'https://www.youtube.com/watch?v=txg8atF-_HQ' 
    },

    // Matérias Controversas (Abrem pop-up com texto interno)
    'dieta_keto': {
        titulo: 'Dieta cetogênica',
        imagem: './imagens/img_dieta_keto.webp', // CORRIGIDO PARA O NOME LOCAL
        data: '04 de Novembro de 2025', 
        texto: `
            <div style="column-count: 1; margin-bottom: 20px;">
                <p style="font-style: normal; column-span: all; font-size: 1.1em;">A dieta cetogênica é um plano alimentar com baixo teor de carboidratos (5–10% das calorias diárias), alto teor de gorduras saudáveis (70–75%) e quantidade moderada de proteínas (20–25%).
             O objetivo é levar o corpo à cetose, onde a gordura é convertida em cetonas para gerar energia.:</p>
            </div>
            
            <div style="margin-top: 20px; column-span: all;">
                <h3 style="color: green; border-bottom: 2px solid green; padding-bottom: 5px;">Argumento A FAVOR: Dra. Helena Soares, Nutróloga (Focada em Metabolismo e Obesidade)</h3>
                <p>A dieta Keto é inegavelmente eficaz no curto prazo para perda de peso significativa. A restrição de carboidratos estabiliza os níveis de açúcar no sangue e insulina, o que ajuda a reduzir a fome e os picos de compulsão. Além disso, a cetose tem se mostrado uma ferramenta terapêutica valiosa. Originalmente usada para controlar a epilepsia refratária, há pesquisas promissoras sobre seus benefícios em pacientes com diabetes tipo 2 e, em alguns casos, doenças neurodegenerativas. Para pacientes com obesidade severa, pode ser o catalisador que oferece resultados rápidos e motivadores para iniciar uma mudança de estilo de vida..</p>
                <p><strong>"O estado de cetose é um 'interruptor' metabólico poderoso que otimiza a queima de gordura. Quando bem supervisionada, a Keto pode ser a intervenção mais rápida e segura para reverter a resistência à insulina."</strong></p>
                <br>
                <h3 style="color: red; border-bottom: 2px solid red; padding-bottom: 5px;">Argumento CONTRA: Dr. Ricardo Almeida, Nutricionista Clínico (Focado em Sustentabilidade Dietética)</h3>
                <p>A principal preocupação com a Dieta Cetogênica é a sua sustentabilidade. A restrição drástica de grupos alimentares essenciais (como frutas, grãos integrais e muitos vegetais ricos em amido) torna a dieta muito difícil de manter no contexto social e cotidiano de uma pessoa. Mais grave, essa restrição aumenta o risco de deficiências nutricionais, especialmente em vitaminas do complexo B, fibras, e certos minerais essenciais. A falta de fibra pode levar a problemas digestivos crônicos. Além disso, para algumas pessoas, a alta ingestão de gordura saturada pode impactar negativamente o perfil lipídico (colesterol), especialmente se não houver um foco rigoroso na qualidade das gorduras consumidas.</p>
                <br>
                <p><strong>"Uma dieta deve ser um estilo de vida que você possa amar. A Keto exige um sacrifício de alimentos ricos em nutrientes e é metabolicamente estressante. A longo prazo, uma dieta balanceada e menos restritiva, como a Mediterrânea, é mais benéfica e segura para a saúde geral."</strong></p>
                </div>
        `
    },
    'telemedicina': {
        titulo: 'Telemedicina e Consultas Virtuais',
        imagem: './imagens/img_telemed2.webp', // CORRIGIDO PARA O NOME LOCAL
        data: '18 de Novembro de 2025', 
        texto: `
            <div style="column-count: 1; margin-bottom: 20px;">
                <p style="font-style: normal; column-span: all; font-size: 1.1em;"> Saúde e Tecnologia: O Futuro da Medicina na Palma da Mão :</p>
            </div>
            
            <div style="margin-top: 20px; column-span: all;">
                <h3 style="color: green; border-bottom: 2px solid green; padding-bottom: 5px;">Argumento A FAVOR: Dra. Carolina Mendes, Especialista em Saúde Digital e Cardiologista</h3>
                <p>A Telemedicina é um instrumento de democratização da saúde. Para pacientes em áreas remotas, com dificuldades de mobilidade ou sem tempo para deslocamento, uma consulta virtual elimina barreiras e garante a continuidade do tratamento. A tecnologia permite um monitoramento remoto mais eficiente de doenças crônicas, como diabetes ou hipertensão, onde dispositivos conectados (wearables) enviam dados em tempo real ao médico. Isso permite intervenções proativas antes que o quadro se agrave. É ideal para acompanhamentos, triagens iniciais, resultados de exames e saúde mental, economizando tempo e recursos para todos.</p>
                <p><strong>"O futuro da medicina é híbrido. A tecnologia não substitui o médico, mas o potencializa, permitindo que o cuidado chegue a quem mais precisa, com maior frequência e menor custo operacional."</strong></p>
                <br>
                <h3 style="color: red; border-bottom: 2px solid red; padding-bottom: 5px;">Argumento CONTRA: Dr. Paulo Bittencourt, Clínico Geral e Defensor da Medicina Presencial</h3>
                <p>Embora a conveniência seja inegável, a Telemedicina nunca poderá substituir a avaliação clínica completa. Muitas patologias (especialmente as mais complexas) exigem o exame físico, que inclui palpação, ausculta e avaliação de sinais vitais que não são visíveis pela tela. Há um risco significativo de diagnósticos imprecisos ou de subestimar a gravidade de um sintoma sem o contato presencial. Além disso, a troca de informações de saúde sensíveis pela internet levanta sérias preocupações de privacidade e segurança de dados (LGPD). Falhas nos sistemas podem expor dados confidenciais, minando a confiança no sistema e potencialmente expondo o paciente a riscos.</p>
                <br>
                <p><strong>"A medicina é baseada em detalhes. A 'pista' que leva a um diagnóstico correto muitas vezes está no exame físico minucioso e na interação humana. Não podemos trocar a segurança da avaliação completa pela mera conveniência do clique."</strong></p>
                </div>
        `
    },
    'meio ambiente': {
        titulo: 'O Passado de Poluição: O Preço da Industrialização Acelerada',
        imagem: './imagens/img_cubatao.jpg', // CORRIGIDO PARA O NOME LOCAL
        data: '02 de Novembro de 2025', 
        texto: `
            <div style="column-count: 1; margin-bottom: 20px;">
                <p style="font-style: normal; column-span: all; font-size: 1.1em;">A meta de zero carbono gera um dilema entre a urgência climática e a estabilidade da infraestrutura global. O debate se concentra em quão rápido o mundo deve abandonar os combustíveis fósseis:</p>
            </div>
            
            <div style="margin-top: 20px; column-span: all;">
                <h3 style="color: green; border-bottom: 2px solid green; padding-bottom: 5px;">Argumento A FAVOR: Dra. Marina Alves, Geógrafa e Especialista em Sustentabilidade Urbana</h3>
                <p>O caso Cubatão prova que a degradação ambiental é reversível com políticas públicas rigorosas e compromisso. A virada começou na década de 1980 com o Programa de Controle da Poluição Ambiental, que impôs limites rígidos de emissão às indústrias, obrigando-as a instalar filtros e modernizar processos. A CETESB (Companhia Ambiental do Estado de São Paulo) foi crucial no monitoramento contínuo, garantindo que as emissões caíssem drasticamente. O resultado foi tão significativo que, em 1992, a ONU reconheceu Cubatão como "Cidade Símbolo da Recuperação Ambiental". A saúde da população se beneficiou diretamente, com quedas expressivas nas taxas de mortalidade infantil e internações por doenças respiratórias.</p>
                <br>
                <p></p><strong>"Cubatão é a prova de que a saúde de uma cidade é inseparável da saúde do seu ecossistema. O sucesso aqui veio da regulação forte e da fiscalização que transformaram o desafio em modelo de desenvolvimento sustentável."</strong></p>
                <h3 style="color: red; border-bottom: 2px solid red; padding-bottom: 5px;">Argumento CONTRA: Dr. Roberto Souza, Sociólogo e Pesquisador em Saúde Ocupacional</h3>
                <p>Embora a poluição do ar tenha sido controlada, o legado do "Vale da Morte" ainda persiste. A cidade lida com passivos ambientais significativos, como a contaminação do solo e da água por metais pesados e resíduos químicos industriais históricos, incluindo o famoso "Caso Rhodia" (contaminação por Hexaclorobenzeno - HCB).</p>
            </div>
        `
    },
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
                
                // Abre o vídeo também, se ele existir
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

