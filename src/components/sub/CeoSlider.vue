<template>
 <div class="ceo-slider">
                <div class="ceo-img">
                    <img :src="'/img/' + images[current]" alt="">
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
                    <p class="subtext fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua...</p>
                    <div class="social"><i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-twitter"></i></div>
                </div>
                </div>
            </div>
</template>

<script>
    export default {
        name:'CeoSlider',
        data() {
            return {
                images: [
                    'h1-img-01.jpg',
                    'h1-img-02.jpg',
                    'h1-img-03.jpg'
                ],
                current:0
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
            },
            goPrev() {
                if (this.current === 0) {
                    this.current = this.images.length - 1;
                }
                else {
                    this.current--;
                }
            }
              
            }
        }
    
</script>

<style lang="scss" scoped>
.ceo-slider {
    padding-left:70px;
    padding-bottom:100px;
    img {
        width: 100%

    }
        position: relative;
    }

.ceo-info {
    padding:30px;
    background-color: white;
    height: fit-content;
    width: 90%;
    position: absolute;
    top:10%;
    left:85%
}

.social {
    i {
        font-size:1.5rem;
        margin-left:5px;
        color:$orange;
        cursor:pointer;
        &:hover {
            color:#1e1e1e;
        }
    }
}

.slider-buttons {
    position:absolute;
    bottom:0;
    left:0px;
}

.ceo-img {
    position:relative;
}

button {
    background-color: $orange;
    border:none;
    padding:10px;
    font-size:2rem;
    color:white;
}
</style>