<template>
<div id="navPanel_cnt">
    <v-list>
        <v-list-item-group
            active-class="border"
            color="indigo"
        >
            <v-subheader>ОБЩЕЕ {{email}}</v-subheader>
            <v-list-item>
                <v-list-item-content>
                    <router-link class="nav_link" to="/home"><v-list-item-title v-text="'Главная'"></v-list-item-title></router-link>
                </v-list-item-content>
            </v-list-item>

            <v-subheader>КОМПАНИЯ</v-subheader>
            <v-list-item>
                <v-list-item-content>
                    <router-link class="nav_link" to="/company"><v-list-item-title v-text="'Общее'"></v-list-item-title></router-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <router-link class="nav_link" to="/company/finance"><v-list-item-title v-text="'Финансовые показатели'"></v-list-item-title></router-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <router-link class="nav_link" to="/company/banking"><v-list-item-title v-text="'Подключенный банкинг'"></v-list-item-title></router-link>
                </v-list-item-content>
            </v-list-item>

            <v-subheader>СОТРУДНИКИ</v-subheader>
            <v-list-item>
                <v-list-item-content>
                    <router-link class="nav_link" to="/employee"><v-list-item-title v-text="'Общее'"></v-list-item-title></router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        
    </v-list>
</div>

  
</template>

<script>
export default {
    name: 'NavigationPanel',
    
    // data: () => {
    //     return {
    //         name: 'empty'
    //     }
    // },

    // mounted(){
    //     if(this.$store.getters.user) this.name = this.$store.getters.user.email
    // }

    computed: {
        email() {
            return this.$store.getters.user.email
        }
    },
}
</script>

<style lang="scss">
#navPanel_cnt{
    .nav_link{
        text-decoration: none;
        font-size:12px !important;
    }
}
</style>