import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './module/person.module';
import { BookModule } from './module/book.module';
import { ExchangeModule } from './module/exchange.module';
import { AuthModule } from './module/auth.module';
import { ReviewModule } from './module/review.module';

@Module({
    imports: [PersonModule, BookModule, ExchangeModule, AuthModule, ReviewModule, TypeOrmModule.forRoot({
        "database": "./database.sql",
        "type": "sqlite",
        "synchronize": true,
        "entities": ["dist/**/*.model.js"]
    })]
})
export class AppModule { }