import { Controller, Get, Param, Post, Delete, Body, NotFoundException, Put } from '@nestjs/common';
import { DishDto } from '../dtos/DishDto';
import { IDishRepository } from 'src/interfaces/IDishRepository';

@Controller('dishes')
export class DishController {

    constructor(private dishRepository: IDishRepository) { }

    @Get(':id')
    async getDishById(@Param('id') id: string) {
        let dishMaybe = await this.dishRepository.GetDishById(id);

        if(dishMaybe === null)
            throw new NotFoundException(`Dish with id ${id} not found`);
        else
            return dishMaybe;
    }

    @Post()
    async createDish(@Body() dishDto: DishDto) {
        return this.dishRepository.CreateDish(dishDto);
    }

    @Delete(':id')
    async deleteDishById(@Param('id') id: string) {
        let success = await this.dishRepository.DeleteDishById(id);

        if(!success)
            throw new NotFoundException(`Dish with id ${id} not found`);
    }

    @Put(':id')
    async updateDishById(@Param('id') id: string,
        @Body() dishDto: DishDto) {
        let dishMaybe = await this.dishRepository.UpdateDishById(id, dishDto);

        if(dishMaybe === null)
            throw new NotFoundException(`Dish with id ${id} not found`);
        else
            return dishMaybe;
    }
}
