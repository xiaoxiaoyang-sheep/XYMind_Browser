export class Configuration {
	// 字体大小
	static FONT_SIZE = {
		ROOT: 20,
		SECOND: 14,
		LOWER: 10,
	};

	// 节点圆角
	static NODE_RADIUS = 10;
	// 节点最大长度
	static MAX_NODE_LENGTH = 300;
	// 文字与图片间隔
	static GAP_IMAGE_TEXT = 10;
	// 收缩节点半径
	static FOLD_NODE_RADIUS = 10;
	// 收缩节点瞄边宽度
	static FOLD_NODE_LINE_WIDTH = 2;
	// 收缩节点字体大小
	static FOLD_NODE_FONTSIZE = 10;
	// 根节点横向间隔
	static ROOT_H_GAP = 100;
	// 横向间隔
	static H_GAP = 50;
	// 纵向间隔
	static V_GAP = 20;
	// 连线宽度
	static LINE_WIDTH = 2;
	// 连线拐角弧度
	static LINE_RADIUS = 5;
	// 连线连接处冗余
	static LINE_INTERSECTION_REDUNDANCY = 20;
	// 节点信息
	static NODE_INTO = {
		ROOT: {
			fontSize: Configuration.FONT_SIZE.ROOT,
			vGap: Configuration.V_GAP,
			hGap: Configuration.ROOT_H_GAP,
			hPadding: 20,
			vPadding: 16,
			lineHeight: 26,
		},
		SECOND: {
			fontSize: Configuration.FONT_SIZE.SECOND,
			vGap: Configuration.V_GAP,
			hGap: Configuration.H_GAP,
			hPadding: 16,
			vPadding: 12,
			lineHeight: 18,
		},
		LOWER: {
			fontSize: Configuration.FONT_SIZE.LOWER,
			vGap: Configuration.V_GAP,
			hGap: Configuration.H_GAP,
			hPadding: 10,
			vPadding: 6,
			lineHeight: 12,
		},
	};

	static getNodeInfoByDepth(depth: number) {
		switch (depth) {
			case 0:
				return Configuration.NODE_INTO.ROOT;
			case 1:
				return Configuration.NODE_INTO.SECOND;
			default:
				return Configuration.NODE_INTO.LOWER;
		}
	}
}
