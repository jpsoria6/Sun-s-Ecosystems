<template>
    <v-timeline
     align-top
    :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item 
        v-for="(item,i) in contents"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot>
    <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="text-h6">
            {{item.title}}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    </v-timeline>
</template>
<script>

export default ({
  data: () => ({
      contents:[
          {title:'Mision', text:'', icon:'mdi-star', color: 'red lighten-2'},
          {title:'Vision', text:'', icon:'mdi-airballoon', color: 'purple darken-1'},
          {title:'Objetivos', text:'', icon:'mdi-bullseye-arrow ', color: 'green lighten-1'},
          {title:'Nosotros', text:'', icon:'mdi-book-variant', color: 'indigo'}
      ]
  })
})
</script>
<style lang="sass" scoped>

</style>