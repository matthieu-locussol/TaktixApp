import { makeAutoObservable } from 'mobx';

export class CharacterStore {
   public loadingData: boolean = true;

   public name: string | null = null;

   constructor() {
      makeAutoObservable(this);
   }

   public setLoadingData(loadingData: boolean) {
      this.loadingData = loadingData;
   }

   public setName(name: string | null) {
      this.name = name;
   }
}
