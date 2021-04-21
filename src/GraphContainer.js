import { Graph } from "react-d3-graph";
/**
 This graph uses react-d3-graph library
 The documentation can be found here https://danielcaldas.github.io/react-d3-graph/docs/
 The repo can be found here https://github.com/danielcaldas/react-d3-graph
 Sandbox for config can be found here https://danielcaldas.github.io/react-d3-graph/sandbox/index.html?data=marvel
 */

const GraphContainer = ({ data, onNodeMouseOver, onNodeMouseOut }) => {

// graph payload (with minimalist structure)
// const data = {
//   nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
//   links: [
//     { source: "Harry", target: "Sally" },
//     { source: "Harry", target: "Alice" },
//   ],
// };

function myCustomLabelBuilder(node, nodes) {
  return node.name
}

// the graph configuration, just override the ones you need
const myConfig = {
  automaticRearrangeAfterDropNode: true,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 2,
  freezeAllDragEvents: false,
  height: 600,
  highlightDegree: 2,
  highlightOpacity: 0.2,
  linkHighlightBehavior: true,
  maxZoom: 12,
  minZoom: 0.05,
  nodeHighlightBehavior: true,
  panAndZoom: true,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  width: 900,
  d3: {
    alphaTarget: 0.05,
    gravity: -250,
    linkLength: 120,
    linkStrength: 1,
    disableLinkForce: false,
  },
  node: {
    color: '#F66C97',
    fontColor: 'black',
    fontSize: 14,
    highlightColor: 'fuchsia',
    highlightFontSize: 14,
    highlightFontWeight: 'normal',
    highlightStrokeColor: 'red',
    highlightStrokeWidth: 1,
    mouseCursor: 'pointer',
    opacity: 0.9,
    renderLabel: true,
    labelProperty: myCustomLabelBuilder,
    strokeColor: 'none',
    strokeWidth: 0.5,
    svg: '',
    symbolType: 'circle',
  },
  link: {
    renderLabel: true,
    color: 'lightgray',
    fontColor: 'black',
    fontSize: 10,
    fontWeight: 'normal',
    highlightColor: 'black',
    highlightFontSize: 8,
    highlightFontWeight: 'normal',
    mouseCursor: 'pointer',
    opacity: 1,
    semanticStrokeWidth: true,
    strokeWidth: 1.5,
    markerHeight: 6,
    markerWidth: 6,
    strokeDasharray: 0,
    strokeDashoffset: 0,
    strokeLinecap: 'butt',
  },
}

// const myConfig = {
//   nodeHighlightBehavior: true,
//   node: {
//     color: "lightgreen",
//     size: 120,
//     highlightStrokeColor: "blue",
//   },
//   link: {
//     highlightColor: "lightblue",
//   },
// };

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const onMouseOverNode = (nodeId, node) => {
  // console.log(nodeId, node)
  onNodeMouseOver(nodeId)
}

const onMouseOutNode = (nodeId, node) => {
  // console.log(nodeId, node)
  onNodeMouseOut()
}

return (
<Graph
  id="graph-id" // id is mandatory
  data={data}
  config={{ ...myConfig }}
  onClickNode={onClickNode}
  onClickLink={onClickLink}
  onMouseOverNode={onMouseOverNode}
  onMouseOutNode={onMouseOutNode}

/>
)}
export default GraphContainer;