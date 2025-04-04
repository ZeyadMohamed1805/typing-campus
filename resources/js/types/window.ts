import { AxiosStatic } from "axios";

export type TWindow = Window & typeof globalThis & { 
    axios?: AxiosStatic 
}