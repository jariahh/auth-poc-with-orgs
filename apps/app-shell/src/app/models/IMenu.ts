export interface IMenu {
  children: IMenu[];
  modules: string;
  id: number;
  name: string;
  url: string;
  icon: string;
}
