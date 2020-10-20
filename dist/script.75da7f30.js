// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./background.jpg":[["background.9e15dd99.jpg","background.jpg"],"background.jpg"],"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"script.js":[function(require,module,exports) {
"use strict";

require("./style.scss");

// var bujodata = localStorage.getItem("bujodonnees");
// if(bujodata){
//   localStorage.setItem("bujodonnees", JSON.stringify(donnees));
// }else{
var donnees = [{
  dates: ["19 octobre", "20 octobre", "21 octobre", "22 octobre", "23 octobre", "24 octobre", "25 octobre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["", "", "anniversaire maman", "", "payer les factures", "", ""],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [false, false, false, false, true, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, false, false, false, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [false, true, false, true, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, false, true, false, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [false, true, false, false, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["26 octobre", "27 octobre", "28 octobre", "29 octobre", "30 octobre", "31 octobre", "1 novembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["anniversaire vincent", "", "entretien voiture", "", "vacances !!", "", ""],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [false, false, true, false, true, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, false, false, false, true, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [false, false, false, true, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [true, false, true, false, true, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [false, true, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["2 novembre", "3 novembre", "4 novembre", "5 novembre", "6 novembre", "7 novembre", "8 novembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["soirée raclette", "", "shooping-téléphoner maman", "", "rendre visite mamy", "", ""],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [false, false, true, false, true, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, false, true, false, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [false, true, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, true, true, false, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [true, true, false, false, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["9 novembre", "10 novembre", "11 novembre", "12 novembre", "13 novembre", "14 novembre", "15 novembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["Anniversaire Arthur-congé pédagogique", "", "payer internet", "", "coiffeur", "", "marche adeps"],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [false, false, true, false, true, false, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, false, false, true, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [true, true, false, false, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, false, false, false, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [false, true, true, false, true, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["16 novembre", "17 novembre", "18 novembre", "19 novembre", "20 novembre", "21 novembre", "22 novembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["Médecin", "", "Anniversaire Papy", "", "toilettage", "", "marche adeps"],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [false, false, true, true, true, true, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, true, false, true, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [false, true, false, false, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, false, false, false, true, true, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [false, true, false, false, true, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["23 novembre", "24 novembre", "25 novembre", "26 novembre", "27 novembre", "28 novembre", "29 novembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["Anniversaire Arthur-congé pédagogique", "", "payer internet", "", "coiffeur", "", "marche adeps"],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [false, false, true, false, true, false, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, false, false, true, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [true, true, false, false, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, false, false, false, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [false, true, true, false, true, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["30 novembre", "1 décembre", "2 décembre", "3 décembre", "4 décembre", "5 décembre", "6 décembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["visite maman", "", "garder basile", "", "anniversaire héloise", "", "marche adeps-saint nicolas"],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [true, false, true, true, true, false, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, true, false, true, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [true, true, false, false, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, false, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [true, false, true, false, true, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["7 décembre", "8 décembre", "9 décembre", "10 décembre", "11 décembre", "12 décembre", "13 décembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["courses de noël", "", "garder basile", "", "anniversaire charlotte", "", "marche adeps-marché de noël"],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [true, false, true, false, true, false, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, true, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [true, true, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [true, false, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [true, false, false, false, true, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["14 décembre", "15 décembre", "16 décembre", "17 décembre", "18 décembre", "19 décembre", "20 décembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["noël au bureau", "", "", "", "anniversaire constance", "noël en famille", "marche adeps-marché de noël"],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [true, false, true, false, false, false, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, false, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [false, true, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, false, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [true, false, false, false, true, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["21 décembre", "22 décembre", "23 décembre", "24 décembre", "25 décembre", "26 décembre", "27 décembre"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["", "", "", "Vacances !!-réveillon de noël", "noël avec les cousins", "anniversaire françoise", ""],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [true, false, true, false, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, false, false, true, false, true, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [false, false, false, true, false, true, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, true, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [true, false, false, false, true, false, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}, {
  dates: ["28 décembre", "29 décembre", "30 décembre", "31 décembre", "1 janvier", "2 janvier", "3 janvier"],
  todo: [],
  etatTodo: [],
  todoLater: [],
  evenement: ["", "", "", "réveillon du nouvel an", "nouvelle année", "", ""],
  hobbies: [{
    nom: "ultimate frisbee",
    pratique: [true, false, true, true, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "couture",
    pratique: [false, true, false, true, false, true, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "pâtisserie",
    pratique: [false, false, false, false, false, true, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "lecture",
    pratique: [false, true, false, true, false, false, false],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }, {
    nom: "vélo",
    pratique: [true, false, false, false, false, false, true],
    etat: ["unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked", "unchecked"]
  }]
}]; // }

var cellsIndex = [];
var days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
var listCheckboxe = [];
var listLater = []; // localStorage.setItem("bujodonnees", JSON.stringify(donnees))
// dessiner le tableau

var app = document.getElementById("app");
app.innerHTML = "<h1>Mon Bullet Journal</h1>";
donnees.forEach(function (donnee, d) {
  // mettre des objets dans les tab afin de pouvoir différencier les activités des != semaines
  listCheckboxe.push({
    oneListCheck: []
  });
  listLater.push({
    oneListLater: []
  });
  var classContainer = ""; // ajouts des classes pour le carrousel

  if (d === 0) {
    classContainer = "visible";
  } else {
    classContainer = "hidden";
  } // création caption


  var caption = "<caption><i class=\"fa fa-caret-left goleft\" id=\"".concat(d, "-goleft\" aria-hidden=\"true\"></i><span>Semaine du ").concat(donnee.dates[0], " au ").concat(donnee.dates[donnee.dates.length - 1], "</span><i class=\"fa fa-caret-right goright\" id=\"").concat(d, "-goright aria-hidden=\"true\"></i></caption>"); // création thead

  var thead = "<thead><tr>";
  thead += "<th></th>";
  days.forEach(function (day, l) {
    //ajouter des tableaux dans un tableaux
    listLater[d].oneListLater.push([]);
    listCheckboxe[d].oneListCheck.push([]);
    donnee.todo.push([]);
    donnee.etatTodo.push([]);
    donnee.todoLater.push([]);
    thead += "<th> <div class='nomjour' id=\"".concat(l, "-").concat(d, "\"><span>").concat(day, "</span><span> ").concat(donnee.dates[l], " </span></div></th>");
  });
  thead += "</tr></thead>"; // création tbody

  var tbody = "<tbody>";
  var tr = "";
  var classLign = "";
  donnee.hobbies.forEach(function (hobby, p) {
    //donner une classe aux lignes
    if (hobby.nom === "ultimate frisbee") {
      classLign = "ultimatefrisbee";
    } else {
      classLign = hobby.nom;
    }

    tr += "<tr class=\"activite-".concat(d, " ").concat(classLign, "\" id=\"").concat(d, "-").concat(p, "-").concat(d, "\"><td class='nomhobby nomhobby-").concat(d, "'><div class=\"entete\">").concat(hobby.nom, "</div></td>");
    days.forEach(function (day, t) {
      tr += "<td><div class='truefalse truefalse-".concat(d, "' id =\"").concat(d, "-").concat(t, "-").concat(p, "\"></div></td>");
    });
    tr += "</tr>";
  });
  tbody += tr;
  tbody += "</tbody>"; // ajouter les lignes crées à la table  

  app.innerHTML += "<div class='container ".concat(classContainer, "'><table>").concat(caption).concat(thead).concat(tbody, "</table><section id=\"todoevent-").concat(d, "\"></section></div>");
  var section = document.getElementById("todoevent-".concat(d)); // aller rechercher les cellules et si pratique = true, mettre une bullet et modifier état

  var cells = document.querySelectorAll(".truefalse-".concat(d));
  cells.forEach(function (cell) {
    var indexCells = cell.id.split("-");
    cellsIndex.push(cell.id);

    if (donnee.hobbies[indexCells[2]].pratique[indexCells[1]] === true) {
      cell.innerHTML = "<i class=\"fa fa-pagelines\" aria-hidden=\"true\"></i>";
      donnee.hobbies[indexCells[2]].etat[indexCells[1]] = "checked";
    } else {
      cell.innerHTML = "";
      donnee.hobbies[indexCells[2]].etat[indexCells[1]] = "unchecked";
    }
  }); // Dessiner la section => todo / event

  section.innerHTML = "<div class='todo' id='todo-".concat(d, "'></div><div class='event' id='event-").concat(d, "'></div>");
  var todoCol = document.getElementById("todo-".concat(d));
  var eventCol = document.getElementById("event-".concat(d));
  eventCol.innerHTML = "<h2>\xC9v\xE8nements</h2>";
  todoCol.innerHTML = "<div class =\"col1\"><h2>To do aujourd'hui</h2><div class='todonow' id=\"todonow-".concat(d, "\"></div></div><div class =\"col2\"><h2>\xC0 faire plus tard</h2><div class='todolater' id=\"todolater-").concat(d, "\"></div></div>");
}); // Les clicks sur les éléments 
// click sur chaque case => click dessus => changer l'état - la pratique - ajouter/supprimer bullet

var trueFalse = document.querySelectorAll(".truefalse");
trueFalse.forEach(function (cell) {
  cell.addEventListener("click", function (e) {
    var indexCell = e.currentTarget.id.split("-");

    if (donnees[indexCell[0]].hobbies[indexCell[2]].pratique[indexCell[1]] === false) {
      cell.innerHTML = "<i class=\"fa fa-pagelines\" aria-hidden=\"true\"></i>";
      donnees[indexCell[0]].hobbies[indexCell[2]].pratique[indexCell[1]] = true;
      donnees[indexCell[0]].hobbies[indexCell[2]].etat[indexCell[1]] = "checked";
    } else {
      cell.innerHTML = "";
      donnees[indexCell[0]].hobbies[indexCell[2]].pratique[indexCell[1]] = false;
      donnees[indexCell[0]].hobbies[indexCell[2]].etat[indexCell[1]] = "unchecked";
    }
  });
}); // click sur chaque jour -> click dessus -> voir todo + event 

var nomJour = document.querySelectorAll(".nomjour");
var todoLaterActi = document.querySelectorAll(".todolater");
var todoNow = document.querySelectorAll(".todonow");
var eventCol = document.querySelectorAll(".event");
nomJour.forEach(function (nom) {
  nom.addEventListener("click", function () {
    // ajouter une class active au nom de jour
    nomJour.forEach(function (jour) {
      if (jour !== nom) {
        jour.classList.remove("active");
      }
    });
    nom.classList.add("active"); //afficher les events dans la col Event

    var indexDonnees = nom.id.split("-")[1];
    eventCol[indexDonnees].innerHTML = "<h2>\xC9v\xE8nements</h2>";
    var indexEvent = nom.id.split("-")[0];
    var evenements = donnees[indexDonnees].evenement[indexEvent].split("-");

    if (evenements[0] !== "") {
      evenements.forEach(function (evenement) {
        eventCol[indexDonnees].innerHTML += "<p for=\"".concat(evenement, "\">").concat(evenement, "</p>");
      });
    }

    todoNow[indexDonnees].innerHTML = "<h3>".concat(nom.innerHTML, "</h3>"); // afficher les hobbies dans la todo

    var hobbyAAfficher = [];
    trueFalse.forEach(function (cell) {
      if (cell.id.split("-")[1] === indexEvent && cell.id.split("-")[0] === indexDonnees) {
        hobbyAAfficher.push(cell);
      }
    });
    var todo = "<div class=\"addtodo\" id=\"addtodo-".concat(indexEvent, "\">");
    hobbyAAfficher.forEach(function (event) {
      var idxH = event.id.split("-")[2];
      var textHobby = "";

      if (donnees[indexDonnees].hobbies[idxH].nom === "ultimatefrisbee") {
        textHobby = "ultimate frisbee";
      } else {
        textHobby = donnees[indexDonnees].hobbies[idxH].nom;
      } // si l'état est report, il ne l'affiche plus dans la liste du jour


      if (donnees[indexDonnees].hobbies[idxH].etat[indexEvent] !== "report") {
        todo += "<li class=\"later\" id=\"".concat(indexDonnees, "-").concat([indexEvent], "-").concat(idxH, "-later\"><input type=\"checkbox\" class=\"now\" id=\"").concat(indexDonnees, "-").concat(indexEvent, "-").concat(idxH, "-now\" name=\"").concat(donnees[indexDonnees].hobbies[idxH].nom, "\"><label class=\"label\" for=\"").concat(donnees[indexDonnees].hobbies[idxH].nom, "\">").concat(textHobby, "</label></li>");
      }
    }); // afficher les activités rentrées à la mano

    if (donnees[indexDonnees].todo[indexEvent][0] !== "") {
      todoLaterActi[indexDonnees].innerHTML = "";
      donnees[indexDonnees].todo[indexEvent].forEach(function (todoacti, b) {
        if (donnees[indexDonnees].etatTodo[indexEvent][b] !== "report") {
          todo += "<li class=\"newactilater\" id=\"".concat(indexDonnees, "-").concat(indexEvent, "-").concat(b, "-later\"><input type=\"checkbox\" class=\"newactinow\" id=\"").concat(indexDonnees, "-").concat(indexEvent, "-now\" name=\"").concat(todoacti, "\"> <i class=\"fa fa-history lateracti\" aria-hidden=\"true\"></i> <label class=\"label\" for=\"").concat(todoacti, "\">").concat(todoacti, "</label></li>");
        } else {
          todoLaterActi[indexDonnees].innerHTML += "<li><i class=\"fa fa-history todolateracti\" aria-hidden=\"true\"></i> <span>".concat(donnees[indexDonnees].todo[indexEvent][b], "</span></li>");
        }
      });
    } // ajouter un bouton pour ajouter des activités


    todo += "</div><div class=\"btnplus\" id=\"btnplus-".concat(indexDonnees, "-").concat(indexEvent, "\">+</div></div>");
    todoNow[indexDonnees].innerHTML += todo;
    var btnplus = document.getElementById("btnplus-".concat(indexDonnees, "-").concat(indexEvent));
    var addtodo = document.getElementById("addtodo-".concat(indexEvent)); //ajouter une nouvelle activité

    btnplus.addEventListener("click", function () {
      addtodo.innerHTML += "<li class=\"linewacti\"><input id=\"newacti\" class=\"newactinow\"/><input type=\"submit\" id=\"addacti\" value=\"Ajouter\"/></li> ";
      var linewacti = document.querySelector(".linewacti");
      var addacti = document.getElementById("addacti");
      var newacti = document.getElementById("newacti");
      addacti.addEventListener("click", function () {
        // si on a bien rentré une activité
        if (newacti.value !== "") {
          //on change le html dans le li
          linewacti.innerHTML = "</i><input type=\"checkbox\" class=\"newactinow\" id=\"".concat(indexDonnees, "-").concat(indexEvent, "-now\" name=\"").concat(newacti.value, "\"/> <i class=\"fa fa-history lateracti\" aria-hidden=\"true\"> <label  class=\"label\" for=\"").concat(newacti.value, "\">").concat(newacti.value, "</label>");
          donnees[indexDonnees].todo[indexEvent].push(newacti.value);
          donnees[indexDonnees].etatTodo[indexEvent].push("unchecked"); // changer la class pour n'avoir toujours qu'une seule classe "linewacti"

          linewacti.classList.replace("linewacti", "newactilater");
        }

        var checkboxesActi = document.querySelectorAll(".newactinow");
        var laterActi = document.querySelectorAll(".lateracti");
        checkNewActi(checkboxesActi);
        reportActi(laterActi);
      });
    }); // fonction pour checker les checkboxs à partir du tableau

    var checkHobbies = function checkHobbies(checkboxes) {
      checkboxes.forEach(function (check) {
        var idCheck = check.id.split("-");
        var celluleToCheck = cellsIndex.indexOf("".concat(idCheck[0], "-").concat(idCheck[1], "-").concat(idCheck[2]));
        var indexH = check.id.split("-")[2];
        var indexE = check.id.split("-")[1];
        var indexD = check.id.split("-")[0];
        check.addEventListener("click", function () {
          if (!check.hasAttribute("checked")) {
            check.setAttribute("checked", "checked");
            trueFalse[celluleToCheck].innerHTML = "<i class=\"fa fa-pagelines\" aria-hidden=\"true\"></i>";
            donnees[indexD].hobbies[indexH].pratique[indexE] = true;
            donnees[indexD].hobbies[indexH].etat[indexE] = "checked";
            check.setAttribute("disabled", "");
          }
        });
      });
    }; // fonction pour reporter des events


    var reportActi = function reportActi(lateracti) {
      var newActiLater = document.querySelectorAll(".newactilater");
      lateracti.forEach(function (lateActi, k) {
        lateActi.addEventListener("click", function () {
          if (indexEvent == 6) {
            donnees[parseInt(indexDonnees) + 1].todo[0].push(donnees[indexDonnees].todo[indexEvent][k]);
          } else {
            donnees[indexDonnees].todo[parseInt(indexEvent) + 1].push(donnees[indexDonnees].todo[indexEvent][k]);
          }

          donnees[indexDonnees].todoLater[indexEvent].push(donnees[indexDonnees].todo[indexEvent][k]);
          donnees[indexDonnees].etatTodo[indexEvent][k] = "report";
          todoLaterActi[indexDonnees].innerHTML += "<li> <i class=\"fa fa-history todolateracti\" aria-hidden=\"true\"></i> <span>".concat(donnees[indexDonnees].todo[indexEvent][k], "</span></li>");
          newActiLater[k].style.display = "none";
        });
      });
    }; // fonction pour checker les nouvelles actis


    var checkNewActi = function checkNewActi(check) {
      check.forEach(function (elt, j) {
        if (donnees[indexDonnees].etatTodo[indexEvent][j] === "checked") {
          elt.setAttribute("checked", "checked");
        }

        elt.addEventListener("click", function () {
          if (!elt.hasAttribute("checked")) {
            elt.setAttribute("checked", "checked");
            donnees[indexDonnees].etatTodo[indexEvent][j] = "checked";
          }
        });
      });
    }; // checker les checkbox de la todo. Si elt a une bullet, alors il est déjà checké


    var laterActi = document.querySelectorAll(".lateracti");
    var label = document.querySelectorAll(".label");
    var checkboxes = document.querySelectorAll(".now");
    var checkboxesActi = document.querySelectorAll(".newactinow");
    var laters = document.querySelectorAll(".later");
    laters.forEach(function (later) {
      var indexD = later.id.split("-")[0];

      if (later.id.split("-")[0] === indexDonnees) {
        listLater[indexD].oneListLater[indexEvent].push(later);
      }
    });
    checkNewActi(checkboxesActi);
    reportActi(laterActi);
    checkboxes.forEach(function (checkboxe) {
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
    }); // Ce qu'il se passe quand on clique sur une checkbox
    // si reclick sur une checkbox déjà check, elt => "report" + symbole à la place de la checkbox
    // si on check une checkboxe, une bullet apparait dans la case correspondante

    checkHobbies(listCheckboxe[indexDonnees].oneListCheck[indexEvent]);
  });
}); // création du carrousel
//  ajouter et enlever des classes (display none ou pas) lorsqu'on clique sur les carrets

var containers = document.querySelectorAll(".container");
var goLefts = document.querySelectorAll(".goleft");
var goRights = document.querySelectorAll(".goright");
goLefts.forEach(function (goLeft, g) {
  if (g === 0) {
    goLeft.style.color = "transparent";
  }

  goLeft.addEventListener("click", function () {
    if (g !== 0) {
      containers[g].classList.add("hidden");
      containers[g].classList.remove("visible");
      containers[g - 1].classList.remove("hidden");
      containers[g - 1].classList.add("visible");
    }
  });
});
goRights.forEach(function (goRight, g) {
  if (g === donnees.length - 1) {
    goRight.style.color = "transparent";
  }

  goRight.addEventListener("click", function () {
    if (g !== donnees.length - 1) {
      containers[g].classList.add("hidden");
      containers[g].classList.remove("visible");
      containers[g + 1].classList.remove("hidden");
      containers[g + 1].classList.add("visible");
    }
  });
});
},{"./style.scss":"style.scss"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50544" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map