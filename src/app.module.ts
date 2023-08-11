import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjaModule } from './ninja/ninja.module';
import { NinjaMiddleware } from './ninja/ninja.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    NinjaModule,
    BookModule,
    ConfigModule.forRoot({
      envFilePath: [".local.env"],
      isGlobal: true,
    }),
    // MongooseModule.forRootAsync({
    //   useFactory: (configService:ConfigService) => ({
    //     uri: configService.get<string>('MONGOURL')        
    //   }),
    //   inject: [ConfigService],
    // }),

    MongooseModule.forRoot("mongodb://localhost/book")
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NinjaMiddleware).forRoutes('ninja')
  }
}
