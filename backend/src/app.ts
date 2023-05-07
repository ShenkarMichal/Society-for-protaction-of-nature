import express from 'express' 
import routeNotFound from './3-middlewares/route-not-found'
import catchAll from './3-middlewares/catch-all'
import appConfig from './2-utils/app-config'
import travelPlaceController from './6-controllers/travel-place-controller'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(express.json())

server.use("/api", travelPlaceController )
server.use("*", routeNotFound)
server.use(catchAll)

server.listen(appConfig.port, ()=>console.log(`Listen on port ${appConfig.port}`))
