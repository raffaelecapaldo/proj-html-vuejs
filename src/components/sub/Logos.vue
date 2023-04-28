<template>
    <div class="logos pt-4">
        <div class="container">
            <div class="d-flex logo flex-column flex-lg-row gap-3 gap-lg-0 align-items-center justify-content-between">
                <div v-for="logo in logos" >
                    <img  @mouseover="logo.hover = true" @mouseleave="logo.hover = false" :src="logo.hover ? '/img/' + logo.imageHover : '/img/' + logo.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Logos',
        props:['logos']
    }
</script>

<style lang="scss" scoped>
.logos {
    background-color: white;
    padding-bottom:90px;
    img {
        cursor:pointer;
    }
}

@media (min-width: 992px) {
    .colmax5 {
        flex: 0 0 auto;
    width: 20%;
    }


}

@media (max-width: 992px) {
    .logo {
        margin-top:360px;
      
    }

 
}
</style>