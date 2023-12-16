export type TPropsSVGSimple ={
    fill?: string;
    fillOpacity?:string;
}
type TypeSVGPathAttribute = 'clipPath' | 'clipRule'| 'color'| 'colorInterpolation'| 'colorRendering'| 'cursor'| 'display'|
    'fill'| 'fillOpacity'| 'fillRule'| 'filter'| 'mask'| 'opacity'| 'pointerEvents'| 'shapeRendering'| 'stroke'| 'strokeDasharray' |
    'strokeDashoffset'| 'strokeLinecap'| 'strokeLinejoin'| 'strokeMiterlimit'| 'strokeOpacity'| 'strokeWidth'| 'transform'|
    'vectorEffect'| 'visibility';

export type TypeSVGPathProps ={
    [key in TypeSVGPathAttribute]?: string;
}