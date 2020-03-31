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
    async createMenuItem(
        menuId: string,
        @Body() createMenuItemDto: CreateMenuItemDto){
        return this.menuRepositoryService.CreateMenuItemOnMenu(menuId, createMenuItemDto);
    }

    @Delete()
    async deleteMenuItemById(
        menuId: string,
        @Query() menuItemId: string){
        return this.menuRepositoryService.DeleteMenuItemOnMenu(menuId, menuItemId);
    }
}
