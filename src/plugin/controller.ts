const { createInnerShadoow, createDropShadow } = require("./helpers.js");

figma.showUI(__html__, { width: 700, height: 520 });
// background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), #EBECF0;
// background-blend-mode: soft-light, normal;
// border: 6px solid rgba(255, 255, 255, 0.16);
// box-sizing: border-box;
// box-shadow: 30px 30px 60px #A6ABBD, -30px -30px 60px #FAFBFF;
// border-radius: 40px;

// function createInner() {
//   const innerShadowLight = {
//     type: "INNER_SHADOW",
//     blendMode: "NORMAL",
//     color: {
//       r: 0.6509804129600525,
//       g: 0.6705882549285889,
//       b: 0.7411764860153198,
//       a: 1
//     },
//     offset: { x: 30, y: 30 },
//     radius: 60,
//     visible: true
//   };

//   const innerShadowDark = {
//     type: "INNER_SHADOW",
//     blendMode: "NORMAL",
//     color: { r: 0.9803921580314636, g: 0.9843137264251709, b: 1, a: 1 },
//     offset: { x: -30, y: -30 },
//     radius: 60,
//     visible: true
//   };

//   const effect = figma.createEffectStyle();
//   effect.name = "hey";
//   effect.effects = [innerShadowLight, innerShadowDark];

//   const rect = figma.createRectangle();
//   rect.x = 400;
//   rect.cornerRadius = 30;
//   rect.resize(300, 300);
//   rect.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
//   rect.effects = effect.effects;
//   figma.currentPage.appendChild(rect);
//   figma.currentPage.selection = [rect];
//   figma.viewport.scrollAndZoomIntoView([rect]);
// }

// function createDrop() {
//   const dropShadowLight = {
//     blendMode: "NORMAL",
//     color: {
//       r: 0.651199996471405,
//       g: 0.6689599752426147,
//       b: 0.7400000095367432,
//       a: 1
//     },
//     offset: { x: 20, y: 20 },
//     radius: 40,
//     type: "DROP_SHADOW",
//     visible: true
//   };

//   const dropShadowDark = {
//     blendMode: "NORMAL",
//     color: { r: 0.9791666865348816, g: 0.9833333492279053, b: 1, a: 1 },
//     offset: { x: -20, y: -20 },
//     radius: 40,
//     type: "DROP_SHADOW",
//     visible: true
//   };

//   const effect = figma.createEffectStyle();
//   effect.name = "hey";
//   effect.effects = [dropShadowLight, dropShadowDark];

//   const rect = figma.createRectangle();
//   rect.x = 0;
//   rect.cornerRadius = 30;
//   rect.resize(300, 300);
//   rect.fills = [
//     {
//       type: "SOLID",
//       color: {
//         b: 0.9411764740943909,
//         g: 0.9254902005195618,
//         r: 0.9215686321258545
//       }
//     },
//     {
//       blendMode: "SOFT_LIGHT",
//       gradientStops: [
//         { color: { r: 0, g: 0, b: 0, a: 1 }, position: 0 },
//         { color: { r: 1, g: 1, b: 1, a: 1 }, position: 1 }
//       ],
//       gradientTransform: [[0.5, 0.5, 0], [-0.5, 0.5, 0]],
//       opacity: 0.4000000059604645,
//       type: "GRADIENT_LINEAR",
//       visible: true
//     }
//   ];
//   rect.effects = effect.effects;
//   figma.currentPage.appendChild(rect);
//   figma.currentPage.selection = [rect];
//   figma.viewport.scrollAndZoomIntoView([rect]);
// }

figma.ui.onmessage = msg => {
  if (msg.type === "create-svg") {
    const nodes = [];

    createInnerShadoow();
    createDropShadow();

    // const { svg } = msg;
    // console.log(svg);

    // const wireframe = figma.createNodeFromSvg(svg);
    // wireframe.name = "Wireframer";
    // figma.currentPage.appendChild(wireframe);
    // figma.currentPage.selection = [wireframe];
    // figma.viewport.scrollAndZoomIntoView(nodes);

    // for (let i = 0; i < msg.count; i++) {
    //   const rect = figma.createRectangle();
    //   rect.x = i * 150;
    //   rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
    //   figma.currentPage.appendChild(rect);
    //   nodes.push(rect);
    // }

    // figma.currentPage.selection = nodes;
    // figma.viewport.scrollAndZoomIntoView(nodes);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: "create-svg",
      message: `Created SVG`
    });
  }

  //   figma.closePlugin();
};
