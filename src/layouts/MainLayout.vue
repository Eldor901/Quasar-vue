<template>
  <q-layout view="hHh lpR fFf">

    <NavBar v-on:is-open="isOpen(left)"/>

    <SideBar v-bind:left="left"/>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

  import NavBar from "../components/NavBar";
  import SideBar from "../components/SideBar";
  const menuList = [
    {
      icon: 'book',
      label: 'SearchWord',
      separator: true
    },
    {
      icon: 'import_contacts',
      label: 'Stories',
      separator: true
    },
    {
      icon: 'spellcheck',
      label: 'Synonyms',
      separator: false
    },

  ]

export default {

  name: "MainLayout.vue",
  components: {SideBar, NavBar},
  data () {
    return {
      left: true,
      menuList
    }
  },
  methods: {
    isOpen(left)
    {
      this.left = !left;
    }
  },
};
</script>

<style scoped></style>
