import { drawNode } from "./draw";
import { createRootNode } from "./generate";
import { MindNode } from "./Node";

type MindMapType = {};


export class MindMap {
	rootNode: MindNode | null = null;
	static canvas: HTMLCanvasElement | null = null;
	static context: CanvasRenderingContext2D | null = null;

	constructor(id: string) {
		this.initCanvas(id);
		this.rootNode = createRootNode({id: "root", size: [100, 100], text: "测试撒打算大撒打算大阿斯顿阿斯顿撒阿斯顿阿斯顿啊撒打算撒打算大阿斯顿阿斯顿阿斯顿阿斯顿阿斯顿阿斯顿阿斯顿阿斯顿"},);;
	}

	/**
	 * 初始化画布
	 * @param canvasId
	 */
	initCanvas(canvasId: string) {
		const canvas = document.getElementById("canvas") as HTMLCanvasElement;
		// 配置分辨率
		canvas.width = canvas.clientWidth * window.devicePixelRatio;
		canvas.height = canvas.clientHeight * window.devicePixelRatio;
		MindMap.canvas = canvas;
		MindMap.context = canvas.getContext("2d");
		MindMap.context?.translate(canvas.width / 2, canvas.height / 2)
	}

	/**
	 * 渲染树
	 */
    render() {
       this.rootNode?.render()
    }
}
