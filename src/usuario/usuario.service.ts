import { Injectable } from "@nestjs/common/decorators";
import { Usuario } from "./usuario.entity";

@Injectable( )
export class UsuarioService {
  private usuarios: Array<Usuario>= [{
    id: 123,
    nomeDeUsuario: "renata",
    email: "renata@email.com",
    senha: "jfhhgjs",
    nomeCompleto: "Renata Barbosa",
    dataDeEntrada: new Date ( )
  }];

  public cria(usuario: Usuario): Usuario{
    this.usuarios.push(usuario);

  return usuario;
} 
  public buscaPorNomeUsuario(nomeDeUsuario: string): Usuario{
    return this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);
  }
}