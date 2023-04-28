<template>
    <footer>
        <div class="top">
            <div class="container">
                <div class="row ">
                    <div class="col-12 col-lg-3 pb-5">
                        <h2 class="title mb-3">About</h2>
                        <div class="orange-line mb-3"></div>
                        <p class="subtext">We created Everlead to effectively become the
                            stepping stone towards meeting all your goals
                            & achieving business success.</p>
                        <div class="social"><i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-square-twitter"></i>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 pb-5">
                        <h2 class="title mb-3">Twitter</h2>
                        <div class="orange-line mb-3"></div>
                        <div class="tweet d-flex ">
                            <i class="fa-brands fa-twitter"></i>
                            <p class="subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus adipisci in
                                deleniti, aut nesciunt nemo architecto dolores.</p>
                        </div>
                        <div class="tweet d-flex ">
                            <i class="fa-brands fa-twitter"></i>
                            <p class="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                                necessitatibus exercitationem eum harum quia enim culpa incidunt deserunt velit.</p>
                        </div>

                    </div>
                    <div class="col-12 col-lg-3 pb-5">
                        <h2 class="title mb-3">Important links</h2>
                        <div class="orange-line mb-3"></div>
                        <ul>
                            <a class="subtext" href="#">
                                <li>About me</li>
                            </a>
                            <a class="subtext" href="#">
                                <li>About us</li>
                            </a>
                            <a class="subtext" href="#">
                                <li>Language packs</li>
                            </a>
                            <a class="subtext" href="#">
                                <li>Become a coach</li>
                            </a>
                            <a class="subtext" href="#">
                                <li>Monthly events</li>
                            </a>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-3 pb-5 contacts">
                        <h2 class="title mb-3">Contact me</h2>
                        <div class="orange-line mb-3"></div>
                        <p class="subtext m-1"><i class="fa-regular fa-location-dot"></i>457 BigBlue street, 10013</p>
                        <p class="subtext m-1"><i class="fa-regular fa-phone"></i>(315) 5512-2579</p>
                        <p class="subtext mb-5"><i class="fa-regular fa-envelope"></i>everlead@mikado.com</p>
                        <div class="mailform d-flex">
                        <input type="text" placeholder="Your Name">
                        <a class="read-more" href="#">Subscribe</a>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <p class="subtext text-white p-2 fs-6 m-0 text-center">Copyright NonCredoMio</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.top {
    background-color: #181515;
    padding-top: 100px;
    ul {
        list-style: none;
        margin:0;
        padding:0;
    }

    a {
        text-decoration: none;

        &:hover {
            color: $orange;
        }

       
    }

    .title {
        font-family: "Libre Baskerville", serif;
        color: white;
        font-size: 1.3rem;
    }

    .orange-line {
        width: 30px;
    }

    .subtext {
        font-size: 1.1rem;
        color: #908c8c;
    }
}

.social {
    i {
        font-size: 1.5rem;
        color: white;
        margin-right: 10px;
        cursor: pointer;

        &:hover {
            color: $orange;
        }
    }
}

.contacts {
    i {
        color:$orange;
        font-size:0.9rem;
        margin-right:8px;
    }
}
.tweet {
    i {
        color: $orange;
        margin-right: 4px;
        margin-top: 5px;
    }

  
}
input {
        border-bottom:1px solid #fafafa;
        border-top:none;
        border-left:none;
        border-right:none;
        background-color: transparent;
        width: 220px;
    }

    .read-more {
        display:block;
        border-bottom:1px solid #fafafa;
        color:white;
        
    }

    .bottom {
        background-color: $orange;
    }
</style>