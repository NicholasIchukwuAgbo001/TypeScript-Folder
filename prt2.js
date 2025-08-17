"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginError;
(function (LoginError) {
    LoginError["unauthorizedError"] = "Unauthorized";
    LoginError["invalidCredentials"] = "Invalid Credentials";
    LoginError["serverError"] = "Server Error";
})(LoginError || (LoginError = {}));
const printErrorMessage = (error) => {
    if (error === LoginError.unauthorizedError) {
        console.log("Access denied: Unauthorized user.");
    }
    else if (error === LoginError.invalidCredentials) {
        console.log("Login failed: Invalid credentials provided.");
    }
    else if (error === LoginError.serverError) {
        console.log("Oops! Something went wrong on the server.");
    }
    else {
        console.log("Unknown error.");
    }
};
printErrorMessage(LoginError.unauthorizedError);
printErrorMessage(LoginError.invalidCredentials);
printErrorMessage(LoginError.serverError);
//# sourceMappingURL=prt2.js.map