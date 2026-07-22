import React from 'react';
import imgMansion from '../assets/images/luxury_modern_mansion_1784744114833.jpg';
import imgConsulting from '../assets/images/professional_consulting_1784744128704.jpg';
import imgArch from '../assets/images/global_architecture_1784744143533.jpg';
import imgProfessional from '../assets/images/real_estate_professional_1784744378664.jpg';
import imgContract from '../assets/images/signing_contract_1784744393533.jpg';
import imgPenthouse from '../assets/images/luxury_penthouse_view_1784744409278.jpg';

const AUTHOR_IMG_URL = 'https://i.postimg.cc/fbZVRCFC/DSC03558-2.jpg';

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-8 text-lg leading-relaxed text-justify text-[#E0E0E0]/80 font-body">{children}</p>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[10px] font-bold uppercase tracking-widest border-b border-[#E0E0E0] pb-2 inline-block mt-16 mb-8 text-[#C5A059] font-sans">{children}</h3>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="space-y-6 mb-12">{children}</ul>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-baseline gap-6">
    <span className="text-xs font-serif italic text-[#C5A059]">✦</span>
    <span className="text-lg font-body text-[#E0E0E0]/80 leading-relaxed text-justify">{children}</span>
  </li>
);

const BQ = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-12 p-8 bg-[#C5A059]/10 border-l-2 border-[#C5A059] italic text-lg font-body text-[#E0E0E0]">
    {children}
  </blockquote>
);

const AuthorProfile = () => (
  <div className="w-full flex justify-center bg-[#050505] p-4 md:p-8 mb-16 md:mb-24 rounded-sm border border-[#E0E0E0]/10 shadow-2xl">
    <div 
      className="relative bg-[#0A0A0A] border border-[#E0E0E0]/10 flex flex-col items-center justify-end overflow-hidden shadow-2xl w-full max-w-[700px]"
    >
      <div className="absolute inset-0 z-0">
        <img src={AUTHOR_IMG_URL} alt="Background" className="w-full h-full object-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 pt-16 md:pt-32 pb-8 md:pb-16 w-full">
        <div className="w-64 md:w-96 rounded-sm border-4 md:border-8 border-[#C5A059]/30 p-1 md:p-2 mb-6 md:mb-10 shadow-2xl bg-[#0A0A0A]">
           <img src={AUTHOR_IMG_URL} alt="Dra. Tatiani Gurgel" className="w-full h-auto object-contain rounded-sm transition-all duration-1000 block" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#E0E0E0] uppercase tracking-[0.1em] leading-none mb-4 md:mb-6">
          Tatiani Gurgel
        </h1>
        <div className="text-[10px] md:text-sm lg:text-lg font-bold text-[#C5A059] uppercase tracking-[0.2em] mb-6 md:mb-10">
          Produtora do E-book
        </div>
        <div className="w-12 md:w-20 h-1 bg-[#C5A059] mb-6 md:mb-10"></div>
        <div className="text-sm md:text-base lg:text-lg font-body text-[#E0E0E0]/90 leading-relaxed text-left space-y-4">
          <p>Dra. Tatiani Gurgel é advogada especialista em Direito Imobiliário e gestão de negócios, corretora de imóveis, CEO da Casa Up Negócios Imobiliários e consultora estratégica para investidores no Brasil e no mercado internacional.</p>
          <p>Ao longo de sua trajetória, percebeu que o sucesso no mercado imobiliário vai muito além de vender imóveis: exige conhecimento, método, estratégia, segurança jurídica e posicionamento profissional.</p>
          <p>Este e-book nasceu do desejo de compartilhar experiências e ferramentas práticas que contribuam para a profissionalização do corretor de imóveis, fortalecendo sua atuação, gerando mais credibilidade e elevando o padrão de excelência do mercado. Acredito que conhecimento compartilhado transforma carreiras, gera melhores resultados e beneficia todo o setor imobiliário.</p>
        </div>
      </div>
    </div>
  </div>
);

const CompareGrid = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
  <div className="my-16 flex flex-col gap-12 border-y border-[#E0E0E0]/10 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 hidden md:grid">
      <h3 className="text-[10px] font-bold uppercase tracking-widest border-b border-[#E0E0E0] pb-2 inline-block text-[#C5A059] font-sans">{headers[0]}</h3>
      <h3 className="text-[10px] font-bold uppercase tracking-widest border-b border-[#E0E0E0] pb-2 inline-block text-[#C5A059] font-sans">{headers[1]}</h3>
    </div>
    {rows.map((row, i) => (
      <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
        <div className="space-y-6">
          <div className="md:hidden text-[10px] font-bold uppercase tracking-widest border-b border-[#E0E0E0] pb-2 inline-block text-[#C5A059] font-sans mb-2">{headers[0]}</div>
          <div className="text-lg leading-relaxed text-justify text-[#E0E0E0]/80 font-body">{row[0]}</div>
        </div>
        <div className="space-y-6 flex flex-col">
          <div className="md:hidden text-[10px] font-bold uppercase tracking-widest border-b border-[#E0E0E0] pb-2 inline-block text-[#C5A059] font-sans mb-2 mt-4">{headers[1]}</div>
          <div className="text-lg leading-relaxed text-justify text-[#E0E0E0]/80 font-body">{row[1]}</div>
        </div>
        {i !== rows.length - 1 && <div className="absolute -bottom-6 left-0 right-0 h-px bg-[#E0E0E0]/5 hidden md:block"></div>}
      </div>
    ))}
  </div>
);

export const bookTitle = "DE CORRETOR INVISÍVEL PARA CORRETOR INDISPENSÁVEL";

export const chapters = [
  {
    title: "Produtora do E-book",
    content: (
      <>
        <AuthorProfile />
      </>
    )
  },
  {
    title: "Prefácio",
    content: (
      <>
        <P>O mercado imobiliário brasileiro construiu uma das maiores distorções profissionais da atualidade. Um modelo onde um profissional altamente estratégico, responsável por decisões milionárias, opera sem contrato e sem garantias. E onde o comprador, prestes a realizar o maior investimento de sua vida, navega sem uma representação exclusiva e verdadeiramente alinhada aos seus interesses.</P>
        <P>Durante anos, o corretor foi condicionado a acreditar que precisava trabalhar de graça para provar seu valor. Do outro lado da mesa, o comprador foi ensinado a acreditar que "ter vários corretores batendo cabeça" era a melhor estratégia de busca. Ambos foram enganados. O corretor perde seu tempo abrindo portas às cegas; o comprador perde sua paz lidando com o assédio de dezenas de mensagens, visitas frustradas e o risco invisível de negociar sem um escudo de proteção jurídica.</P>
        <P>Existe uma pergunta que poucos tiveram a coragem de fazer: por que a transação mais importante da vida de uma pessoa é justamente a única que acontece sem um pacto formal de lealdade entre as partes?</P>
        <UL>
          <LI>Médicos não operam sem consulta.</LI>
          <LI>Advogados não defendem sem honorários.</LI>
          <LI>Consultores não desenham estratégias sem contrato.</LI>
        </UL>
        <P>Porque onde não há contrato, não há compromisso profundo.</P>
        <img src={imgMansion} alt="Sleek modern luxury mansion" className="w-full h-auto aspect-[16/9] object-cover my-12 opacity-90 rounded-sm border border-[#E0E0E0]/10" />
        <P>Quando o corretor apenas "abre portas", o comprador recebe apenas o óbvio. Mas quando o corretor atua sob contrato de representação, o jogo muda: o corretor ganha dignidade e o comprador ganha um verdadeiro advogado de defesa no mercado — alguém focado em encontrar o imóvel ideal, negociar pelo menor preço e blindar seu patrimônio contra surpresas.</P>
        <P>Este livro não é apenas sobre cobrar honorários. É sobre restabelecer o equilíbrio. É sobre inteligência de mercado, transparência e proteção para quem compra.</P>
        <P>O que você vai ler aqui não é uma tendência regulatória. É uma direção inevitável. O mundo já mudou. O corretor que não evoluir ficará invisível — e o comprador que não se profissionalizar continuará desprotegido.</P>
      </>
    )
  },
  {
    title: "Capítulo 1 — A DOR INVISÍVEL",
    content: (
      <>
        <P>Trabalhei por mais de quinze anos como advogada até me tornar corretora de imóveis. A especialização em Direito Imobiliário me concedeu uma vantagem competitiva significativa em relação aos corretores da cidade do interior de São Paulo onde iniciei minha atuação. Essa base sólida foi determinante para a construção de uma carreira de sucesso e para a conquista de comissões que transformaram minha vida.</P>
        <P>Mas foi ao longo dos meus dez anos como corretora que experimentei, de forma profunda, a maior dor dessa profissão: o trabalho gratuito. E, paradoxalmente, percebi que essa dor também prejudica diretamente quem está tentando comprar.</P>
        <P>Foram muitos episódios até que eu finalmente dissesse "chega". E, como acontece em grandes viradas de vida, houve um momento decisivo.</P>
        <P>Atendi um cliente famoso, cujo nome não posso revelar, e, naquele instante, senti que havia alcançado o ápice da minha carreira. Era como um empresário prestes a assinar um contrato milionário. Mas havia um detalhe fundamental: não existia contrato algum.</P>
        <P>Durante três meses, dediquei-me intensamente a esse cliente. Investi tempo, energia e recursos financeiros. Ele morava em São Paulo, e eu me deslocava até a capital ao menos três vezes por semana para atendê-lo. Meu trabalho foi exemplar e eu sei reconhecer quando entrego excelência.</P>
        <P>Foram dias de dedicação absoluta. Estruturei parcerias, selecionei imóveis estratégicos, construí uma jornada personalizada. Porém, com o tempo, descobri que ele também estava sendo atendido por outros corretores. A sorte estava lançada. O que ele não percebia é que, ao pulverizar sua busca com múltiplos profissionais sem um pacto de fidelidade, ele não estava ganhando mais opções; estava apenas recebendo um atendimento fragmentado, onde nenhum profissional podia se dar ao luxo de fazer uma auditoria jurídica profunda ou uma busca exaustiva de mercado.</P>
        <P>Apesar de todo o meu esforço, ele fechou negócio com outro profissional, alguém que tinha uma vantagem impossível de competir: proximidade pessoal. Era praticamente da família.</P>
        <P>Conclusão: eu "morri na praia". Três meses de trabalho intenso. Um investimento significativo. Nenhum retorno, nem sequer o reembolso dos custos. E mais: deixei de atender outros clientes, pois meu tempo estava quase integralmente dedicado a ele.</P>
        <P>Ele poderia, no mínimo, ter arcado com os custos do atendimento e ele teria feito facilmente, afinal dinheiro não é problema para este cliente. Mas, no Brasil, essa prática simplesmente não existe. Seria considerado um absurdo cobrar por isso. Essa é a dor invisível do comprador: ao acreditar que o serviço é "gratuito" porque a comissão vem do vendedor, ele inconscientemente sabota a qualidade do diagnóstico que recebe. Sem pagar pelo tempo do profissional, o comprador perde o direito de exigir exclusividade, profundidade e uma curadoria blindada.</P>
        <P>Foi nesse momento que tomei uma decisão: se eu quiser continuar nesse mercado, precisaria provocar uma mudança.</P>
        <P>No início da carreira, o investimento no atendimento gratuito parecia plausível. Eu estava aprendendo, conhecendo o mercado, entendendo a região, captando imóveis. Havia um propósito de crescimento. Mas, com o passar dos anos, aquilo deixou de ser aprendizado. Tornou-se exploração de um lado, e desinformação do outro.</P>
        <P>Meu trabalho como corretora de imóveis sempre teve um propósito maior. O dinheiro é consequência. Antes da advocacia, atuei no mercado financeiro, em grandes instituições. Minha última experiência foi no Citibank, pouco antes de sua saída do Brasil, onde trabalhei na retomada de bens imóveis de clientes inadimplentes.</P>
        <P>Era um trabalho que doía. Todos os dias, eu participava do processo de retirar famílias de suas casas. Algumas eram inadimplentes por escolha, mas a grande maioria enfrentava dificuldades reais, situações que as levaram àquele ponto. Eu pensava constantemente: alguém precisa fazer esse trabalho. Então que seja eu, porque, dentro do possível, eu ainda buscava soluções, tentava acordos, procurava amenizar aquela dor.</P>
        <P>Até que, em 2015, virei a chave. Deixei de tirar casas de pessoas e passei a entregá-las. Passei a realizar sonhos.</P>
        <P>Com o tempo, evoluí. Hoje, meu papel vai muito além da venda. Eu ofereço consultoria estratégica para que o cliente não apenas realize um sonho, mas também construa patrimônio com inteligência, adquirindo imóveis com liquidez e visão de futuro. E é aqui que o comprador ganha: quando ele formaliza a contratação dessa consultoria, ele deixa de ser apenas um "lead" na agenda de um corretor com pressa para se tornar o detentor de um serviço focado em proteger seu legado financeiro.</P>
        <P>Mas, mesmo com toda essa evolução, eu ainda me via, repetidamente, trabalhando de graça. E, por mais que eu tenha um propósito e que o dinheiro seja, de fato, uma consequência do meu trabalho, eu preciso ser remunerada por ele. Atendendo clientes que consumiam meu conhecimento e muitas vezes nem compravam. Pessoas que estavam apenas especulando enquanto eu investia meu tempo, minha energia e minha expertise.</P>
        <P>Outros fatores começaram a reforçar em mim a sensação de que algo estava profundamente errado. Até que um novo episódio, aparentemente simples, mudou ainda mais minha perspectiva.</P>
        <P>Certo dia, tentei agendar uma avaliação com uma tatuadora. Foi então que sua secretária me informou que havia uma taxa inicial para a consulta, valor que seria posteriormente abatido caso eu realizasse a tatuagem.</P>
        <P>Aquilo me impactou. "Uau", pensei. "Essa profissional deve ser realmente extraordinária." Isso já é uma prática recorrente de médicos. Mas uma tatuadora? Aquilo, para mim, foi revelador. Naquele instante, não vi um obstáculo. Vi valor. Vi uma profissional que respeitava o próprio trabalho e que, por isso, era respeitada. E, naturalmente, eu fiz a tatuagem.</P>
        <P>O cliente sério não foge da cobrança quando enxerga a contrapartida em excelência. Ele entende que a taxa não é um custo, mas um filtro de respeito mútuo.</P>
        <img src={imgConsulting} alt="Professional real estate consulting" className="w-full h-auto aspect-[16/9] object-cover my-12 opacity-90 rounded-sm border border-[#E0E0E0]/10" />
        <P>O mercado imobiliário brasileiro mudou. Ficou para trás o tempo em que o corretor era visto como alguém sem formação, que recorria à profissão por falta de alternativas. Hoje, o corretor estuda, se especializa, se dedica. Atua em transações milionárias, complexas e carregadas de responsabilidade.</P>
        <P>E, ainda assim, seu trabalho muitas vezes não é remunerado.</P>
        <P>O que proponho neste E-book não é uma revolução, é uma evolução. Em diversos países, esse modelo já é realidade. O que defendo aqui é simples e seguro para ambos os lados: se a venda não se concretizar, o tempo, o conhecimento e a dedicação investidos devem ser remunerados de forma justa. Para o corretor, isso significa sustentabilidade e valorização. Para o comprador, significa a certeza absoluta de que o profissional ao seu lado está trabalhando para defender o seu bolso, e não correndo desesperado atrás de qualquer comissão.</P>
        <P>Porque toda dor, quando ignorada, se torna um sistema. E eu decidi não fazer mais parte dele.</P>
      </>
    )
  },
  {
    title: "Capítulo 2 - O Pacto de Respeito Mútuo",
    content: (
      <>
        <H3>Por Que Serviços Gratuitos Custam Caro ao Comprador</H3>
        <P>Durante anos, o mercado imobiliário normalizou uma prática silenciosa e profundamente prejudicial para ambos os lados da mesa: o corretor trabalha sem garantias e o cliente decide depois se aquele tempo investido teve algum valor.</P>
        <P>No entanto, quando comparamos essa dinâmica com qualquer outra profissão de alto nível, o cenário se mostra completamente distorcido. Você agenda uma consulta médica e você paga pelo diagnóstico. Você consulta um advogado e você paga pelo parecer técnico. Você contrata um personal trainer e você paga antes mesmo do primeiro treino.</P>
        <P>No mercado imobiliário, criou-se a ilusão de que o tempo e o intelecto do corretor não possuem custo. Esse equívoco não é culpa do comprador; é um erro estrutural do próprio mercado. Fomos nós, corretores, que ensinamos o cliente a acreditar que nossa assessoria especializada era um recurso gratuito e ilimitado.</P>
        <P>O grande perigo dessa ilusão para o comprador é que o serviço "gratuito" geralmente entrega o que é conveniente para o vendedor, e não o que é seguro para quem compra. Quando não há um pacto financeiro inicial, o corretor é forçado a atuar com pressa, tentando empurrar qualquer imóvel para garantir o sustento do seu negócio.</P>
        <P>Formalizar o início do trabalho — seja através de um contrato de representação ou de uma taxa de assessoria e visita — não significa cobrar simplesmente para girar uma chave e abrir uma porta. Para o cliente comprador, significa contratar um pacote de alto valor que inclui:</P>
        <UL>
          <LI><strong>Curadoria blindada:</strong> A certeza de que o profissional passou horas filtrando apenas o que realmente faz sentido para o seu perfil e patrimônio.</LI>
          <LI><strong>Inteligência de mercado:</strong> Acesso a dados reais de precificação, histórico do imóvel e análises de liquidez futura.</LI>
          <LI><strong>Advocacia e estratégia de compra:</strong> Um profissional focado exclusivamente em defender o menor preço e as melhores condições para o comprador durante a negociação.</LI>
          <LI><strong>Tempo dedicado:</strong> A garantia de que a agenda daquele especialista está reservada para cuidar dos interesses dele, e não pulverizada em dezenas de atendimentos superficiais.</LI>
        </UL>
        <P>Quando o cliente estabelece esse compromisso comercial, uma transformação imediata acontece na jornada de compra:</P>
        <UL>
          <LI><strong>O comprador assume o controle:</strong> Ele deixa de ser apenas mais um visitante na agenda de um corretor aleatório e passa a ser o chefe de um projeto conduzido por um especialista contratado.</LI>
          <LI><strong>A qualidade substitui o cansaço:</strong> Em vez de visitar trinta imóveis errados com cinco profissionais diferentes que enviam os mesmos links de portais, o comprador realiza visitas cirúrgicas, assertivas e seguras.</LI>
        </UL>
        <P>A formalização e a cobrança justa não afastam os clientes sérios; elas filtram os especuladores e protegem o tempo de quem realmente quer realizar um negócio seguro. Filtrar não reduz as oportunidades do comprador, aumenta drasticamente a qualidade e a segurança jurídica de sua escolha.</P>
        <P>O corretor que trabalha sem critérios vive ocupado mostrando imóveis inadequados para quem não quer comprar. O corretor e o comprador que estabelecem um pacto profissional prévio vivem uma jornada produtiva, focada em construir um legado financeiro sólido. Existe uma diferença enorme entre os dois cenários.</P>
      </>
    )
  },
  {
    title: "Capítulo 3 - A Grande Inversão",
    content: (
      <>
        <H3>Pare de Vender Imóveis e Comece a Vender o Seu Serviço</H3>
        <P>O mercado imobiliário brasileiro padece de um sintoma crônico: o corretor é um exímio vendedor de imóveis, mas é um péssimo vendedor do próprio serviço.</P>
        <img src={imgProfessional} alt="Confident real estate professional" className="w-full h-auto aspect-[16/9] object-cover my-12 opacity-90 rounded-sm border border-[#E0E0E0]/10" />
        <P>Se você perguntar a um corretor o que ele faz, a resposta quase sempre será: "Eu vendo casas, apartamentos, terrenos". Ao focar no produto físico, o profissional comete um erro tático grave. Ele transfere todo o valor da transação para o tijolo, reduzindo a si mesmo a um mero intermediador de chaves.</P>
        <P>Essa falha no posicionamento gera três consequências devastadoras que paralisam o mercado:</P>
        <UL>
          <LI><strong>O corretor trabalha sem contrato de representação:</strong> operando na base da informalidade.</LI>
          <LI><strong>O corretor trabalha sem garantia de pagamento:</strong> dependendo da boa-fé volátil do mercado.</LI>
          <LI><strong>O corretor trabalha para múltiplos clientes que não têm compromisso:</strong> gastando combustível e energia com quem está apenas "sondando".</LI>
        </UL>
        <P>Existe uma máxima que todo profissional de alto valor precisa internalizar: <strong>"Quem não cobra pelo serviço, não é contratado — é testado."</strong> E quem está apenas sendo testado pode ser descartado a qualquer momento.</P>
        
        <H3>O Perigo do "Corretor Testado" para o Comprador</H3>
        <P>Muitos compradores acreditam que colocar cinco corretores diferentes para buscar o mesmo imóvel é uma vantagem competitiva. Pensam: "Quem achar primeiro e me der o menor preço, ganha". O que o comprador não percebe é que essa prática cria um ambiente de desconfiança onde ele é o maior prejudicado.</P>
        <P>Quando um corretor sabe que está apenas sendo "testado" em uma competição desleal com outros profissionais, duas coisas acontecem:</P>
        <UL>
          <LI><strong>Ele esconde o jogo:</strong> O corretor não vai entregar suas melhores opções (off-market) nem investir horas em uma pesquisa profunda, com medo de que o cliente pegue aquela informação e feche com outro. O comprador recebe apenas as opções óbvias dos portais.</LI>
          <LI><strong>O foco muda da segurança para a velocidade:</strong> O corretor passa a ter pressa para empurrar qualquer imóvel antes que o concorrente o faça. A análise minuciosa de certidões, os riscos de condomínio e a avaliação real de liquidez futura são deixados de lado. O comprador perde o seu escudo de proteção.</LI>
        </UL>

        <H3>A Vantagem Mútua da Venda de Serviço</H3>
        <P>Mudar o foco da venda do imóvel para a venda do serviço de assessoria reequilibra a balança e gera benefícios claros para ambas as partes:</P>
        <CompareGrid 
          headers={["Para o Corretor de Imóveis", "Para o Cliente Comprador"]}
          rows={[
            ["Previsibilidade Financeira: Transforma o ganho esporádico em uma operação comercial sustentável e estruturada.", "Lealdade Cega ao Seu Bolso: A certeza absoluta de que o corretor usará toda a sua habilidade para negociar o menor preço para você, e não para inflar o preço em busca de comissão maior do vendedor."],
            ["Fim do Turismo Imobiliário: Parar de gastar tempo com curiosos e focar a energia apenas em leads qualificados e prontos.", "Auditoria e Blindagem Jurídica Completa: O comprador passa a ter o direito de exigir uma análise exaustiva de riscos patrimoniais antes de assinar qualquer promessa de compra."],
            ["Posicionamento de Autoridade: O profissional deixa de ser visto como um 'corretor de anúncios' e passa a ser respeitado como um consultor estratégico.", "Centralização e Paz de Espírito: O cliente não precisa mais falar com dez imobiliárias. Ele delega a busca a um único parceiro de confiança, que fará todo o filtro pesado de mercado."]
          ]}
        />
        <P>Quando você aprende a vender o seu serviço, você estabelece um pacto de excelência. O cliente sério não quer um corretor gratuito que trabalha com pressa; ele quer um consultor contratado que trabalha com precisão.</P>
      </>
    )
  },
  {
    title: "Capítulo 4 — O que as Profissões de Elite já Entenderam",
    content: (
      <>
        <H3>E o Mercado Imobiliário Precisa Praticar</H3>
        <P>Por que aceitamos pagar antecipadamente por um diagnóstico médico, mas achamos natural que um corretor gaste semanas diagnosticando as necessidades imobiliárias de uma família sem qualquer garantia?</P>
        <P>As profissões de elite compartilham de um fundamento comercial idêntico: elas não vendem o produto final; elas vendem a segurança de sua expertise e a exclusividade do seu tempo. Quando analisamos a estrutura desses mercados, a distorção do modelo tradicional imobiliário brasileiro fica ainda mais evidente.</P>
        
        <H3>1. Medicina: O Valor do Diagnóstico</H3>
        <UL>
          <LI><strong>A Prática:</strong> Médicos cobram pela consulta de forma antecipada. O cancelamento de última hora gera retenção de valores. O tempo do profissional é tratado como um ativo escasso.</LI>
          <LI><strong>O que o paciente ganha:</strong> Ao pagar pela consulta, o paciente garante a atenção plena do especialista para investigar seus sintomas de forma individualizada, sem pressa. Ninguém aceitaria um médico gratuito que precisa atender cinquenta pessoas correndo para tentar vender um remédio no final.</LI>
        </UL>

        <H3>2. Advocacia: A Blindagem Contratual</H3>
        <UL>
          <LI><strong>A Prática:</strong> Os honorários são rigidamente definidos em contrato antes do início de qualquer ação. A consulta jurídica e o parecer técnico são cobrados independentemente do resultado final da ação judicial. Existe o respaldo institucional de tabelas de honorários mínimos.</LI>
          <LI><strong>O que o cliente ganha:</strong> O cliente contrata o distanciamento crítico e a capacidade técnica do advogado para avaliar riscos antes que o problema aconteça. O advogado não começa a trabalhar para depois "ver se o cliente vai pagar"; ele é remunerado para blindar os interesses de quem o contratou.</LI>
        </UL>

        <H3>3. Personal Training: O Compromisso com o Processo</H3>
        <UL>
          <LI><strong>A Prática:</strong> Pacotes mensais ou semestrais pagos de forma 100% antecipada. O horário reservado na agenda do profissional representa um compromisso financeiro, ocorra ou não o treino por parte do aluno.</LI>
          <LI><strong>O que o aluno ganha:</strong> A garantia de um acompanhamento sob medida, com um treino periodizado especificamente para suas limitações e objetivos. O cliente paga pela exclusividade da hora do profissional e pelo método, não apenas pela execução física dos exercícios.</LI>
        </UL>

        <H3>4. Estética e Beleza Premium: A Valorização da Agenda</H3>
        <UL>
          <LI><strong>A Prática:</strong> Procedimentos complexos exigem sinal de reserva. Cancelamentos fora do prazo estipulado cobram o valor integral ou parcial da agenda bloqueada.</LI>
          <LI><strong>O que o cliente ganha:</strong> A certeza de pontualidade, atendimento personalizado e insumos de altíssima qualidade separados exclusivamente para o seu horário, sem filas ou atrasos.</LI>
        </UL>

        <H3>5. Consultoria Empresarial: O Pagamento pelo Pensamento</H3>
        <UL>
          <LI><strong>A Prática:</strong> Cobrança estruturada por hora técnica ou escopo fechado de projeto, muitas vezes utilizando retainers (taxas de retenção mensais).</LI>
          <LI><strong>O que a empresa ganha:</strong> O cliente paga pela inteligência estratégica e pela capacidade de solucionar problemas complexos, e não pela força de trabalho física.</LI>
        </UL>

        <H3>A Grande Virada: O que Acontece Quando o Mercado Imobiliário se Torna Elite?</H3>
        <P>Quando trazemos a maturidade dessas profissões para a corretagem imobiliária, o jogo se transforma para ambos os lados:</P>
        <CompareGrid 
          headers={["Para o Corretor de Imóveis", "Para o Cliente Comprador"]}
          rows={[
            ["Respeito à Agenda: O fim das tardes de sábado perdidas com 'clientes' que apenas queriam passear ou especular preços.", "Consultoria de Elite: A certeza de que o corretor estudou o mercado, checou a documentação prévia e fez um diagnóstico real antes de indicar um imóvel."],
            ["Valorização Intelectual: A transição do papel de 'mostrador de casas' para o de consultor estratégico de investimentos.", "Isenção Total: O comprador passa a ter um profissional que pode dizer com segurança: 'Não compre este imóvel, ele não tem liquidez', pois seus honorários estão garantidos pelo serviço, não pelo fechamento forçado."],
            ["Filtro Automático: O mercado passa a selecionar naturalmente os profissionais que entregam real valor técnico e jurídico.", "Economia de Tempo: O fim do estresse de lidar com amadores. O cliente passa a ser atendido por um especialista que valoriza o próprio tempo e, por consequência, o tempo do comprador."]
          ]}
        />
        <P>As profissões de elite já entenderam que cobrar pelo processo é a única forma de garantir a excelência do resultado. O mercado imobiliário brasileiro está pronto para essa evolução. O comprador sério não procura o serviço mais barato ou "gratuito"; ele procura o profissional que oferece a maior segurança jurídica e patrimonial para a sua família.</P>
      </>
    )
  },
  {
    title: "Capítulo 5 — O Corretor: O Único que Trabalha de Graça",
    content: (
      <>
        <H3>E Por Que o Comprador Paga o Pato</H3>
        <P>O diagnóstico do mercado imobiliário tradicional se resume a uma série de verdades desconfortáveis que a maioria prefere ignorar. Vivemos em um ecossistema onde o profissional:</P>
        <UL>
          <LI>Mostra imóveis sem a segurança de um contrato de representação.</LI>
          <LI>Investe tempo, combustível, conhecimento e relevância sem qualquer garantia de retorno.</LI>
          <LI>Compete cegamente com outros corretores pelo mesmo cliente, transformando o mercado em um leilão de conveniência.</LI>
        </UL>
        <P>Existe uma frase que resume perfeitamente a humilhação comercial desse antigo modelo: <strong>"Enquanto todas as profissões cobram para começar, o corretor implora para continuar."</strong></P>
        <img src={imgContract} alt="Signing a luxury contract" className="w-full h-auto aspect-[16/9] object-cover my-12 opacity-90 rounded-sm border border-[#E0E0E0]/10" />
        <P>Essa postura de "implorar" destrói a autoridade do profissional. Quem implora não aconselha; quem implora tenta agradar. E é exatamente aqui que a segurança do comprador desmorona.</P>

        <H3>O Efeito Colateral para o Comprador: O Corretor "Refém da Venda"</H3>
        <P>Quando o comprador aceita trabalhar com um corretor que opera nesse sistema informal e gratuito, ele não está levando vantagem. Ele está, na verdade, contratando um profissional que foi colocado em uma posição de extrema vulnerabilidade financeira.</P>
        <BQ>
          <strong>O Risco Invisível:</strong> Um corretor que trabalha de graça e precisa competir com outros cinco profissionais pelo mesmo fechamento torna-se um <em>refém da venda</em>. Ele não pode se dar ao luxo de ser isento. Se ele encontrar um problema na documentação do imóvel ou um risco de desvalorização na região, ele sofrerá a tentação humana de silenciar, com medo de que o comprador desista e o seu investimento de meses vá para o lixo.
        </BQ>
        <P>O modelo gratuito força o mercado a ser transacional, quando ele deveria ser consultivo. O comprador perde o seu aliado mais valioso e passa a ter ao lado alguém pressionado pelo relógio e pelas contas.</P>

        <H3>A Virada de Chave: O Equilíbrio da Parceria Comercial</H3>
        <P>A introdução do contrato de representação e da remuneração pelo serviço prestado quebra esse ciclo vicioso e estabelece uma relação de parceria comercial onde os dois lados ganham:</P>
        <UL>
          <LI><strong>Para o Corretor (A Dignidade Reconhecida):</strong> O fim da ansiedade de trabalhar às cegas. O profissional passa a ter a segurança jurídica de que seu tempo e know-how são ativos valorizados, permitindo que ele foque 100% de sua energia na busca pela melhor oportunidade.</LI>
          <LI><strong>Para o Comprador (A Isenção Contratada):</strong> O cliente ganha o direito de exigir a verdade nua e crua. Como os honorários do corretor estão pactuados pelo serviço de assessoria e curadoria, o profissional tem total liberdade e tranquilidade para dizer: "Não compre este imóvel. Fiz a análise patrimonial e ele não é seguro para o seu legado". O comprador adquire paz de espírito.</LI>
        </UL>
        <P>Parar de implorar não é apenas uma escolha financeira do corretor; é um selo de proteção para o patrimônio do comprador. Quando o corretor valoriza o próprio ponto de partida, o cliente finalmente ganha um destino seguro.</P>
      </>
    )
  },
  {
    title: "Capítulo 6 — O Cenário Global",
    content: (
      <>
        <H3>Como o Primeiro Mundo Protege o Comprador e o Corretor</H3>
        <P>Quando propomos uma mudança de cultura no mercado imobiliário brasileiro, é comum ouvirmos o eco do ceticismo: "Isso não vai funcionar aqui", "O cliente nunca vai aceitar" ou "Sempre foi assim".</P>
        <P>No entanto, quando olhamos para as maiores potências econômicas do mundo, descobrimos uma realidade incontestável: o modelo brasileiro de corretagem informal e baseada no "trabalho gratuito" é uma anomalia global. Países com mercados maduros e de primeiro mundo entenderam há décadas que a transação imobiliária é complexa e valiosa demais para ser baseada no improviso.</P>
        <P>Neste capítulo, vamos cruzar as fronteiras dos mercados mais eficientes do planeta para entender como a formalização do serviço e o pacto contratual prévio são os maiores escudos de proteção para o patrimônio do comprador e para a dignidade do corretor.</P>

        <H3>1. Estados Unidos: O Fim das "Portas Abertas" e a Era da Transparência</H3>
        <P>O mercado americano é amplamente regulado e centralizado pelo sistema Multiple Listing Service (MLS). Lá, a figura do Buyer's Agent (o corretor exclusivo do comprador) sempre foi a norma, mas uma transformação jurídica recente mudou o jogo de forma radical.</P>
        <UL>
          <LI><strong>A Grande Virada (Caso Sitzer-Burnett):</strong> Uma ação coletiva antitruste histórica condenou as práticas tradicionais que embutiam a comissão do corretor do comprador de forma oculta no preço pago pelo vendedor.</LI>
          <LI><strong>A Nova Regra de Ouro:</strong> Com isso, tornou-se estritamente obrigatório que o corretor e o potencial comprador assinem um acordo escrito — o Buyer-Broker Agreement — antes de realizarem a primeira visita a qualquer imóvel. Valores abertos ou termos vagos foram banidos; a remuneração deve ser clara e detalhada na largada.</LI>
        </UL>
        <BQ>
          <strong>A Vantagem para o Comprador:</strong> O cliente ganhou transparência absoluta de custos. Ele deixa de ser refém de comissões embutidas e passa a ter a garantia de que seu corretor trabalhará para buscar o menor preço na negociação, sem conflito de interesses.
        </BQ>

        <H3>2. Canadá: O Dever Fiduciário e o Rigor da Lei</H3>
        <P>O mercado imobiliário canadense opera sob uma das legislações de proteção ao consumidor mais rígidas do mundo, sob a tutela de órgãos reguladores como a RECO (em Ontário).</P>
        <UL>
          <LI><strong>O Buyer Representation Agreement (BRA):</strong> Ninguém começa uma busca imobiliária no Canadá sem assinar este contrato formal de exclusividade. A legislação local exige clareza absoluta sobre quem está pagando pelo serviço antes de qualquer ato de mediação.</LI>
          <LI><strong>Combate à Dupla Representação:</strong> Leis recentes, como a TRESA, combatem fortemente o conflito de interesses de um mesmo corretor tentar representar o comprador e o vendedor no mesmo negócio. O profissional é obrigado a escolher um lado para defender.</LI>
        </UL>
        <BQ>
          <strong>A Vantagem para o Comprador:</strong> Ao assinar o contrato, o corretor assume legalmente o <em>Fiduciary Duty</em> (Dever Fiduciário). Isso significa que o profissional é obrigado por lei a colocar os interesses financeiros do comprador acima de tudo. Se houver qualquer risco patrimonial ou defeito oculto no imóvel, o corretor é obrigado a alertar o cliente, funcionando como uma auditoria viva.
        </BQ>

        <H3>3. Inglaterra: A Elite do Acesso com os Buying Agents</H3>
        <P>No Reino Unido, embora os corretores tradicionais de rua (Estate Agents) defendam o vendedor, o mercado de alto padrão consolidou uma figura essencial para quem compra: o Buying Agent (ou Property Finder).</P>
        <UL>
          <LI><strong>O Modelo de Retainer:</strong> Para que um especialista comece a trabalhar na busca de um imóvel para um comprador, cobra-se uma taxa de retenção inicial (retainer fee) não reembolsável. O profissional não move um passo sem a segurança do contrato escrito e do pagamento pelo seu tempo estratégico.</LI>
        </UL>
        <BQ>
          <strong>A Vantagem para o Comprador:</strong> O cliente ganha acesso ao "mercado oculto" (off-market), encontrando propriedades que sequer foram anunciadas publicamente. Além disso, o comprador poupa meses de visitas inúteis, pois o consultor contratado faz a triagem rigorosa de preços e da qualidade da vizinhança antes de apresentar qualquer opção.
        </BQ>

        <H3>4. Dubai: A Rígida Burocracia Governamental contra a Informalidade</H3>
        <P>Conhecido por transações multimilionárias e velocidade impressionante, o mercado de Dubai eliminou completamente o espaço para contratos informais através do Dubai Land Department (DLD).</P>
        <UL>
          <LI><strong>Os Formulários Oficiais da RERA:</strong> Todas as relações imobiliárias precisam ser registradas em formulários eletrônicos oficiais do governo. O comprador e o corretor do comprador devem, obrigatoriamente, assinar o Formulário B (Form B) antes de iniciar as tratativas de mercado.</LI>
        </UL>
        <BQ>
          <strong>A Vantagem para o Comprador:</strong> Proteção total contra fraudes e atravessadores. Ao assinar o documento oficial, o comprador garante que está sendo representado por um profissional certificado pelo governo e legalmente responsável pela segurança da transação, algo vital para investidores estrangeiros.
        </BQ>

        <H3>5. Portugal: A Obrigatoriedade Escrita e a Segurança do Seguro Civil</H3>
        <P>Sob as regras do IMPIC, o mercado imobiliário português baniu os acordos verbais. A informalidade em Portugal é passível de severas punições legais.</P>
        <UL>
          <LI><strong>O Contrato de Mediação Imobiliária (CMI):</strong> Nenhuma imobiliária ou corretor pode pesquisar ou promover um imóvel sem um CMI assinado por escrito, detalhando honorários e condições. Para a busca ativa para compradores, celebra-se o CMI de compra.</LI>
        </UL>
        <BQ>
          <strong>A Vantagem para o Comprador:</strong> Toda empresa licenciada em Portugal (com registro AMI) possui um seguro de responsabilidade civil obrigatório por lei. Ao assinar o contrato escrito, o comprador ganha uma blindagem jurídica: qualquer erro técnico ou documental cometido pelo profissional que cause prejuízo financeiro é integralmente coberto pelo seguro.
        </BQ>

        <H3>O Resumo do Sucesso Global: O Pacto de Valor</H3>
        <img src={imgArch} alt="Global architectural details" className="w-full h-auto aspect-[16/9] object-cover my-12 grayscale hover:grayscale-0 transition-all duration-700 opacity-80" />
        <P>A experiência internacional deixa uma lição clara: a formalização antes da primeira visita não afasta quem quer fazer negócios sérios.</P>
        <CompareGrid 
          headers={["Para o Corretor de Imóveis", "Para o Cliente Comprador"]}
          rows={[
            ["Segurança na Largada: O fim do investimento de risco. O tempo e o conhecimento técnico são tratados como ativos comerciais valorizados.", "O fim do turismo imobiliário. O comprador recebe um filtro cirúrgico e assertivo, economizando tempo precioso."],
            ["Transparência de Custos: Certeza jurídica de recebimento pelos serviços reais de assessoria e curadoria prestados.", "Eliminação de surpresas. A remuneração é combinada previamente e focada em defender o bolso de quem compra."],
            ["Alinhamento Fiduciário: O profissional ganha estabilidade e autoridade para realizar um trabalho consultivo de alto nível.", "O cliente ganha um legítimo 'advogado patrimonial' focado em blindar seu legado e reduzir riscos."]
          ]}
        />
        <P>O primeiro mundo já entendeu que o profissionalismo tem preço, mas a segurança patrimonial não tem preço. Chegou a hora de aplicar essa maturidade e transformar o mercado imobiliário brasileiro.</P>
      </>
    )
  },
  {
    title: "Capítulo 7 — O Manual de Transição Prática",
    content: (
      <>
        <H3>Como Apresentar o Contrato sem Criar Atritos</H3>
        <P>Saber que o primeiro mundo atua com contratos formais nos dá o respaldo teórico, mas é no campo de batalha do mercado brasileiro que a mudança de cultura acontece. A maior barreira para a implementação do contrato de representação não é a reação do cliente, mas sim a insegurança do próprio corretor na hora de se posicionar.</P>
        <P>Se você apresentar o documento com medo, o cliente assinará com desconfiança. Se você apresentar o contrato como um selo de exclusividade e proteção para o patrimônio dele, a assinatura será um passo natural.</P>
        <P>Neste capítulo, você aprenderá o roteiro exato e os scripts práticos para fazer essa transição com elegância, autoridade e foco total nas vantagens para o comprador.</P>

        <H3>1. O Alinhamento de Expectativas: A Reunião de Diagnóstico</H3>
        <P>O maior erro do corretor tradicional é receber um contato de portal imobiliário e imediatamente agendar uma visita ao imóvel. Ao fazer isso, você se posiciona instantaneamente como um "abridor de portas".</P>
        <P>A regra de ouro do Corretor Indispensável é: <strong>Nenhuma visita acontece sem uma reunião prévia de alinhamento (presencial ou por videoconferência).</strong></P>
        <P>Nessa reunião, você não vai tentar vender uma casa; você vai realizar um diagnóstico, exatamente como um médico faz antes de indicar um tratamento. É ao final desta entrevista que o contrato de representação entra em cena.</P>

        <H3>2. O Roteiro de Abordagem e os Scripts Práticos</H3>
        
        <H3>Script A: A Analogia do "Advogado de Defesa" (Para usar durante o diagnóstico)</H3>
        <BQ>
          "Seu comprador precisa entender de que lado você está. Por lei, no modelo tradicional brasileiro, o corretor da placa representa o vendedor. Você precisa mostrar que está mudando essa lógica por ele."
        </BQ>
        <UL>
          <LI><strong>O que dizer:</strong><br/>"Antes de começarmos a buscar as propriedades, eu preciso te explicar algo muito importante sobre como eu trabalho. No mercado tradicional, o corretor atua defendendo o imóvel e os interesses de quem está vendendo, buscando sempre o maior preço possível. O meu modelo de atuação é o inverso: eu atuo como o seu <em>advogado de defesa patrimonial</em>. O meu foco exclusivo é encontrar o melhor imóvel para a sua família, fazer uma auditoria completa de riscos para que você não compre um problema jurídico e negociar para que você pague o menor preço possível. Para que eu possa fazer isso com total isenção e lealdade ao seu bolso, nós formalizamos o nosso início de trabalho através de um pacto escrito de representação."</LI>
        </UL>

        <H3>Script B: Quebrando a Objeção do "Mas ninguém me cobra isso"</H3>
        <BQ>
          "Quando o cliente questionar a necessidade do documento, valide a dúvida dele, mas eleve o nível da conversa mostrando o risco que ele corre no mercado informal."
        </BQ>
        <UL>
          <LI><strong>O que dizer:</strong><br/>"Eu entendo perfeitamente a sua surpresa, e você tem toda razão: a maioria dos corretores no Brasil realmente não trabalha assim. Eles preferem trabalhar sem compromisso, mostrando dezenas de imóveis correndo contra o tempo para tentar bater uma meta. O risco para você nesse modelo é que um profissional sem contrato precisa vender qualquer coisa rapidamente para sobreviver, o que muitas vezes faz com que ele omita problemas estruturais, documentações pendentes ou a falta de liquidez do imóvel. Eu opero no padrão internacional de elite. Eu cobro pelo meu diagnóstico e formalizo nossa busca porque invisto horas fazendo análises profundas de mercado e certidões que outros profissionais não fazem. Você prefere fazer o maior investimento da sua vida com alguém focado na comissão rápida ou com um especialista contratado para proteger o seu dinheiro?"</LI>
        </UL>

        <H3>3. A Estratégia de Transição: O Contrato de Curta Duração</H3>
        <P>Se o cliente ainda demonstrar resistência por não conhecer o seu trabalho de forma profunda, utilize a técnica da Transição Segura. Em vez de exigir um contrato de exclusividade de 6 meses logo no primeiro minuto, ofereça um pacto inicial limitado.</P>
        <UL>
          <LI><strong>O Script de Fechamento Híbrido:</strong><br/>"Para que você se sinta totalmente confortável com o nível da minha entrega, nós não precisamos fazer um contrato de longo prazo agora. Vamos assinar um acordo de representação inicial válido especificamente para os <em>três primeiros imóveis</em> que eu selecionei para a sua curadoria. Após essas visitas, você terá visto na prática como funciona a minha auditoria jurídica e a minha análise de mercado. Se você perceber o valor e a segurança que trago para o seu lado, nós estendemos a parceria até o fechamento. Caso contrário, você fica totalmente livre. Podemos iniciar dessa forma?"</LI>
        </UL>

        <H3>O Resumo da Mudança: A Postura no Fechamento</H3>
        <CompareGrid 
          headers={["O Que o Corretor Invisível Faz", "O Que o Corretor Indispensável Faz"]}
          rows={[
            ["Envia links de portais e corre para abrir a porta do imóvel.", "Agenda uma reunião de diagnóstico para entender o objetivo patrimonial."],
            ["Diz que o serviço é 'gratuito' porque o vendedor paga a comissão.", "Explica que a assessoria exclusiva e a isenção têm um pacto comercial próprio."],
            ["Aceita que o cliente ligue para mais 4 imobiliárias ao mesmo tempo.", "Estabelece o contrato de representação como critério mínimo de atendimento de elite."]
          ]}
        />
        <P>Cobrar pela sua curadoria, pelo seu tempo e exigir o contrato escrito não é um ato de arrogância; é o maior indicador de que você respeita o patrimônio do seu cliente comprador. Quando você se valoriza, o mercado se profissionaliza.</P>
      </>
    )
  },
  {
    title: "Capítulo 8 — O Próximo Passo do Mercado Imobiliário Está em Suas Mãos",
    content: (
      <>
        <P>Chegamos ao fim desta jornada, mas este é, na verdade, o início da sua nova fase profissional. A dor invisível que expusemos ao longo destas páginas não precisa mais ser o combustível do seu dia a dia. Como vimos nos mercados mais maduros do mundo, a transação imobiliária de elite exige respeito mútuo, formalidade e valorização do intelecto.</P>
        <P>A transição do papel de um corretor que apenas abre portas para se tornar um consultor indispensável não acontecerá por decreto governamental ou por uma mudança repentina na cultura do cliente. Ela começará na sua próxima reunião. Começará na primeira vez em que você, com a postura firme e o olhar alinhado à proteção do patrimônio do seu comprador, disser com elegância: "Eu não inicio uma busca sem um pacto formal de lealdade".</P>
        <P>Você possui o conhecimento técnico, a responsabilidade jurídica sobre transações milionárias e, acima de tudo, o controle sobre o seu ativo mais escasso: o seu tempo.</P>
        <P>Não aceite mais ser testado por quem busca o óbvio. Seja contratado por quem exige o extraordinário. O mercado já mudou, e a dignidade da nossa profissão é um legado que construímos a cada contrato assinado.</P>
        <img src={imgPenthouse} alt="Luxury penthouse view at sunset" className="w-full h-auto aspect-[16/9] object-cover my-12 opacity-90 rounded-sm border border-[#E0E0E0]/10" />
        <P>Boas vendas, excelentes assessorias e bem-vindo à era do Corretor Indispensável.</P>
      </>
    )
  }
];
