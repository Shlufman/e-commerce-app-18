export interface IAPIMenu {
    getBannerData(): Promise<Array<TBannerDTO>>;
    getMenuJSONData(): Promise<TypeMenuItemDTO>;
}

export type TBannerDTO = {
    title: string;
    text: string;
    backGroundText: string;
    imageURL: string;
    alt: string;
};

export type TypeMenuItemDTO = {
    id: string;
    name: string;
    prefixPath: string;
    path: string;
    subMenu: Array<TypeMenuItemDTO> | null;
}

export type TMenuArrayDTO = {
    [key in Exclude<keyof TypeMenuItemDTO, "subMenu">]: string;
} & {
    idParent: string | null;
};


export type TCMenuItemShort = {
    id: string;
    isActive: boolean;
    level: number;
    name: string;
    path: string;
    prefixPath: string;
};