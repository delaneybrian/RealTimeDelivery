import { Menu } from "src/definitions/Menu";
import { MenuDto } from "src/restaurant/dtos/MenuDto";

export abstract class IMenuRepository{
    public abstract GetMenuById(id: string): Promise<Menu>;
    public abstract CreateMenu(menuDto: MenuDto): Promise<Menu>;
    public abstract DeleteMenuById(id: string);
}