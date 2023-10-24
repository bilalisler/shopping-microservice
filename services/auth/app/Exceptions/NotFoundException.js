import BaseError from "./BaseError.js";

export default class NotFoundException extends BaseError {
    constructor(
        description = 'Not found.'
    ) {
        super(404, description)
    }
}