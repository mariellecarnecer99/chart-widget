<template>
  <ChartData :option="options" />
  <div class="text-center">
    <v-dialog v-model="dialog" width="500px">
      <v-card>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="6">
              <v-sheet class="my-2"><h3>Parameter Area</h3></v-sheet>
            </v-col>
            <v-col cols="1">
              <v-sheet class="my-2"
                ><v-icon @click="dialog = false">mdi-close</v-icon></v-sheet
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-center mb-2">x-Axis</p>
              <v-select
                v-model="xAxisData"
                label="Select x-axis data"
                :items="['Days', 'Number', 'Category', 'Time']"
                variant="solo"
                @update:modelValue="selectedXaxisData"
              ></v-select>
            </v-col>
            <v-col>
              <p class="text-center mb-2">y-Axis</p>
              <v-select
                v-model="yAxisData"
                label="Select y-axis data"
                :items="[
                  'Default',
                  'Days',
                  'Precipitation',
                  'Temperature',
                  'Category',
                ]"
                variant="solo"
                @update:modelValue="selectedYaxisData"
              ></v-select>
            </v-col>
          </v-row>
          <!-- <p class="text-center mb-2">Series Data</p>
          <v-row>
            <v-col v-for="(item, index) in options.series" :key="index">
              <v-text-field v-for="i in item.data" variant="outlined">{{
                i
              }}</v-text-field>
            </v-col>
          </v-row> -->
        </v-card-text>
        <!-- <v-card-actions class="d-flex justify-center mb-5">
          <v-btn color="primary" variant="flat">Save Changes</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>

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
                ><v-icon @click="embedDialog = false"
                  >mdi-close</v-icon
                ></v-sheet
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
  </div>
</template>

<script>
import ChartData from "@/chartdata/ChartData.vue";
import myfunc from "@/chartScript.js";
export default {
  components: {
    ChartData,
  },
  data: () => {
    return {
      options: null,
      dialog: false,
      embedDialog: false,
      xAxisData: [],
      yAxisData: [],
      seriesData: [],
      embedChart: "",
    };
  },
  mounted() {
    this.handleOptions();
    this.handleScript();
    const d = document.getElementById("chart-container");
    console.log(d);
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

    handleDialog() {
      this.dialog = true;
    },

    handleEmbedCode() {
      this.embedDialog = true;
    },

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
            myEditFeature: {
              show: true,
              title: "Edit Data",
              icon: "M33.87,8.32,28,2.42a2.07,2.07,0,0,0-2.92,0L4.27,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13.09,32,33.87,11.24A2.07,2.07,0,0,0,33.87,8.32ZM12.09,30.2,4.32,31.83l1.77-7.62L21.66,8.7l6,6ZM29,13.25l-6-6,3.48-3.46,5.9,6Z",
              onclick: () => this.handleDialog(),
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

    selectedXaxisData(x) {
      if (x === "Days") {
        const daysItem = {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: {
            data: [60, 35, 110, 80, 95, 140, 185],
          },
        };
        this.options.xAxis.data = daysItem.categories;
        this.options.series = daysItem.values;
      } else if (x === "Number") {
        const numberItem = {
          categories: [1, 2, 3, 4, 5],
          values: {
            data: [50, 100, 150, 200, 250],
          },
        };
        this.options.xAxis.data = numberItem.categories;
        this.options.series = numberItem.values;
      } else if (x === "Category") {
        const categoryItem = [
          "Direct",
          "Email",
          "Ad Networks",
          "Video Ads",
          "Search Engines",
        ];
        this.options.xAxis.data = categoryItem;
      } else if (x === "Time") {
        const timeItem = {
          categories: [10, 40, 70, 100, 130],
          values: {
            data: [55, 75, 95, 115, 135],
          },
        };
        this.options.xAxis.data = timeItem.categories;
        this.options.series = timeItem.values;
      }
    },

    selectedYaxisData(y) {
      if (y === "Default") {
        const defaultItem = {
          type: "value",
          min: 0,
          max: 200,
          interval: 50,
          axisLabel: {
            formatter: "{value}",
          },
        };
        this.options.yAxis = defaultItem;
      } else if (y === "Days") {
        const daysItem = {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        };
        this.options.yAxis = daysItem;
      } else if (y === "Precipitation") {
        const precipitationItem = {
          type: "value",
          name: "Precipitation",
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: "{value} ml",
          },
        };
        this.options.yAxis = precipitationItem;
      } else if (y === "Temperature") {
        const tempItem = {
          type: "value",
          name: "Temperature",
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: "{value} °C",
          },
        };
        this.options.yAxis = tempItem;
      } else if (y === "Category") {
        const categoryItem = {
          type: "category",
          data: [
            "Direct",
            "Email",
            "Ad Networks",
            "Video Ads",
            "Search Engines",
          ],
        };
        this.options.yAxis = categoryItem;
      }
    },
  },
};
</script>
