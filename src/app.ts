import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port = process.env.PORT || 8080;

app.get('/toto', (req: Request, res: Response) => {
    res.send('Hello toto from the far north')
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
