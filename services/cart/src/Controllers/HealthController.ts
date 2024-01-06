import {Request, Response} from "express";

class HealthController {
    public async check(req: Request, res: Response) {
        res.json({
            "status": "Success Cart"
        })
    }
}

export default new HealthController