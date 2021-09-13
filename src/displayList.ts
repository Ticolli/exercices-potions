// @ts-ignore
import { DbWrapper } from "./DbWrapper.ts";
import { resolve } from 'path/posix';

const dbWrapper = new DbWrapper();

function listenAddList(person: object): void {
  // todo save person and update front
  let table: any  = document.getElementsByTagName("tbody");
  let i,h,row,name,firstname, age: any;

  dbWrapper.add("persons",person)

  //ajout d'une ligne au tableau
  row = document.createElement('tr');

    name = document.createElement('td');
    name.innerHTML = person[0];

    firstname = document.createElement('td');
    firstname.innerHTML = person[1];

    age = document.createElement('td');
    age.innerHTML = person[3];
  
    table.appendChild(row);
}

function displaySavedList(): void {
  // todo get all persons saved and add them in front
  let allpersons: Array<object> = dbWrapper.getAll("persons");
  let table: any  = document.getElementsByTagName("tbody");
  let i,h,row,name,firstname, age: any;

  //boucle de création du tableau
  for(i=0; i < allpersons.length; i++ ) {
    let personne: object = allpersons[i] 
  
    row = document.createElement('tr');

    name = document.createElement('td');
    name.innerHTML = personne[0];

    firstname = document.createElement('td');
    firstname.innerHTML = personne[1];

    age = document.createElement('td');
    age.innerHTML = personne[2];
  
    table.appendChild(row);
  }
}

export { listenAddList, displaySavedList };
