import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './module/person.module';
import { BookModule } from './module/book.module';

@Module({
    imports: [PersonModule, BookModule, TypeOrmModule.forRoot({
        "database": "./database.sql",
        "type": "sqlite",
        "synchronize": true,
        "entities": ["dist/**/*.model.js"]
    })]
})
export class AppModule { }