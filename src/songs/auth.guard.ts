import { CanActivate, ExecutionContext } from "@nestjs/common";
import { request } from "http";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const Request = context.switchToHttp().getRequest<Request>();
        const isAuthenticated = request.headers['authorization'] ? true : false;
        return isAuthenticated;
    }
}