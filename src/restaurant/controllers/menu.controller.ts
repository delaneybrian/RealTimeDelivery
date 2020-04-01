import { Controller, Body, Post, Delete, Query, Get } from '@nestjs/common';
import { CreateMenuDto } from '../dtos/CreateMenuDto';
import { CreateMenuItemDto } from '../dtos/CreateMenuItemDto';
import { MenuRepositoryService } from '../menu-repository.service';

@Controller('menu')
export class MenuController {

    constructor(private menuRepositoryService: MenuRepositoryService){}

    @Get()
    async getMenuById(@Query('menuId') menuId: string){
        return this.menuRepositoryService.GetMenuById(menuId);
    }

    @Post()
    async createMenu(@Body() createMenuDto: CreateMenuDto){
        return this.menuRepositoryService.CreateMenu(createMenuDto);
    }

    @Delete()
    async deleteMenuById(@Query('menuId') menuId: string){
        return this.menuRepositoryService.DeleteMenuById(menuId);
    }

    @Post('menuItem')
    async createMenuItem(
        @Query('menuId') menuId: string,
        @Body() createMenuItemDto: CreateMenuItemDto){
        return this.menuRepositoryService.CreateMenuItemOnMenu(menuId, createMenuItemDto);
    }

    @Delete('menuItem')
    async deleteMenuItemById(
        @Query('menuId') menuId: string,
        @Query('menuItemId') menuItemId: string){
        return this.menuRepositoryService.DeleteMenuItemOnMenu(menuId, menuItemId);
    }
}
