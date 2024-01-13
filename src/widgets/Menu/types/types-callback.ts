import type TCMenuItem from '../model/TMenuItem'

export type TFHandleOnHoverAddMenu = (item: TCMenuItem) => void;
export type TFHandleOnClickCleanMenu = () => void;
export type TFHandleOnClickMenu = (item: TCMenuItem) => void;