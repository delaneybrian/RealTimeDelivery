import { MenuItemType } from './MenuItemType';

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    type: MenuItemType;
}