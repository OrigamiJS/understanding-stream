import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MinioModule } from 'nestjs-minio-client';

@Module({
  imports: [
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
