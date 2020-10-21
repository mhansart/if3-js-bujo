import "./style.scss";
var bujoData = localStorage.getItem("donneesStock");
var donnees;
if (bujoData) {
   donnees = JSON.parse(bujoData);
} else {
   donnees = [
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "autumn",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "winter",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
    {
      season: "winter",
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
      evenement: [],
      hobbies: [
        {
          nom: "ultimate frisbee",
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
          nom: "lecture",
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
          nom: "vélo",
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
      ],
    },
  ];
}
var days = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
var cellsIndex = [];
var listCheckboxe = [];
var listLater = [];
var app = document.getElementById("app");
app.innerHTML = `<h1>Mon Bullet Journal</h1>`;

// stocker les données
var stockData = (tab)=>{
    window.localStorage.setItem("donneesStock", JSON.stringify(tab));
    var bujoData = localStorage.getItem("donneesStock");
}

// dessiner tableau + todo
var getTab = (tableau) => {
  tableau.forEach((donnee, d) => {
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
    var caption = `<caption><i class="fa fa-caret-left goleft" id="${d}-goleft" aria-hidden="true"></i><span>Semaine du ${
      donnee.dates[0]
    } au ${
      donnee.dates[donnee.dates.length - 1]
    }</span><i class="fa fa-caret-right goright" id="${d}-goright aria-hidden="true"></i></caption>`;

    // création thead
    var thead = "<thead><tr>";
    thead += "<th></th>";
    days.forEach((day, l) => {
      // ajouter des tableaux dans un tableaux
      if(donnee.evenement.length < 7){
        donnee.todo.push([]);
        donnee.etatTodo.push([]);
        donnee.todoLater.push([]);
        donnee.evenement.push([]);
      }
      listLater[d].oneListLater.push([]);
      listCheckboxe[d].oneListCheck.push([]);
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
      stockData(donnees);
    });
    // Dessiner la section => todo / event
    section.innerHTML = `<div class='todo' id='todo-${d}'></div><div class='event' id='event-${d}'></div>`;
    var todoCol = document.getElementById(`todo-${d}`);
    var eventCol = document.getElementById(`event-${d}`);
    eventCol.innerHTML = `<h2>Évènements</h2>`;
    todoCol.innerHTML = `<div class ="col1"><h2>To do aujourd'hui</h2><div class='todonow' id="todonow-${d}"></div></div><div class ="col2"><h2>À faire plus tard</h2><div class='todolater' id="todolater-${d}"></div></div>`;
  });
};

// update etat/pratique/innerHTML d'une cellule au click
var updateTab = (cells) => {
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      var indexCell = e.currentTarget.id.split("-");
      if (
        donnees[indexCell[0]].hobbies[indexCell[2]].pratique[indexCell[1]] ===
        false
      ) {
        cell.innerHTML = `<i class="fa fa-pagelines" aria-hidden="true"></i>`;
        donnees[indexCell[0]].hobbies[indexCell[2]].pratique[
          indexCell[1]
        ] = true;
        donnees[indexCell[0]].hobbies[indexCell[2]].etat[indexCell[1]] =
          "checked";
      } else {
        cell.innerHTML = "";
        donnees[indexCell[0]].hobbies[indexCell[2]].pratique[
          indexCell[1]
        ] = false;
        donnees[indexCell[0]].hobbies[indexCell[2]].etat[indexCell[1]] =
          "unchecked";
      }
      stockData(donnees);
    });
  });
};

var getDay = (dayTab) => {
  var todoLaterActi = document.querySelectorAll(`.todolater`);
  var todoNow = document.querySelectorAll(`.todonow`);
  var eventCol = document.querySelectorAll(`.event`);
  dayTab.forEach((nom) => {
    nom.addEventListener("click", () => {
      // ajouter une class active au nom de jour
      dayTab.forEach((jour) => {
        if (jour !== nom) {
          jour.classList.remove("active");
        }
      });
      nom.classList.add("active");

      //afficher les events dans la col Event
      var indexDonnees = nom.id.split("-")[1];
      eventCol[indexDonnees].innerHTML = `<h2>Évènements</h2>`;
      var eventOfDay = `<div class="addeventcontent" id="addeventcontent-${indexDonnees}">`
      var indexEvent = nom.id.split("-")[0];
      if (donnees[indexDonnees].evenement[indexEvent][0] !== "") {
        donnees[indexDonnees].evenement[indexEvent].forEach((evenement) => {
          eventOfDay += `<p for="${evenement}">${evenement}</p>`;
        });
      }
      eventOfDay+=`</div><div class="btnplusevent" id="btnplusevent-${indexDonnees}-${indexEvent}">Ajouter un évènement aujourd'hui</div>`;
      eventCol[indexDonnees].innerHTML+=eventOfDay;

      //click sur le bouton pour ajouter un event
      var addEventContent = document.getElementById(`addeventcontent-${indexDonnees}`);
      var btnPlusEvent = document.getElementById(`btnplusevent-${indexDonnees}-${indexEvent}`);
      btnPlusEvent.addEventListener("click", ()=>{
        if (btnPlusEvent.hasAttribute("disabled") === false) {
          addEventContent.innerHTML += `<p class="linewevent-${indexDonnees} linewevent"><input id="${indexDonnees}-newevent" class="neweventtext"/><input type="submit" class="addevent" id="${indexDonnees}-addevent" value="Ajouter"/></p> `;
          btnPlusEvent.setAttribute("disabled", "");
        }
        var newevent = document.getElementById(`${indexDonnees}-newevent`);
        var addEvent = document.getElementById(`${indexDonnees}-addevent`);
        var linewevent = document.querySelector(`.linewevent-${indexDonnees}`);
        addEvent.addEventListener("click", () => {
          btnPlusEvent.removeAttribute("disabled");
          // si on a bien rentré un event
          if (newevent.value !== "") {
            //on change le html dans le li
            linewevent.innerHTML = newevent.value;
            donnees[indexDonnees].evenement[indexEvent].push(newevent.value);
            console.log(donnees[indexDonnees].evenement[indexEvent]);
            console.log(donnees[indexDonnees].evenement);
            // changer la class pour n'avoir toujours qu'une seule classe "linewevent-[indexDonnees]"
            linewevent.classList.replace(`linewevent-${indexDonnees}`,"event-of-day");
            stockData(donnees);
          }
        });
      });

      todoNow[indexDonnees].innerHTML = `<h3>${nom.innerHTML}</h3>`;

      // afficher les hobbies dans la todo
      var hobbyAAfficher = [];
      trueFalse.forEach((cell) => {
        if (
          cell.id.split("-")[1] === indexEvent &&
          cell.id.split("-")[0] === indexDonnees
        ) {
          hobbyAAfficher.push(cell);
        }
      });

      var todo = `<div class="addtodo" id="addtodo-${indexDonnees}-${indexEvent}">`;
      hobbyAAfficher.forEach((event) => {
        var idxH = event.id.split("-")[2];
        var textHobby = "";
        if (donnees[indexDonnees].hobbies[idxH].nom === "ultimatefrisbee") {
          textHobby = "ultimate frisbee";
        } else {
          textHobby = donnees[indexDonnees].hobbies[idxH].nom;
        }

        // on n'affiche que les checked en disabled
        if (
          donnees[indexDonnees].hobbies[idxH].etat[indexEvent] === "checked"
        ) {
          todo += `<li class="later" id="${indexDonnees}-${[
            indexEvent,
          ]}-${idxH}-later"><input type="checkbox" class="now" id="${indexDonnees}-${indexEvent}-${idxH}-now" name="${
            donnees[indexDonnees].hobbies[idxH].nom
          }"><label class="label" for="${
            donnees[indexDonnees].hobbies[idxH].nom
          }">${textHobby}</label></li>`;
        }
      });

      // afficher les activités rentrées à la mano
      if (donnees[indexDonnees].todo[indexEvent][0] !== "") {
        todoLaterActi[indexDonnees].innerHTML = "";
        donnees[indexDonnees].todo[indexEvent].forEach(function (todoacti, b) {
          if (donnees[indexDonnees].etatTodo[indexEvent][b] !== "report") {
            todo += `<li class="newactilater" id="${indexDonnees}-${b}-linewacti"><input type="checkbox" class="newactinow" id="${indexDonnees}-${indexEvent}-now" name="${todoacti}"> <i class="fa fa-history lateracti" aria-hidden="true"></i> <label class="label" for="${todoacti}">${todoacti}</label></li>`;
          } else {
            todoLaterActi[
              indexDonnees
            ].innerHTML += `<li><i class="fa fa-history todolateracti" aria-hidden="true"></i> <span>${donnees[indexDonnees].todo[indexEvent][b]}</span></li>`;
          }
        });
      }

      // ajouter un bouton pour ajouter des activités
      todo += `</div><div class="btnplus" id="btnplus-${indexDonnees}-${indexEvent}">+</div>`;
      todoNow[indexDonnees].innerHTML += todo;
      var btnplus = document.getElementById(
        `btnplus-${indexDonnees}-${indexEvent}`
      );
      var addtodo = document.getElementById(`addtodo-${indexDonnees}-${indexEvent}`);

      //ajouter une nouvelle activité

      btnplus.addEventListener("click", () => {
        if (btnplus.hasAttribute("disabled") === false) {
          addtodo.innerHTML += `<li class="linewacti" id="${indexDonnees}-${donnees[indexDonnees].todo[indexEvent].length}-linewacti"><input id="${indexDonnees}-newacti" class="newactitext"/><input type="submit" class="addacti" id="${indexDonnees}-addacti" value="Ajouter"/></li> `;
          btnplus.setAttribute("disabled", "");
        }
        var newacti = document.getElementById(`${indexDonnees}-newacti`);
        var addacti = document.getElementById(`${indexDonnees}-addacti`);
        var linewacti = document.getElementById(
          `${indexDonnees}-${donnees[indexDonnees].todo[indexEvent].length}-linewacti`
        );
        addacti.addEventListener("click", () => {
          btnplus.removeAttribute("disabled");
          // si on a bien rentré une activité
          if (newacti.value !== "") {
            //on change le html dans le li
            linewacti.innerHTML = `<input type="checkbox" class="newactinow" id="${indexDonnees}-${indexEvent}-now" name="${newacti.value}"/> <i class="fa fa-history lateracti" aria-hidden="true"></i> <label  class="label" for="${newacti.value}">${newacti.value}</label>`;
            donnees[indexDonnees].todo[indexEvent].push(newacti.value);
            donnees[indexDonnees].etatTodo[indexEvent].push("unchecked");
            // changer la class pour n'avoir toujours qu'une seule classe "linewacti"
            linewacti.classList.replace("linewacti", "newactilater");
            stockData(donnees);
          }
          var checkboxesActi = document.querySelectorAll(`.newactinow`);
          var laterActi = document.querySelectorAll(".lateracti");
          checkNewActi(checkboxesActi);
          reportActi(laterActi);
        });
      });
      
      trueFalse.forEach((cell) => {
        cell.addEventListener("click", (e) => {
          var indexCell = e.currentTarget.id.split("-");
          var addtodoOfDay = document.getElementById(`addtodo-${indexDonnees}-${indexEvent}`);
          var toHide = document.getElementById(`${indexDonnees}-${indexEvent}-${indexCell[2]}-later`);
          if (indexCell[0] === indexDonnees && indexCell[1] === indexEvent ) {
            if(donnees[indexDonnees].hobbies[indexCell[2]].pratique[indexEvent] === true){
              if(toHide && toHide.style.display === "none"){
                toHide.style.display ="block";
              }else{
                var textHobby ="";
                if(donnees[indexDonnees].hobbies[indexCell[2]].nom === "ultimatefrisbee"){
                  textHobby = "ultimate frisbee";
                }else{
                  textHobby = donnees[indexDonnees].hobbies[indexCell[2]].nom;
                }
                addtodoOfDay.innerHTML+= `<li class="later" id="${indexDonnees}-${
                  indexEvent
                }-${indexCell[2]}-later"><input type="checkbox" class="now" id="${indexDonnees}-${indexEvent}-${indexCell[2]}-now" name="${
                  donnees[indexDonnees].hobbies[indexCell[2]].nom
                }" checked ="checked" disabled><label class="label" for="${
                  donnees[indexDonnees].hobbies[indexCell[2]].nom
                }">${textHobby}</label></li>`;
              }
            }else{
              toHide.style.display="none";
            }

          }
          stockData(donnees);
        });
      });

      // fonction pour checker dans le tableau à partir des checkboxes
      var checkHobbies = (checkboxes) => {
        checkboxes.forEach((check) => {
          var idCheck = check.id.split("-");
          var celluleToCheck = cellsIndex.indexOf(
            `${idCheck[0]}-${idCheck[1]}-${idCheck[2]}`
          );
          var indexH = check.id.split("-")[2];
          var indexE = check.id.split("-")[1];
          var indexD = check.id.split("-")[0];
          check.addEventListener("click", () => {
            if (!check.hasAttribute("checked")) {
              check.setAttribute("checked", "checked");
              trueFalse[
                celluleToCheck
              ].innerHTML = `<i class="fa fa-pagelines" aria-hidden="true"></i>`;
              donnees[indexD].hobbies[indexH].pratique[indexE] = true;
              donnees[indexD].hobbies[indexH].etat[indexE] = "checked";
              check.setAttribute("disabled", "");
            }
            stockData(donnees);
          });
        });
      };

      // fonction pour reporter des events
      var reportActi = (lateracti) => {
        var newActiLater = document.querySelectorAll(".newactilater");
        lateracti.forEach((lateActi, k) => {
          lateActi.addEventListener("click", () => {
            var indexActi = newActiLater[k].id.split("-")[1];
            if (indexEvent == 6) {
              donnees[parseInt(indexDonnees) + 1].todo[0].push(
                donnees[indexDonnees].todo[indexEvent][indexActi]
              );
            } else {
              donnees[indexDonnees].todo[parseInt(indexEvent) + 1].push(
                donnees[indexDonnees].todo[indexEvent][indexActi]
              );
            }
            donnees[indexDonnees].todoLater[indexEvent].push(
              donnees[indexDonnees].todo[indexEvent][indexActi]
            );
            donnees[indexDonnees].etatTodo[indexEvent][indexActi] = "report";
            todoLaterActi[
              indexDonnees
            ].innerHTML += `<li> <i class="fa fa-history todolateracti" aria-hidden="true"></i> <span>${donnees[indexDonnees].todo[indexEvent][indexActi]}</span></li>`;
            newActiLater[k].style.display = "none";
            stockData(donnees);
          });
        });
      };

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
            } else {
              elt.removeAttribute("checked");
              donnees[indexDonnees].etatTodo[indexEvent][j] = "unchecked";
            }
            stockData(donnees);
          });
        });
      };

      // checker les checkbox de la todo. Si elt a une bullet, alors il est déjà checké
      var laterActi = document.querySelectorAll(".lateracti");
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
      if(listCheckboxe[indexDonnees].oneListCheck[indexEvent].length > 0){
        checkHobbies(listCheckboxe[indexDonnees].oneListCheck[indexEvent]);
      }
    });
  });
};

getTab(donnees);
var trueFalse = document.querySelectorAll(".truefalse");
updateTab(trueFalse);
var nomJour = document.querySelectorAll(`.nomjour`);
getDay(nomJour);
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
        // changer l'arrière plan en fonction des saisons
          document.body.style.backgroundImage = `url(${donnees[g-1].season}.jpg)`;
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
        // changer l'arrière plan en fonction des saisons
        document.body.style.backgroundImage = `url(${donnees[g+1].season}.jpg)`;
    }
  });
});
