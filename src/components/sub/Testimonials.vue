<template>
<div class="testimonials-bg">
    <button @click="goPrev()" class="left-arrow"><i class="fa-solid fa-arrow-left"></i></button>
        <button @click="goNext()" class="right-arrow"><i class="fa-solid fa-arrow-right"></i></button>
        <div class="title w-100">
            <h2 class="black-title text-center">Testimonials.</h2>
        </div>
    
    <div class="content">
        <div class="testimonial d-flex justify-content-center">
            <div class="info">
            <img :src="'/img/' + testimonials[current].image" :alt="testimonials[current].name">
            <h6>{{ testimonials[current].name }}</h6>
            <p class="subtext">{{ testimonials[current].bio }}</p>
<div class="slider-position d-flex justify-content-center align-items-center">
    <span>01</span>
    <div class="lines d-flex">
        <div :class="{active: current === testimonial.id}" class="line" v-for="testimonial in testimonials"></div>
    </div>
    <span>03</span>
</div>
        </div>
            
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:'Testimonials',
        props:['testimonials'],
        data() {
            return {
                current:0,
            }
        },
        methods: {
            goNext() {
                if (this.current === this.testimonials.length - 1) {
                    this.current = 0;
                }
                else {
                    this.current++;
                }
            },
            goPrev() {
                if (this.current === 0) {
                    this.current = this.testimonials.length - 1
                }
                else {
                    this.current--;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.testimonials-bg {
    background-color:white;
    height: 500px;
    position:relative;
    h2 {
        font-size:12cqw;
    }
    .content {
        background-color: #1e1c1cf5;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
}

.testimonial {
    padding-top:170px;
    text-align: center;
    width: 40%;
    margin:0 auto;
    img {
        padding:4px;
        background-color: white;
        border-radius:50%;
    }
    h6 {
        color:white;
        margin-top:10px;
    }
    p {
        color:#d2d2d2;
        margin-top:20px;
    }
    span {
        color: rgba(255,255,255,.2)
    }
}

.lines {
    width: 120px;
    margin-left:10px;
    margin-right:10px;
    .line {
        width: calc(100% / 3);
        height: 1px;
        background-color: rgba(255,255,255,.2)
    }
}

.active {
    background-color: #fafafa !important;
}

.left-arrow, .right-arrow {
    position:absolute;
    z-index:1000;
    top:250px;
}

.left-arrow {
    left:190px
}
.right-arrow {
    right:190px;
}

button {
    background-color: transparent;
    border:none;
    color:white;
    padding:10px;
    font-size:3rem;
}

.title {
    container-type: inline-size;
}

@media screen and (max-width:992px) {
    .left-arrow, .right-arrow {
        top:50px;
    }
}
</style>