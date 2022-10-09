function authentication() {
  const key = localStorage.getItem("key");
  if (key === "hemolabes") {
    return null;
  } else {
    window.location.href = "login.html";
  }
}
authentication();

const horasJejum = document.getElementsByName("jj");
const btn = document.querySelector(".btn-imprimir");
const cort = document.querySelector(".cortisol");
const resultadoCortisol = document.querySelector(".resultadoCortisol");
const cortS = document.querySelector(".cortisolS");
const serotonina = document.querySelector(".serotonina");
const psa = document.querySelector(".psa");
const eas = document.querySelector(".eas");
const easInfantil = document.querySelector(".easInfantil");
const easCultura = document.querySelector(".easCultura");
const epf = document.querySelector(".epf");
const mif = document.querySelector(".mif");
const escarro = document.querySelector(".escarro");
const uri24 = document.querySelector(".uri24");
const esp = document.querySelector(".esp");
const dna = document.querySelector(".dna");
const toxicologico = document.querySelector(".toxicologico");
const glipp = document.querySelector(".glipp");
const curvaGlicemica = document.querySelector(".curvaGli");
const catec = document.querySelector(".catec");
const btnShowSection = document.querySelectorAll(".btnShowSection");
const sessaoJejum = document.querySelector(".sec-jejum");
const sessaoPreparosAdicionais = document.querySelector(".preparos-adicionais");
const sessaoMateriais = document.querySelector(".sec-materiais");
const observacao = document.querySelector(".observacao");
const materialPD = document.querySelector(".checkMaterialPD");
const marcacaoSUS = document.querySelector(".marcacaoSUS");
const senhaCort = document.querySelector(".senhaCortisol");

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

/* ------- Logout --------- */
const btnLogout = document.querySelector(".btn-logout");
function logOut() {
  localStorage.setItem("key", "");
  window.location.href = "login.html";
}
btnLogout.addEventListener("click", logOut);

/* ----------- open/close menu -------- */
const btnMenu = document.querySelector(".menu-btn");
const menuContainer = document.querySelector(".container-menu");
function toggleMenu() {
  menuContainer.classList.toggle("activeMenu");
  btnMenu.classList.toggle("activeMenu");
}
btnMenu.addEventListener("click", toggleMenu);

/* ---------------- open sections on menu -------------- */
const secAsideMenu = document.querySelectorAll(".asideMenu");
const listasSectionsMenu = document.querySelectorAll(".sectionsMenus");

function handleClick(sec, index) {
  listasSectionsMenu[index].classList.toggle("activeSection");
}
secAsideMenu.forEach((sec, index) => {
  sec.addEventListener("click", () => {
    handleClick(sec, index);
  });
});

/* -------------- sessao to-do list --------------------------- */

const dataHoje = document.querySelector(".dataHoje");
const today = new Date();
dataHoje.innerHTML = today.toLocaleDateString();

const texto = document.querySelector(".input-toDo");
const btnAdd = document.querySelector(".btn-toDo");
const ulResultado = document.querySelector(".resultado-toDoList");

var itensDB = [];

btnAdd.onclick = () => {
  if (texto.value != "") {
    setItemDB();
  }
};
function setItemDB() {
  if (itensDB.length > 5) {
    alert("Limite máximo atingido de 6 itens atingido!");
    return;
  }
  itensDB.push({ item: texto.value, status: "" });
  updateDB();
}
function updateDB() {
  localStorage.setItem("todolist", JSON.stringify(itensDB));
  loadItens();
}
function loadItens() {
  ulResultado.innerHTML = "";
  itensDB = JSON.parse(localStorage.getItem("todolist")) ?? [];
  itensDB.forEach((item, i) => {
    addItemTela(item.item, item.status, i);
  });
}
function addItemTela(text, status, i) {
  const li = document.createElement("li");
  li.innerHTML = `
  <div class='divLi modalMenu'>
    <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i})" />
    <span data-statusIndex=${i}>${text}</span>
    <button onclick="removeItem(${i})" data-i=${i} class="cancelList">
    <i class='bx bxs-message-square-x'></i> 
    </button>
  </div>
  `;
  ulResultado.appendChild(li);
  if (status) {
    document
      .querySelector(`[data-statusIndex="${i}"]`)
      .classList.add("line-through");
  } else {
    document
      .querySelector(`[data-statusIndex="${i}"]`)
      .classList.remove("line-through");
  }
  texto.value = "";
  texto.focus();
}

function done(chk, i) {
  if (chk.checked) {
    itensDB[i].status = "checked";
  } else {
    itensDB[i].status = "";
  }
  updateDB();
}
function removeItem(i) {
  itensDB.splice(i, 1);
  updateDB();
}
loadItens();

// ------ Configurações (dentro do menu)
const horaEntrada = document.querySelector(".inputHoraEntrada")
const horaSaida = document.querySelector(".inputhoraSaida")
const horaEntradaFDS = document.querySelector(".inputHoraEntradaFDS")
const horaSaidaFDS = document.querySelector(".inputhoraSaidaFDS")
const unidade = document.querySelector(".inputUnidade")
const btnConfigHora = document.querySelector(".btnConfig") 

function saveHours() {
  const horarios =  {
    horaEntrada: horaEntrada.value,
    horaSaida: horaSaida.value,
    horaEntradaFDS: horaEntradaFDS.value,
    horaSaidaFDS: horaSaidaFDS.value,
    unidade: unidade.value
   }  

  if(horaEntrada.value == "" || horaSaida.value == "" || horaEntradaFDS.value == "" || horaSaidaFDS.value == ""){
    window.alert("Preencha todos os campos por favor no formato 00:00")
  } else {
    localStorage.setItem("horarios", JSON.stringify(horarios))
    window.alert("Horário atualizado com sucesso!")
  }

}
btnConfigHora.addEventListener("click", saveHours)

/* ----------------- evento de click "imprimir" --------- */

function handleImprimir() {
  const radios = Array.from(
    document.querySelectorAll('input[type="radio"]:checked')
  );
  const sectionJejumOff = document.querySelector(".sec-jejum");
  const btnShowJejum = document.querySelector(".btnShowJejum");
  if (radios.length === 0) {
    sectionJejumOff.classList.add("printHide");
    btnShowJejum.classList.add("printHide");
  }

  const especiaisOff = document.querySelector(".especiaisOff");
  const checksEsp = document.querySelectorAll(
    'input[name="preparoEsp"]:checked'
  );
  if (checksEsp.length != 0) {
    especiaisOff.classList.remove("printHide");
  } else {
    especiaisOff.classList.add("printHide");
  }
  const materiaisOff = document.querySelector(".materiaisOff");
  const checksMat = document.querySelectorAll(
    'input[name="materiais"]:checked'
  );
  if (checksMat.length != 0) {
    materiaisOff.classList.remove("printHide");
  } else {
    materiaisOff.classList.add("printHide");
  }

  /* ------- tempo em jejum -------- */
  for (let i = 0; i < horasJejum.length; i++) {
    if (horasJejum[i].checked) {
      if (i === 0) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `
            <p><i class="fa-solid fa-syringe"></i> <strong>São 4 a 6 horas de jejum</strong>.</p>
            <p>- Pode hidratar-se normalmente (apenas com água).</p>
            <p><strong>- Obs:</strong> Evitar atividade física antes do exame.</p>`;
      }
      if (i === 1) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `<p><i class="fa-solid fa-syringe"></i> <strong>São 6 a 8 horas de jejum.</strong></p>
        <p>- Pode hidratar-se normalmente (apenas com água).</p>
        <p><strong>- Obs:</strong> Evitar atividade física antes do exame.</p>`;
      }
      if (i === 2) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `<p><i class="fa-solid fa-syringe"></i> <strong>São 8 à 12 horas de jejum.</strong></p>
        <p>- Pode hidratar-se normalmente (apenas com água).</p>
        <p><strong>- Obs:</strong> Evitar atividade física antes do exame.</p>`;
      }
      if (i === 3) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `<p><i class="fa-solid fa-syringe"></i>  <strong>São 12 à 14 horas de jejum.</strong></p>
        <p>- Pode hidratar-se normalmente (apenas com água).</p>
        <p><strong>- Obs:</strong> Evitar atividade física antes do exame.</p>`;
      }
      if (i === 4) {
        const resultadoJejum = document.querySelector(".resultadoJejum");
        resultadoJejum.innerHTML = `<p><i class='bx bxs-bowl-hot' ></i> - Não possui jejum para esses exames. Manter a dieta regular.</p>`;
      }
    }
  }

  //--------- PREPAROS ESPECIAIS --------
  if (cort.checked) {
    resultadoCortisol.innerHTML = `<p> <i class="fa-solid fa-vial"></i> <strong>Cortisol</strong> - Chegar ao laboratório no máximo
     <strong>até às 7:20 horas.</strong></p>
     <p>- Realizar o repouso obrigatório antes do exame.</p>
     <p>- Realizar a coleta às 8:00 horas. </p>
     `;
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
    aromatizados com baunilha.</p>`;
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
    resultadoGlipp.innerHTML = `<p> <i class="fa-solid fa-vial"></i> <strong>Glicose pós prandial</strong>
    - Manter a alimentação normal.</p>
    <p>- Anotar o horário do início do almoço (1º garfada).</p>
    <p>- Almoçar em até 20 minutos no máximo.</p>
    <p>- Não ingerir nenhum tipo de alimento após o almoço até
    o horário da coleta, apenas água é permitido.</p>
    <p>- Chegar ao laboratório 15 minutos antes da coleta
    para que o sangue seja colhido exatamente 2 horas após
    o início do almoço. O atraso deixa o exame inválido.</p>`;
  }

  if (catec.checked) {
    const resultadoCatec = document.querySelector(".resultadoCatec");
    resultadoCatec.innerHTML = `<p> <i class="fa-solid fa-vial"></i> <strong> Catecolaminas: </strong></p>
    <p> - <strong>Bebida alcoólica:</strong> A abstinência é desejável nos 5 dias que antecedem o exame teste.</p>
    <p> - <strong>Dieta: </strong> Não é recomendado ingerir durante 5 dias antes da coleta os seguintes
    alimentos: banana, laranja, abacaxi, queijo, café, chá, chocolate, caramelos, marmeladas, doces, sorvetes,
    nozes e bebidas alcoólicas.</p>
    <p> - Não fumar nas 4 horas que antecederem a coleta.</p>
    `;
  }

  if (esp.checked) {
    const resultadoEsp = document.querySelector(".resultadoEsp");
    resultadoEsp.innerHTML = `<p> <i class="fa-solid fa-vial-circle-check"></i> <strong>Espermograma</strong>- Coleta deve ser realizada com 3 à 5 dias de abstinência sexual/ejaculação.</p>
    <p>- A coleta é de segunda a sexta-feira das 7:00 ás 10:00 horas (coletar o material no laboratório).</p>
    <p>- Local: Rua Conde de Araruama 365º (matriz).</p>`;
  }
  if (dna.checked) {
    const resultadoDna = document.querySelector(".resultadoDna");
    resultadoDna.innerHTML = `<p><i class="fa-solid fa-dna"></i> <strong>DNA</strong> - Documentos necessários.</p>
    <p><strong>- Suposto pai:</strong> Cópia do RG e CPF.</p>
    <p><strong>- Mãe:</strong> Cópia do RG e CPF.</p>
    <p><strong>- Filho(a):</strong> Cópia da certidão de nascimento ou RG, CPF ou 
    declaração de nascido vivo.</p>
    <p>- De segunda a sexta-feira, de 13:30 às 15:30.</p>
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

  if (easInfantil.checked) {
    const resultadoEasInfantil = document.querySelector(
      ".resultadoEasInfantil"
    );
    resultadoEasInfantil.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong> Urina - Coletor infantil. </strong></p>
    <p><strong> - Instruções de uso:</strong> Retirar o produto da embalagem somente na hora
    do uso e em condições assépticas.</p>
    <p> - Higienizar a genitália com auxílio de luvas.</p>
    <p> - Segurar uma extremidade do adesivo e retirar o protetor do mesmo.</p>
    <p> - Posicionar a abertura do coletor sobre o períneo e ao longo dos lábios genitais.</p>
    <p> - Pressione delicadamente para fixá-lo</p>
    <p> - Aguardar a micção da criança, inspecionando em intervalos de 30 a 60 minutos.</p>
    <p> - Após a criança urinar, com luvas, descolar e retirar o dispositivo cuidadosamente
    Se necessário, transferir o material coletado para outro recipiente. </p>`;
  }

  if (eas.checked) {
    const resultadoEas = document.querySelector(".resultadoEas");
    resultadoEas.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong> Rotina de Urina (EAS) </strong> - Coletar uma amostra de urina.</p>
    <p> - Usar sempre o recipiente estéril fornecido pelo laboratório e abrir
     apenas na hora da coleta.<p/>
     <p> - Lavar as mãos e região genital com água e sabão.<p/>
     <p> - Iniciar a micção, desprezando o primeiro jato de urina.</p>
     <p> - Entregar ao laboratório em até 3 horas após a coleta.<p/>
     <p><strong>Obs:</strong> Período menstrual - Colher a urina 4 dias após o término
     . Aguardar 7 dias após o uso de antibióticos.<p/>`;
  }

  if (easCultura.checked) {
    const resultadoEasCultura = document.querySelector(".resultadoEasCultura");
    resultadoEasCultura.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong>Cultura de urina</strong> - Colher a primeira urina da manhã</p>
   <p> - Usar sempre o recipiente estéril fornecido pelo laboratório e abrir
    apenas na hora da coleta.<p/>
    <p> - Lavar as mãos e região genital com água e sabão.<p/>
    <p> - Iniciar a micção, desprezando o primeiro jato de urina.</p>
    <p> - Entregar ao laboratório em até 3 horas após a coleta.<p/>
    <p><strong>Obs: </strong> Período menstrual - Colher a urina 4 dias após o término
    . Aguardar 7 dias após o uso de antibióticos.<p/>`;
  }
  if (uri24.checked) {
    const resultadoUri24 = document.querySelector(".resultadoUri24");
    resultadoUri24.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i><strong> Urina 24 horas</strong></p>
    <p>- Desprezara a primeira urina da manhã ao se levantar e marcar a hora. Colher todas as urinas dai por diante,
    durante o dia e a noite, se houver.</p>
    <p>- Colher a primeira urina do dia seguinte na mesma hora em que desprezou a urina do dia anterior.</p>
    <p>- Colher todo o volume de cada micção, armazenando em um frasco de água mineral sem gás.</p>
    <p>- Não perder nenhuma micção, isto acarreta erro no resultado dos exames.</p>
    <p>- Entregar todo o volume no laboratório num prazo máximo de 3 horas após a última coleta.</p>
    <p><strong> OBS: Refrigerar durante a coleta.</strong></p>`;
  }

  if (epf.checked) {
    const resultadoEpf = document.querySelector(".resultadoEpf");
    resultadoEpf.innerHTML = `<p><i class="fa-solid fa-vial-virus"></i> <strong>Parasitológico(EPF)</strong> - Coletar uma pequena quantidade de fezes.<p/>
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

  //Material pendente
  if (materialPD.checked) {
    const resMaterialPD = document.querySelector(".resMaterialPD");
    const setHorario = JSON.parse(localStorage.getItem("horarios"))

    if (setHorario != null || setHorario != undefined) {
      resMaterialPD.innerHTML = `
        <div class="matPD">
        <p><i class='bx bxs-hourglass'></i> - <strong>Exame Pendente </strong> </p>
        <p><i class='bx bxs-printer'></i> - Retirar a senha de <strong>Material Pendente</strong> ao chegar no laboratório para
        agilizar o seu atendimento.</p>
        <p><strong>Obs:</strong> Senha exclusiva para exames já cadastrados anteriormente.</p>
        <p>- <strong>Horário de coleta (${setHorario.unidade}): </strong>De <strong>${setHorario.horaEntrada}h</strong> às <strong>${setHorario.horaSaida}h</strong>
         - <strong>Sábado:</strong> De <strong>${setHorario.horaEntradaFDS}h</strong> às <strong>${setHorario.horaSaidaFDS}h</strong></p>
        </div> 
     `
    } else {
      resMaterialPD.innerHTML = `
        <div class="matPD">
        <p><i class='bx bxs-hourglass'></i> - <strong>Exame Pendente </strong> </p>
        <p><i class='bx bxs-printer'></i> - Retirar a senha de <strong>Material Pendente</strong> ao chegar no laboratório para
        agilizar o seu atendimento.</p>
        <p><strong>Obs:</strong> Senha exclusiva para exames já cadastrados anteriormente.</p>`     
    }
    
  }
  if (marcacaoSUS.checked) {
    const resMarcaSUS = document.querySelector(".resMarcaSUS");
    resMarcaSUS.classList.add("activeSUS");
  }

  if (senhaCort.checked && resultadoCortisol.innerHTML != "") {
    resultadoCortisol.innerHTML += `<p>- <strong>Obs: </strong>Retirar a senha de <strong>Cortisol</strong> 
    ao chegar no laboratório.</p>`;
  } else if (!cort.checked && senhaCort.checked) {
    alert(
      'Atenção!! Você esqueceu de selecionar o campo de "Cortisol", refaça a operação.'
    );
    document.location.reload();
  }

  if (curvaGlicemica.checked) {
    ativandoModal();
  } else {
    removeFromScreen();
    showFromScreen();
    window.print();
    document.location.reload();
  }
}

//Modal
function ativandoModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("ativo");
}
function setValueCurva() {
  const tempo = document.querySelector(".timeDextrosol");
  const quantidade = document.querySelector('input[name="dextrosol"]:checked');
  const modal = document.querySelector(".modal");
  const resultadoCurvaGli = document.querySelector(".resultadoCurvaGli");
  resultadoCurvaGli.innerHTML = `    
  <p><i class="fa-solid fa-vial"></i> <strong> Curva Glicêmica (${tempo.value} horas)</strong></p>
  <p><i class='bx bxs-time'></i> Será necessário <strong>permanecer ${tempo.value} horas no laboratório</strong> para a realização do exame. </p>
  <p>- Após a primeira coleta, o paciente irá ingerir ${quantidade.value}mg de dextrosol e aguardar a próxima coleta no horário indicado pelo médico.</p>
  <p><strong>Obs: </strong>O repouso entre as coletas deverá ser realizada no laboratório.</p>
  `;
  modal.classList.remove("ativo");
  removeFromScreen();
  showFromScreen();
  window.print();
  document.location.reload();
}
const btnConfirmar = document.querySelector(".modalConfirmar");
btnConfirmar.addEventListener("click", setValueCurva);

/* ---------- Adicionar na tela -------------- */
const resultados = document.querySelectorAll(".lista-materiais");
function showFromScreen() {
  const footer = document.querySelector(".footer-container");
  footer.classList.add("printShow");

  resultados.forEach((res) => {
    res.classList.toggle("SectionOn");
  });
}

/* removendo da tela ao imprimir */
function removeFromScreen() {
  btnLogout.classList.add("printHide");

  let subTitle = document.querySelector(".sub-title");
  subTitle.classList.add("printHide");

  let btnPrint = document.querySelector(".wrapper-btn");
  btnPrint.classList.add("printHide");

  let i = document.querySelectorAll(".fa-arrow-down");
  i.forEach((icone) => {
    icone.classList.add("printHide");
  });

  let title = document.querySelector("title");
  title.innerText = "`";

  let meta = document.querySelector("meta");
  meta.innerHTML = "`";

  let sectionEspeciais = document.querySelector(".sectionEspeciais");
  sectionEspeciais.classList.add("printHide");

  let sectionMateriais = document.querySelector(".sectionMateriais");
  sectionMateriais.classList.add("printHide");

  let sectionJejumOff = document.querySelector(".sec-jejum");
  sectionJejumOff.classList.add("printHide");

  let obsTitle = document.querySelector(".btnObs");
  obsTitle.classList.add("printHide");

  let observacao = document.querySelector(".observacao");
  observacao.classList.add("printHide");
}

btn.addEventListener("click", handleImprimir);
