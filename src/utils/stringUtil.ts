import { Configuration } from "@/core/Configuration";
import { MindMap } from "@/core/Map";
import { MindNode } from "@/core/Node";

/**
 * 计算文字信息
 * @param ctx
 * @param text
 */
export function computeTextInfo(ctx: CanvasRenderingContext2D, node: MindNode) {
	const model = node.model;
	const text = model.text;
	//将一个字符串分割成字符串数组
	const chr = text.split("");
	let temp = "";
	const row = [];
	const nodeInfo = Configuration.getNodeInfoByDepth(model.depth);
	ctx.font = `${nodeInfo.fontSize}px sans-serif`;
	for (let a = 0; a < chr.length; a++) {
		if (
			ctx.measureText(temp).width + nodeInfo.hPadding * 2 <
			Configuration.MAX_NODE_LENGTH
		) {
			temp += chr[a];
		} else {
			a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
			row.push(temp);
			temp = "";
		}
	}
	row.push(temp);
	const textHeight = row.length * nodeInfo.lineHeight;
	model.size[1] = textHeight + 2 * nodeInfo.vPadding;
	model.size[0] =
		row.length === 1
			? ctx.measureText(temp).width + 2 * nodeInfo.hPadding
			: Configuration.MAX_NODE_LENGTH;

	model.text = row.join("\n");
	model.textHeight = textHeight;
}
