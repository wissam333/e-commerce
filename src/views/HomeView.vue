<script setup>
</script>

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
        </div>
    </div>
</template>

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
        display: flex;
        justify-content: space-between;
        margin-top: 50px;

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
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                &:hover {
                    transform: scale3d(1.2, 1.2, 1);
                }
            }
        }
    }
}
.deals{
    padding-top: 80px;
}
</style>