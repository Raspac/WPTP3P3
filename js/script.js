function ajouter(){
  //Vérifier que la récupération se fait bien !)
  console.log(document.forms.newTaskF.tache.value);
  console.log(document.forms.newTaskF.date.value);

  const table = document.querySelector('.datatable tbody')

  var newTask = tacheSaisie();
  pushTask(newTask);
  myTasks.forEach((element) => {

    var aName = element.name;
    var aDate = element.date;
    var aCateg = element.categorie;

    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    console.log(aName);

    taskTd.textContent = aName;
    console.log(taskTd.textContent);
    dateTd.textContent = aDate;
    categorieTd.textContent = aCateg;

    //if (check()) {
      newItem.append(taskTd, dateTd, categorieTd);
      table.appendChild(newItem);
    //}

    });

}

//supprimer toutes les lignes du tableau
function supprimer() {
      const tbody = document.querySelector('.datatable tbody' )
      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
      }
  
}

function tacheSaisie() {
console.log(document.forms.newTaskF.tache.value);
console.log(document.forms.newTaskF.date.value);

var inputName = document.newTaskF.tache.value;
var inputDate = document.newTaskF.date.value;
var inputCategorie = document.newTaskF.categorie.value;

const newTache = new Tache(inputName, inputDate, inputCategorie);
return newTache;
}


var myNewTask = {
    name : document.newTaskF.tache.value,
    date : document.newTaskF.date.value,
    categorie : document.newTaskF.categorie.value,
}

  
class Tache {
  constructor(name, date, categorie) {
    this.name = name;
    this.date = date;
    this.categorie = categorie;
  }
}

var myTasks = [];

function pushTask(aTask){
  myTasks.push(aTask);
}

