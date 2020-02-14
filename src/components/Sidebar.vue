<template>
  <aside class="sidebar">
    <header class="sidebar-header">
      <img src="../../public/logo.png" style="height:35px; width:35px;" />
      <span class="name">{{ $t("brand_name") }}</span>
    </header>
    <div class="sidebar-nav">
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/dashboard">
            <span class="icon">
              <b-icon icon="house"></b-icon>
            </span>
            <span class="text">{{ $t("nav.dashboard") }}</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/users">
            <span class="icon">
              <b-icon icon="people"></b-icon>
            </span>
            <span class="text">{{ $t("nav.users") }}</span>
          </router-link>
        </li>
        <!-- <li class="menu-item">
          <router-link to="/cases">
            <span class="icon">
              <b-icon icon="list-task"></b-icon>
            </span>
            <span class="text">{{ $t("nav.cases") }}</span>
          </router-link>
        </li> -->
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import "../styles/base";

$bkg-color: #202020;
$bkg-color-hover: #000000;
$font-color: #eeeeee;

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: $sidebar-width;
  background-color: $bkg-color;
  color: #ffffff;

  transition: width 0.5s;

  .sidebar-header {
    text-align: center;
    font-size: 20px;
    padding: 15px 0;
    margin-bottom: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    span.name {
      padding-left: 10px;
    }
  }
  .sidebar-nav {
    .menu {
      padding: 0;
      .menu-item {
        height: 56px;
        a {
          width: 100%;
          height: 100%;
          padding: 12px 13px;
          color: $font-color;
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: all 0.3s;
          span.icon {
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
              width: 24px;
              height: 24px;
            }
          }
          span.text {
            padding-left: 14px;
            transition: all, 0.5s;
            overflow-x: hidden;
            white-space: nowrap;
          }
          &:hover {
            background-color: $bkg-color-hover;
          }
        }
      }
    }
  }
}

.sidebarClose {
  .sidebar {
    width: $sidebar-width-close;
    .sidebar-header {
      span.name {
        display: none;
      }
    }
    .sidebar-nav {
      span.text {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
}
</style>
