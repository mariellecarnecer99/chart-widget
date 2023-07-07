<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "MyCustomElement",
  props: {
    // msg: {
    //   type: String,
    //   required: true,
    // },
    option: {
      type: Object,
    },
  },
});
</script>
<template>
  <div class="w">
    <h2>MyCustomElement</h2>
    {{ option }}
    <MyElement :option="option" />
  </div>
</template>
<style scoped>
.w {
  border: 1px solid red;
}
</style>
