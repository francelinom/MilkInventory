<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Milk Inventary
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: '',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Estoque',
          caption: '',
          icon: 'view_agenda',
          link: ''
        },
        {
          title: 'Relatórios',
          caption: '',
          icon: 'list_alt',
          link: ''
        },
        {
          title: 'Cadastrar Item',
          caption: '',
          icon: 'library_add',
          link: ''
        },
        {
          title: 'Sair',
          caption: '',
          icon: 'exit_to_app',
          link: '/login'
        }
      ]
    }
  }
}
</script>
