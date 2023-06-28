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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
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
        legend: {
          data: ["Evaporation", "Precipitation", "Temperature"],
        },
        xAxis: [
          {
            type: "value",
            name: "Precipitation",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisPointer: {
              type: "shadow",
            },
          },
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "Evaporation",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ml";
              },
            },
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
          },
          {
            name: "Precipitation",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ml";
              },
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
          {
            name: "Temperature",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " °C";
              },
            },
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      };
    },
  },
};
</script>
