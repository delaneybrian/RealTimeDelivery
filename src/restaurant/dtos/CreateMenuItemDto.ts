import { MenuItemType } from "../interfaces/MenuItemType";

export class CreateMenuItemDto {
    id: string;
    name: string;
    price: number;
    type: MenuItemType;
}
