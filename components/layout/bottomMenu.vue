<template>
  <div>
    <!--Bottom Menu-->
    <v-toolbar
      fixed
      app
      class="bg--white bottom-menu"
    >
        <div class="main d-flex d-flex--row">
            <nuxt-link v-for="(menu, index) in bottomMenu" :key="index" :to="menu.to" class="d-flex d-flex--column">
                <v-btn
                    icon
                >
                    <v-icon>{{menu.icon}}</v-icon>
                </v-btn>
                <span>{{menu.title}}</span>
            </nuxt-link>
            <a class="d-flex d-flex--column">
                <v-btn
                    icon
                    @click="rightDrawer = !rightDrawer" 
                >
                    <v-icon>format_list_bulleted</v-icon>
                </v-btn>
                <span>LAINNYA</span>
            </a>
        </div>
    </v-toolbar>

    <!--Navigation Drawer Lainnya-->
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      right: true,
      rightDrawer: false,
      items: [
        {
          icon: 'home',
          title: 'Lainnya 1',
          to: '/'
        },
        {
          icon: 'fastfood',
          title: 'Lainnya 1',
          to: '/'
        },
        {
          icon: 'person_pin',
          title: 'Lainnya 1',
          to: '/'
        }
      ],
      bottomMenu: [
          {
              to: '/',
              title: 'BERANDA',
              icon: 'home'
          },
          {
              to: '/portfolio',
              title: 'PORTFOLIO',
              icon: 'person_pin'
          },
          {
              to: '/dana',
              title: 'DANA',
              icon: 'monetization_on'
          },
          {
              to: '/inbox',
              title: 'INBOX',
              icon: 'mail'
          }
      ]
    }
  }
}
</script>
