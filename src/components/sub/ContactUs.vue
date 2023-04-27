<template>
    <div class="contact-us">
        <div class="container d-flex justify-content-between">
            <div class="map">
                <img class="img-fluid" src="/img/h1-contact-rev-01.png" alt="map">
                <div class="pointer l1">
                    <img src="/img/h1-contact-rev-02.png" alt="pointer">
                    <div class="ny">
                        <div class="item">
                            <h2 class="m-0 black-title fs-5">New York Coaching</h2>
                            <a class="m-0 read-more" href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="pointer l2">
                    <img src="/img/h1-contact-rev-02.png" alt="pointer">
                </div>
                <div class="pointer l3">
                    <img src="/img/h1-contact-rev-02.png" alt="pointer">
                </div>
            </div>
            <div class="form">
                <div class="title">
                    <h2 class="black-title fs-1">Contact Us <span class="orange-dot">.</span></h2>
                    <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div class="orange-line mb-3"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ContactUs',
    }
</script>

<style lang="scss" scoped>
.contact-us {
    background-color: white;
    height: 500px;;
    padding-top:100px;
}

.map {

    width: 50%;
    position:relative;
}

.form {
    width: 50%;
    margin-top:-50px;

    .title {
        .orange-dot {
            margin-left:-9px;
        }
    }
}

.pointer {
    position:absolute;
}

.l1 {
    top: 35%;
    left: 22%;
}

.l2 {
    top: 21%;
    left: 47%;
}

.l3 {
    top: 74%;
    left: 75%;
}

.ny {
    position:relative;
    .item {
        position:absolute;
        width: 250px;
        background-color: white;
        padding:18px;
        top:10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
}
</style>