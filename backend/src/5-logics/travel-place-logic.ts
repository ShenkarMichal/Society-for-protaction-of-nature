import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import AreaModel from "../4-models/area-model";
import TravelPlaceModel from "../4-models/travel-place-model";
import { ResourceNotFoundErrorModel } from "../4-models/error-models";

async function getAllTravelPlace(): Promise<TravelPlaceModel[]>{
    const sql = `SELECT T.*, A.areaName
                 FROM travelplace AS T JOIN area AS A
                 ON T.areaID = A.areaID`
    const travelPlace = await dal.execute(sql)
    return travelPlace    
}

async function getAllArea(): Promise<AreaModel[]> {
    const sql = "SELECT * FROM area"
    const area = await dal.execute(sql)
    return area    
}

async function getSpecificTravelPlace(travelPlaceID: number): Promise<TravelPlaceModel> {
    const sql = `SELECT T.*, A.areaName 
                FROM travelplace AS T JOIN area AS A
                ON T.areaID = A.areaID
                WHERE T.TravelPlaceID = ?`
    const travelPlace = await dal.execute(sql, [travelPlaceID])
    if(travelPlace.length === 0) throw new ResourceNotFoundErrorModel(travelPlaceID)
    return travelPlace[0]
}

async function getAreaById(areaID:number): Promise<AreaModel> {
    const sql = "SELECT * FROM area WHERE areaID = ?"
    const area = await dal.execute(sql, [areaID])
    return area[0]
}

async function getPlaceByAreaID(areaID:number): Promise<TravelPlaceModel[]> {
    const sql = `SELECT T.*, A.areaName
                FROM travelplace AS T JOIN area AS A
                ON T.areaID = A.areaID
                WHERE T.areaID = ?`
    const travelPlace = await dal.execute(sql,[areaID])
    return travelPlace    
}

async function addTravelPlace(travelPlace:TravelPlaceModel): Promise<TravelPlaceModel> {
    const sql = `INSERT INTO travelplace
                VALUES(DEFAULT, ?, ?,?, ?, ?, ?)`                    

    const info: OkPacket = await dal.execute(sql, [travelPlace.areaID, travelPlace.name,travelPlace.description,
                                                    travelPlace.priceOfChild, travelPlace.priceOfAdult, travelPlace.discount])
    travelPlace.travelPlaceID = info.insertId
    return travelPlace    
}

async function deleteTravelPlace(travelPlaceId:number): Promise<void> {
    const sql = `DELETE FROM travelplace
                WHERE travelPlaceID = ?`
    const info:OkPacket = await dal.execute(sql, [travelPlaceId])
    if(info.affectedRows === 0) throw new ResourceNotFoundErrorModel(travelPlaceId)    
    
}


export default {
    getAllTravelPlace,
    getAllArea,
    getSpecificTravelPlace,
    getAreaById,
    getPlaceByAreaID,
    addTravelPlace,
    deleteTravelPlace
}