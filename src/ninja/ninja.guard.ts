import { CanActivate, ExecutionContext, Injectable, Header } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class NinjaGuard implements CanActivate {
  private readonly key:string = "dgd63v";
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    const Token = request.headers["x-auth-token"];
    
    
    return Token === this.key ;
  }
}
