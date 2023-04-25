
class TravelPlaceModel {
    public travelPlaceID: number
    public areaID:number
    public name: string
    public description: string
    public priceOfChild: number
    public priceOfAdult: number
    public discount: number

    public constructor(travelPlace: TravelPlaceModel) {
        this.travelPlaceID = travelPlace.travelPlaceID
        this.areaID = travelPlace.areaID
        this.name = travelPlace.name
        this.description = travelPlace.description
        this.priceOfChild = travelPlace.priceOfChild
        this.priceOfAdult = travelPlace.priceOfAdult
        this.discount = travelPlace.discount
    }
}

export default TravelPlaceModel