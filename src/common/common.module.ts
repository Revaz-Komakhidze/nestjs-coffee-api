import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key.guard';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/iam/config/jwt.config';

@Module({
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
  imports: [ConfigModule.forFeature(jwtConfig)],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
