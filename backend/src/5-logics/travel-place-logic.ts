import dal from "../2-utils/dal";
import AreaModel from "../4-models/area-model";

async function getAllArea(): Promise<AreaModel[]> {
    const sql = "SELECT * FROM area"
    const area = await dal.execute(sql)
    return area    
}

export default {
    getAllArea
}