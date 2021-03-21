<template>
<div>
<swiper ref="mySwiper"
    :options="swiperOptions"
>
    <swiper-slide v-for="(project,index) in projects" :key="index" class="swiper-slide-container">
        <ProjectContainer :project=project />
    </swiper-slide>
</swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ProjectContainer from './ProjectContainer'
import 'swiper/swiper.scss';


export default {
    components: {Swiper, SwiperSlide, ProjectContainer},
    props: {
        projects: Array,
        default: []
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: "auto",
                spaceBetween: 30,
                centeredSlides: true,
                grabCursor: true,
                loop: true,
                centeredSlidesBounds: true,
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods: {
        nextSlide() {
            this.swiper.slideNext()
        },
        previousSlide() {
            this.swiper.slidePrev()
        }
    }
}
</script>

<style>
.pagination-btn {
    display: flex;
}

.swiper-btn {
    border-radius:3px;
    margin: 20px;
    width: 50%;
}

.swiper-slide-container {
    width: 500px;
    height: 300px;
}

@media(max-width: 768px) {
    .swiper-slide-container {
        width: 100%;
        height: 400px;
    }

}
</style>