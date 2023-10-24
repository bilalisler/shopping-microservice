import BaseError from "./BaseError.js";

export default class InvalidPasswordException extends BaseError {
    constructor(
        description = 'Invalid Password'
    ) {
        super(401, description)
    }
}