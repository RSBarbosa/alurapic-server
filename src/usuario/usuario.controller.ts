import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller ( 'users')
export class UsuarioController {

        // private usuarioService = new UsuarioService( );
        constructor(private usuarioService: UsuarioService){
          
        }

        @Post()
        public cria(@Body( ) usuario){
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;

  }
   



  // @Get() 
  // public buscar(@Body() usuario){
  //   this.usuarios.find(usuario);
  //   return this.usuarios;
  // }
}