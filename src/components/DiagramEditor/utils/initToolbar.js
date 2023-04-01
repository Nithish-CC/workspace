import { default as MxGraph } from "mxgraph";
import { addToolbarItem, getStyleStringByObj } from "./";

const {
  mxEvent,
  mxRubberband,
  mxUtils,
  mxToolbar,
  mxClient,
  mxDivResizer,
  mxKeyHandler,
  mxGeometry,
  mxCell,
  mxEllipse,
  mxConstants,
  mxPerimeter,
  mxCellRenderer,
  mxText
} = MxGraph();

export default function initToolbar(graph, tbContainer) {
  // Creates new toolbar without event processing
  var toolbar = new mxToolbar(tbContainer);
  toolbar.enabled = false;

  // Workaround for Internet Explorer ignoring certain styles
  if (mxClient.IS_QUIRKS) {
    document.body.style.overflow = "scroll";
    new mxDivResizer(tbContainer);
  }

  // Enables new connections in the graph
  graph.setConnectable(true);

  // Allow multiple edges between two vertices
  graph.setMultigraph(false);

  // Stops editing on enter or escape keypress
  var keyHandler = new mxKeyHandler(graph);
  var rubberband = new mxRubberband(graph);

  var addVertex = function (icon, w, h, style, value = null) {
    var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
    if (value) {
      vertex.value = value;
    }
    vertex.setVertex(true);

    var img = addToolbarItem(graph, toolbar, vertex, icon);
    img.enabled = true;

    graph.getSelectionModel().addListener(mxEvent.CHANGE, function () {
      var tmp = graph.isSelectionEmpty();
      mxUtils.setOpacity(img, tmp ? 100 : 20);
      img.enabled = tmp;
    });
  };

  var baseStyle = { ...graph.getStylesheet().getDefaultVertexStyle() };

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/rectangle.png",
    100,
    40,
    getStyleStringByObj({
      ...baseStyle
    })
  );
  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/ellipse.png",
    100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "ellipse"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/hexagon.png",
    40,
    40,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "hexagon"
    })
  );


  addVertex(
    "https://img.icons8.com/ultraviolet/40/000000/triangle-stroked.png",
    40,
    40,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "triangle"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/rhombus.png",
    40,
    40,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "rhombus"
    })
  );

  addVertex(
    "https://img.icons8.com/office/16/null/cloud.png",
    40,
    40,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "cloud"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
    100,
    100,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "ellipse"
    })
  );


  // console.log(mxText.getTextCss());
  addVertex(
    "https://img.icons8.com/ios-glyphs/30/null/type--v1.png",
    0,
    0,
    "text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];",
    "Text"
  );

  addVertex(
    "parallelogram;fillColor=#FF0000;strokeColor=#0000FF",
    100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "parallelogram;fillColor=#FF0000;strokeColor=#0000FF"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "actor"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "step"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "step"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "dataStorage"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "arrow"
    })
  );


  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "cube"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "tape"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "internalStorage"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "trapezoid"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "arrow"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "dashed=1"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "doubleArrow"
    })
  );


  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
  100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "dotted=1"
    })
  );

  addVertex(
    "https://img.icons8.com/ultraviolet/40/null/100-percents.png",
    100,
    50,
    getStyleStringByObj({
      ...baseStyle,
      [mxConstants.STYLE_SHAPE]: "step;fillColor=#FF0000;strokeColor=#0000FF"
    })
  );


}
