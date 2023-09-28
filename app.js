export { createJwt };
import jwt from 'jsonwebtoken';
const createJwt = function (payload, tokenKey, tokenExpireDate, RefreshtokenExpireDate) {
    const token = jwt.sign(
        payload,
        tokenKey,
        {
            expiresIn: tokenExpireDate,
        }
    );
    const refresh = jwt.sign(
        payload,
        tokenKey,
        {
            expiresIn: RefreshtokenExpireDate,
        }
    );
    return { token, refresh }

};