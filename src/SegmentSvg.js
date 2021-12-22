var nameSpace = "http://www.w3.org/2000/svg";

var segmentSvg = "<defs id=\"defs2\" />" +
"<g id=\"layer1\">" +
"    <path id=\"segment0\" style=\"stroke-width:0.263733\" fill=\"#cd7f32\" type=\"arc\" cx=\"75\" cy=\"75\" rx=\"60\"" +
"        ry=\"60\" start=\"4.712389\" end=\"0\" arc-type=\"slice\" d=\"m 75,15 a 60,60 0 0 1 60,60 H 75 Z\" />" +
"    <path id=\"segment1\" style=\"stroke-width:0.263733\" fill=\"#ffbf00\" type=\"arc\" cx=\"75\" cy=\"75\" rx=\"60\"" +
"        ry=\"60\" start=\"3.1415927\" end=\"4.712389\" arc-type=\"slice\"" +
"        d=\"M 15,75 A 60,60 0 0 1 32.573594,32.573593 60,60 0 0 1 75,15 v 60 z\" />" +
"    <path id=\"segment2\" style=\"stroke-width:0.263733\" fill=\"#880808\" type=\"arc\" cx=\"75\" cy=\"75\" rx=\"60\"" +
"        ry=\"60\" start=\"1.5707963\" end=\"3.1415927\" arc-type=\"slice\"" +
"        d=\"M 75,135 A 60,60 0 0 1 32.573593,117.42641 60,60 0 0 1 15,75 h 60 z\" />" +
"    <path id=\"segment3\" style=\"stroke-width:0.263733\" fill=\"#000000\" type=\"arc\" cx=\"75\" cy=\"75\" rx=\"60\"" +
"        ry=\"60\" start=\"0\" end=\"1.5707963\" arc-type=\"slice\" d=\"M 135,75 A 60,60 0 0 1 75,135 V 75 Z\" />" +
"</g>";

var svgElement = document.createElementNS(nameSpace, "svg");
svgElement.innerHTML = segmentSvg;
svgElement.setAttribute("viewBox", "0 0 150 150");
svgElement.setAttribute("width", "150mm");
svgElement.setAttribute("height", "150mm");
