import Ajv, {DefinedError} from "ajv";
import {Request, Response, NextFunction} from "express";

const ajv = new Ajv({removeAdditional: true, useDefaults: true})

export default function validateBody(schema: object) {
    const validate = ajv.compile(schema)

    return (req: Request, res: Response, next: NextFunction) => {
        if (!validate(req.body)) {
            return res.status(400).json(validate.errors)
        }
        return next()
    }
}

function errors(errors: DefinedError[]) {
    for (const err of errors) {
        switch (err.keyword) {
            case "type":
                // err type is narrowed here to have "type" error params properties
                console.log(err.params.type)
                break
            // ...
        }
    }
}