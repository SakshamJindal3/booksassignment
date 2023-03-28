import { handlerPath } from '@libs/handler-resolver';

export const authorizationfunction = {
    authorize: {
        handler: `${handlerPath(__dirname)}/handler.authorize`,
        events: [
            {
                http: {
                    method: 'get',
                    path: 'authorize',
                    cors: true,

                },
            },
        ],

    },
};