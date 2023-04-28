<template>
    <div class="ceo-slider position-relative">
        <div class="svg-absolute position-absolute">
            <img src="/svg/svg-4.svg" alt="svg-4.svg">
        </div>
        <div class="ceo-img position-relative">
            <img :class="index === current && position === 'prev' ? 'activeprev' : index === current && position === 'next' ? 'active' : 'notactive'"
                v-for="(image, index) in images" :src="'/img/' + image" alt="">
                <div class="backimage">
                    <img :src="position === 'prev' ? '/img/' + images[current + 1 ] : '/img/' + images[current - 1]" alt="">
                </div>
            <div class="slider-buttons">
                <button @click="goPrev()"><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
                <button @click="goNext()"><i class="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
        <div class="ceo-info">
            <div class="container-fluid p-5">
                <h3 class="black-title fs-2">Jason Bickford</h3>
                <p class="subtext fs-6">Founder and Executive Director</p>
                <div class="orange-line"></div>
                <p class="subtext fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidunt ut labore et dolore magna aliqua...</p>
                <div class="social"><i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CeoSlider',
    data() {
        return {
            images: [
                'h1-img-01.jpg',
                'h1-img-02.jpg',
                'h1-img-03.jpg'
            ],
            current: 0,
            position: 'prev',
        }
    },
    methods: {
        goNext() {
            if (this.current === this.images.length - 1) {
                this.current = 0;
            }
            else {
                this.current++;
            }
            this.position = 'next'
        },
        goPrev() {
            if (this.current === 0) {
                this.current = this.images.length - 1;
            }
            else {
                this.current--;
            }
            this.position = 'prev'
        }

    }
}

</script>

<style lang="scss" scoped>
.ceo-slider {
    padding-bottom: 100px;

    img {
        transition: 0.3s;
    
    }

    position: relative;
    z-index:99999;
}

.ceo-info {
    padding: 30px;
    background-color: white;
    height: fit-content;
    width: 90%;
    position: absolute;
    top: 10%;
    left: 85%;

}

.backimage {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: -1;
}

.social {
    i {
        font-size: 1.5rem;
        margin-left: 5px;
        color: $orange;
        cursor: pointer;

        &:hover {
            color: #1e1e1e;
        }
    }
}

.slider-buttons {
    position: absolute;
    bottom: 0;
    left: 0px;
    z-index: 999999;
}

.ceo-img {
    position: relative;
    overflow: hidden;
}

button {
    background-color: $orange;
    border: none;
    padding: 10px;
    font-size: 2rem;
    color: white;
}

.ceo-slider {
    width: 50%
}

.svg-absolute {
    left: 1100px;
    top: -100px;
    height: 300px;
    width: 60%;
}

.notactive {
    opacity: 0;
    display: none;
}

.active {
    animation: shownext 0.3s ease-in;
}

.activeprev {
    animation: prevshow 0.3s ease-in;
}
/* se clicchi a destra la card arriva da sinistra */
@keyframes shownext {
    0% {
        display: inline-block
    }

    1% {
        translate: -704px 0;
    }

    100% {
        height: 100%;
        translate: 0px 0;
    }




}
/* se clicchi a sinistra la card arriva da destra */
@keyframes prevshow {
    0% {
        display: inline-block
    }

    1% {
        translate: 704px 0;
    }

    100% {
        height: 100%;
        translate: 0px 0;
    }
}

@media screen and (max-width: 992px) {
    .ceo-info {
        position: static;
        padding: 0;
        width: 100%;
    }

    .ceo-slider {
        width: 100%;
        transition: 0.3s;
    }

    .ceo {
        display: flex;
        justify-content: center;
    }
}
</style>