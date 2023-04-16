import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
//import * as LocalSession from 'telegraf-session-local';
import { BotUpdate } from './bot/bot.update';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { ImageModule } from './image/image.module';
import { OrdersModule } from './order/orders.module';

//const session = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      // middlewares: [session.middleware()],
      token: process.env.BOT_TOKEN,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.kpmnfmw.mongodb.net/?retryWrites=true&w=majority`,
    ),
    ItemsModule,
    ImageModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, BotUpdate],
})
export class AppModule {}
