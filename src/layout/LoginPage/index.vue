<script setup>
import { onMounted, ref, h, reactive } from "vue";
import { themeChange } from "theme-change";
import { LoginToken } from "../../stores/loginToken";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
const Login = LoginToken();
const imgUrl = ref("/api/users/codeImg");
const userDate = reactive({
  name: "",
  pwd: "",
  verification: "",
});
onMounted(() => {
  themeChange(true);
});
const themsList = ref([
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
]);
// 验证码刷新更改后缀时间
const resetImg = () => {
  if (imgUrl.value.indexOf("?")) {
    imgUrl.value = imgUrl.value + "?" + Math.random();
    imgUrl.value =
      imgUrl.value.substring(0, imgUrl.value.indexOf("?")) +
      "?" +
      Math.random();
  } else {
    imgUrl.value = imgUrl.value + "?" + Math.random();
  }
};
//点击登录按钮
function toLogin() {
  if (userDate.verification) {
    const shedDate = JSON.parse(JSON.stringify(userDate));
    Login.login(shedDate)
      .then((res) => {
        if (res.retCode == 200) {
          router.push("/test");
        }
        // console.log(res);
      })
      .catch((err) => {
        ElMessage({
          dangerouslyUseHTMLString: true,
          message: `<strong style='color:hsla(var(--bc) / var(--tw-text-opacity, 1)'>${err}</strong>`,
          duration: 2000,
          showClose: true,
        });
        resetImg();
        userDate.verification = "";
      });
  } else {
    ElMessage({
      dangerouslyUseHTMLString: true,
      message:
        "<strong style='color:hsla(var(--bc) / var(--tw-text-opacity, 1)'>请输入验证码!</strong>",
      duration: 2000,
      showClose: true,
    });
  }
}
</script>

<template>
  <div class="dropdown dropdown-end fixed right-2 z-10">
    <label tabindex="0" class="btn m-1">主题</label>
    <div
      tabindex="0"
      id="style-4"
      class="dropdown-content p-2 shadow bg-base-100 rounded-box w-36 h-96 overflow-auto"
    >
      <div v-for="item in themsList" :key="item" class="p-2">
        <button :data-set-theme="item">{{ item }}</button>
      </div>
    </div>
  </div>

  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          This is a style rich, full - featured web site! Here you can learn a
          lot of interesting knowledge, understanding web design norms and
          principles. Let's get started!
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <!-- 用户名 -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="UserName"
              class="input input-bordered"
              v-model="userDate.name"
            />
          </div>
          <!-- 密码 -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
              v-model="userDate.pwd"
            />
          </div>
          <!-- 验证码 -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">verification</span>
            </label>
            <div class="flex">
              <input
                type="text"
                placeholder="verification code"
                class="input input-bordered mr-2"
                v-model="userDate.verification"
              />
              <img class="rounded-3xl" :src="imgUrl" @click="resetImg()" />
            </div>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" @click="toLogin()">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#style-4::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
  border-radius: 6px;
}

#style-4::-webkit-scrollbar {
  width: 6px;
  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
  border-radius: 6px;
}

#style-4::-webkit-scrollbar-thumb {
  background-color: hsla(var(--bc) / var(--tw-text-opacity, 1));
  border-radius: 6px;
}
</style>
