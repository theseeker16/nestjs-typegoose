import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Typegoose } from '@hasezoey/typegoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

const mongodbOptions = {
  db: 'mongodb+srv://admin:admin@cluster0-ew0vz.mongodb.net/taskmanagement?retryWrites=true&w=majority',
  options: { 'useNewUrlParser': true, 'useFindAndModify': false, 'useCreateIndex': true, 'useUnifiedTopology': true}
}
@Module({
  imports: [
    TypegooseModule.forRoot(mongodbOptions.db,mongodbOptions.options),
    TaskModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
