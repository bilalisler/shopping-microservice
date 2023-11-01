import express, {Express, Request, Response, NextFunction, ErrorRequestHandler} from 'express'

const app: Express = express()

app.use(express.json())
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send('Something broke!')
})

export default app
