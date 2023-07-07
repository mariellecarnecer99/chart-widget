<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "MyElement",
  props: {
    // msg: {
    //   type: String,
    //   required: true,
    // },
    option: {
      type: Object,
    },
  },
  setup() {
    const count = ref(0);
    return { count };
  },
});
</script>
<template>
  <div>
    <h2>MyElement</h2>
    {{ option }}
  </div>
</template>
