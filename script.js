const horasJejum = document.getElementsByName("jj");
const btn = document.querySelector(".btn-imprimir");
const cort = document.querySelector(".cortisol");
const cortS = document.querySelector(".cortisolS");
const serotonina = document.querySelector(".serotonina");
const psa = document.querySelector(".psa");
const eas = document.querySelector(".eas");
const easCultura = document.querySelector(".easCultura");
const epf = document.querySelector(".epf");
const mif = document.querySelector(".mif");
const escarro = document.querySelector(".escarro");
const uri24 = document.querySelector(".uri24");
const esp = document.querySelector(".esp");
const dna = document.querySelector(".dna");
const toxicologico = document.querySelector(".toxicologico");
const glipp = document.querySelector(".glipp");
const btnShowSection = document.querySelectorAll(".btnShowSection");
const sessaoJejum = document.querySelector(".sec-jejum");
const sessaoPreparosAdicionais = document.querySelector(".preparos-adicionais");
const sessaoMateriais = document.querySelector(".sec-materiais");
const observacao = document.querySelector(".observacao");
const resultados = document.querySelectorAll(".lista-materiais");

/* ------- Animação em cada sessao --------- */
function activeModal(btn, index) {
  if (index === 0) {
    sessaoJejum.classList.toggle("SectionOn");
  }
  if (index === 1) {
    sessaoPreparosAdicionais.classList.toggle("SectionOn");
  }
  if (index === 2) {
    sessaoMateriais.classList.toggle("SectionOn");
    resultados.forEach((res) => {
      res.classList.toggle("SectionOn");
    });
  }
  if (index === 3) {
    observacao.classList.toggle("SectionOn");
  }
}
btnShowSection.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    activeModal(btn, index);
  });
});
/* ------- Animação em cada sessao --------- */


/* ----------- open/close menu -------- */
const btnMenu = document.querySelector('.menu-btn')
const menuContainer = document.querySelector('.container-menu')

function toggleMenu() {
  menuContainer.classList.toggle('activeMenu')
}
btnMenu.addEventListener('click', toggleMenu)


/* ---------------- open sections on menu -------------- */
const secAsideMenu = document.querySelectorAll('.asideMenu')
const listasSectionsMenu = document.querySelectorAll('.sectionsMenus')

function handleClick(sec, index) {
  listasSectionsMenu[index].classList.toggle('activeSection')  
}
secAsideMenu.forEach((sec, index) => {
  sec.addEventListener('click', () => {
    handleClick(sec, index)
  })
})

/* -------------- sessao to-do list --------------------------- */

 const dataHoje = document.querySelector('.dataHoje')
 const today = new Date()
 dataHoje.innerHTML = today.toLocaleDateString()

 let tarefas = []

 const tarefasAdicionadas = document.querySelector('.input-toDo')
 const btnTodoList = document.querySelector('.btn-toDo')
 const resultadoTarefas = document.querySelector('.resultado-toDoList')
 
 function takeStorage() {
   if (JSON.parse(localStorage.getItem('tarefa'))) {
     tarefas = JSON.parse(localStorage.getItem('tarefa'))
  }
   if (tarefas.length > 0) {
     resultadoTarefas.classList.add('activeTo-do')
     resultadoTarefas.innerHTML = tarefas.map((tarefa, index) => 
     `<li>${index + 1} - ${tarefa} <div><i class="fa-solid fa-circle-xmark"></i> </div></li>`).join('') 
    }
  } 
 takeStorage()
 
 function novaTarefa() {
   if (tarefasAdicionadas.value === '' || tarefasAdicionadas.value ) {
     window.alert('Essa sessão estará disponível em breve')
     return null
    } else {
   tarefas.push(tarefasAdicionadas.value)
   localStorage.setItem('tarefa', JSON.stringify(tarefas))
   tarefasAdicionadas.value = ''
   tarefasAdicionadas.focus()
   resultadoTarefas.classList.add('activeTo-do')
   resultadoTarefas.innerHTML = tarefas.map((tarefa, index) => 
   `<li>${index + 1} - ${tarefa} <div><i class="fa-solid fa-circle-xmark"></i> </div></li>`).join('') 
  }

  const iconCloseTarefa = document.querySelectorAll('.fa-circle-xmark')
  iconCloseTarefa.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      handleRemoveTarefa(icon, index)
    })
  }) 
  }  
  btnTodoList.addEventListener('click', novaTarefa)

      
  const iconCloseTarefa = document.querySelectorAll('.fa-circle-xmark')

    function handleRemoveTarefa(icon, index) {  
      const itemRemovido = tarefas[index]
     tarefas = tarefas.filter(item => item !== itemRemovido)
     console.log(itemRemovido, tarefas)    
     novaTarefa()
  }
  iconCloseTarefa.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      handleRemoveTarefa(icon, index)
    })
  })  

  
  /* ----------------- evento de click "imprimir" --------- */

function handleImprimir() {
  const radios = Array.from(
    document.querySelectorAll('input[type="radio"]:checked')
  );
  if (radios.length === 0) {
    let sectionJejumOff = document.querySelector(".sec-jejum");
    sectionJejumOff.classList.add("printHide");

    let btnShowJejum = document.querySelector(".btnShowJejum");
    btnShowJejum.classList.add("printHide");
  }
  var sectionEspeciaisOff = document.querySelector(".especiaisOff");
  var sectionMateriaisOff = document.querySelector(".materiaisOff");
  const especiaisCheckeds = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked'));
    if (especiaisCheckeds.length === 0) {
      sectionEspeciaisOff.classList.add("printHide");
      sectionMateriaisOff.classList.add("printHide"); 
    }
    especiaisCheckeds.map((especial) => {
    if (!especial.classList.contains("especiais")) {
      let sectionEspeciaisOff = document.querySelector(".especiaisOff");
      sectionEspeciaisOff.classList.add("printHide");
    } else if (!especial.classList.contains("materiaisOff")) {
      let sectionMateriaisOff = document.querySelector(".materiaisOff");
      sectionMateriaisOff.classList.add("printHide");
      console.log(especial);
    }
  });
  for (let i = 0; i < horasJejum.length; i++) {
    if (horasJejum[i].checked) {
      if (i === 0) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `
            <p><i class="fa-solid fa-syringe"></i> <strong>São 4 horas de jejum</strong>. Pode hidratar-se normalmente (apenas com água).</p>
            <p><strong>- Obs:</strong> Evitar atividade física antes do exame.</p>`;
      }
      if (i === 1) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `<p><i class="fa-solid fa-syringe"></i> <strong>São 6 horas de jejum</strong>. Pode hidratar-se normalmente (apenas com água).</p>
        <p><strong>- Obs:</strong> Evitar atividade física antes do exame.</p>`;
      }
      if (i === 2) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `<p><i class="fa-solid fa-syringe"></i> <strong>São 8 à 12 horas de jejum</strong>. Pode hidratar-se normalmente (apenas com água).</p>
        <p><strong>- Obs:</strong> Evitar atividade física antes do exame.</p>`;
      }
      if (i === 3) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `<p><i class="fa-solid fa-syringe"></i>  <strong>São 12 à 14 horas de jejum</strong>. Pode hidratar-se normalmente (apenas com água).</p>
        <p><strong>- Obs:</strong> Evitar atividade física antes do exame.</p>`;
      }
    }
  }
  //--------- PREPAROS ESPECIAIS --------
  if (cort.checked) {
    const resultadoCortisol = document.querySelector(".resultadoCortisol");
    resultadoCortisol.innerHTML = `<p> <i class="fa-solid fa-vial"></i> <strong>Cortisol</strong> - Chegar ao laboratório no máximo
     <strong>até às 7:20 horas</strong>, para realização do repouso
     pré cortisol e realizar a coleta às 8:00 horas. </p>
     <p><strong>- Obs:</strong> Retirar a senha de "cortisol" ao chegar ao laboratório no horário correto.`;
  }

  if (cortS.checked) {
    const resultadoCortisolS = document.querySelector(".resultadoCortisolS");
    resultadoCortisolS.innerHTML = `<p> <i class="fa-solid fa-vial"></i> <strong>Cortisol Salivar</strong> - A coleta
    deve ser feita até duas horas após o horário habitual do paciente acordar ou conforme solicitação médica.</p>
    <p>- Não há necessidade de jejum após dieta leve.</p>
    <p>- Não pode fazer tratamento dentário nas 24 horas que antecedem ao exame.</p>
    <p>- Antes da coleta, é necessário ficar três horas sem escovar os dentes.</p>
    <p>- É necessário informar todos os medicamentos em uso.</p>
    <p><strong>- Obs: Coletar na Matriz - Rua Conde de Araruama n°365 - Centro </strong>`;
  }

  if (serotonina.checked) {
    const resultadoSerotonina = document.querySelector(".resultadoSerotonina");
    resultadoSerotonina.innerHTML = `<p><i class="fa-solid fa-vial"></i> <strong>Serotonina</strong>- Jejum obrigatório de 8 horas.</p>
    <p><strong>- Bebida alcoólica:</strong> A abstinência é obrigatória nas 24 horas que antecedem o exame.</p>
    <p><strong>- Dieta:</strong> Não ingerir nas 24 horas que antecedem o exame: café, chá, chocolate, mate, 
    refrigerante, abacate, abacaxi, ameixa, banana, berinjela, picles, kiwi, manga, nozes, tomate e alimentos
    aromatizados com baunilha.</p>`
  }

  if (psa.checked) {
    const resultadoPsa = document.querySelector(".resultadoPsa");
    resultadoPsa.innerHTML = `<p> <i class="fa-solid fa-vial"></i> <strong>PSA</strong> - Após toque retal, aguardar 2 dias</p>
    <p>- Após ultrassom transretal, 1 dia.</p>
    <p>- Após exercícios pesados, andar de bicicleta, andar de moto
    e à cavalo, aguardar 1 dia.<p/>
    <p>- Após biópsia ou massagem de próstata,
    aguardar 4 semanas.</p>
    <p>- Após ejaculção (relação sexual), aguardar 2 dias.</p>
    `;
  }
  if (glipp.checked) {
    const resultadoGlipp = document.querySelector(".resultadoGlipp");
    resultadoGlipp.innerHTML = `<p> <i class="fa-solid fa-vial"></i> <strong>Glicose pós pradial</strong>
    - Manter a alimentação normal.</p>
    <p>- Anotar o horário do início do almoço (1º garfada).</p>
    <p>- Almoçar em até 20 minutos no máximo.</p>
    <p>- Não ingerir nenhum tipo de alimento após o almoço até
    o horário da coleta, apenas água é permitido.</p>
    <p>- Chegar ao laboratório 15 minutos antes da coleta
    para que o sangue seja colhido exatamente 2 horas após
    o início do almoço. O atraso deixa o exame inválido.</p>`;
  }

  if (esp.checked) {
    const resultadoEsp = document.querySelector(".resultadoEsp");
    resultadoEsp.innerHTML = `<p> <i class="fa-solid fa-vial-circle-check"></i> <strong>Espermograma</strong>- Coleta deve ser realizada com 3 à 5 dias de abstinência sexual/ejaculação.</p>
    <p>- A coleta é de segunda a sexta-feira das 7:00 ás 10:00 horas (coletar o material no laboratório).</p>
    <p>- Local: Rua Conde de Araruama 365º (matriz).</p>`;
  }
  if (dna.checked) {
    const resultadoDna = document.querySelector(".resultadoDna");
    resultadoDna.innerHTML = `<p><i class="fa-solid fa-dna"></i> <strong>DNA</strong> - Levar documento original e copia do comprovante de residência e identidade.</p>
    <p>- De segunda a sexta-feira, de 13:00 às 15:30.</p>
    <p>- Local: Rua Conde de Araruama 365º (matriz).</p>`;
  }
  if (toxicologico.checked) {
    const resultadoToxicologico = document.querySelector(
      ".resultadoToxicologico"
    );
    resultadoToxicologico.innerHTML = `<p><i class="fa-solid fa-biohazard"></i> <strong>Toxicológico</strong></p>
    <p>- Realizado apenas para renovação de CNH.</p>
    <p>- Pagamento somente no cartão de crédito, podendo dividir em até 3x R$60,00.</p>
    <p>- Obrigatório levar CNH original e cópia.</p>
    <p>- De segunda a sexta-feira, de 13:00 às 15:30.</p>
    <p>- Local: Rua Conde de Araruama 365º (matriz).</p>`;
  }
  // ------ Materiais -----------------

  if (eas.checked) {
    const resultadoEas = document.querySelector(".resultadoEas");
    resultadoEas.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong>EAS</strong> - Coletar uma amostra de urina e 
    entregar ao laboratório em até 3 horas após coletado.</p>`;
  }

  if (easCultura.checked) {
    const resultadoEasCultura = document.querySelector(".resultadoEasCultura");
    resultadoEasCultura.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong>EAS + Cultura</strong> - Colher a primeira urina da manhã</p>
   <p> - Usar sempre o recipiente estéril fornecido pelo laboratório e abrir
    apenas na hora da coleta.<p/>
    <p> - Lavar as mãos e região genital com água e sabão.<p/>
    <p> - Iniciar a micção, desprezando o primeiro jato de urina.</p>
    <p> - Entregar ao laboratório em até 3 horas após a coleta.<p/>
    <p>Obs: Período menstrual - Colher a urina 4 dias após o término
    . Aguardar 7 dias após o uso de antibióticos.<p/>`;
  }
  if (uri24.checked) {
    const resultadoUri24 = document.querySelector(".resultadoUri24");
    resultadoUri24.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong>Urina 24 horas</strong>
    - Desprezara a primeira urina da manhã ao se levantar e marcar a hora. Colher todas as urinas dai por diante,
    durante o dia e a noite, se houver.</p>
    <p>- Colher a primeira urina do dia seguinte na mesma hora em que desprezou a urina do dia anterior.</p>
    <p>- Colher todo o volume de cada micção, armazenando em um frasco de água mineral sem gás.</p>
    <p>- Não perder nenhuma micção, isto acarreta erro no resultado dos exames.</p>
    <p>- Entregar todo o volume no laboratório num prazo máximo de 3 horas após a última coleta.</p>
    <p><strong> OBS: Refrigerar durante a coleta.</strong></p>`;
  }

  if (epf.checked) {
    const resultadoEpf = document.querySelector(".resultadoEpf");
    resultadoEpf.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong>EPF</strong> - Coletar uma pequena quantidade de fezes.<p/>
    <p>- Entregar ao laboratório em até 3 horas em temperatura ambiente
    ou manter refrigerada e entregar em até 24 horas.<p/>`;
  }

  if (mif.checked) {
    const resultadoMif = document.querySelector(".resultadoMif");
    resultadoMif.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong>MIF</strong>- Colher 3 amostras de fezes, no prazo
    máximo de 10 dias, alternando entre os dias.</p>
    <p>- Coletar uma pequena quantidade de fezes a cada dia, colocando
    3 amostras juntas num mesmo recipiente.<p/>
    <p>- Evitar coletar em dias seguidos.</p>
    <p>- Não é necessário refrigerar.<p/>`;
  }
  if (escarro.checked) {
    const resultadoEscarro = document.querySelector(".resultadoEscarro");
    resultadoEscarro.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong>Escarro</strong> - Pela manhã, imediatamente após acordar
    eliminar o material de drenagem nasal que estiver presente</p>
    <p>- Escovar os dentes e lavar a boca com bastante água (não utilizar creme dental).</p>
    <p>- Respirar fundo umas 8 a 10 vezes e  tossir profundamente.
    Colher o escarro assim obtido no recipiente de boca larga entregue pelo laboratório.</p>
    <p> - Entregar imediatamente ao laboratório</p>
    <p>- Não se deve misturar o escarro com a saliva pois este ficará
    impróprio para a realização do exame.</p>
    <p>Obs: No caso de haver dificuldade de obter o escarro por falta de secreção
    , recomendamos fazer inalação com vapor de água quente ou
    vaporização com soro fisiológico para estimular a secreção </p>`;
  }

  removeFromScreen();
  window.print();
  document.location.reload();
}

/* removendo da tela ao imprimir */
function removeFromScreen() {
  let subTitle = document.querySelector(".sub-title");
  subTitle.classList.add("printHide");

  let btnPrint = document.querySelector(".btn-imprimir");
  btnPrint.classList.add("printHide");

  let i = document.querySelectorAll(".fa-arrow-down");
  i.forEach((icone) => {
    icone.classList.add("printHide");
  });

  let title = document.querySelector('title')
  title.innerText = '`'

  let meta = document.querySelector('meta')
  meta.innerHTML = '`'

  let sectionEspeciais = document.querySelector(".sectionEspeciais");
  sectionEspeciais.classList.add("printHide");

  let sectionMateriais = document.querySelector(".sectionMateriais");
  sectionMateriais.classList.add("printHide");

  let sectionJejumOff = document.querySelector(".sec-jejum");
  sectionJejumOff.classList.add("printHide");

  let btnObs = document.querySelector(".btnObs");
  btnObs.classList.add("printHide");
}

btn.addEventListener("click", handleImprimir);
