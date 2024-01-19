export type ButtonTag = "button" | "div" | "a" | "span";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type Variant = "solid" | "outline" | "text" | "link";
export type NarrowedVariant = "solid" | "outline";
export type Filter = "darken" | "lighten" | "none";
export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";
export type Rounded = false | true | "full";
export type Block = true | false;
export type Border = true | false;
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type State = true | false | string | null;
export type Description = string | null;
export type MenuClasses = string | string[];
export type Value = string | number;
export type CheckableModelValue = Value[] | boolean | string | number;
export type Text = string;
export type StateIcon = false | true;
export type Position =
  | "bottomLeft"
  | "bottomRight"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "top"
  | "leftTop"
  | "leftBottom"
  | "left"
  | "rightTop"
  | "rightBottom"
  | "right";
