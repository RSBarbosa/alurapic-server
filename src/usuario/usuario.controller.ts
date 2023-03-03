import { Body, Controller, Post, Get, Param, HttpStatus, NotFoundException } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
import { NestResponseBuilder} from "../core/http/nest-response-builder";

@Controller ( 'users')
export class UsuarioController {

  
        constructor(private usuarioService: UsuarioService){ }
        
        @Get(':nomeDeUsuario' )
        public buscaPorNomeUsuario(@Param('nomeDeUsuario' ) nomeDeUsuario: string){
          const usuarioEncontrado = this.usuarioService.buscaPorNomeUsuario(nomeDeUsuario)

          if( !usuarioEncontrado){
            throw new NotFoundException( {
              statusCode: HttpStatus.NOT_FOUND,
              message: "Usuário não encontrado"
            });
          }
          return usuarioEncontrado;
        }

        @Post()
        public cria(@Body( ) usuario: Usuario) : NestResponse {

           const usuarioCriado = this.usuarioService.cria(usuario);
           return new NestResponseBuilder ( )
            .comStatus( HttpStatus.CREATED)
            .comHeaders({
                'Location': `/users/${usuarioCriado.nomeDeUsuario}`
            })
            .comBody(usuarioCriado)
            .build( );

  }
  
}