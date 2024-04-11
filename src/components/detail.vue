<script setup lang="ts">
import { useRoute } from 'vue-router';
import teachers from '../assets/data/teachers.ts'
import book from '../assets/imgs/book.png'
import desc from '../assets/imgs/desc.png'
const route = useRoute();
const uId = route.query?.id
const teacher = teachers.find(x => x.id == uId)

</script>
<template>
    <div class="page bg-#f5f5f5 w-full h-full">
        <div class="header box-border flex item-center justify-between w-full h-[15.5rem] p-[1.5rem]">
            <div class="info text-white pt-[1.5rem]">
                <p class="font-size-[1.6rem] line-height-[1.6rem]"> {{ teacher.name }}</p>
                <p class="master font-size-[2rem] py-[3px]">{{ teacher.master }}</p>
                <div class="tags mt-[5px]">
                    <span
                        class="inline-block border-1px bg-#4d4d59 border-#eee border-solid border-rd-[10px] py-[1px] px-[8px] mr-[5px]">老师</span>
                    <span
                        class="inline-block border-1px bg-#4d4d59 border-#eee border-solid border-rd-[10px] py-[1px] px-[8px] mr-[5px]">从业{{
                    teacher.experience }}年</span>
                </div>

                <!-- <div class="goods flex item-center py-[3px]">
                    <span>擅长：</span>
                    <div class="">
                        <span v-for="(good, index) in teacher.goods">
                            {{ good }}
                            <span v-if="index !== teacher.goods.length - 1">、</span>
                        </span>
                    </div>
                </div> -->
            </div>
            <img class="w-[7.5rem] h-[7.5rem] border-rd-50" :src="teacher.avatar" alt="">
        </div>
        <div
            class="goods ml-[0.5rem] w-[35rem] box-border mt-[-2.5rem] px-[1.2rem] py-[1.5rem] bg-white border-rd-8 h-[8.5rem]">
            <div>
                <img class="w-[1.6rem] h-[1.6rem]" :src="book" alt="">
                <span class="font-size-[1.6rem] ml-[1.5rem]">擅长</span>
            </div>
            <div class="font-size-[1.4rem] mt-[1rem]">
                <span>擅长：</span>
                <span v-for="(good, index) in teacher.goods">
                    {{ good }}
                    <span v-if="index !== teacher.goods.length - 1">、</span>
                </span>
            </div>
        </div>
        <div class="goods ml-[0.5rem] w-[35rem] box-border mt-[1.5rem] px-[1.2rem] py-[1.5rem] bg-white border-rd-8 ">
            <div>
                <img class="w-[1.6rem] h-[1.6rem]" :src="desc" alt="">
                <span class="font-size-[1.6rem] ml-[1.5rem]">简介</span>
            </div>
            <div class="font-size-[1.4rem] mt-[1rem]">
                {{ teacher.desc }}
            </div>
        </div>
    </div>

</template>
<style scoped>
.header {
    background-image: linear-gradient(-45deg, #201f28 0%, #313241 100%);
}
</style>