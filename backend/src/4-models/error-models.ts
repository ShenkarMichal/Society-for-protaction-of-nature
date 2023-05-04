export class ErrorModel {
    public constructor(public status: number, public msg: string) {}
}

export class RouteNotFoundErrorModel extends ErrorModel {
    public constructor(route: string) {
        super(404, `The route ${route} is not exists`)
    }
}

export class ResourceNotFoundErrorModel extends ErrorModel {
    public constructor (id: number) {
        super(404, `The id: ${id} is not exists`)
    }
}