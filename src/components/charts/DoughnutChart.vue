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
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      };
    },
  },
};
</script>
