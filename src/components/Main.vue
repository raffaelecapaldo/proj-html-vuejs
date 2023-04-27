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
                        <SpecialItem :cards="cards" />
                    </div>
                </div>
            </div>
            <div class="ceo container-fluid">

                <CeoSlider />

            </div>
            <div class="events">
                <div class="container">
                    <Events :events="events" />
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
                    <Percentage :categories="categories" />
                    <div class="svg-absolute position-absolute">
                        <img src="/svg/svg-4.svg" alt="svg-4.svg">
                    </div>
                </div>

            </div>
            <div class="news">
                <LatestNews :news="news" />
            </div>
            <Testimonials :testimonials="testimonials" />
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
export default {
    name: 'Main',
    components: {
        SpecialItem,
        CeoSlider,
        Events,
        Percentage,
        LatestNews,
        Testimonials
    },
    data() {
        return {
            cards: [{
                title: 'Knowing',
                text: 'Lorem ipsum dolor sit amet, quit consect.',
                image: 'svg-0.svg'
            },
            {
                title: 'Selling',
                text: 'Lorem ipsum dolor sit amet, quis consect.',
                image: 'svg-1.svg'
            },
            {
                title: 'Learning',
                text: 'Lorem ipsum dolor sit amet, quis consect.',
                image: 'svg-2.svg'
            },
            {
                title: 'Contact',
                text: 'Lorem ipsum dolor sit amet, quis consect.',
                image: 'svg-3.svg'
            },],
            events: [{
                title: 'Melbourne Coaching',
                day: '07',
                date: 'Jan, 2022',
                dateFull: '9:00 am - 5:00 pm, Jan 7,2022',
                location: 'Cambridge, MA 02138, USA'
            },
            {
                title: 'New York Coaching',
                day: '11',
                date: 'Jan, 2022',
                dateFull: '9:00 am - 5:00 pm, Jan 11, 2022',
                location: 'Cambridge, MA 02138, USA'
            },
            {
                title: 'London Coaching',
                day: '21',
                date: 'Jan, 2022',
                dateFull: '9:00 am - 5:00 pm, Jan 21, 2022',
                location: 'Cambridge, MA 02138, USA'
            },],
            categories: [{
                title: 'Mentorship',
                percentage: '78%'
            },
            {
                title: 'Education',
                percentage: '95%'
            },
            {
                title: 'Learning',
                percentage: '65%'
            },
            {
                title: 'Motivation',
                percentage: '83%'
            },],
            news: [{
                title: 'Next investment',
                date: 'May 5, 2019',
                image: 'h1-blog-img-02.jpg',
                author: 'Amanda Doe',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor...'
            },
            {
                title: 'Team Building',
                date: 'May 5, 2019',
                image: 'h1-blog-img-01.jpg',
                author: 'Amanda Doe',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor...'
            },
            {
                title: 'New Business Day',
                date: 'May 5, 2019',
                image: 'h1-blog-img-03.jpg',
                author: 'Amanda Doe',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor...'
            },],
            testimonials: [{
                id: 0,
                name: 'Cynthia Clark',
                bio: '"Corem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua."',
                image: 'h3-img-04.png'
            },
            {
                id: 1,
                name: 'Raffaele Capaldo',
                bio: '"Sono stati giorni infernali, ragazzi miei"',
                image: 'h3-img-07.png'
            },
            {
                id: 2,
                name: 'Clelia Fradella',
                bio: '"Bijou ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua."',
                image: 'h3-img-08.png'
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
    margin: 0 auto;
    top: -70px;
    left: 100px;
    height: 700px;
    margin-bottom:100px;
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


</style>