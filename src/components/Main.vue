<template>
    <main>
        <div class="position-relative">
            <div class="specialties">
                <div class="top-s">
                    <h1 class="black-title">Our specialties <span class="orange-dot">.</span></h1>
      <p class="subtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque placeat eaque inventore, quis
        iusto, quibusdam atque modi.</p>
        <div class="d-inline-block orange-line"></div>
                </div>
                <div class="bottom-s">
                    <div class="row">
                        <SpecialItem :cards="cards" />
                    </div>
                </div>
            </div>
            <div class="ceo container-fluid justify-content-around px-5 d-flex">
                
            <CeoSlider />
            <div class="svg-background">
                <img src="/svg/svg-4.svg" alt="svg-4.svg">
            </div>
            </div>
        </div>
    </main>
</template>

<script>
import SpecialItem from './sub/SpecialItem.vue';
import CeoSlider from './sub/CeoSlider.vue';
    export default {
        name:'Main',
        components: {
            SpecialItem,
            CeoSlider
        },
        data() {
            return {
                cards: [{
                    title:'Knowing',
                    text:'Lorem ipsum dolor sit amet, quit consect.',
                    image:'svg-0.svg'
                },
                {
                    title:'Selling',
                    text:'Lorem ipsum dolor sit amet, quis consect.',
                    image:'svg-1.svg'
                },
                {
                    title:'Learning',
                    text:'Lorem ipsum dolor sit amet, quis consect.',
                    image:'svg-2.svg'
                },
                {
                    title:'Contact',
                    text:'Lorem ipsum dolor sit amet, quis consect.',
                    image:'svg-3.svg'
                },]
            }
        }
    }
</script>

<style lang="scss" scoped>
.specialties {
    background-color: white;
    height: fit-content;
    width: 90%;
    margin:0 auto;
    position: absolute;
    top:-70px;
    left:100px;
    padding-top:130px;

    .top-s {
        width: 900px;
        margin: 0 auto;
        text-align: center;
    }
    .black-title {
        font-size:3.5rem;
    }
    .orange-dot{
        margin-left:-15px;
    }
}

.bottom-s {
    width: 80%;
    margin:0 auto;
    padding-top:50px;
    padding-bottom:80px;
}

.ceo {
    padding-top:800px;
}

.svg-background {
    margin-top:-90px;
}
</style>