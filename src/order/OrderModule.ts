import { Module } from '@nestjs/common';
import { OrderController } from './OrderController';

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [],
    exports: []
})
export class OrderModule {}
