<script setup lang="ts">
const callTeacher = () => {
  location.href = "tel:16671737573"
}
</script>

<template>
  <div class="w-full h-full">
    <router-view></router-view>
    <div @click="callTeacher" class="fixed w-full  h-[5.6rem] bottom-0">
      <div class="bg w-full box-border px-[1.5rem] py-[0.8rem] h-full">
        <div class="btn scale-animate w-full h-full text-center flex item-center justify-center font-size-[1.6rem]">
          免费咨询电话
        </div>
      </div>
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
