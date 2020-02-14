<template>
  <div class="layout-wrapper" :class="{ sidebarClose }">
    <Sidebar />
    <div class="main bg-light">
      <Header />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { mapState } from "vuex";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Header
  },
  computed: {
    ...mapState("layout", {
      sidebarClose: state => state.sidebarClose
    })
  },
  methods: {
    // ...mapActions("layout", ["changeSidebarStatus", "changeActiveItem"])
  }
};
</script>

<style lang="scss">
@import "../styles/base";

.layout-wrapper {
  position: relative;
}

.main {
  position: relative;
  min-height: 100vh;
  margin-left: $sidebar-width;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  .content {
    padding: 30px;
    flex-grow: 1;
  }
}

.sidebarClose {
  .main {
    margin-left: $sidebar-width-close;
  }
}
</style>
