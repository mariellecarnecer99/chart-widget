<template>
  <EChart :option="options" />
  <v-dialog v-model="embedDialog" width="500px">
    <v-card>
      <v-card-text>
        <v-row justify="space-between">
          <v-col cols="8">
            <v-sheet class="my-2"
              ><h3>Add the widget to your website</h3>
            </v-sheet>
          </v-col>
          <v-col cols="1">
            <v-sheet class="my-2"
              ><v-icon @click="embedDialog = false">mdi-close</v-icon></v-sheet
            >
          </v-col>
        </v-row>
        <v-textarea
          v-model="embedChart"
          id="tocopy"
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-content-copy"
          @click:append-inner="copyText"
        ></v-textarea>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import EChart from "@/chartdata/EChart.vue";
import myfunc from "@/chartScript.js";
export default {
  components: {
    EChart,
  },
  data: () => {
    return {
      options: null,
      embedDialog: false,
      embedChart: "",
    };
  },
  mounted() {
    this.handleOptions();
    this.handleScript();
    const d = document.getElementById("chart-container");
    // console.log(d);
    this.nodeToString(d);
  },
  methods: {
    nodeToString(node) {
      var tmpNode = document.createElement("div");
      tmpNode.appendChild(node.cloneNode(true));
      var str = tmpNode.innerHTML;
      tmpNode = node = null; // prevent memory leaks in IE
      this.embedChart = str;
    },

    copyText() {
      const input = document.getElementById("tocopy");
      input.select();
      document.execCommand("copy");
    },

    handleScript() {
      const key = "toolbox";
      const { [key]: foo, ...rest } = this.options;
      myfunc(rest);
    },

    handleEmbedCode() {
      this.embedDialog = true;
    },

    handleOptions() {
      this.options = {
        toolbox: {
          feature: {
            myEditFeature: {
              show: true,
              title: "Edit Data",
              icon: "M33.87,8.32,28,2.42a2.07,2.07,0,0,0-2.92,0L4.27,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13.09,32,33.87,11.24A2.07,2.07,0,0,0,33.87,8.32ZM12.09,30.2,4.32,31.83l1.77-7.62L21.66,8.7l6,6ZM29,13.25l-6-6,3.48-3.46,5.9,6Z",
              onclick: function () {
                // do something
              },
            },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
            myEmbedFeature: {
              show: true,
              title: "Add to website",
              icon: "M27,31.36H3c-1.301,0-2.36-1.059-2.36-2.36V5c0-1.301,1.059-2.36,2.36-2.36h13v0.72H3C2.096,3.36,1.36,4.096,1.36,5v24c0,0.904,0.736,1.64,1.64,1.64h24c0.904,0,1.64-0.735,1.64-1.64V16h0.721v13C29.36,30.302,28.302,31.36,27,31.36z M23,18.36h-9.36V9h0.72v8.131L30.745,0.746l0.51,0.509L14.869,17.64H23V18.36z",
              onclick: () => this.handleEmbedCode(),
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
