<template>
  <div>
    alarm
    <a-button type="primary">
      <StarTwoTone twoToneColor="#eb2f96" />Primary
    </a-button>
    <StarOutlined />
    <StarFilled />
  </div>
</template>

<script lang="ts">
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    StarOutlined,
    StarFilled,
    StarTwoTone,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
