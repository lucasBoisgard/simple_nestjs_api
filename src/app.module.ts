import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { MessageModule } from './message/message.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    RoomModule,
    AuthModule,
    ConfigModule.forRoot({isGlobal: true,}),
    MessageModule,
    MongooseModule.forRoot(
      'mongodb+srv://'+process.env.DATABASE_USER+
      ':' + process.env.DATABASE_PASSWORD + 
      '@' + process.env.DATABASE_URL,
    ),
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
