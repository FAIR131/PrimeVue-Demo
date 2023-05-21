export interface Icolums {
  name: string;
  label: string;
  align?: string;
  width: string;
  tree?: boolean;
}

export interface Itasks {
  id: number;
  text: string;
  start_date: string;
  duration: number;
  progress: number;
  open?: boolean;
  parent?: number;
}

export interface Ilinks {
  id: number;
  source: number;
  target: number;
  type: string;
}
