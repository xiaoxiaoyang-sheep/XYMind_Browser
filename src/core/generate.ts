
import { MindNode, NodeModel } from "@/core/Node";

/**
 * 生成根节点
 * @param model 
 * @returns 
 */
export function createRootNode(model: Partial<NodeModel>) {
    model.x = 0;
    model.y = 0;
    const node = new MindNode(null, model);
    return node;
}