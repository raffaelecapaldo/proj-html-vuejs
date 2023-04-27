<template>
<div class="testimonials-bg">
    <h2 class="black-title text-center">Testimonials.</h2>
    <div class="content">
        <div class="testimonial d-flex justify-content-center">
            <div class="info">
            <img src="/img/h3-img-04.png" alt="">
            <h6>Cyncya Clark</h6>
            <p class="subtext">"Corem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod
tempor incididunt ut labore et dolore magna aliqua."</p>
<div class="slider-position d-flex justify-content-center align-items-center">
    <span>01</span>
    <div class="lines d-flex">
        <div :class="{active: n === 1}" class="line" v-for="n in 3"></div>
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
    }
</script>

<style lang="scss" scoped>
.testimonials-bg {
    background-color:white;
    height: 500px;
    position:relative;
    h2 {
        font-size:13rem;
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
</style>