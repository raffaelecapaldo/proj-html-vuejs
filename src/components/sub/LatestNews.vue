<template>
    <div class="top text-center">
        <h2 class="black-title">Latest news <span class="orange-dot">.</span></h2>
        <p class="subtext fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div class="orange-line d-inline-block"></div>
    </div>
    <div class="bottom">
        <div class="container">
            <div class="row">
                <div class="col-4 pe-3" v-for="item in news">
                    <div class="news-image position-relative">
                        <div class="tag"><i class="fa-solid fa-tag me-2"></i>Business, Leading</div>
                        <img class="img-fluid" :src="'/img/' + item.image" :alt="item.title">
                    </div>
                    <div class="news-info mt-3">
                        <i class="fa-solid fa-clock"></i> <span class="fs-6 subtext">{{ item.date }} <i
                                class="fa-solid fa-user ms-2 me-2"></i>{{ item.author }}</span>
                        <h2 class="black-title fs-4 mt-2">{{ item.title }}</h2>
                        <p class="subtext fs-5">{{ item.about }}</p>
                        <a class="read-more" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestNews',
    props:['news']
}
</script>

<style lang="scss" scoped>
.top {
    padding-top: 130px;
    padding-bottom: 90px;

    h2 {
        font-size: 3rem;
    }

    .orange-dot {
        margin-left: -13px;
    }
}

.tag {
    position: absolute;
    bottom: -10px;
    right: 20px;
    background-color: $orange;
    padding: 10px;
    color: white;
    font-weight: 200;
}

.news-info {
    i {
        color: $orange;
        font-size: 0.8rem;
    }
}

.bottom {
    padding-bottom: 100px;
}
</style>