import { Module } from '@nestjs/common';
import { MinioModule } from 'nestjs-minio-client';
import { MinioClientService } from './minio-client.service';

@Module({
  imports: [
    MinioModule.register({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'minio_access_key',
      secretKey: 'minio_secret_key'
    })
  ],
  providers: [MinioClientService]
})
export class MinioClientModule {}
