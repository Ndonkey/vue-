<template>
  <div class="home">
    用户名:{{ nickname }}
    <Spin v-if="showloading" fix>加载中</Spin>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed:{
    ...mapState(["nickname"],['showloading'])
  }
};
</script>
