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

export default router