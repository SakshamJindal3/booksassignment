import { APIGatewayProxyHandler } from 'aws-lambda';
import token from 'jsonwebtoken';
import { formatJSONResponse } from "src/utills/ApiGateway";

const secret = process.env.SECRETKEY;

export const authorize: any  = async (event) => {
    try {
        const authorizationHeader = event.headers.Authorization || event.headers.authorization;
        if (!authorizationHeader) {
            return formatJSONResponse(401, { data: "Authorization Header missing" });
        }

        const tokens = authorizationHeader.split(' ')[1];
        const decodedToken = token.verify(tokens, secret) as { id : string };
        const id = decodedToken.id;

        return ({ result: true , userid : id});
    } catch (error) {
        console.log(error);
        return formatJSONResponse(400, { data: "Unauthorized" });
    }
};
