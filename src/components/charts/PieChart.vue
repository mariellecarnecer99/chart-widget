<template>
  <ChartData :option="options" />
</template>

<script>
import ChartData from "@/chartdata/ChartData.vue";
export default {
  components: {
    ChartData,
  },
  data: () => {
    return {
      options: null,
    };
  },
  mounted() {
    this.handleOptions();
  },
  methods: {
    handleOptions() {
      this.options = {
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
            myFeature: {
              show: true,
              title: "Add to website",
              icon: "M11.98 5.196a1 1 0 0 0-1.96-.392l-2 10a1 1 0 0 0 1.96.392l2-10zM6.8 6.4a1 1 0 0 1-.2 1.4L3.667 10 6.6 12.2a1 1 0 0 1-1.2 1.6l-4-3a1 1 0 0 1 0-1.6l4-3a1 1 0 0 1 1.4.2zm6.4 7.2a1 1 0 0 1 .2-1.4l2.933-2.2L13.4 7.8a1 1 0 1 1 1.2-1.6l4 3a1 1 0 0 1 0 1.6l-4 3a1 1 0 0 1-1.4-.2z",
              onclick: function () {
                // do something
              },
            },
          },
        },
        title: {
          text: "Traffic Sources",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Direct",
            "Email",
            "Ad Networks",
            "Video Ads",
            "Search Engines",
          ],
        },
        series: [
          {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "Direct" },
              { value: 310, name: "Email" },
              { value: 234, name: "Ad Networks" },
              { value: 135, name: "Video Ads" },
              { value: 1548, name: "Search Engines" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
    },
  },
};
</script>
