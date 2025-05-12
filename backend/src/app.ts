import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "http://localhsot:5173" // Vite port
}))

app.use(express.json())

app.get("/api/health", (req, res) => {
    res.json({status: "healthy"})
})

app.listen(PORT, () => {
    console.log(`Serve is running on ${PORT}`)
})