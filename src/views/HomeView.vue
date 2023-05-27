<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="background_img">
        <div class="full container">
            <div class="left_content">
                <h1>Shopping And
                    Department Store.
                </h1>
                <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                <button>Learn more</button>
            </div>

            <div class="right_content container">
                <div class="stage">
                    <img src="../assets/stage.webp" alt="">
                </div>
                <div class="img_wrap">
                    <div class="other">
                        <img src="../assets/other.webp" alt="">
                    </div>
                    <div class="tour">
                        <img src="../assets/tour.webp" alt="">
                    </div>
                    <div class="electronic">
                        <img src="../assets/electronic.webp" alt="">
                    </div>
                    <div class="snaks">
                        <img src="../assets/snaks.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="category">
        <div class="container">
            <h3 class="head3">Shop Our Top Categories</h3>
            <div class="images">
                <div class="img_wrap">
                    <span>
                        <p>Furniture</p>
                    </span>
                    <img src="../assets/catgory/furniture.png" alt="">
                </div>
                <div class="img_wrap">
                    <span>
                        <p>Hand Bag</p>
                    </span>
                    <img src="../assets/catgory/handBag.png" alt="">
                </div>
                <div class="img_wrap">
                    <span>
                        <p>Books</p>
                    </span>
                    <img src="../assets/catgory/book.png" alt="">
                </div>
                <div class="img_wrap">
                    <span>
                        <p>Tech</p>
                    </span>
                    <img src="../assets/catgory/tech.png" alt="">
                </div>
                <div class="img_wrap">
                    <span>
                        <p>Sneakers</p>
                    </span>
                    <img src="../assets/catgory/sneakers.png" alt="">
                </div>
                <div class="img_wrap">
                    <span>
                        <p>Travel</p>
                    </span>
                    <img src="../assets/catgory/travel.png" alt="">
                </div>

            </div>
        </div>
    </div>

    <div class="deals">
        <div class="container">
            <h3 class="head3">Todays Best Deals For You!</h3>

            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide class="item" v-for="item in listItems" :key="item.id">
                    <div class="heart" @click="item.like = !item.like">
                        <i v-if="!item.like" class="bi bi-heart"></i>
                        <i v-if="item.like" class="bi bi-heart-fill"></i>
                    </div>
                    <div class="carousel__item deals_items">
                        <div>
                            <div class="item_img">
                                <img :src="item.image" alt="">
                            </div>
                            <div class="item_text">
                                <div class="item_description">
                                    <h5 class="title"> {{ item.title }} </h5>
                                    <p class="description"> {{ item.description }}</p>
                                    <div class="starts">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        (120)
                                    </div>
                                    <button @click="item.inCart = true; item.qty = 1" class="addToCart">Add to cart</button>
                                </div>
                                <div class="item_price">
                                    ${{ item.price }}
                                </div>
                            </div>
                        </div>

                    </div>
                </Slide>
            </Carousel>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
//store
import { getDataProduct } from "../stores/counter";
import { storeToRefs } from "pinia";

const getItems = getDataProduct();
const { listItems } = storeToRefs(getItems);
//end store

// slider
defineComponent({
    name: 'BreakPoints',
    components: {
        Carousel,
        Slide,
    },
})

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
})

const breakpoints = ref({
    // 700px and up
    700: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
})

//end slider

</script>
<style lang="scss" scoped>
.head3 {
    font-weight: 700;
}

.background_img {
    position: relative;
    background-image: url("../assets/background.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    padding-top: 150px;
    padding-bottom: 150px;

    @media (max-width: 768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .full {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .left_content {
            z-index: 2;

            h1 {
                color: #013d29;
                font-weight: bold;
                font-size: 60px;
                margin-bottom: 40px;

                @media (max-width: 768px) {
                    font-size: 30px;
                }
            }

            p {
                font-size: 20px;
            }

            button {
                font-size: 18px;
                font-weight: 500;
                padding: 15px 30px;
                border-radius: 30px;
                border: none;
                background-color: #013d29;
                color: #fff;
                margin-top: 40px;

                @media (max-width: 768px) {
                    margin-top: 0;
                }
            }
        }

        .right_content {
            z-index: 1;

            @media (max-width: 991px) {
                display: none;
            }

            .stage {

                img {
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            }

            .img_wrap {

                .other {
                    position: absolute;
                    top: 80px;
                    right: 120px;
                }

                .snaks {
                    position: absolute;
                    top: 245px;
                    right: 375px;
                }

                .tour {
                    position: absolute;
                    top: 275px;
                    right: 590px;
                }

                .electronic {
                    position: absolute;
                    top: 310px;
                    right: 175px;
                }
            }
        }
    }
}

.category {
    padding-top: 80px;
    margin-bottom: 100px;

    .images {
        display: grid;
        grid-column-gap: 27px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        margin-top: 50px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 27px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 27px;
        }

        .img_wrap {
            position: relative;
            overflow: hidden;
            border-radius: 10px;

            span {
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 5;

                p {
                    text-align: center;
                    margin: 0;
                    padding: 20px;
                    color: #fff;
                    font-weight: 600;
                    font-size: 23px;

                }
            }

            img {
                width: 100%;
                height: 100%;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                &:hover {
                    transform: scale3d(1.2, 1.2, 1);
                }
            }
        }
    }
}

.deals {
    padding-top: 80px;

    .item {
        .heart {
            position: absolute;
            top: 25px;
            right: 25px;
            font-size: 20px;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            background: #f5f6f6;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .bi-heart-fill {
                color: red;
            }

            .bi-heart {
                color: #4f4f4f;
            }
        }

        .deals_items {
            display: flex;
            list-style: none;
            margin-top: 50px;


            .item_img {
                width: 250px;
                height: 250px;
                margin: auto;

                img {
                    width: 100%;
                    height: 100%;
                }

            }

            .item_text {
                display: flex;

                .item_description {

                    .title,
                    .description {
                        text-overflow: ellipsis;
                        /* will make [...] at the end */
                        white-space: nowrap;
                        /* paragraph to one line */
                        overflow: hidden;
                        /* older browsers */
                    }

                    .title {
                        width: 150px;
                    }

                    .description {
                        width: 200px;
                        font-size: 13px;
                    }

                    .starts {
                        font-size: 14px;
                        text-align: left;
                        color: rgb(34, 181, 34);
                    }

                    .addToCart {
                        display: block;
                        font-weight: 600;
                        background-color: transparent;
                        border: 1px solid #000;
                        border-radius: 30px;
                        padding: 8px 16px;
                        margin-top: 20px;
                        transition: all 0.3s ease-in-out;

                        &:hover {
                            background-color: #013d29;
                            color: #fff;
                        }
                    }
                }

                .item_price {
                    font-weight: 700;
                }
            }

        }
    }

}
</style>