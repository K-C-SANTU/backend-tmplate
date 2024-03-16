import { DB } from '@config';

export const dbConnection = {
    url: DB,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};
