import { makeAutoObservable } from 'mobx';
import { LoadingScreenStore } from './LoadingScreenStore';

export class Store {
   loadingScreenStore = new LoadingScreenStore();

   constructor() {
      makeAutoObservable(this);
   }
}
