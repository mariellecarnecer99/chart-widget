<template>
  <v-app>
    <v-app-bar color="rgba(233, 73, 93)" class="flex-grow-0" app dark>
      <v-app-bar-title>
        <v-icon icon="mdi-chart-box" color="white" />

        <span class="ml-3" style="color: white">Edit Widget</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <p style="color: white">
        My Chart <v-icon size="small" color="white">mdi-pencil</v-icon>
      </p>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon size="small" color="white">mdi-undo</v-icon>
        <v-tooltip activator="parent" location="bottom"> Undo </v-tooltip>
      </v-btn>

      <v-btn icon>
        <v-icon size="small" color="white">mdi-redo</v-icon>
        <v-tooltip activator="parent" location="bottom"> Redo </v-tooltip>
      </v-btn>

      <v-btn icon>
        <v-icon size="small" color="white">mdi-application-edit-outline</v-icon>
        <v-tooltip activator="parent" location="bottom">
          Change background
        </v-tooltip>
      </v-btn>

      <v-btn icon>
        <v-icon size="small" color="white">mdi-xml</v-icon>
        <v-tooltip activator="parent" location="bottom">
          Add to Website
        </v-tooltip>
      </v-btn>

      <v-btn class="mr-3" variant="outlined" size="small" color="primary"
        >Preview Changes</v-btn
      >

      <v-btn variant="flat" size="small" color="primary">Save Changes</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      color="rgba(71,181,155)"
      class="bg-grey-lighten-2"
      rail
      app
    >
      <v-list color="rgba(70,60,110)" dense nav>
        <v-list-item
          v-for="(item, index) in sideMenuItems"
          :key="index"
          @click="onClickDrawer(index)"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
        >
          <v-tooltip activator="parent" location="right">
            {{ item.title }}
          </v-tooltip>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-menu location="top">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account"
              title="Profile"
              value="profile"
            >
              <v-tooltip activator="parent" location="right">
                Profile
              </v-tooltip>
            </v-list-item>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in profileItems" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer"
      class="bg-blue-grey-darken-4"
      app
      width="400"
    >
      <div id="sidebar">
        <div class="d-flex justify-end sidebar-toggle mx-4 mt-3">
          <div class="mb-2" @click="drawer = !drawer" id="btn-toggle">
            <v-icon id="btn-toggle-icon" x-large>mdi-close</v-icon>
          </div>
        </div>
        <div class="sidebar-body">
          <div class="chartType mx-4">
            <h3 class="chartType-title mb-3">Chart Type</h3>
            <p class="chartType-details mb-2">
              <!-- <v-icon x-large>mdi-crown</v-icon>  -->
              Select Type
            </p>
            <v-select
              v-model="chartType"
              label="Select Chart"
              return-object
              outlined
              :items="charts"
              item-title="type"
              item-value="value"
              @update:modelValue="selectedChart"
            ></v-select>
          </div>
          <hr class="mb-4" />
          <div class="data mx-4">
            <h3 class="data-title mb-3">Data</h3>
            <p class="data-details mb-2">
              Click the "Edit Data" button to import data to your chart.
            </p>
            <v-select
              v-model="chartDataType"
              label="Select Data"
              return-object
              outlined
              :items="chartData"
              item-title="dataType"
              item-value="value"
            ></v-select>
            <div v-if="chartDataType?.value != 'remote'" class="text-center">
              <v-btn variant="flat" class="mt-3" color="primary" outlined
                ><v-icon>mdi-square-edit-outline</v-icon> EDIT DATA
                <v-dialog v-model="dialog" activator="parent" max-width="1000">
                  <v-card>
                    <v-card-text>
                      <v-row justify="space-between">
                        <v-col cols="5">
                          <v-sheet class="pa-2 ma-2">
                            <h3>Chart Data <v-icon>mdi-file-export</v-icon></h3>
                          </v-sheet>
                        </v-col>
                        <v-col cols="1">
                          <v-sheet class="pa-2 ma-2">
                            <v-icon @click="dialog = false">mdi-close</v-icon>
                          </v-sheet>
                        </v-col>
                      </v-row>
                      <hr />
                    </v-card-text>
                    <v-card-actions class="d-flex justify-center">
                      <div>
                        <v-btn
                          variant="outlined"
                          color="primary"
                          @click="dialog = false"
                          >Close</v-btn
                        >
                        <v-btn
                          variant="flat"
                          color="primary"
                          @click="dialog = false"
                          >Save Changes</v-btn
                        >
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="appearanceDrawer"
      class="bg-blue-grey-darken-4"
      app
      width="400"
    >
      <div id="sidebar">
        <div class="d-flex justify-end sidebar-toggle mx-4 mt-3">
          <div
            class="mb-2"
            @click="appearanceDrawer = !appearanceDrawer"
            id="btn-toggle"
          >
            <v-icon id="btn-toggle-icon" x-large>mdi-close</v-icon>
          </div>
        </div>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="left">
          <v-tab value="basic" color="green">Basic</v-tab>
          <v-tab value="advanced" color="green">Advanced</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="basic">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <h3 class="mb-3">Font</h3>
                  <v-row>
                    <v-col cols="4">
                      <p>Font Type</p>
                    </v-col>
                    <v-col cols="8">
                      <v-select
                        label="Select"
                        :items="fonts"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <hr />
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <h3 class="mb-3">Chart Color Scheme</h3>
                  <v-row>
                    <v-col cols="10">
                      <p>Color Scheme <v-icon>mdi-information</v-icon></p>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-select-color</v-icon>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <hr />
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <h3 class="mb-3">Custom Colors</h3>
                  <v-row v-for="i in customColors" :key="i">
                    <v-col cols="10">
                      <p>{{ i }}</p>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-select-color</v-icon>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <hr />
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <h3 class="mb-3">Custom Sizes</h3>
                  <v-row v-for="i in customSizes" :key="i">
                    <v-col cols="6">
                      <p>
                        <!-- <v-icon>mdi-crown</v-icon> -->
                        {{ i }}
                      </p>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                        label="Select"
                        :items="sizes"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
          <v-window-item value="advanced">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <h3 class="mb-3">Background</h3>
                  <v-row>
                    <v-col cols="9">
                      <p>Transparent</p>
                    </v-col>
                    <v-col cols="3">
                      <v-switch inset></v-switch>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="9">
                      <p>Background</p>
                    </v-col>
                    <v-col cols="3">
                      <v-icon size="x-large">mdi-select-color</v-icon>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <p>Image Behavior</p>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                        label="Select"
                        :items="imageBehavior"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="9">
                      <p>Image</p>
                    </v-col>
                    <v-col cols="3">
                      <v-icon size="x-large">mdi-image-area</v-icon>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <hr />
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <h3 class="mb-3">Custom CSS</h3>
                  <p>
                    Add custom CSS code to change the styling of any HTML
                    element in the widget.
                  </p>
                  <div class="text-center">
                    <v-btn variant="flat" class="mt-5" color="primary" outlined>
                      <!-- <v-icon>mdi-crown</v-icon>  -->
                      Edit CSS</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </div>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="settingsDrawer"
      class="bg-blue-grey-darken-4"
      app
      width="400"
    >
      <div id="sidebar">
        <div class="d-flex justify-end sidebar-toggle mx-4 mt-3">
          <div
            class="mb-2"
            @click="settingsDrawer = !settingsDrawer"
            id="btn-toggle"
          >
            <v-icon id="btn-toggle-icon" x-large>mdi-close</v-icon>
          </div>
        </div>
        <div class="sidebar-body">
          <div class="mx-4">
            <h3 class="mb-3">Remove Common Startechup's Logo</h3>
            <p class="mb-2">
              Common Startechup's logo is only visible on widgets with the free
              plan.
            </p>
            <div class="text-center">
              <v-btn variant="flat" class="mt-2 mb-5" color="primary" outlined>
                <!-- <v-icon>mdi-crown</v-icon>  -->
                Remove Logo</v-btn
              >
            </div>
          </div>
          <hr class="mb-4" />
          <div class="data mx-4 mb-4">
            <h3 class="data-title mb-3">General Settings</h3>
            <p>Main Title</p>
            <v-text-field variant="outlined"></v-text-field>
            <p class="mt-3">Description</p>
            <v-textarea variant="outlined"></v-textarea>
            <v-row>
              <v-col cols="7">
                <p>Chart Height</p>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  variant="outlined"
                  hide-details
                  single-line
                  type="number"
                />
              </v-col>
              <v-col cols="2">
                <p>px</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <p>
                  <!-- <v-icon>mdi-crown</v-icon>  -->
                  Auto Refresh <v-icon>mdi-information</v-icon>
                </p>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="Select"
                  :items="autoRefresh"
                  density="compact"
                  variant="outlined"
                ></v-select>
              </v-col>
            </v-row>
          </div>
          <hr />
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-3">Visibility</h3>
                <v-row v-for="i in visibility" :key="i">
                  <v-col cols="10">
                    <p>{{ i }}</p>
                  </v-col>
                  <v-col cols="2">
                    <v-switch inset></v-switch>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <p>Legend Position</p>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="Select"
                  :items="legendPosition"
                  density="compact"
                  variant="outlined"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <hr />
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-3">Advanced Settings</h3>
                <v-row>
                  <v-col cols="6">
                    <p>Value Display Type <v-icon>mdi-information</v-icon></p>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      label="Select"
                      :items="displayType"
                      density="compact"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <p>Values Prefix</p>
              </v-col>
              <v-col cols="6">
                <v-text-field variant="outlined"> </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <p>Values Suffix</p>
              </v-col>
              <v-col cols="6">
                <v-text-field variant="outlined"> </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AppBar",
  data: () => {
    return {
      drawer: false,
      appearanceDrawer: false,
      settingsDrawer: false,
      tab: null,
      chartType: null,
      chartDataType: null,
      dialog: false,
      sideMenuItems: [
        {
          title: "Chart & Data",
          value: "chartData",
          icon: "mdi-chart-box-outline",
        },
        { title: "Look & Feel", value: "lookfeel", icon: "mdi-palette" },
        { title: "Settings", value: "settings", icon: "mdi-cog" },
        { title: "Analytics", value: "analytics", icon: "mdi-chart-bar" },
      ],
      charts: [
        {
          type: "Column Chart",
          value: "column",
        },
        {
          type: "Line Chart",
          value: "line",
        },
        {
          type: "Bar Chart",
          value: "bar",
        },
        {
          type: "Pie Chart",
          value: "pie",
        },
        {
          type: "Doughnut Chart",
          value: "doughnut",
        },
        {
          type: "Radar Chart",
          value: "radar",
        },
        {
          type: "Polar Area Chart",
          value: "polarArea",
        },
        {
          type: "Scatter Chart",
          value: "scatter",
        },
      ],
      fonts: [
        "Arial",
        "Arial Black",
        "Comic Sans MS",
        "Courier New",
        "Georgia",
        "Impact",
        "Lucida Console",
        "Lucida Sans Unicode",
        "Palatino Linotype",
        "Tahoma",
        "Times New Roman",
        "Trebuchet MS",
        "Verdana",
      ],
      chartData: [
        {
          dataType: "Static Data",
          value: "static",
        },
        {
          dataType: "Remote Data(From a URL)",
          value: "remote",
        },
      ],
      customColors: [
        "Title",
        "Subtitle",
        "Description",
        "Data Labels",
        "Tooltip Background",
        "Tooltip Border",
        "Tooltip Text",
        "Legend Background",
        "Legend Text",
        "Legend Border",
      ],
      customSizes: ["Title", "Description", "Data Labels"],
      sizes: [
        "10px",
        "12px",
        "14px",
        "16px",
        "18px",
        "20px",
        "24px",
        "28px",
        "32px",
      ],
      imageBehavior: ["Cover", "Contain", "Stretch", "Center", "Original"],
      autoRefresh: [
        "Off",
        "Every 5 minutes",
        "Every 10 minutes",
        "Every 15 minutes",
        "Every 30 minutes",
        "Every 1 hour",
        "Every 2 hours",
        "Every 3 hours",
        "Every 4 hours",
        "Every 5 hours",
        "Every 6 hours",
        "Every 7 hours",
        "Every 8 hours",
        "Every 9 hours",
        "Every 10 hours",
        "Every 11 hours",
        "Every 12 hours",
        "Every 13 hours",
        "Every 14 hours",
        "Every 15 hours",
        "Every 16 hours",
        "Every 17 hours",
        "Every 18 hours",
        "Every 19 hours",
        "Every 20 hours",
        "Every 21 hours",
        "Every 22 hours",
        "Every 23 hours",
        "Every 24 hours",
      ],
      visibility: [
        "Title",
        "Subtitle",
        "Description",
        "Grid Lines",
        "Tooltips",
        "Data Labels",
        "Legend",
      ],
      legendPosition: [
        "Top Center",
        "Top Left",
        "Top Right",
        "Middle Left",
        "Middle Right",
        "Bottom Center",
        "Bottom Left",
        "Bottom Right",
      ],
      displayType: ["Value", "Percentage"],
      profileItems: [
        { title: "Dashboard" },
        { title: "Support" },
        { title: "Logout" },
      ],
    };
  },
  mounted() {
    this.chartType = {
      type: "Column Chart",
      value: "column",
    };
    this.selectedChart(this.chartType);
    this.chartDataType = {
      dataType: "Static Data",
      value: "static",
    };
  },
  methods: {
    onClickDrawer(val) {
      this.drawer = val === 0;
      this.appearanceDrawer = val === 1;
      this.settingsDrawer = val === 2;
    },

    selectedChart(val) {
      this.$emit("selectedChartType", val);
      this.$router.push({
        path: "/chart-editor",
        query: { chartType: val.value },
        // name: 'Chart',
        // params: { chartType: 'test' }
      });
    },
  },
};
</script>
