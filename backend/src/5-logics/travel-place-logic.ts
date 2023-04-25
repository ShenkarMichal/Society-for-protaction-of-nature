import dal from "../2-utils/dal";
import AreaModel from "../4-models/area-model";
import TravelPlaceModel from "../4-models/travel-place-model";

async function getAllArea(): Promise<AreaModel[]> {
    const sql = "SELECT * FROM area"
    const area = await dal.execute(sql)
    return area    
}

async function getPlaceByAreaID(areaID:number): Promise<TravelPlaceModel[]> {
    const sql = `SELECT T.*, A.areaName
                FROM travelplace AS T JOIN area AS A
                ON T.areaID = A.areaID
                WHERE T.areaID = ${areaID}`
    const travelPlace = await dal.execute(sql)
    return travelPlace    
}

export default {
    getAllArea,
    getPlaceByAreaID
}