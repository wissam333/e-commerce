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

    <TopCategories></TopCategories>
    <BestDeals></BestDeals>
    <ByBrand></ByBrand>
    <OffersPercent></OffersPercent>
</template>
<script setup>
//import components
import TopCategories from '../components/TopCategories.vue';
import BestDeals from '../components/BestDeals.vue';
import ByBrand from '../components/ByBrand.vue';
import OffersPercent from '../components/OffersPercent.vue';

</script>
<style lang="scss" scoped>
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
</style>