<template>
    <v-carousel>
        <v-carousel-item
            v-for="(item,index) in pictures"
            :key="index"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition">

        </v-carousel-item>
    </v-carousel>
</template>
<script>

export default ({
    data: () =>({
        pictures:[
            {src: 'https://pixabay.com/get/ga84031a929fd12659bd7bdf743f0f7db50bb3b3618ec84437d051d322918791c547f99603d2161206139380b7ee35fe0_1920.jpg'},
            {src: 'https://pixabay.com/get/g25a11ed141ae3f6ee3d2c7ac0ffbcc024f74fa9576200dd52bf527f9ac1f46cc69b7ac2dff35813c75ab13f6456f901c_1920.jpg'},
            {src: 'https://pixabay.com/get/g5e0cfab39104c44d311212dfaf05e22940fa7f852fa5de99faa6cb2e7dd9446689ca1074031938bfd489c274ed458c14_1920.jpg'}
        ]
    })
})
</script>
<style scoped>

</style>
