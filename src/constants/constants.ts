 const sections = [
    {
        id: 'id_LOGO', // isActive: false,
        name: 'LOGO', url: '/',
    },
    {
        id: 'id_Men', // isActive: false,
        name: 'Men', url: 'path/men',
    },
    {
        id: 'id_Women', // isActive: false,
        name: 'Women', url: 'path/women',
    },
    {
        id: 'id_Kids', // isActive: false,
        name: 'Kids', url: 'path/kids',
    },
    {
        id: 'id_Sale', // isActive: false,
        name: 'Sale', url: 'path/sale',
    },
    {
        id: 'id_Collections', // isActive: false,
        name: 'Collections', url: 'path/collections',
    },
    {
        id: 'id_Blog', // isActive: false,
        name: 'Blog', url: 'path/blog',
    },
    {
        id: 'id_Theme', // isActive: false,
        name: 'Theme', url: 'path/theme', items: [
            {
                id: 'id_item_light', // isActive: false,
                name: 'light', url: 'path/light',
            },
            {
                id: 'id_item_dark', // isActive: false,
                name: 'dark', url: 'path/dark',
            },
            {
                id: 'id_item_moon', // isActive: false,
                name: 'moon', url: 'path/moon',
            },
        ],
    },
];

export const DEFAULT_SECTION = 'all';
export const DEFAULT_COLLECTION = 'all';
export const DEFAULT_APPAREL = 'all';

// export type TypeMenuItemDTO = {
//     id: string;
//     name: string;
//     prefixPath: string;
//     path: string;
//     subMenu: Array<TypeMenuItemDTO> | null;
// }
// export type TypeExtendedMenuItem = {
//     [key in Exclude<keyof TypeMenuItemDTO, 'subMenu'>]: string;
// } & {
//     isActive: boolean;
//     subMenu: Array<TypeExtendedMenuItem> | null;
// }

// export const tempMenuItems: TypeMenuItemDTO = {
//     id: 'id_menu',
//     name: 'LOGO',
//     prefixPath: '',
//     path: '/',
//     subMenu: [
//         {
//             id: 'id_Men',
//             name: 'Men',
//             prefixPath: '',
//             path: 'men', subMenu: [
//                 {
//                     id: 'id_1.1.1',
//                     name: '1.1.1',
//                     prefixPath: '',
//                     path: 'collections1_1_1',
//                     subMenu: [
//                         {
//                             id: 'id_1.1.1.1',
//                             name: '1.1.1.1',
//                             prefixPath: '',
//                             path: 'id_1_1_1_1',
//                             subMenu: null,
//                         },
//                         {
//                             id: 'id_1.1.1.2',
//                             name: '1.1.1.2',
//                             prefixPath: '',
//                             path: 'id_1_1_1_2',
//                             subMenu: null,
//                         },
//                     ],
//                 },
//                 {
//                     id: 'id_1.1.2',
//                     name: '1.1.2',
//                     prefixPath: '',
//                     path: 'collections1_1_2',
//                     subMenu: [
//                         {
//                             id: 'id_1.1.2.1',
//                             name: '1.1.2.1',
//                             prefixPath: '',
//                             path: 'id_1_1_2_1',
//                             subMenu: null,
//                         },
//                         {
//                             id: 'id_1.1.2.2',
//                             name: '1.1.2.2',
//                             prefixPath: '',
//                             path: 'id_1_1_2_2',
//                             subMenu: null,
//                         },
//                     ],
//                 },
//             ],
//         },
//     ],
// }

