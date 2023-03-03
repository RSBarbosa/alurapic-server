import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TransformaRespostaInterceptor } from './core/http/trabsforma-resposta.interceptador';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [UsuarioModule],
  controllers: [ ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ClassSerializerInterceptor

    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor
    }
 ],
})
export class AppModule {}
