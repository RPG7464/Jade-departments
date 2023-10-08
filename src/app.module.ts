import { Module, ValidationPipe } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { DepartmentModule } from './department/department.module';
import { APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { Constants } from './constants/constants';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CategoriesModule,
    DepartmentModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(Constants.DATABASE_URL),
  ],
  controllers: [],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
