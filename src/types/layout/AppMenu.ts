export interface ImenuItems {
  label: string;
  icon: string;
  to: string;
  name: string;
}

export interface Imenu {
  label: string;
  items: ImenuItems[];
  separator?:string

}
