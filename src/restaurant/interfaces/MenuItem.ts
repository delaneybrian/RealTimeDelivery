import { MenuItemType } from "./MenuItemType";

export interface MenuItem {
    id: number;
    name: string;
    price: number;
    type: MenuItemType;
}