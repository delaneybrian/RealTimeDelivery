import { Controller, Body, Post, Delete, Query } from '@nestjs/common';
import { CreateMenuDto } from '../dtos/CreateMenuDto';
import { CreateMenuItemDto } from '../dtos/CreateMenuItemDto';
import { MenuRepositoryService } from '../menu-repository.service';

@Controller('menu')
export class MenuController {

    constructor(private menuRepositoryService: MenuRepositoryService){}

    @Post()
    async createMenu(@Body() createMenuDto: CreateMenuDto){
        return this.menuRepositoryService.CreateMenu(createMenuDto);
    }

    @Delete()
    async deleteMenuById(@Query() menuId: string){
        return this.menuRepositoryService.DeleteMenuById(menuId);
    }

    @Post()
    async createMenuItem(@Body() createMenuItemDto: CreateMenuItemDto){
        return this.menuRepositoryService.CreateMenuItem(createMenuItemDto);
    }

    @Delete()
    async deleteMenuItemById(@Query() menuItemId: string){
        return this.menuRepositoryService.DeleteMenuItemById(menuItemId);
    }
}
