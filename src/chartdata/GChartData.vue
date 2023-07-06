<template>
  <GoogleChart :resizeDebounce="500" />
</template>

<script>
import GoogleChart from "./GoogleChart";
export default {
  components: {
    GoogleChart,
  },
};
</script>
