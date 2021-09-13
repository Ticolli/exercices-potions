import { resolve } from "path/posix";

class DbWrapper {
  private _name: string = "potions";
  private _version: number = 1;
  private _objectStore: object = {
    name: "persons",
    options: { autoIncrement: true, keyPath: "id" },
  };
  private _db: IDBDatabase;

  private async open(): Promise<void> {
    if (!this._db) {
      // todo open an instance of the database
      let db: any;
      let request: IDBOpenDBRequest = indexedDB.open(this._name, this._version);
      let objectStore: IDBObjectStore;      

      request.onupgradeneeded = function(event: any) {
        db = event.target.result;
        objectStore = db.createObjectStore("persons", { autoIncrement: true, keyPath: "id" });
       };

      request.onsuccess = function(event: any) {
         db = event.target.result;
      };
    }
  }

  /**
   * TS2740: Type 'Promise<void>' is missing the following properties from type 'object[]': 
   * length, pop, push, concat, and 29 more.
   * Recherche :
   * https://stackoverflow.com/questions/64114735/eslint-error-type-promisevoid-is-missing-the-following-properties-fro
   * Je ne trouve pas l'erreur je me doute que j'ai un problème avec la manière dont je retourne mon tableau.
   */

  async getAll(objectStore: string): Promise<void> {
    await open();
    // todo return all objects in specific objectStore

    let store = this._db.transaction(objectStore).objectStore(objectStore);
    let objects: Array<object> = [];

    store.openCursor().onsuccess = function(event: any) {
    let cursor: any = event.target.result;
      if (cursor) {
        objects.push(cursor.value);
        cursor.continue();
      }
      else {
        return objects;
      }
      
    };
  }

  async add(objectStore: string, object: object): Promise<void> {
    await open();
    // todo add object in object store
    /**
     * Pas pu le tester mais voila comment je l'ai écrit.
     */
    let transaction : IDBTransaction = this._db.transaction([objectStore],"readwrite")
    let store: any;
    let anObject: any;

    store = transaction.objectStore(objectStore);
    
    for(anObject in this.getAll(objectStore)){
      if(object != anObject) {
        let request: IDBRequest = store.add(object)
      }
    }
  }
}

export { DbWrapper };
