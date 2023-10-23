import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";


export const RawHeaders = createParamDecorator(
    ( data, ctx: ExecutionContext ) => {
        console.log({ctx});

        const req = ctx.switchToHttp().getRequest();
        
        const headers = req.rawHeaders;

        if (!headers) {
            throw new InternalServerErrorException('Headers not found (request)');
        }
        
        return headers;
    }
);