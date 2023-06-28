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
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
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
            data: [120, 200, 150, 80, 70],
            type: "bar",
          },
        ],
      };
    },
  },
};
</script>
