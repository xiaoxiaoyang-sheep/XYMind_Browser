// model:
// anchorPoints: [Array(2)]
// children: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// depth: 0
// id: "root"
// imgHeight: 0
// imgWidth: 0
// leftChildCount: 4
// leftFirstChild: e {_cfg: {…}, destroyed: false}
// leftHeight: 1240
// leftLastChild: e {_cfg: {…}, destroyed: false}
// middleChild: e {_cfg: {…}, destroyed: false}
// rightChildCount: 4
// rightFirstChild: e {_cfg: {…}, destroyed: false}
// rightHeight: 394
// rightLastChild: e {_cfg: {…}, destroyed: false}
// size: (2) [100, 58]
// style: {active: {…}, selected: {…}, highlight: {…}, inactive: {…}, disable: {…}, …}
// text: "根节点"
// textHeight: 26
// theme: {fill: "#000229", color: "#FFFFFF"}
// type: "mind-node"
// x: -45
// y: -54

import { computeTextInfo } from "@/utils/stringUtil";
import { drawNode, drawText } from "./draw";
import { MindMap } from "./Map";
import { NodeStyle, TextStyle } from "./styleType";
import { Configuration } from "./Configuration";






export type NodeModel = {
	id: string;
	imgHeight: number | null;
	imgWidth: number | null;
    textHeight: number | null;
	anchorPoints: [number, number];
	side: "left" | "right" | null;
    style: NodeStyle;
    textStyle: TextStyle;
	size: [number, number];
	depth: number;
	text: string;
	x: number;
	y: number;
};

export type NodeType = {
	model: NodeModel | null;
	childNode: NodeType | null;
	parentNode: NodeType | null;
	sibingNode: NodeType | null;
};

export class MindNode {
	model = {
		id: "defalut",
		imgHeight: null,
		imgWidth: null,
		anchorPoints: [0, 0],
		size: [0, 0],
		depth: 0,
		text: "",
        textHeight: null,
		x: 0,
		y: 0,
	} as NodeModel;
	childNode: NodeType | null = null;
	parentNode: NodeType | null = null;
	sibingNode: NodeType | null = null;
	leftChildCount: number | null = null;
	leftFirstChild: MindNode | null = null;
	leftLastChild: MindNode | null = null;
	leftHeight: number | null = null;
	middleChild: MindNode | null = null;
	rightChildCount: number | null = null;
	rightFirstChild: MindNode | null = null;
	rightHeight: number | null = null;
	rightLastChild: MindNode | null = null;

	ctx: CanvasRenderingContext2D = MindMap.context as CanvasRenderingContext2D;

	constructor(parentNode: MindNode | null, model: Partial<NodeModel>) {
		this.parentNode = parentNode;
		this.model = { ...this.model, ...model };
        this.initStyle();
	}

    /**
     * 初始化样式
     */
    initStyle() {
        const nodeConfiguration = Configuration.getNodeInfoByDepth(this.model.depth);
        this.model.textStyle = {
            fill: "white",
            fontSize: nodeConfiguration.fontSize,
            lineHeight: nodeConfiguration.lineHeight,
            textBaseline: "middle"
        }
    }


	render() {
		this.beforeDraw();
		this.draw();
		this.afterDraw();
	}

	update() {}

	/**
	 * 绘制节点前
	 */
	beforeDraw() {}

	/**
	 * 绘制节点
	 */
	draw() {
        computeTextInfo(this.ctx, this)
       
        drawNode(this.ctx, this)
        drawText(this.ctx, this)
    }

	/**
	 * 绘制节点后
	 */
	afterDraw() {}
}
