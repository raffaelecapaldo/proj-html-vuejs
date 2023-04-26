<template>
    <nav>
        <div class="nav-container mt-4 d-flex justify-content-between">
            <div class="logo">
                <img src="/img/logo-img-01.png" alt="logo everlead">
            </div>
            <div class="navlinks">
                <ul class="d-flex gap-5 text-uppercase">
                    <a v-for="link in links" :href="link.url">
                        <li :class="{ active: link.active, notactive: !link.active }"> {{ link.text }}</li>
                    </a>

                    <a class="notactive" href="#">
                        <li>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </li>
                    </a>
                    <a class="notactive" href="#">
                        <li>
                            <i class="fa-solid fa-bars"></i>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['links'],
}
</script>

<style lang="scss" scoped>
.nav-container {
    width: 90%;
    margin: 0 auto;

    .logo {
        img {
            width: 130px;
        }
    }

}

ul {
    list-style: none;

    a {
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: bold;
    }
}


.active {
    color: $orange !important;
}

.notactive {
    color: #1e1e1e;
}

.active:before {
    font-family: "Font Awesome 6 Free";
    font-weight: 400;
    content: "\f061";
    display: inline-block;
    margin-right: 10px;

}
</style>