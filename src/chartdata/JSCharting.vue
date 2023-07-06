<template>
  <JsCharting :options="chartOptions" style="height: 100%"></JsCharting>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import JsCharting, { JSC } from "jscharting-vue";

export default defineComponent({
  name: "lineChart",
  setup() {
    const chartOptions = reactive({
      type: "line",
      series: [
        {
          points: [
            { x: "A", y: 50 },
            { x: "B", y: 30 },
            { x: "C", y: 50 },
          ],
        },
      ],
    } as JSC.JSCChartConfig);
    return { chartOptions };
  },
  components: {
    JsCharting,
  },
});
</script>
