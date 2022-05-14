import { makeAutoObservable } from 'mobx';

export class LoadingScreenStore {
   public loading: boolean = true;

   public progress: number = 0;

   public currentPath: string | null = null;

   constructor() {
      makeAutoObservable(this);
   }

   public setLoading(loading: boolean) {
      this.loading = loading;
   }

   public setProgress(progress: number) {
      this.progress = progress;
   }

   public setCurrentPath(currentPath: string | null) {
      this.currentPath = currentPath;
   }
}
