export type BaseStyle = {
    fill: string | null;
    stroke: string | null;
    lineWidth: number | null;
}


export type NodeStyle = {

} & BaseStyle


export type TextStyle = {
    fontSize: number;
    fill: string;
    lineHeight: number;
    textBaseline: CanvasTextBaseline
}