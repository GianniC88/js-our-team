/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)
*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//selezionare il nodo DOM dove inserire i dati della array team
const rowEl = document.getElementById(".row");

//ciclo nella array teamMembers
let members = "";

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  /*genera markup della funzione */
  const memberMarkup = generateMemberMarkup(member);
  console.log(memberMarkup);
}

//funzione per generare il markup per i membri
function generateMemberMarkup(member) {
  const { name, role, email, img } = member;
  /*genera markup della funzione*/
  const memberMarkup = `<row>${name},${role},${email},${img}</row>`;
  console.log(memberMarkup);
  member = +memberMarkup;
  //rowEl.insertAdjacentHTML("beforeend", memberMarkup);
}
rowEl.innerHTML = members;

//--generare la scheda di un utente

//--aggiungere i dati all'elemento della DOM
