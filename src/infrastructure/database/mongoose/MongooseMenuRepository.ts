import { Injectable } from '@nestjs/common';
import { MenuDto } from '../../../restaurant/dtos/MenuDto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MenuDocument } from '../../../definitions/MenuDocument';
import { Menu } from '../../../definitions/Menu';
import * as _ from 'lodash';
import { IMenuRepository } from 'src/interfaces/IMenuRepository';

@Injectable()
export class MongooseMenuRepository implements IMenuRepository {

    constructor(@InjectModel('Menu') private menuModel: Model<MenuDocument>) { }

    async GetMenuById(id: string): Promise<Menu> {
        let menu = await this.menuModel.findById(id);

        return menu;
    }

    async CreateMenu(menuDto: MenuDto): Promise<Menu> {
        const createdMenu = new this.menuModel(menuDto);
        createdMenu.save();

        return createdMenu;
    }

    async DeleteMenuById(id: string) {
        await this.menuModel.findByIdAndDelete(id);
    }

    // async CreateMenuItemOnMenu(menuId: string, createMenuItemDto: CreateMenuItemDto): Promise<Menu> {
    //     let menu = await this.menuModel.findOne({ id: menuId });

    //     var menuItem = await this.menuItemModel.create(createMenuItemDto);

    //     menu.items.push(menuItem);

    //     menu.save();

    //     return menu;
    // }

    // async DeleteMenuItemOnMenu(menuId: string, menuItemId: string): Promise<Menu> {
    //     let menu = await this.menuModel.findOne({ id: menuId });

    //     _.remove(menu.items, (item) => {return item.id === menuItemId});

    //     menu.save();

    //     return menu;
    // }
}
