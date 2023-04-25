
class AreaModel {
    public areaID: number
    public areaName: string

    public constructor(area: AreaModel) {
        this.areaID = area.areaID
        this.areaName = area.areaName
    }
}

export default AreaModel