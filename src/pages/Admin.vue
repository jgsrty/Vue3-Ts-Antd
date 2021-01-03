<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
      >
        <a-sub-menu key="sub1">
          <template #title>
            <span><UserOutlined />起始页</span>
          </template>
          <a-menu-item key="4"
            ><router-link to="/home">首页</router-link></a-menu-item
          >
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span><LaptopOutlined />舆情报告</span>
          </template>
          <a-menu-item key="11"
            ><router-link to="/report">全部舆情</router-link></a-menu-item
          >
          <a-menu-item key="22">正面舆情</a-menu-item>
          <a-menu-item key="33">负面舆情</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span><NotificationOutlined />舆情设置</span>
          </template>
          <a-menu-item key="111"
            ><router-link to="/keywords">舆情关键词</router-link></a-menu-item
          >
          <a-menu-item key="222"
            ><router-link to="/alarm">舆情报警</router-link></a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    let selectedKeys = ref(["1"]);
    let collapsed = ref(false);
    let openKeys = ref(["sub1"]);
    return { selectedKeys, collapsed, openKeys };
  },
});
</script>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
