<template>
    <div class="padding_container" id="navbar">
        <div class="container">
            <nav class="navi  navbar  navbar-expand-xl">

                <RouterLink to="/" class="logo navbar-brand">
                    <img src="../assets/logo.svg" alt="">
                </RouterLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navigation navbar-nav">
                        <li class="nav-item">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <h5>Popular Category</h5>
                                    <div class="grid_container">
                                        <ul>

                                            <li class="itemes"><a class="dropdown-item" href="#">
                                                    <img src="../assets/furniture.webp" alt="">
                                                    <div class="wrapper">
                                                        <p>Furniture</p>
                                                        <p>240 Item Available</p>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="itemes"><a class="dropdown-item" href="#">
                                                    <img src="../assets/handBag.webp" alt="">
                                                    <div class="wrapper">
                                                        <p>Hand Bag</p>
                                                        <p>240 Item Available</p>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="itemes">
                                                <a class="dropdown-item" href="#">
                                                    <img src="../assets/shoe.webp" alt="">
                                                    <div class="wrapper">
                                                        <p>Shoe</p>
                                                        <p>240 Item Available</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>

                                            <li class="itemes"><a class="dropdown-item" href="#">
                                                    <img src="../assets/headphone.webp" alt="">
                                                    <div class="wrapper">
                                                        <p>Headphone</p>
                                                        <p>240 Item Available</p>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="itemes"><a class="dropdown-item" href="#">
                                                    <img src="../assets/laptop.webp" alt="">
                                                    <div class="wrapper">
                                                        <p>Laptop</p>
                                                        <p>240 Item Available</p>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="itemes"><a class="dropdown-item" href="#">
                                                    <img src="../assets/book.webp" alt="">
                                                    <div class="wrapper">
                                                        <p>Book</p>
                                                        <p>240 Item Available</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <RouterLink to="DealsView" class="nav-item">Deals</RouterLink>
                        <RouterLink to="WhatsNewView" class="nav-item">What's New</RouterLink>
                        <RouterLink to="DeliveryView" class="nav-item">Delivery</RouterLink>
                        <li class="nav-item">
                            <form class="d-flex">
                                <div class="search_field">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <font-awesome-icon class="search_icon" :icon="['fas', 'search']" />
                                </div>
                            </form>
                        </li>
                        <ul class="user_op navigation">
                            <RouterLink to="AccountView" class="nav_right nav-item">
                                <font-awesome-icon :icon="['fas', 'user']" />
                                Account
                            </RouterLink>
                            <li class="nav_right nav-item" @click="openCart = true">
                                <font-awesome-icon :icon="['fas', 'cart-plus']" />
                                Cart
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

    <!--cart managment -->
    <div class="cart_content" :class="openCart == true ? 'open' : ''">
        <div class="close_cart">
            <font-awesome-icon @click="openCart = false" :icon="['fas', 'xmark']" />
        </div>
        <div class="cart">
            <p>Subtotal</p>
            <p class="sum">${{ Subtotal }}</p>
            <button>Go to cart</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const openCart = ref(false);
const Subtotal = ref(0);

onMounted(() => {

    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() };

    // Get the navbar
    let navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    let sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

})

</script>
<style lang="scss" scoped>
.padding_container {
    background-color: #fff;
    z-index: 100;
    &.sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }

    .navi {
        align-items: baseline;

        .navbar-collapse {
            justify-content: flex-end;
            background: #fff;
            border-radius: 30px;

            .navigation {
                display: flex;
                list-style: none;
                align-items: center;
                margin-bottom: 0;

                .user_op {
                    display: flex;
                    padding: 0;
                }

                .nav-item {
                    padding: 10px;
                    margin-right: 15px;
                    text-decoration: none;
                    color: #000;
                    cursor: pointer;

                    &:last-child {
                        margin-right: 0;
                    }

                    .dropdown {
                        button {
                            border: none !important;

                            &.btn.show,
                            &:active {
                                border: none !important;
                            }
                        }

                        .dropdown-menu {
                            padding: 20px;

                            @media (max-width: 1200px) {
                                padding: 0;
                                border: 0;
                            }


                            h5 {
                                position: relative;
                                font-size: 18px;
                                font-weight: bold;
                                padding: 15px 10px;
                                margin: 0;

                                &::after {
                                    content: "";
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 1px;
                                    background-color: #000;
                                }
                            }

                            .grid_container {
                                display: grid;
                                grid-template-columns: auto auto auto;
                                padding: 10px;

                                @media (max-width: 1200px) {
                                    display: block;
                                }

                                ul {
                                    list-style: none;
                                    padding: 0;

                                    &:first-of-type {
                                        margin-right: 20px;
                                    }

                                    .itemes {
                                        padding: 0px;
                                        margin: 0;

                                        a {
                                            padding: 10px 20px;
                                            display: flex;
                                            align-items: flex-end;

                                            .wrapper {
                                                display: inline-flex;
                                                flex-direction: column;
                                                margin-left: 10px;

                                                p {
                                                    margin: 0;

                                                    &:first-child {
                                                        font-weight: 600;
                                                        font-size: 16px;
                                                    }

                                                    &:last-child {
                                                        color: #666690;
                                                        font-size: 14px;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .search_field {
                        position: relative;

                        .form-control {
                            border-radius: 30px;
                            min-width: 200px;

                            @media (max-width: 768px) {
                                min-width: auto;
                            }

                            padding: 10px 20px;
                        }

                        .search_icon {
                            position: absolute;
                            padding: 15px;
                            min-width: 40px;
                            top: 0;
                            right: 0;
                        }
                    }
                }

                .nav_right {
                    display: flex;
                    align-items: center;

                    svg {
                        font-size: 20px;
                        padding: 10px;
                    }
                }
            }
        }
    }
}

.cart_content {
    transform: translateX(100%);
    width: 150px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    transition: 0.8s ease-in-out;
    z-index: 3;
}

@media (min-width: 1200px) {
    .cart_content {
        z-index: 101;
        &.open {
            transform: translateX(0%);
        }

        .close_cart {
            svg {
                padding: 10px;
                font-size: 20px;
            }
        }

        .cart {
            text-align: center;
            font-size: 13px;

            p {
                margin-bottom: 0;
            }

            .sum {
                color: #B12704;
                font-size: 16px;
                font-weight: 700;
            }

            button {
                background: #FFF;
                padding: 0px 20px;
                border-radius: 30px;
                border-color: #D5D9D9;
                border-style: solid;
                border-width: 1px;
                box-shadow: 0 2px 5px 0 rgba(213, 217, 217, .5);
                cursor: pointer;
            }
        }
    }
}
</style>