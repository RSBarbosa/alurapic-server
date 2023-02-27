import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller ( 'users')
export class UsuarioController {

        // private usuarioService = new UsuarioService( );
        constructor(private usuarioService: UsuarioService){}

        // users/Renata  path param
        @Get(':nomeDeUsuario' )
        public buscaPorNomeUsuario(@Param('nomeDeUsuario' ) nomeDeUsuario: string){
          const usuarioEncontrado = this.usuarioService.buscaPorNomeUsuario(nomeDeUsuario)
          return usuarioEncontrado;
        }

        @Post()
        public cria(@Body( ) usuario: Usuario): Usuario {
           const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;

  }
   
  
}