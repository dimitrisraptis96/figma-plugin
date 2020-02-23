const { parseToRgb, lighten, darken } = require("polished");

function hex2rgba(hex, a = 1) {
  const { red, green, blue } = parseToRgb(hex);
  return {
    r: red / 255,
    g: green / 255,
    b: blue / 255,
    a: a
  };
}

function hex2rgb(hex) {
  const { red, green, blue } = parseToRgb(hex);
  return {
    r: red / 255,
    g: green / 255,
    b: blue / 255
  };
}

export function createInnerShadoow() {
  const innerShadowLight = {
    type: "INNER_SHADOW",
    blendMode: "NORMAL",
    color: {
      r: 0.6509804129600525,
      g: 0.6705882549285889,
      b: 0.7411764860153198,
      a: 1
    },
    offset: { x: 30, y: 30 },
    radius: 60,
    visible: true
  };

  const innerShadowDark = {
    type: "INNER_SHADOW",
    blendMode: "NORMAL",
    color: { r: 0.9803921580314636, g: 0.9843137264251709, b: 1, a: 1 },
    offset: { x: -30, y: -30 },
    radius: 60,
    visible: true
  };

  const effect = figma.createEffectStyle();
  effect.name = "hey";
  effect.effects = [innerShadowLight, innerShadowDark];

  const rect = figma.createRectangle();
  rect.x = 400;
  rect.cornerRadius = 30;
  rect.resize(300, 300);
  rect.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
  rect.effects = effect.effects;
  figma.currentPage.appendChild(rect);
  figma.currentPage.selection = [rect];
  figma.viewport.scrollAndZoomIntoView([rect]);
}

// position: absolute;
// width: 300px;
// height: 300px;

// background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), #F2F2F2;
// background-blend-mode: soft-light, normal;
// box-shadow: ${}px ${}px 40px #FFFFFF, -20px -20px 40px #B3B3B3;
// border-radius: 30px;

const css = `
    width: ${size}px;
    height: ${size}px;
    border-radius: 30px;

    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), #F2F2F2;
    background-blend-mode: soft-light, normal;
    box-shadow: ${offset}px ${offset}px ${radius}px ${lightColor}, -${offset}px -${offset}px ${radius}px ${darkColor};
`;

export function createDropShadow(color = "#fff", offset = 20, radius = 40) {
  const darkColor = darken(0.3, color);
  const lightColor = lighten(0.3, color);

  const dropShadowLight = {
    blendMode: "NORMAL",
    color: hex2rgba(lightColor),
    offset: { x: offset, y: offset },
    radius: radius,
    type: "DROP_SHADOW",
    visible: true
  };

  const dropShadowDark = {
    blendMode: "NORMAL",
    color: hex2rgba(darkColor),
    offset: { x: -offset, y: -offset },
    radius: radius,
    type: "DROP_SHADOW",
    visible: true
  };

  const effect = figma.createEffectStyle();
  effect.name = "Drop Shadow Neumorphism";
  effect.effects = [dropShadowLight, dropShadowDark];

  const rectangleOptions = {
    cornerRadius: 30,
    size: 300,
    fill: "#f2f2f2",
    gradient: [{ r: 0, g: 0, b: 0, a: 1 }, { r: 1, g: 1, b: 1, a: 1 }],
    opacity: 0.4,
    effects: effect.effects
  };

  const rect = createCustomRectangle(rectangleOptions);
  figma.currentPage.appendChild(rect);
  figma.currentPage.selection = [rect];
  figma.viewport.scrollAndZoomIntoView([rect]);
}

function createCustomRectangle(options) {
  const rect = figma.createRectangle();
  rect.x = 0;
  rect.cornerRadius = cornerRadius;
  rect.resize(options.size, options.size);
  rect.fills = [
    {
      type: "SOLID",
      color: hex2rgb(options.fill)
    },
    {
      blendMode: "SOFT_LIGHT",
      gradientStops: [
        { color: options.gradient[0], position: 0 },
        { color: options.gradient[1], position: 1 }
      ],
      gradientTransform: [[0.5, 0.5, 0], [-0.5, 0.5, 0]],
      opacity: options.opacity,
      type: "GRADIENT_LINEAR",
      visible: true
    }
  ];
  rect.effects = options.effects;
  return rect;
}
