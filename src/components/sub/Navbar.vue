<template>
    <nav>
        <div class="nav-container pt-4 d-flex justify-content-between">
            <div class="logo">
                <img src="/img/logo-img-01.png" alt="logo everlead">
            </div>
            <div @click="hambmenu = !hambmenu" class="hambmenu d-block d-lg-none">
                <i class="fa-sharp fa-solid fa-bars"></i>
               
            </div>
            <div class="navlinks d-lg-block d-none">
                <ul class="d-flex gap-5 text-uppercase">
                    <a @mouseover="link.active = true" @mouseleave="link.active = false" v-for="link in links" :href="link.url">
                        <li :class="{ active: link.active || link.current , notactive: !link.active }"> {{ link.text }}</li>
                    </a>

                    <a class="notactive" href="#">
                        <li>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </li>
                    </a>
                    <a @click="hambmenu = false" class="notactive" href="#">
                        <li>
                            <i class="fa-solid fa-bars"></i>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="d-flex justify-content-end">
        <div :class="hambmenu ? 'open' : 'close'" class="open-menu">
                    <ul>
                        <a  v-for="link in links" class="notactive" href=""><li>{{ link.text }}</li></a>
                    </ul>
                </div>
            </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['links'],
    data() {
        return {
            hambmenu:false,
        }
    }
}
</script>

<style lang="scss" scoped>

.hambmenu {
   
    cursor:pointer;
    &:hover {
        color:$orange;
    }
}

.open {
    width: 142px;
    position:relative !important;
}

.close {
    width: 0;
}

.open-menu {
        border-radius:5%;
        background-color: white;
        z-index: 1000000;
        overflow: hidden;
        transition:0.3s;
        position:absolute;
        a{
            border-bottom:1px solid $orange;
            width: fit-content;
            display: block;
            font-size:1.5rem !important;
            li {
                text-align: right;
            }
            
            &:hover {
                color:$orange;
            }
        }
    }
.nav-container {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;


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
        font-size: 0.9rem;
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

li {
    transition:0.3s;
}
</style>