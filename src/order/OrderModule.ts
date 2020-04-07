import { Module } from '@nestjs/common';
import { OrderController } from './OrderController';
import { MongooseDatabaseModule } from 'src/infrastructure/database/mongoose/MongooseDatabaseModule';

@Module({
    imports: [MongooseDatabaseModule],
    controllers: [OrderController],
    providers: [],
    exports: []
})
export class OrderModule {}
