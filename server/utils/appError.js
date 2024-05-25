class creatError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = "${statusCode}".startsWith("4") ? "fail" : "error";
    this.status;
    1;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = creatError;
