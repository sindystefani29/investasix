<template>
  <div>
    <!--Bottom Menu-->
    <v-toolbar
      fixed
      app
      class="bg--white bottom-menu"
    >
        <div class="main d-flex">
            <nuxt-link v-for="(menu, index) in bottomMenu" :key="index" :to="menu.to" class="d-flex flex-1">
                <v-btn
                    icon
                >
                  <svg v-if="menu.icon == 'beranda'" class="icon-img" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6 3.6999L8.3 0.0999023C8.1 -9.76548e-05 7.9 -9.76548e-05 7.7 0.0999023L0.4 3.6999C0.1 3.7999 0 4.0999 0 4.2999V15.2999C0 15.6999 0.3 15.9999 0.7 15.9999H6.2H9.9H15.4C15.8 15.9999 16.1 15.6999 16.1 15.2999V4.2999C16 4.0999 15.9 3.7999 15.6 3.6999ZM6.9 14.5999V10.4999H9.2V14.5999H6.9ZM14.6 14.5999H10.5V9.7999C10.5 9.3999 10.2 9.0999 9.8 9.0999H6.2C5.8 9.0999 5.5 9.3999 5.5 9.7999V14.5999H1.4V4.7999L8 1.4999L14.6 4.7999V14.5999Z" fill="#231F20"/>
                  </svg>
                  <svg v-if="menu.icon == 'kampanye'" class="icon-img" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00005 15.9998L1.30005 1.2998" stroke="#231F20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M1.3 2.6C2.01797 2.6 2.6 2.01797 2.6 1.3C2.6 0.58203 2.01797 0 1.3 0C0.58203 0 0 0.58203 0 1.3C0 2.01797 0.58203 2.6 1.3 2.6Z" fill="#231F20"/>
                    <path d="M7.80005 0.799934C8.20005 0.999934 8.40005 1.29993 8.60005 1.69993C9.30005 2.89993 9.90005 4.19993 10.5 5.49993C10.6 5.69993 10.5 5.79993 10.3 5.89993C8.60005 6.69993 4.80005 7.09993 4.50005 7.09993C4.20005 7.09993 3.90005 6.89993 3.70005 6.59993C3.50005 6.29993 3.50005 6.09993 3.40005 5.79993C3.20005 5.19993 2.90005 4.59993 2.60005 3.89993C2.40005 3.39993 1.90005 2.89993 1.80005 2.29993C1.80005 1.79993 7.20005 0.399934 7.80005 0.799934Z" fill="#231F20"/>
                    <path d="M11.7 3.59986C11.9 3.59986 12.1 3.49986 12.3 3.59986C12.5 3.59986 12.6 3.69986 12.7 3.79986C13.5 4.39986 14.4 4.99986 15.4 5.39986C14.3 5.49986 13.5 6.29986 12.5 6.79986C11.8 7.09986 11 7.19986 10.2 7.39986C9.90001 7.39986 9.60001 7.49986 9.30001 7.39986C8.90001 7.39986 8.60001 7.09986 8.40001 6.69986C8.20001 6.09986 8.00001 4.69986 8.40001 4.19986C8.80001 3.99986 9.30001 3.89986 9.70001 3.89986C10.3 3.79986 11.1 3.59986 11.7 3.59986Z" fill="#231F20"/>
                  </svg>
                  <svg v-if="menu.icon == 'portfolio'" class="icon-img" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6 13.3229C14.8 13.3229 15 13.4223 15 13.621V15.5092C15 15.708 14.8 15.9068 14.6 15.9068H1.4C1.10868 15.9068 1 15.9068 1 15.6086V13.7204C1 13.5217 1.2 13.3229 1.4 13.3229H14.6ZM14.6 12.2297H1.4C0.6 12.2297 0 12.9254 0 13.7204V15.6086C0 16.4036 0.6 16.9999 1.4 16.9999H14.5C15.3 16.9999 15.9 16.4036 15.9 15.6086V13.7204C16 12.9254 15.4 12.2297 14.6 12.2297Z" fill="#333333"/>
                    <path d="M3.19995 13.8198V15.4099" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M6.40002 13.8198V15.4099" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M9.59998 13.8198V15.4099" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M14.6 8.55264C14.8594 8.55264 15 8.65202 15 8.95016V10.8384C15 11.0371 14.8 11.2359 14.6 11.2359H1.4C1.2 11.2359 1 11.1365 1 10.8384V8.95016C1 8.7514 1.2 8.55264 1.4 8.55264H14.6ZM14.6 7.45947H1.4C0.6 7.45947 0 8.15512 0 8.95016V10.8384C0 11.6334 0.6 12.2297 1.4 12.2297H14.5C15.3 12.2297 15.9 11.6334 15.9 10.8384V8.95016C16 8.15512 15.4 7.45947 14.6 7.45947Z" fill="#333333"/>
                    <path d="M3.19995 9.04956V10.6396" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M6.40002 9.04956V10.6396" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M9.59998 9.04956V10.6396" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M12.8 13.8198V15.4099" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M12.8 9.04956V10.6396" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M8 4.677V7.45961" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M11.2 4.67695H8C8 2.88813 9.4 1.49683 11.2 1.49683H14.4C14.4 3.28565 13 4.67695 11.2 4.67695Z" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M4.79998 1.49683H1.59998C1.59998 3.28565 2.99998 4.67695 4.79998 4.67695H7.99998C7.99998 2.88813 6.59998 1.49683 4.79998 1.49683Z" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                  </svg>
                  <svg v-if="menu.icon == 'dana'" class="icon-img" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5155 4.64505C14.3106 4.64505 14.9068 5.26441 14.9068 6.09021V13.6257C14.9068 14.4515 14.3106 15.0709 13.5155 15.0709H2.38509C1.59006 14.9676 0.993789 14.3483 0.993789 13.5225V6.09021C0.993789 5.26441 1.59006 4.64505 2.38509 4.64505H13.5155ZM13.5155 3.61279H2.38509C1.09317 3.61279 0 4.64505 0 6.09021V13.6257C0 14.8644 1.09317 15.9999 2.38509 15.9999H13.6149C14.9068 15.9999 16 14.8644 16 13.5225V6.09021C15.9006 4.64505 14.8075 3.61279 13.5155 3.61279Z" fill="#333333"/>
                    <path d="M1.98755 4.12903L11.2587 0.919036C12.5578 0.469208 13.913 1.4341 13.913 2.80896V4.12903H1.98755Z" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M14.9068 8.7742V10.8387H12.9192C12.3229 10.8387 11.9254 10.4258 11.9254 9.80646C11.9254 9.1871 12.3229 8.7742 12.9192 8.7742H14.9068ZM15.9006 7.74194H12.9192C11.8261 7.74194 10.9316 8.67098 10.9316 9.80646C10.9316 10.9419 11.8261 11.871 12.9192 11.871H15.9006V7.74194Z" fill="#333333"/>
                  </svg>
                </v-btn>
                <span>{{menu.title}}</span>
            </nuxt-link>
            <a class="d-flex flex-1">
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
              icon: 'beranda'
          },
          {
              to: '/kampanye',
              title: 'KAMPANYE',
              icon: 'kampanye'
          },
          {
              to: '/portfolio',
              title: 'PORTFOLIO',
              icon: 'portfolio'
          },
          {
              to: '/dana',
              title: 'DANA',
              icon: 'dana'
          }
      ]
    }
  }
}
</script>
