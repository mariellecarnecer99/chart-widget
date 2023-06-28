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
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
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
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      };
    },
  },
};
</script>
