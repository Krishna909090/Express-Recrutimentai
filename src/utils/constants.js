const constants = {
    INVALID_LOGIN : 'Invalid Credentials',
    LOGIN_SUCCESS : 'User authenticated successfully',
    LOGIN_FAILURE : 'User entered Invalid credentials',
    REGISTER_SUCCESS : 'User registered successfully',
    REGISTER_FAILURE : 'User already Registered',
    EXCEPTION : 'Something went wrong',
    UNAUTHORIZE : 'Unauthorized',
    NOT_FOUND : 'Not Found',
    FETCH_SUCCESS : 'User details found',
    FETCH_FAILURE : 'User details not found',
    EMAIL_SUCCESS : 'Email sent Successfully',
    DB_URL_NOT_FOUND : 'DB URL not found',
    DB_CONNECTION_ERROR : 'DB URL is not working',
    USER_EXIST : 'User already exist'
  };

  const statuscodes = {
    BAD_REQUEST : 400,
    UNAUTHORIZED : 401,
    NOT_FOUND : 404,
    FORBIDDEN : 403,
    CONFLICT : 409,
    PAYLOAD_TOO_LARGE : 413,
    INTERNAL_SERVER_ERROR : 500,
    BAD_GATEWAY : 502,
    GATEWAY_TIMEOUT : 504,
    SUCCESS : 200,
    CREATED : 201
  };  

  const messages = {
    BAD_REQUEST : 'BadRequest',
    UNAUTHORIZED : 'Unauthorized',
    FORBIDDEN : 'Forbidden',
    CONFLICT : 'Conflict',
    PAYLOAD_TOO_LARGE : 'PayloadTooLarge',
    INTERNAL_SERVER_ERROR : 'InternalServerError',
    BAD_GATEWAY : 'BadGateway',
    GATEWAY_TIMEOUT : 'GatewayTimeout'
  }
  
module.exports = { constants, statuscodes, messages };
