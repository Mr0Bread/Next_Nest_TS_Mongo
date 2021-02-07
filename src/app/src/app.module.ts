import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdministratorsModule } from './administrators/administrators.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
	AuthModule,
	UsersModule,
	MongooseModule.forRoot(
	  `mongodb://${ process.env.MONGO_USERNAME }:${ process.env.MONGO_PASSWORD }@mongo/test?authSource=admin`,
	  {
		useNewUrlParser: true
	  }),
	AdministratorsModule,
	TestModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
