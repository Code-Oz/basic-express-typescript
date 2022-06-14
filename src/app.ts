import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello root')
})

app.get('/toto', (req: Request, res: Response) => {
    res.send('Hello toto from the far north')
})

app.get('*', (req: Request, res: Response) => {
    res.status(404).send("File not found");
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
