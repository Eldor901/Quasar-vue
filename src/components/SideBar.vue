<template>
  <q-drawer show-if-above v-model="left" side="left" bordered>
    <template v-for="(menuItem, index) in menuList">
      <router-link tag="div" :to="menuItem.link">
          <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple >

                    <q-item-section avatar>
                      <q-icon :name="menuItem.icon" color="primary"/>
                    </q-item-section>
                    <q-item-section>
                        {{ menuItem.label }}
                    </q-item-section>
          </q-item>
      </router-link>
      <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
    </template>

  </q-drawer>
</template>

<script>
  const menuList = [
    {
      icon: 'book',
      label: 'SearchWord',
      separator: true,
      link: '/'
    },
    {
      icon: 'import_contacts',
      label: 'Todos',
      separator: true,
      link: '/todos'
    },
    {
      icon: 'spellcheck',
      label: 'Stories',
      separator: false,
      link: '/stories'
    },

  ]

    export default {
        props: {
          left: Boolean,
        },
        name: "SideBar",
        data () {
          return {
            menuList
          }
        },
    }
</script>

<style scoped>

</style>
