 class Errorhandler extends Error {
  constructor(messages,statusCode) {
    super(messages);
  
    this.statusCode = statusCode
    Error.captureStackTrace(this,this.constructor);
  }
}
module.exports = Errorhandler;
