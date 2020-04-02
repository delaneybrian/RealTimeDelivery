import { Controller, Body, Post, Delete, Query, Get, Param } from '@nestjs/common';
import { MenuDto } from '../dtos/MenuDto';
import { MenuRepository } from '../infrastructure/repositories/MenuRepository';

@Controller('menus')
export class MenuController {

    constructor(private menuRepository: MenuRepository){}

    @Get(':id')
    async getMenuById(@Param('id') id: string){
        return this.menuRepository.GetMenuById(id);
    }

    @Post()
    async createMenu(@Body() menuDto: MenuDto){
        return this.menuRepository.CreateMenu(menuDto);
    }

    @Delete(':id')
    async deleteMenuById(@Param('id') id: string){
        return this.menuRepository.DeleteMenuById(id);
    }

    // @Post('menuItem')
    // async createMenuItem(
    //     @Query('menuId') menuId: string,
    //     @Body() createMenuItemDto: CreateMenuItemDto){
    //     return this.menuRepository.CreateMenuItemOnMenu(menuId, createMenuItemDto);
    // }

    // @Delete('menuItem')
    // async deleteMenuItemById(
    //     @Query('menuId') menuId: string,
    //     @Query('menuItemId') menuItemId: string){
    //     return this.menuRepository.DeleteMenuItemOnMenu(menuId, menuItemId);
    // }
}
