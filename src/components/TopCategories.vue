<template>
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
</template>
<style lang="scss" scoped>
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
            cursor: pointer;

            &:hover {
                img {
                    transform: scale3d(1.2, 1.2, 1);
                }
            }

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
                transition: all 0.3s ease-in-out;
            }
        }
    }
}
</style>