<template>
    <v-app-bar  color="green">
           
        <v-toolbar-title>Sun's Ecosystems</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-menu 
        offset-y 
        left
        bottom>
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      fab small
                      v-bind="attrs"
                      v-on="on"
                    >
                        <v-icon>
                            mdi-earth
                        </v-icon>
                    </v-btn>
                  </template>
                  <v-list-item 
                    v-for="(item,index) in menuItems"
                    :key="index" link nav class="background-item-list" >
                                    <router-link :to="item.path">
                                        <v-list-item-title>
                                          {{item.title}}
                                        </v-list-item-title>
                                    </router-link>

                  </v-list-item>
                 
        </v-menu>
    </v-app-bar>
</template>

<script>

export default {
    data: () => ({
        menuItems:[
            {title: 'Home',path:'/'},
            {title: 'About Us',path:'/about'},
            {title: 'Login', path: '/login'}
        ]

    })

}
</script>
<style scoped>
    .background-item-list{
        background-color: aliceblue;
    }
    .mt-list{
        margin-top: 5px;
    }
</style>