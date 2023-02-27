import { Injectable } from "@nestjs/common/decorators";

@Injectable( )
export class UsuarioService {

  private usuarios = [];

  public cria(usuario){
    this.usuarios.push(usuario);

  return usuario;
}
}