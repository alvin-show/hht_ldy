<script setup lang="ts">
import img1 from '../assets/imgs/img1.jpg'
import img2 from '../assets/imgs/img2.jpg'
import ad1 from '../assets/imgs/ad1.png'
import ad2 from '../assets/imgs/ad2.jpg'
import teachers from '../assets/data/teachers.ts'
import { Teacher } from '../types/index.ts'
import { useRouter } from 'vue-router'
const router = useRouter();

const callTeacher = () => {
    location.href = "tel:16671737573"
}

const toDetail = (teacher: Teacher) => {
    router.push({
        path: '/detail',
        query: {
            id: teacher.id
        }
    })
}
</script>

<template>
    <div class="page">
        <img class="w-full h-[227px]" :src="img1" alt="">
        <img class="w-full h-[18.3rem]" :src="img2" alt="">
        <div class="tips text-left font-size-[1.6rem] p-l-[2rem] p-r-[3rem] line-height-[2.4rem]">
            <p class="text-[#e25041]">温馨提示：</p>
            <p>1,本站针对家长免费使用，无需交费</p>
            <p>2,请家长按照自身需求预约合适老师试课，以免影响试课体验</p>
            <p>平台已对信息已加密,可放心填写进入查询,请注意输入正确手机号，以免老师联系不上延误试课</p>
            <p>4,本站家教已通过筛选并安全认证，家长可放心预约</p>
        </div>
        <div class="my-[0.5rem]">
            <div class="text-image-box text-image-box-top-bottom-icon">
                <div class="icon-line w-full h-[0.5rem] transform-scale-y-25"
                    style="background: linear-gradient(to right, rgb(255, 255, 255), rgb(51, 136, 255), rgb(255, 255, 255));">
                </div>
                <div class="text-container text-center my-[0.6rem]">
                    <div class="gt-jmy-h5-gradient-text sjh-text">
                        <div>
                            <p class="font-size-[2rem] line-height-[2.4rem]">
                                <b>附近优秀家教老师推荐</b>
                                <b>&nbsp;</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="icon-line w-full h-[0.5rem] transform-scale-y-25"
                    style="background: linear-gradient(to right, rgb(255, 255, 255), rgb(51, 136, 255), rgb(255, 255, 255));">
                </div>
            </div>
        </div>
        <div class="teachers">
            <div class="item flex item-center py-[1.5rem] px-[1.1rem] font-size-[1.3rem]
                border-b-1
                border-solid
                border-#eee
                text-#888
            " v-for="teacher in teachers" @click="toDetail(teacher)">
                <img class="w-[7.8rem] h-[7.8rem] border-rd-[8px]" :src="teacher.avatar" alt="">
                <div class="flex-1 ml-[5px]">
                    <p class="font-size-[1.6rem] line-height-[1.6rem]"> {{ teacher.name }}</p>
                    <div class="tags mt-[5px]">
                        <span
                            class="inline-block border-1px  border-#eee border-solid border-rd-[10px] py-[1px] px-[8px] mr-[5px]">老师</span>
                        <span
                            class="inline-block border-1px border-#eee border-solid border-rd-[10px] py-[1px] px-[8px] mr-[5px]">从业{{
            teacher.experience }}年</span>
                    </div>
                    <p class="master py-[3px]">{{ teacher.master }}</p>
                    <div class="goods flex item-center py-[3px]">
                        <span>擅长：</span>
                        <div class="">
                            <span v-for="(good, index) in teacher.goods">
                                {{ good }}
                                <span v-if="index !== teacher.goods.length - 1">、</span>
                            </span>
                        </div>
                    </div>
                    <div class="desc ellipsis-2 ">
                        <div>{{ teacher.desc }}</div>
                    </div>
                </div>
                <div @click.stop="callTeacher"
                    class="call-teacher right-[15px] absolute px-[8px] border-rd-2 py-[3px] bg-#e6322e">
                    <span class="text-white">电话咨询</span>
                </div>
            </div>
        </div>

        <div class="ads pb-[5.6rem]">
            <img class="w-full" :src="ad1" alt="">
            <img class="w-full" :src="ad2" alt="">
        </div>

    </div>
</template>

<style scoped>
.bg {
    background-image: linear-gradient(90deg, #ff9233, #fe5136 31%, #fd2245 64%, #fd227a);
}

.btn {
    border-radius: 24px;
    background-color: rgb(230, 50, 46);
    color: rgb(250, 24, 24);
    font-weight: bold;
    line-height: 4.4rem;
    background-image: linear-gradient(90deg, rgb(255, 243, 218) 4%, rgb(255, 231, 162) 96%);
}
</style>
