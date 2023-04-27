<template>
    <main>
        <div class="position-relative">
            <div class="specialties">
                <div class="top-s">
                    <h1 class="black-title">Our specialties <span class="orange-dot">.</span></h1>
                    <p class="subtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque placeat eaque
                        inventore, quis
                        iusto, quibusdam atque modi.</p>
                    <div class="d-inline-block orange-line"></div>
                </div>
                <div class="bottom-s">
                    <div class="row">
                        <SpecialItem :cards="store.cards" />
                    </div>
                </div>
            </div>
            <div class="ceo container-fluid">

                <CeoSlider />

            </div>
            <div class="events">
                <div class="container">
                    <Events :events="store.events" />
                </div>
            </div>
            <div class="leader">
                <div class="container position-relative d-flex gap-5 justify-content-between">
                    <div class="info">
                        <h2 class="black-title fs-2">Creative Leader <span class="orange-dot">.</span></h2>
                        <div class="orange-line"></div>
                        <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in sociis.</p>
                        <a class="read-more" href="#">Read More</a>
                    </div>
                    <Percentage :categories="store.categories" />
                    <div class="svg-absolute position-absolute">
                        <img src="/svg/svg-4.svg" alt="svg-4.svg">
                    </div>
                </div>

            </div>
            <div class="news">
                <LatestNews :news="store.news" />
            </div>
            <Testimonials :testimonials="store.testimonials" />
            <div class="video position-relative">
                <img class="img-fluid" src="/img/h1-img-04.jpg" alt="">
                <div class="play-button d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <ContactUs />
        </div>
    </main>
</template>

<script>
import SpecialItem from './sub/SpecialItem.vue';
import CeoSlider from './sub/CeoSlider.vue';
import Events from './sub/Events.vue';
import Percentage from './sub/Percentage.vue';
import LatestNews from './sub/LatestNews.vue';
import Testimonials from './sub/Testimonials.vue';
import ContactUs from './sub/ContactUs.vue';
import { store } from '../data/store'
export default {
    name: 'Main',
    components: {
        SpecialItem,
        CeoSlider,
        Events,
        Percentage,
        LatestNews,
        Testimonials,
        ContactUs
    },
    data() {
        return {
         store,
        }
    }
}
</script>

<style lang="scss" scoped>
.specialties {
    background-color: white;
    height: fit-content;
    width: 90%;
    margin: 0 auto;
    top: -70px;
    left: 100px;
    height: 700px;
    padding-top: 130px;

    .top-s {
        width: 900px;
        margin: 0 auto;
        text-align: center;
    }

    .black-title {
        font-size: 3.5rem;
    }

    .orange-dot {
        margin-left: -15px;
    }
}

.bottom-s {
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 80px;
}

.ceo {
    padding-top:150px;
}

.svg-background {
    margin-top: -90px;
    z-index: 10000;
}

.events {
    background-image: url('/img/h1-img-09.jpg');
    height: 1100px;
}

.ceo {
    overflow: hidden;
}

.leader {
    background-color: white;
    padding-top: 150px;
    padding-bottom: 200px;

    .info {
        width: 50%;
    }

    .orange-dot {
        margin-left: -6px;
    }

    .svg-absolute {
        top: 420px;
        left: -200px
    }



}

.ceo {
    position: relative;
    padding-left: 150px;
}

.play-button {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    i {
        color:white;
        font-size:5rem;
        cursor:pointer;
    }
}


</style>