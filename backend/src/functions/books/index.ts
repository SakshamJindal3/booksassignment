import { books } from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const bookfunctions = {
    addbooks: {
        handler: `${handlerPath(__dirname)}/handler.addbooks`,
        events: [
            {
                http: {
                    method: 'post',
                    path: 'addbooks',
                    cors: true,
                    request: {
                        schemas: {
                            'application/json': books,
                        },
                    },
                },
            },
        ],
    },
    getbookdata: {
        handler: `${handlerPath(__dirname)}/handler.getbookdata`,
        events: [
            {
                http: {
                    method: 'get',
                    path: 'getbookdata',
                    cors: true,
                }
            }
        ]
    },
    updatebookdata: {
        handler: `${handlerPath(__dirname)}/handler.updatebookdata`,
        events: [
            {
                http: {
                    method: 'put',
                    path: 'updatebookdata',
                    cors: true,

                },
            },
        ],
    },
    deletebooksdata: {
        handler: `${handlerPath(__dirname)}/handler.deletebooksdata`,
        events: [
            {
                http: {
                    method: 'delete',
                    path: 'deletebooksdata',
                    cors: true,

                },
            },
        ],
    },
    admingetbookdata: {
        handler: `${handlerPath(__dirname)}/handler.admingetbookdata`,
        events: [
            {
                http: {
                    method: 'delete',
                    path: 'admingetbookdata',
                    cors: true,

                },
            },
        ],
    },
    adminupdatebookdata: {
        handler: `${handlerPath(__dirname)}/handler.adminupdatebookdata`,
        events: [
            {
                http: {
                    method: 'delete',
                    path: 'adminupdatebookdata',
                    cors: true,

                },
            },
        ],
    },
};

