<template>
  <TabMenu :model="items" />
  <router-view />
</template>

<script>
import TabMenu from "primevue/tabmenu";
export default {
  name: "MainMenu",
  components: {
    TabMenu,
  },
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        { label: "About", icon: "pi pi-fw pi-info-circle", to: "/about" },
        {
          label: "Contact",
          icon: "pi pi-fw pi-envelope",
          to: "/contact/some parameter",
        },
      ],
    };
  },
};
</script>

<style>
@import url(../scss/global.scss);
</style>