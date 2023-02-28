import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationOptions, ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from "class-validator";
import { UsuarioService } from "./usuario.service";

@Injectable( )
@ValidatorConstraint( )
class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private usuarioService: UsuarioService) { }

    validate(nomeDeUsuario: string, validationOptions?: ValidationArguments): boolean | Promise<boolean>{ 
        return !!!this.usuarioService.buscaPorNomeUsuario(nomeDeUsuario); 
      }
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions ) {
      return function (object: Object, propertyName: string){
          registerDecorator({
                target: object.constructor,
                propertyName: propertyName,
                options: validationOptions,
                constraints: [ ],
                validator: IsNomeDeUsuarioUnicoConstraint,
              });
    };
}


