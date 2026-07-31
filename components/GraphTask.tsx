import type { GraphData } from "@/lib/types";

export default function GraphTask({ graph }: { graph: GraphData }) {
  const byId = new Map(graph.nodes.map((node) => [node.id, node]));
  return (
    <div className="graph-task" role="img" aria-label="Граф дорог с длинами рёбер">
      <svg viewBox="0 0 620 360">
        {graph.edges.map((edge) => {
          const a = byId.get(edge.from)!;
          const b = byId.get(edge.to)!;
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
              <rect className="edge-label-bg" x={mx - 14} y={my - 14} width="28" height="24" rx="8" />
              <text className="edge-label" x={mx} y={my + 3}>{edge.weight}</text>
            </g>
          );
        })}
        {graph.nodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="25" />
            <text className="node-label" x={node.x} y={node.y + 7}>{node.id}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
