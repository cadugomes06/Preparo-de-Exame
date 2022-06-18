const horasJejum = document.getElementsByName('jj')
const btn = document.querySelector('.btn-imprimir')
const cort = document.querySelector('.cortisol')
const psa = document.querySelector('.psa')
const eas = document.querySelector('.eas')
const easCultura = document.querySelector('.easCultura')
const epf = document.querySelector('.epf')
const mif = document.querySelector('.mif')
const escarro = document.querySelector('.escarro')
const btnShowSection = document.querySelectorAll('.btnShowSection')
const sessaoJejum = document.querySelector('.sec-jejum')
const sessaoPreparosAdicionais = document.querySelector('.preparos-adicionais')
const sessaoMateriais = document.querySelector('.sec-materiais')
const observacao = document.querySelector('.observacao')
const resultados = document.querySelectorAll('.lista-materiais')

function activeModal(btn, index) {    
    if (index === 0) {
        sessaoJejum.classList.toggle('SectionOn')
    } 
    if (index === 1) {
        sessaoPreparosAdicionais.classList.toggle('SectionOn')
    }
    if (index === 2) {
        sessaoMateriais.classList.toggle('SectionOn')
        resultados.forEach((res) => {
            res.classList.toggle('SectionOn')
        }) 
    }
    if (index === 3) {
        observacao.classList.toggle('SectionOn')
    }    
}
btnShowSection.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        activeModal(btn, index)
    })
})  


function handleImprimir() {

    const radios = Array.from(document.querySelectorAll('input[type="radio"]:checked'));
    if (radios.length === 0) {
       let sectionJejumOff = document.querySelector('.sec-jejum')
       sectionJejumOff.classList.add('printHide')

       let btnShowJejum = document.querySelector('.btnShowJejum')
       btnShowJejum.classList.add('printHide')
    }    

  for (let i = 0; i < horasJejum.length; i++) {
      if (horasJejum[i].checked) {
          
          if (i === 0) {
            const resultadoJejum = document.querySelector('.resultadoJejum')
            resultadoJejum.innerHTML = `
            <p><strong>São 4 horas de jejum</strong>, podendo hidratar-se normalmente (apenas com água).</p>` 
        } 
        if (i === 1) {
            const resultadoJejum = document.querySelector('.resultadoJejum')
            resultadoJejum.innerHTML = `<p><strong>São 6 horas de jejum</strong>, podendo hidratar-se normalmente (apenas com água).</p` 
        }
        if (i === 2) {
            const resultadoJejum = document.querySelector('.resultadoJejum')
            resultadoJejum.innerHTML = `<p><strong>São 8 horas de jejum</strong>, podendo hidratar-se normalmente (apenas com água).</p>` 
        }
        if (i === 3) {
            const resultadoJejum = document.querySelector('.resultadoJejum')
            resultadoJejum.innerHTML = `<p><strong>São 12 horas de jejum</strong>, podendo hidratar-se normalmente (apenas com água).</p` 
        }
    }
}
 if ( cort.checked) {
    const resultadoCortisol = document.querySelector('.resultadoCortisol')
    resultadoCortisol.innerHTML = `<p><strong>CORTISOL</strong>- Chegar ao laboratório no máximo
     <strong>até às 7:20 horas</strong>,para realização do repouso
     pré cortisol e coletar às 8:00 horas.</p>` 
 } 

 if (psa.checked) {
    const resultadoPsa = document.querySelector('.resultadoPsa')
    resultadoPsa.innerHTML = `<p><strong>PSA</strong> - Após toque retal, aguardar 2 dias</p>
    <p>- Após ultrassom transretal, 1 dia.</p>
    <p>- Após exercícios pesados, andar de bicicleta, andar de moto
    e à cavalo, aguardar 1 dia.<p/>
    <p>- Após biópsia ou massagem de próstata,
    aguardar 4 semanas.</p>
    <p>- Após ejaculção (relação sexual), aguardar 2 dias.</p><br></br>
    ` 
 }
 if ( eas.checked) {
    const resultadoEas = document.querySelector('.resultadoEas')
    resultadoEas.innerHTML = `<p><strong>EAS</strong> - Coletar uma amostra de urina e 
    entregar ao laboratório em até 3 horas após coletado.</p>` 
 } 
 if ( easCultura.checked) {
    const resultadoEasCultura = document.querySelector('.resultadoEasCultura')
    resultadoEasCultura.innerHTML = `<p><strong>EAS+CULTURA</strong> - Colher a primeira urina da manhã</p>
   <p> - Usar sempre o recipiente estéril fornecido pelo laboratório e abrir
    apenas na hora da coleta.<p/>
    <p>- Lavar as mãos e região genital com água e sabão<p/>
    <p>- Iniciar a micção, desprezando o primeiro jato de urina.
    - Entregar ao laboratório em até 3 horas após a coleta.<p/>
    <p>Obs: Período menstrual - Colher a urina 4 dias após o término
    . Aguardar 7 dias após o uso de antibióticos.<p/>` 
 } 
 if ( epf.checked) {
    const resultadoEpf = document.querySelector('.resultadoEpf')
    resultadoEpf.innerHTML = `<p><strong>EPF</strong> - Coletar uma pequena quantidade de fezes<p/>
    <p>- Entregar ao laboratório em até 3 horas em temperatura ambiente
    ou manter refrigerada e entregar em até 24 horas.<p/>` 
 } 
 if ( mif.checked) {
    const resultadoMif = document.querySelector('.resultadoMif')
    resultadoMif.innerHTML = `<p><strong>MIF</strong>- Colher 3 amostras de fezes, no prazo
    máximo de 10 dias, alternando entre os dias.</p>
    <p>- Coletar uma pequena quantidade de fezes a cada dia, colocando
    3 amostras juntas num mesmo recipiente.<p/>
    <p>- Evitar coletar em dias seguidos
    - Não é necessário refrigerar<p/>`
 } 
 if ( escarro.checked) {
    const resultadoEscarro = document.querySelector('.resultadoEscarro')
    resultadoEscarro.innerHTML = `<p><strong>Escarro</strong> - Pela manhã, imediatamente após acordar
    eliminar o material de drenagem nasal que estiver presente</p>
    <p>- Escovar os dentes e lavar a boca com bastante água (não utilizar creme dental).</p>
    <p>- Respirar fundo umas 8 a 10 vezes e  tossir profundamente.
    Colher o escarro assim obtido no recipiente de boca larga entregue pelo laboratório.</p>
    <p> - Entregar imediatamente ao laboratório</p>
    <p>- Não se deve misturar o escarro com a saliva pois este ficará
    impróprio para a realização do exame.</p>
    <p>Obs: No caso de haver dificuldade de obter o escarro por falta de secreção
    , recomendamos fazer inalação com vapor de água quente ou
    vaporização com soro fisiológico para estimular a secreção </p>` 
 }

 removeFromScreen()
 
window.print()
}


/* removendo da tela ao imprimir */
function removeFromScreen() {
    let subTitle = document.querySelector('.sub-title')
     subTitle.classList.add('printHide')

     let btnPrint = document.querySelector('.btn-imprimir')
     btnPrint.classList.add('printHide')

     let i = document.querySelectorAll('i')
      i.forEach((icone) => {
        icone.classList.add('printHide')
      }) 

      let sectionEspeciais = document.querySelector('.sectionEspeciais')
      sectionEspeciais.classList.add('printHide')

      let sectionMateriais= document.querySelector('.sectionMateriais')
      sectionMateriais.classList.add('printHide')

      let sectionJejumOff = document.querySelector('.sec-jejum')
      sectionJejumOff.classList.add('printHide')

      let btnObs = document.querySelector('.btnObs')
      btnObs.classList.add('printHide')

      
    }

btn.addEventListener('click', handleImprimir)
