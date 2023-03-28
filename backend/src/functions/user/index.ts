import { Register } from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const functions = {
  register: {
    handler: `${handlerPath(__dirname)}/handler.register`,
    events: [
      {
        http: {
          method: 'post',
          path: 'register',
          cors: true,
          request: {
            schemas: {
              'application/json': Register,
            },
          },
        },
      },
    ],
  },
  login: {
    handler: `${handlerPath(__dirname)}/handler.login`,
    events: [
      {
        http: {
          method: 'post',
          path: 'login',
          cors: true,
        }
      }
    ]
  },
  getuserdata: {
    handler: `${handlerPath(__dirname)}/handler.getuserdata`,
    events: [
      {
        http: {
          method: 'get',
          path: 'getuserdata',
          cors: true,

        },
      },
    ],
  },
  deleteuser: {
    handler: `${handlerPath(__dirname)}/handler.deleteuser`,
    events: [
      {
        http: {
          method: 'delete',
          path: 'deleteuser',
          cors: true,

        },
      },
    ],
  },
};
