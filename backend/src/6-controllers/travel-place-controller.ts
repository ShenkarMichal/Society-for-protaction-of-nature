import express, { NextFunction, Request, Response } from 'express'
import travelPlaceLogic from '../5-logics/travel-place-logic'

const router = express.Router()

//Get all area
router.get("/area", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const area = await travelPlaceLogic.getAllArea()
        response.json(area)
    } 
    catch (err: any) {
        next(err)  
    }
})

//Get travel place by areaID
router.get("/travel-place-by-areaID/:areaID", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const areaID = +request.params.areaID
        const travelPlace = await travelPlaceLogic.getPlaceByAreaID(areaID)
        response.json(travelPlace)
    } 
    catch (err: any) {
        next(err)  
    }
})

export default router