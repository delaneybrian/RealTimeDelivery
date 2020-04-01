import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dtos/CreateMenuDto';
import { Model } from 'mongoose';
import { CreateMenuItemDto } from './dtos/CreateMenuItemDto';
import { InjectModel } from '@nestjs/mongoose';
import { MenuDocument } from './interfaces/MenuDocument';
import { Menu } from './interfaces/Menu';
import { MenuItemDocument } from './interfaces/MenuItemDocument';
import * as _ from 'lodash';

@Injectable()
export class MenuRepositoryService {

    constructor(@InjectModel('Menu') private menuModel: Model<MenuDocument>,
        @InjectModel('MenuItem') private menuItemModel: Model<MenuItemDocument>) { }

    async GetMenuById(menuId: string): Promise<Menu> {
        let menu = await this.menuModel
            .findOne({ 'id': menuId })
            .exec();

        return menu;
    }

    async CreateMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
        const createdMenu = new this.menuModel(createMenuDto);
        createdMenu.save();

        return createdMenu;
    }

    async DeleteMenuById(menuId: String) {
        await this.menuModel.deleteOne({ id: menuId });
    }

    async CreateMenuItemOnMenu(menuId: string, createMenuItemDto: CreateMenuItemDto): Promise<Menu> {
        let menu = await this.menuModel.findOne({ id: menuId });

        var menuItem = await this.menuItemModel.create(createMenuItemDto);

        menu.items.push(menuItem);

        menu.save();

        return menu;
    }

    async DeleteMenuItemOnMenu(menuId: string, menuItemId: string): Promise<Menu> {
        let menu = await this.menuModel.findOne({ id: menuId });

        _.remove(menu.items, (item) => {return item.id === menuItemId});

        menu.save();

        return menu;
    }
}
