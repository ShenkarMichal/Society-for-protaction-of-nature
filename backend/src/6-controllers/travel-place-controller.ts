import express, { NextFunction, Request, Response } from 'express'
import travelPlaceLogic from '../5-logics/travel-place-logic'
import TravelPlaceModel from '../4-models/travel-place-model'
import fs from "fs";
import path from 'path';

const router = express.Router()

//Get all travel place
router.get("/travel-place", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const travelPlace = await travelPlaceLogic.getAllTravelPlace()
        response.json(travelPlace)
    } 
    catch (err: any) {
        next(err)  
    }
})

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

//Get specific travel-place
router.get("/travel-place/:travelPlaceID", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const travelPlaceID = +request.params.travelPlaceID
        const travelPlace = await travelPlaceLogic.getSpecificTravelPlace(travelPlaceID)
        response.json(travelPlace)
    } 
    catch (err: any) {
        next(err)  
    }
})

//Get area by id
router.get("/area/:areaID", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const areaID = +request.params.areaID
        const area = await travelPlaceLogic.getAreaById(areaID)
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

//Add travel place
router.post("/travel-place", async (request: Request, response: Response, next: NextFunction)=>{
    try {   
        request.body.image = request.files?.image
        const travelPlace = new TravelPlaceModel(request.body)
        const addedTravelPlace = await travelPlaceLogic.addTravelPlace(travelPlace)
        response.status(201).json(addedTravelPlace)
    } 
    catch (err: any) {
        next(err)  
    }
})

//Delete travel-place
router.delete("/travel-place/:travelPlaceID", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const travelPlaceID = +request.params.travelPlaceID
        await travelPlaceLogic.deleteTravelPlace(travelPlaceID)
        response.sendStatus(204)
    } 
    catch (err: any) {
        next(err)  
    }
})

//Serve the travel-place-image
router.get("/travel-place/images/:travelPlaceID", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const travelPlaceID = +request.params.travelPlaceID
        const imageName = await travelPlaceLogic.getImageNameByID(travelPlaceID)
        const image = path.join(__dirname, "..", "1-assets", "images", imageName)
        response.sendFile(image)        
    }
    catch (err: any) {
        next(err)        
    }
})

export default router