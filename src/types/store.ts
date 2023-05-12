export interface Itasks{
    id: number,
    text: string,
    start_date: string,
    duration: number,
    progress: number,
    open?: boolean,
    parent?:number
}