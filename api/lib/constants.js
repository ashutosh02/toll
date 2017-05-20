//Constant variables are declared here.

/**
 * Set current state 
 */

const config = {
    "currentstate": "AP"
}

const statusCode = {
    "ok": 200,
    "error": 401,
    "failed": 1002, 
    "internalError": 1004
}
const messages = {
    "noTollRequired": "No Toll Required",
    "tollCalculated": "Toll Calculated",
    "requestNotProcessed" : "Request could not be processed. Please try again",
    "requiredFieldsMissing": "Required fields missing",
    "noWheelsError": "Minimum  No of Wheels >=2 ",

    
}






var obj = {
    config:config,
    statusCode: statusCode,
    messages: messages
};
module.exports = obj;
