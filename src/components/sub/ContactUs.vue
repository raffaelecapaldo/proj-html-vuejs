<template>
    <div class="contact-us">
        <div class="container">
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
            <div class="form"></div>
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