enum LoginError {
    unauthorizedError = "Unauthorized",
    invalidCredentials = "Invalid Credentials",
    serverError = "Server Error"
}

const printErrorMessage = (error: LoginError): void => {
    if (error === LoginError.unauthorizedError) {
        console.log("Access denied: Unauthorized user.");
    } else if (error === LoginError.invalidCredentials) {
        console.log("Login failed: Invalid credentials provided.");
    } else if (error === LoginError.serverError) {
        console.log("Oops! Something went wrong on the server.");
    } else {
        console.log("Unknown error.");
    }
}

printErrorMessage(LoginError.unauthorizedError);
printErrorMessage(LoginError.invalidCredentials);
printErrorMessage(LoginError.serverError);
