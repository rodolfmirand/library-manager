import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        "database": "./database.sql",
        "type": "sqlite",
        "synchronize": true,
        "entities":["dist/**/*.model.js"]
    })]
})
export class AppModule {}