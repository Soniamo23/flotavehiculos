import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';

@Module({
  imports: [PrismaModule, VehiculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
