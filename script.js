const historicoAutismo = [
  {
    ano: 1908,
    texto: "A palavra AUTISMO foi cunhada por Eugen Bleuler para descrever um sintoma da Esquizofrenia, que definiu como sendo uma fuga da realidade."
  },
  {
    ano: 1943,
    texto: "O psiquiatra Leo Kanner publica a obra \"Distúrbios Autísticos do Contato Afetivo\". Ele usa o termo \"autismo infantil precoce\", pois os sintomas já eram evidentes na primeira infância."
  },
  {
    ano: 1944,
    texto: "Hans Asperger escreve o artigo \"A psicopatia autista na infância\". Destacando a ocorrência preferencial em meninos, que apresentam falta de empatia, baixa capacidade de fazer amizades."
  },
  {
    ano: 1950,
    texto: "Hipótese da \"mãe geladeira\", criada por Leo Kanner e reafirmada pelo psicólogo Bruno Bettelheim. Posteriormente Kanner se retrata por essa hipótese."
  },
  {
    ano: 1970,
    texto: "A psicóloga inglesa Lorna Wing desenvolveu a ideia do autismo como espectro, se manifestando em condições e graus variados. Mãe de uma criança autista, ela defendeu uma nova visão social para os autistas e suas famílias e fundou a National Autistic Society (NAS) no Reino Unido."
  },
  {
    ano: 1978,
    texto: "O psiquiatra Michael Rutter e Susan Folstein classificam o autismo como um distúrbio do desenvolvimento cognitivo, criando um marco na compreensão do transtorno."
  },
  {
    ano: 1980,
    texto: "Ocorre a elaboração do DSM-3. O autismo é reconhecido pela primeira vez como uma condição específica e colocado em uma nova classe, a dos Transtornos Invasivos do Desenvolvimento (TID)."
  },
  {
    ano: 1981,
    texto: "Lorna Wing publicou o estudo: Asperger's Syndrome: a Clinical Account, popularizou as pesquisas feitas por Hans Asperger e introduziu o termo Síndrome de Asperger no vocabulário médico."
  },
  {
    ano: 1991,
    texto: "A psicóloga e zootecnista americana Temple Grandin, que é autista, publicou seu livro \"Emergence: Labeled Autistic\", compartilhando suas experiências pessoais e aumentando a conscientização sobre o autismo."
  },
  {
    ano: 1994,
    texto: "Os sistemas do DSM-4 e da CID-10 (Classificação Estatística Internacional de Doenças) tornaram-se equivalentes para evitar confusão entre pesquisadores e clínicos. Inclui diferentes categorias (autismo, Asperger, TGD)."
  },
  {
    ano: 1998,
    texto: "Andrew Wakefield, um médico britânico, publicou um estudo agora amplamente desacreditado, sugerindo uma possível ligação entre a vacina tríplice viral (sarampo, caxumba e rubéola) e o autismo. Essa pesquisa teve um impacto significativo na percepção do autismo, mas foi posteriormente considerada fraudulenta e retirada. A revista se retratou publicamente."
  },
  {
    ano: 2007,
    texto: "Instituição do Dia Mundial de Conscientização do TEA pela ONU (2 de abril)."
  },
  {
    ano: 2009,
    texto: "A Conferência das Nações Unidas adotou uma resolução que reconheceu o dia 2 de abril como o Dia Mundial da Conscientização do Autismo, com o objetivo de aumentar a conscientização sobre o TEA em todo o mundo."
  },
  {
    ano: 2012,
    texto: "No Brasil, Berenice Piana, coautora da lei 12.764, sancionada em 28 de dezembro de 2012, que instituiu a Política Nacional de Proteção dos Direitos da Pessoa com transtornos do espectro autista."
  },
  {
    ano: 2013,
    texto: "O DSM-5 passa a abrigar todas as subcategorias do autismo em um único diagnóstico: Transtorno do Espectro Autista (TEA)."
  },
  {
    ano: 2015,
    texto: "No Brasil, a Lei Brasileira de Inclusão da Pessoa com Deficiência (13.146/15) cria o Estatuto da Pessoa com Deficiência, inclui a pessoa com TEA para efeitos de lei, aumentando o acesso a direitos."
  },
  {
    ano: 2019,
    texto: "No Brasil, foi sancionada a Lei 13.861 que obriga o IBGE a perguntar sobre o TEA no censo populacional."
  },
  {
    ano: 2020,
    texto: "A nova versão da Classificação Estatística Internacional de Doenças e Problemas Relacionados à Saúde, a CID 11, segue o que foi proposto no DSM-V, e passa a adotar a nomenclatura Transtorno do Espectro do Autismo."
  },
  {
    ano: 2022,
    texto: "No Brasil, ocorre a expansão de políticas de atendimento multidisciplinar no Sistema Único de Saúde para as pessoas dentro do espectro."
  },
  {
    ano: 2023,
    texto: "O cientista brasileiro Alysson Muotri foi selecionado e participou de uma missão espacial na Estação Espacial Internacional (ISS). Durante a missão, conduziu pesquisas voltadas à proteção do cérebro de astronautas frente aos efeitos da microgravidade, além de desenvolver estudos sobre autismo e neurodesenvolvimento, utilizando organoides cerebrais (\"minicérebros\")."
  },
  {
    ano: 2025,
    texto: "No Brasil, foi sancionada a Lei nº 15.131, de 29 de abril de 2025, que complementou a Lei nº 12.764/2012 (Lei Berenice Piana), ao especificar a garantia de nutrição adequada e a oferta de terapia nutricional para pessoas com Transtorno do Espectro Autista (TEA), fortalecendo a assistência interdisciplinar e o cuidado integral à saúde dessa população."
  }
];

const wrapper = document.getElementById('swiperWrapper');
const track = document.getElementById('timelineTrack');

historicoAutismo.forEach((item, i) => {
  // slide
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<p class="slide-text">${item.texto}</p><img class="slide-img" src="imgs/${item.ano}.png" alt="Imagem representando o ano ${item.ano}">`;
  wrapper.appendChild(slide);

  // dot
  const btn = document.createElement('button');
  btn.className = 'dot-btn' + (i === 0 ? ' active' : '');
  btn.setAttribute('aria-label', `Ir para ${item.ano}`);
  btn.dataset.index = i;
  btn.innerHTML = `<div class="dot"></div><span class="dot-label">${item.ano}</span>`;
  track.appendChild(btn);
});

// Init Swiper
const swiper = new Swiper('#teaSwiper', {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 350,
  allowTouchMove: true,
  on: {
    slideChange() {
      updateDots(this.activeIndex);
    }
  }
});

// Dot click → swiper
track.addEventListener('click', e => {
  const btn = e.target.closest('.dot-btn');
  if (!btn) return;
  swiper.slideTo(+btn.dataset.index);
});

function updateDots(idx) {
  document.querySelectorAll('.dot-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  // scroll active dot into view
  const activeDot = track.children[idx];
  if (activeDot) activeDot.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
}