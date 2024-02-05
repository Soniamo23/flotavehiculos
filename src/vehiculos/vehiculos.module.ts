import { Module } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VehiculosController],
  providers: [VehiculosService],
  imports:  [PrismaModule],
})
export class VehiculosModule {}
