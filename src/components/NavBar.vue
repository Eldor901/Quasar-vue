<template>
  <q-header reveal elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('is-open', left)" />
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
    export default {
      name: "NavBar",
      props: {
        left: Boolean,
      },
      data () {
        return {
        }
      },
      computed: {

      }

    }
</script>

<style scoped>

</style>
