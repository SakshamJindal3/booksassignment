import { adminRegister } from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const adminfunctions = {
    adminregister: {
        handler: `${handlerPath(__dirname)}/handler.adminregister`,
        events: [
            {
                http: {
                    method: 'post',
                    path: 'adminregister',
                    cors: true,
                    request: {
                        schemas: {
                            'application/json': adminRegister,
                        },
                    },
                },
            },
        ],
    },
    adminlogin: {
        handler: `${handlerPath(__dirname)}/handler.adminlogin`,
        events: [
            {
                http: {
                    method: 'post',
                    path: 'adminlogin',
                    cors: true,
                }
            }
        ]
    },
};