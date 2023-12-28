export const t = 1;

export type TRoutingConfig = {
    pathVariable: Array<string>;
    requestParams: Array<string>;
}

export const config: TRoutingConfig = {
    pathVariable: ['prefix','sections', 'luxes', 'sales', 'essentials', 'exclusives'],
    requestParams: ['size', 'brand', 'sorted','categories','styles','prices','collections','seasons'],
}

