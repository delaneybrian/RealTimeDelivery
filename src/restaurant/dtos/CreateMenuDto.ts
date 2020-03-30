import { MenuItem } from "../interfaces/MenuItem";

export class CreateMenuDto {
    id: string;
    name: string;
    items: MenuItem[];
}