import { Configuration } from "./Configuration";
import { MindNode } from "./Node";

export function drawNode(ctx: CanvasRenderingContext2D, node: MindNode) {
	const model = node.model;

	const x = model.x - model.size[0] / 2;
	const y = model.y - model.size[1] / 2;
	const w = model.size[0];
	const h = model.size[1];

	ctx.beginPath();
	ctx.moveTo(x + Configuration.NODE_RADIUS, y);
	ctx.arcTo(x + w, y, x + w, y + h, Configuration.NODE_RADIUS);
	ctx.arcTo(x + w, y + h, x, y + h, Configuration.NODE_RADIUS);
	ctx.arcTo(x, y + h, x, y, Configuration.NODE_RADIUS);
	ctx.arcTo(
		x,
		y,
		x + Configuration.NODE_RADIUS,
		y,
		Configuration.NODE_RADIUS
	);
	ctx.closePath();
	ctx.fillStyle = "red";
	ctx.fill();
}

/**
 * 绘制文字
 * @param ctx
 * @param node
 */
export function drawText(ctx: CanvasRenderingContext2D, node: MindNode) {
	const model = node.model;
	const text = model.text;
	const size = model.size;
	const style = model.style;
	const textStyle = model.textStyle;
	const nodeConfiguration = Configuration.getNodeInfoByDepth(model.depth);

	const x = model.x;
	const y = model.y;

	ctx.fillStyle = textStyle.fill;
	ctx.textBaseline = textStyle.textBaseline;
	ctx.font = `${textStyle.fontSize}px sans-serif`;

	const row = text.split("\n");
	for (let r = 0; r < row.length; r++) {
		ctx.fillText(
			row[r],
			x - size[0] / 2 + nodeConfiguration.hPadding,
			y -
				size[1] / 2 +
				nodeConfiguration.lineHeight / 2 +
				nodeConfiguration.vPadding +
				nodeConfiguration.lineHeight * r
		);
	}
}
