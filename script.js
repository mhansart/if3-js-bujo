import "./style.scss";
// var bujodata = localStorage.getItem("bujodonnees");
// if(bujodata){
//   localStorage.setItem("bujodonnees", JSON.stringify(donnees));
// }else{
var donnees = [
  {
    dates: [
      "19 octobre",
      "20 octobre",
      "21 octobre",
      "22 octobre",
      "23 octobre",
      "24 octobre",
      "25 octobre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: ["", "", "anniversaire maman", "", "payer les factures", "", ""],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [false, false, false, false, true, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, false, false, false, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [false, true, false, true, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, false, true, false, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [false, true, false, false, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],

  },
  {
    dates: [
      "26 octobre",
      "27 octobre",
      "28 octobre",
      "29 octobre",
      "30 octobre",
      "31 octobre",
      "1 novembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "anniversaire vincent",
      "",
      "entretien voiture",
      "",
      "vacances !!",
      "",
      "",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [false, false, true, false, true, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, false, false, false, true, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [false, false, false, true, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [true, false, true, false, true, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [false, true, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "2 novembre",
      "3 novembre",
      "4 novembre",
      "5 novembre",
      "6 novembre",
      "7 novembre",
      "8 novembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "soirée raclette",
      "",
      "shooping-téléphoner maman",
      "",
      "rendre visite mamy",
      "",
      "",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [false, false, true, false, true, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, false, true, false, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [false, true, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, true, true, false, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [true, true, false, false, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "9 novembre",
      "10 novembre",
      "11 novembre",
      "12 novembre",
      "13 novembre",
      "14 novembre",
      "15 novembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "Anniversaire Arthur-congé pédagogique",
      "",
      "payer internet",
      "",
      "coiffeur",
      "",
      "marche adeps",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [false, false, true, false, true, false, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, false, false, true, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [true, true, false, false, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, false, false, false, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [false, true, true, false, true, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "16 novembre",
      "17 novembre",
      "18 novembre",
      "19 novembre",
      "20 novembre",
      "21 novembre",
      "22 novembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "Médecin",
      "",
      "Anniversaire Papy",
      "",
      "toilettage",
      "",
      "marche adeps",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [false, false, true, true, true, true, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, true, false, true, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [false, true, false, false, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, false, false, false, true, true, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [false, true, false, false, true, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "23 novembre",
      "24 novembre",
      "25 novembre",
      "26 novembre",
      "27 novembre",
      "28 novembre",
      "29 novembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "Anniversaire Arthur-congé pédagogique",
      "",
      "payer internet",
      "",
      "coiffeur",
      "",
      "marche adeps",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [false, false, true, false, true, false, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, false, false, true, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [true, true, false, false, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, false, false, false, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [false, true, true, false, true, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "30 novembre",
      "1 décembre",
      "2 décembre",
      "3 décembre",
      "4 décembre",
      "5 décembre",
      "6 décembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "visite maman",
      "",
      "garder basile",
      "",
      "anniversaire héloise",
      "",
      "marche adeps-saint nicolas",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [true, false, true, true, true, false, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, true, false, true, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [true, true, false, false, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, false, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [true, false, true, false, true, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "7 décembre",
      "8 décembre",
      "9 décembre",
      "10 décembre",
      "11 décembre",
      "12 décembre",
      "13 décembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "courses de noël",
      "",
      "garder basile",
      "",
      "anniversaire charlotte",
      "",
      "marche adeps-marché de noël",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [true, false, true, false, true, false, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, true, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [true, true, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [true, false, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [true, false, false, false, true, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "14 décembre",
      "15 décembre",
      "16 décembre",
      "17 décembre",
      "18 décembre",
      "19 décembre",
      "20 décembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "noël au bureau",
      "",
      "",
      "",
      "anniversaire constance",
      "noël en famille",
      "marche adeps-marché de noël",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [true, false, true, false, false, false, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, false, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [false, true, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, false, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [true, false, false, false, true, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "21 décembre",
      "22 décembre",
      "23 décembre",
      "24 décembre",
      "25 décembre",
      "26 décembre",
      "27 décembre",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: [
      "",
      "",
      "",
      "Vacances !!-réveillon de noël",
      "noël avec les cousins",
      "anniversaire françoise",
      "",
    ],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [true, false, true, false, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, false, false, true, false, true, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [false, false, false, true, false, true, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, true, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [true, false, false, false, true, false, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
  {
    dates: [
      "28 décembre",
      "29 décembre",
      "30 décembre",
      "31 décembre",
      "1 janvier",
      "2 janvier",
      "3 janvier",
    ],
    todo: [],
    etatTodo: [],
    todoLater: [],
    evenement: ["", "", "", "réveillon du nouvel an", "nouvelle année", "", ""],
    hobbies: [
      {
        nom: "ultimate frisbee",
        pratique: [true, false, true, true, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "couture",
        pratique: [false, true, false, true, false, true, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "pâtisserie",
        pratique: [false, false, false, false, false, true, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "lecture",
        pratique: [false, true, false, true, false, false, false],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
      {
        nom: "vélo",
        pratique: [true, false, false, false, false, false, true],
        etat: [
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
          "unchecked",
        ],
      },
    ],
  },
];
// }
var cellsIndex = [];
var days = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

var listCheckboxe = [];
var listLater = [];
// localStorage.setItem("bujodonnees", JSON.stringify(donnees))
// dessiner le tableau
var app = document.getElementById("app");
app.innerHTML = `<h1>Mon Bullet Journal</h1>`;
donnees.forEach((donnee, d) => {
  // mettre des objets dans les tab afin de pouvoir différencier les activités des != semaines
  listCheckboxe.push({ oneListCheck: [] });
  listLater.push({ oneListLater: [] });

  var classContainer = "";
  // ajouts des classes pour le carrousel
  if (d === 0) {
    classContainer = "visible";
  } else {
    classContainer = "hidden";
  }
  // création caption
  var caption = `<caption><i class="fa fa-caret-left goleft" id="${d}-goleft" aria-hidden="true"></i><span>Semaine du ${donnee.dates[0]
    } au ${donnee.dates[donnee.dates.length - 1]
    }</span><i class="fa fa-caret-right goright" id="${d}-goright aria-hidden="true"></i></caption>`;

  // création thead
  var thead = "<thead><tr>";
  thead += "<th></th>";
  days.forEach((day, l) => {
    //ajouter des tableaux dans un tableaux
    listLater[d].oneListLater.push([]);
    listCheckboxe[d].oneListCheck.push([]);
    donnee.todo.push([]);
    donnee.etatTodo.push([]);
    donnee.todoLater.push([]);
    thead += `<th> <div class='nomjour' id="${l}-${d}"><span>${day}</span><span> ${donnee.dates[l]} </span></div></th>`;
  });
  thead += "</tr></thead>";
  // création tbody
  var tbody = `<tbody>`;
  var tr = "";
  var classLign = "";
  donnee.hobbies.forEach((hobby, p) => {
    //donner une classe aux lignes
    if (hobby.nom === "ultimate frisbee") {
      classLign = "ultimatefrisbee";
    } else {
      classLign = hobby.nom;
    }
    tr += `<tr class="activite-${d} ${classLign}" id="${d}-${p}-${d}"><td class='nomhobby nomhobby-${d}'><div class="entete">${hobby.nom}</div></td>`;
    days.forEach((day, t) => {
      tr += `<td><div class='truefalse truefalse-${d}' id ="${d}-${t}-${p}"></div></td>`;
    });
    tr += `</tr>`;
  });
  tbody += tr;
  tbody += "</tbody>";

  // ajouter les lignes crées à la table  
  app.innerHTML += `<div class='container ${classContainer}'><table>${caption}${thead}${tbody}</table><section id="todoevent-${d}"></section></div>`;
  var section = document.getElementById(`todoevent-${d}`);

  // aller rechercher les cellules et si pratique = true, mettre une bullet et modifier état
  var cells = document.querySelectorAll(`.truefalse-${d}`);
  cells.forEach((cell) => {
    var indexCells = cell.id.split("-");
    cellsIndex.push(cell.id);
    if (donnee.hobbies[indexCells[2]].pratique[indexCells[1]] === true) {
      cell.innerHTML = `<i class="fa fa-pagelines" aria-hidden="true"></i>`;
      donnee.hobbies[indexCells[2]].etat[indexCells[1]] = "checked";
    } else {
      cell.innerHTML = "";
      donnee.hobbies[indexCells[2]].etat[indexCells[1]] = "unchecked";
    }
  });
  // Dessiner la section => todo / event
  section.innerHTML = `<div class='todo' id='todo-${d}'></div><div class='event' id='event-${d}'></div>`;
  var todoCol = document.getElementById(`todo-${d}`);
  var eventCol = document.getElementById(`event-${d}`);
  eventCol.innerHTML = `<h2>Évènements</h2>`;
  todoCol.innerHTML = `<div class ="col1"><h2>To do aujourd'hui</h2><div class='todonow' id="todonow-${d}"></div></div><div class ="col2"><h2>À faire plus tard</h2><div class='todolater' id="todolater-${d}"></div></div>`;
});

// Les clicks sur les éléments 

// click sur chaque case => click dessus => changer l'état - la pratique - ajouter/supprimer bullet
var trueFalse = document.querySelectorAll(".truefalse");
trueFalse.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    var indexCell = e.currentTarget.id.split("-");
    if (
      donnees[indexCell[0]].hobbies[indexCell[2]].pratique[indexCell[1]] === false
    ) {
      cell.innerHTML = `<i class="fa fa-pagelines" aria-hidden="true"></i>`;
      donnees[indexCell[0]].hobbies[indexCell[2]].pratique[indexCell[1]] = true;
      donnees[indexCell[0]].hobbies[indexCell[2]].etat[indexCell[1]] = "checked";
    } else {
      cell.innerHTML = "";
      donnees[indexCell[0]].hobbies[indexCell[2]].pratique[
        indexCell[1]
      ] = false;
      donnees[indexCell[0]].hobbies[indexCell[2]].etat[indexCell[1]] = "unchecked";
    }
  });
});

// click sur chaque jour -> click dessus -> voir todo + event 
var nomJour = document.querySelectorAll(`.nomjour`);
var todoLaterActi = document.querySelectorAll(`.todolater`);
var todoNow = document.querySelectorAll(`.todonow`);
var eventCol = document.querySelectorAll(`.event`);

nomJour.forEach((nom) => {
  nom.addEventListener("click", () => {

    // ajouter une class active au nom de jour
    nomJour.forEach((jour) => {
      if (jour !== nom) {
        jour.classList.remove("active");
      }
    });
    nom.classList.add("active");

    //afficher les events dans la col Event
    var indexDonnees = nom.id.split("-")[1];
    eventCol[indexDonnees].innerHTML = `<h2>Évènements</h2>`;
    var indexEvent = nom.id.split("-")[0];
    var evenements = donnees[indexDonnees].evenement[indexEvent].split("-");
    if (evenements[0] !== "") {
      evenements.forEach((evenement) => {
        eventCol[
          indexDonnees
        ].innerHTML += `<p for="${evenement}">${evenement}</p>`;
      });
    }
    todoNow[indexDonnees].innerHTML = `<h3>${nom.innerHTML}</h3>`;

    // afficher les hobbies dans la todo
    var hobbyAAfficher = [];
    trueFalse.forEach((cell) => {
      if (
        cell.id.split("-")[1] === indexEvent
        && cell.id.split("-")[0] === indexDonnees
      ) {
        hobbyAAfficher.push(cell);
      }
    });
    var todo = `<div class="addtodo" id="addtodo-${indexEvent}">`;
    hobbyAAfficher.forEach((event) => {
      var idxH = event.id.split("-")[2];
      var textHobby = "";
      if (donnees[indexDonnees].hobbies[idxH].nom === "ultimatefrisbee") {
        textHobby = "ultimate frisbee";
      } else {
        textHobby = donnees[indexDonnees].hobbies[idxH].nom;
      }

      // si l'état est report, il ne l'affiche plus dans la liste du jour
      if (donnees[indexDonnees].hobbies[idxH].etat[indexEvent] !== "report") {
        todo += `<li class="later" id="${indexDonnees}-${[
          indexEvent,
        ]}-${idxH}-later"><input type="checkbox" class="now" id="${indexDonnees}-${indexEvent}-${idxH}-now" name="${donnees[indexDonnees].hobbies[idxH].nom
          }"><label class="label" for="${donnees[indexDonnees].hobbies[idxH].nom
          }">${textHobby}</label></li>`;
      }
    });

    // afficher les activités rentrées à la mano
    if (donnees[indexDonnees].todo[indexEvent][0] !== "") {
      todoLaterActi[indexDonnees].innerHTML = "";
      donnees[indexDonnees].todo[indexEvent].forEach(function (todoacti, b) {
        if (donnees[indexDonnees].etatTodo[indexEvent][b] !== "report") {
          todo += `<li class="newactilater" id="${indexDonnees}-${indexEvent}-${b}-later"><input type="checkbox" class="newactinow" id="${indexDonnees}-${indexEvent}-now" name="${todoacti}"> <i class="fa fa-history lateracti" aria-hidden="true"></i> <label class="label" for="${todoacti}">${todoacti}</label></li>`;
        }
        else {
          todoLaterActi[indexDonnees].innerHTML += `<li><i class="fa fa-history todolateracti" aria-hidden="true"></i> <span>${donnees[indexDonnees].todo[indexEvent][b]}</span></li>`;
        }
      });
    }

    // ajouter un bouton pour ajouter des activités
    todo += `</div><div class="btnplus" id="btnplus-${indexDonnees}-${indexEvent}">+</div></div>`
    todoNow[indexDonnees].innerHTML += todo;
    var btnplus = document.getElementById(`btnplus-${indexDonnees}-${indexEvent}`);
    var addtodo = document.getElementById(`addtodo-${indexEvent}`);

    //ajouter une nouvelle activité
    btnplus.addEventListener("click", () => {
      addtodo.innerHTML += `<li class="linewacti"><input id="newacti" class="newactinow"/><input type="submit" id="addacti" value="Ajouter"/></li> `;
      var linewacti = document.querySelector(".linewacti");
      var addacti = document.getElementById("addacti");
      var newacti = document.getElementById("newacti");
      addacti.addEventListener("click",() => {
        // si on a bien rentré une activité
        if (newacti.value !== "") {
          //on change le html dans le li
          linewacti.innerHTML = `</i><input type="checkbox" class="newactinow" id="${indexDonnees}-${indexEvent}-now" name="${newacti.value}"/> <i class="fa fa-history lateracti" aria-hidden="true"> <label  class="label" for="${newacti.value}">${newacti.value}</label>`;
          donnees[indexDonnees].todo[indexEvent].push(newacti.value);
          donnees[indexDonnees].etatTodo[indexEvent].push("unchecked");
          // changer la class pour n'avoir toujours qu'une seule classe "linewacti"
          linewacti.classList.replace("linewacti", "newactilater");
        }

        var checkboxesActi = document.querySelectorAll(`.newactinow`);
        var laterActi = document.querySelectorAll(".lateracti");
        checkNewActi(checkboxesActi);
        reportActi(laterActi);
      });
    });
    // fonction pour checker les checkboxs à partir du tableau
    var checkHobbies = (checkboxes) => {
      checkboxes.forEach((check) => {
        var idCheck = check.id.split("-");
        var celluleToCheck = cellsIndex.indexOf(`${idCheck[0]}-${idCheck[1]}-${idCheck[2]}`);
        var indexH = check.id.split("-")[2];
        var indexE = check.id.split("-")[1];
        var indexD = check.id.split("-")[0];
        check.addEventListener("click", () => {
          if (!check.hasAttribute("checked")) {
            check.setAttribute("checked", "checked");
            trueFalse[celluleToCheck].innerHTML = `<i class="fa fa-pagelines" aria-hidden="true"></i>`;
            donnees[indexD].hobbies[indexH].pratique[indexE] = true;
            donnees[indexD].hobbies[indexH].etat[indexE] = "checked";
            check.setAttribute("disabled", "");
          }
        });
      });
    }

    // fonction pour reporter des events
    var reportActi =  (lateracti) => {
      var newActiLater = document.querySelectorAll(".newactilater")
      lateracti.forEach((lateActi, k) => {
        lateActi.addEventListener("click", () => {
          if (indexEvent == 6) {
            donnees[(parseInt(indexDonnees)) + 1].todo[0].push(donnees[indexDonnees].todo[indexEvent][k]);
          } else {
            donnees[indexDonnees].todo[(parseInt(indexEvent)) + 1].push(donnees[indexDonnees].todo[indexEvent][k]);
          }
          donnees[indexDonnees].todoLater[indexEvent].push(donnees[indexDonnees].todo[indexEvent][k]);
          donnees[indexDonnees].etatTodo[indexEvent][k] = "report";
          todoLaterActi[indexDonnees].innerHTML += `<li> <i class="fa fa-history todolateracti" aria-hidden="true"></i> <span>${donnees[indexDonnees].todo[indexEvent][k]}</span></li>`;
          newActiLater[k].style.display = "none";
        })
      })

    }

    // fonction pour checker les nouvelles actis
    var checkNewActi = (check) => {
      check.forEach(function (elt, j) {
        if (donnees[indexDonnees].etatTodo[indexEvent][j] === "checked") {
          elt.setAttribute("checked", "checked");
        }
        elt.addEventListener("click", function () {
          if (!elt.hasAttribute("checked")) {
            elt.setAttribute("checked", "checked");
            donnees[indexDonnees].etatTodo[indexEvent][j] = "checked";
          }
        })
      });
    }

    // checker les checkbox de la todo. Si elt a une bullet, alors il est déjà checké
    var laterActi = document.querySelectorAll(".lateracti");
    var label = document.querySelectorAll(`.label`);
    var checkboxes = document.querySelectorAll(`.now`);
    var checkboxesActi = document.querySelectorAll(`.newactinow`);
    var laters = document.querySelectorAll(`.later`);
    laters.forEach((later) => {
      var indexD = later.id.split("-")[0];
      if (later.id.split("-")[0] === indexDonnees) {
        listLater[indexD].oneListLater[indexEvent].push(later);
      }
    });
    checkNewActi(checkboxesActi);
    reportActi(laterActi);
    checkboxes.forEach((checkboxe) => {
      var indexH = checkboxe.id.split("-")[2];
      var indexE = checkboxe.id.split("-")[1];
      var indexD = checkboxe.id.split("-")[0];

      if (donnees[indexDonnees].hobbies[indexH].pratique[indexE] === true) {
        checkboxe.setAttribute("checked", "checked");
        checkboxe.setAttribute("disabled", "");
      }
      if (checkboxe.id.split("-")[0] === indexDonnees) {
        listCheckboxe[indexD].oneListCheck[indexEvent].push(checkboxe);
      }
    });
    // Ce qu'il se passe quand on clique sur une checkbox
    // si reclick sur une checkbox déjà check, elt => "report" + symbole à la place de la checkbox
    // si on check une checkboxe, une bullet apparait dans la case correspondante
    checkHobbies(listCheckboxe[indexDonnees].oneListCheck[indexEvent]);
  });
});

// création du carrousel
//  ajouter et enlever des classes (display none ou pas) lorsqu'on clique sur les carrets
var containers = document.querySelectorAll(".container");
var goLefts = document.querySelectorAll(".goleft");
var goRights = document.querySelectorAll(".goright");
goLefts.forEach((goLeft, g) => {
  if (g === 0) {
    goLeft.style.color = "transparent";
  }
  goLeft.addEventListener("click", () => {
    if (g !== 0) {
      containers[g].classList.add("hidden");
      containers[g].classList.remove("visible");
      containers[g - 1].classList.remove("hidden");
      containers[g - 1].classList.add("visible");
    }
  });
});
goRights.forEach((goRight, g) => {
  if (g === donnees.length - 1) {
    goRight.style.color = "transparent";
  }
  goRight.addEventListener("click", () => {
    if (g !== donnees.length - 1) {
      containers[g].classList.add("hidden");
      containers[g].classList.remove("visible");
      containers[g + 1].classList.remove("hidden");
      containers[g + 1].classList.add("visible");
    }
  });
});
