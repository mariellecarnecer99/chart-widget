<template>
  <div id="embedChart"></div>
</template>

<script>
import BarChart from "@/components/charts/BarChart.vue";
var container = document.getElementById("embedChart");
var chart = echarts.init(container, null, {
  // use SVG renderer
  renderer: "svg",
});
var option = {};

window.onload = function () {
  chart.setOption(option);
  // add selectable class
  chart.getZr().painter.getSvgDom().classList.add("selectable");
  // or just override the `user-select` style
  // chart.getZr().painter.getSvgDom().style.userSelect = 'auto';
};
window.onresize = chart.resize;
</script>
