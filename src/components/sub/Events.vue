<template>
    <div class="events-container pt-5">
        <div class="title">
            <h2 class="black-title fs-3">Upcomings Events</h2>
        </div>
        <div v-for="event in events" class="event-info">
            <div class="container d-flex gap-4 p-4">
                <div class="date px-1">
                    <h3 class="fs-5 m-1">{{ event.day }}</h3>
                    <p class="small m-1 fw-light">{{ event.date }}</p>
                </div>
                <div class="details">
                    <h3 class=" fs-5 pb-1 black-title">{{ event.title }}</h3>
                    <p class="subtext fs-6 mb-1"><i class="fa-regular fa-clock me-1"></i> {{ event.dateFull }}</p>
                    <p class="subtext fs-6 mb-2"><i class="fa-sharp fa-regular fa-location-dot fs-5 me-2"></i>{{ event.location }}</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Events',
        props:['events']
    }
</script>

<style lang="scss" scoped>
.title {
    background-color: #fafafa;
    padding:25px;
    position: relative;
    box-shadow: 2px 3px 10px 0 rgba(0,0,0,.09);
    z-index: 1000;
}
.events-container {
    width: 500px;;
}

.event-info {
    background-color: #fafafa;
    padding:10px;
    border-bottom:1px solid rgb(235, 233, 233);
}

.date {
    background-color: $orange;
    display: inline-block;
    text-align: center;
    color:white;
    height: 60px;
}

.details {
    i {
        font-size:1rem;
        color:$orange;
    }
    a {
        text-decoration: none;
        color:black;
        text-transform: uppercase;
        font-weight: bold;
        padding-top:px;
    }
}
</style>