data = [1, 4, 3, 4, 8, 6, 10];
options = {
  width: 700,
  height: 500,
  title: "This is the title",
  xAxisTitle: "This is the x-axis",
  yAxisTitle: "This is the y-axis",
  scaleStart: 0,
  scaleEnd: 10,
  scaleIncrement: 1,
};
const element = $("body");
const drawBarChart = (data, options, element) => {
  element.prepend("<div class='container'></div>");

  // Main Container
  $(".container").css({
    width: options.width,
    height: options.height,
    background: "#ddd",
    display: "grid",
    "grid-template-rows": "10% 82% 8%",
    "font-family": "sans-serif",
  });
  //Title
  $(".container").append("<div class='title'></div>");
  $(".title").css({
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "font-size": "2.2em",
    "letter-spacing": "2px",
  });
  $(".title").append(`<p>${options.title}</p>`);
  // Graph and Y axis
  $(".container").append("<div class='graph-y'></div>");
  // ->
  $(".graph-y").css({
    display: "grid",
    "grid-template-columns": "5% 3% 1.5% 90.5%",
  });
  $(".graph-y").append("<div class='y-axis'></div>");
  $(".y-axis").css({
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "font-size": "1.2em",
    "letter-spacing": "1px",
  });
  // ->

  $(".y-axis").append(`<p class='y-text' >${options.yAxisTitle}</p>`);
  $(".y-text").css({
    transform: "rotate(-90deg)",
    "white-space": "nowrap",
  });
  // Scale
  $(".graph-y").append("<div class='scale'></div>");

  $(".graph-y").append("<div class='scale-lines'></div>");
  let lineCounter = 0;
  for (
    let i = options.scaleStart;
    i <= options.scaleEnd - 1;
    i += options.scaleIncrement
  ) {
    lineCounter++;
    if (i === options.scaleEnd - 1) {
      $(".scale-lines").append("<div class='scale-line0'></div>");
    } else {
      $(".scale-lines").append("<div class='scale-line'></div>");
    }
  }
  $(".scale-lines").css({
    display: "grid",
    "grid-template -rows": `repeat(${lineCounter}, 1fr)`,
  });
  $(".scale-line").css({
    "border-top": "1px solid black",
  });
  $(".scale-line0").css({
    "border-top": "1px solid black",
    "border-bottom": "1px solid black",
  });

  $(".graph-y").append("<div class='graph'></div>");
  $(".graph").append("<div></div>");
  $(".graph").append("<div class='graph-inner'></div>");
  $(".graph").append("<div></div>");
  $(".graph").css({
    "border-left": "solid 2px black",
    "border-bottom": "solid 2px black",
    display: "grid",
    "grid-template-columns": "3% 94% 3%",
  });
  for (let i = 0; i < data.length; i++) {
    $(".graph-inner").append(`<div class='bar-width bar-width${i}'></div>`);

    if (i < data.length - 1) {
      $(".graph-inner").append(`<div class='bar-space'></div>`);
    }
    $(`.bar-width${i}`).append(`<div></div>`);
    $(`.bar-width${i}`).append(`<div class='bar-height${i}'></div>`);

    let dataHeight = (data[i] / options.scaleEnd) * 100;
    let dataFiller = 100 - dataHeight;
    console.log(dataHeight, dataFiller);
    $(`.bar-width${i}`).css({
      display: "grid",
      "grid-template-rows": `${dataFiller}% ${dataHeight}%`,
    });
    $(`.bar-height${i}`).css({
      background: "red",
      border: "solid black 1.5px",
    });
  }

  $(".graph-inner").css({
    display: "grid",
    "grid-template-columns": `repeat(${data.length + data.length - 1}, 1fr)`,
  });

  // X axis
  $(".container").append("<div class='x-axis'></div>");
  $(".x-axis").css({
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "font-size": "1.2em",
    "letter-spacing": "1px",
  });
  $(".x-axis").append(`<p>${options.xAxisTitle}</p>`);
  //$("div").css("border", "solid black 1px");
};

drawBarChart(data, options, element);
