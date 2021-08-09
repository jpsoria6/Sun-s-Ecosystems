<template>
    <v-card
    elevation="2"
    outlined
    class="mx-auto ancho">
    <v-card-title v-if="!isLogin">
        Sun's Ecosystems
    </v-card-title>
    <v-card-title v-if="isLogin">
       {{welcomeMessage}}
    </v-card-title>

        <v-form>
        <v-card-text>
                <v-row>
                    <v-text-field
                    v-model="username"
                    label="Username"
                    hide-details="auto">
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field
                    v-model="password"
                    label="Password"
                    counter
                    :append-icon="mostrarPass ? 'mdi-eye' : 'mdi-eye-off'"
                    hide-details="auto"
                    :type="mostrarPass ? 'text' :'password'"
                    @click:append="mostrarPass = !mostrarPass">
                    
                    </v-text-field>
                </v-row>
        </v-card-text>
        <v-card-actions>
         <v-row 
         class="mt-3"
         justify="end">
            <v-btn
            class="text-xs-right"
            outlined
            color="indigo"
            @click="showParameters"
            >
                Login
            </v-btn>
         </v-row>
        </v-card-actions>
        </v-form>
    </v-card>
</template>
<script>

export default({
    data: () => ({
        isLogin: false,
        mostrarPass: false,
        username: '',
        password : '',
    }),
    methods:{
        showParameters:function (){
           this.isLogin = true;
           this.$store.commit('setUser',this.username) 
           console.log(this.$store.state.user)
        },
    },
    computed:{
        welcomeMessage: function () {
            return 'Welcome '+this.$store.getters.currentUser
        }
    }
})
</script>
<style scoped>
    .ancho{
        max-width: 600px;
        padding: 3%;
        margin-top: 20vh;
    }
</style>
