<template>
  <div>
    <b-navbar toggleable="lg" class="bg-white shadow-sm rounded">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" @click="changeSidebarStatusMethod">
            <!-- <font-awesome-icon :icon="['fas', 'bars']" size="md" /> -->
            <b-icon icon="list" font-scale="1.5"></b-icon>
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon icon="arrow-clockwise" font-scale="1.5"></b-icon>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <font-awesome-icon :icon="['fas', 'globe-asia']" size="lg" />
            </template>
            <b-dropdown-item href="#" @click="$i18n.locale='zh-cn'">简体中文</b-dropdown-item>
            <b-dropdown-item href="#" @click="$i18n.locale='zh-tw'">繁體中文</b-dropdown-item>
            <b-dropdown-item href="#" @click="$i18n.locale='en'">ENGLISH</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              username
            </template>
            <b-dropdown-item href="#">
              <b-icon icon="person"></b-icon> {{ $t("nav.profile") }}
            </b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">
              <b-icon icon="power"></b-icon> {{ $t("nav.log_out") }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState("layout", {
      sidebarClose: state => state.sidebarClose
    }),
    ...mapState("auth", {
      user: state => state.user_info
    })
  },
  methods: {
    ...mapActions("layout", ["changeSidebarStatus"]),
    changeSidebarStatusMethod() {
      this.changeSidebarStatus();
    },
    logout() {
      // window.sessionStorage.setItem("is_loggedin", false);
      this.$router.push("/auth/login");
    }
  }
};
</script>
