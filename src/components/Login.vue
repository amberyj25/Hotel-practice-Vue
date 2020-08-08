<template>
<div class="form_outer">
  <form v-if="changeComponent == `form`">
    <div class="form_inner">
      <div> 
        <label for="email">登入信箱 ： </label>
        <input type="text" id="email" placeholder="請輸入登入信箱" v-model="user.username">
      </div>
      <div> 
        <label for="password">密碼 : </label>
        <input type="password" id="password" placeholder="請輸入密碼" v-model="user.password">
      </div>
      <div>
        <button type="submit" @click.prevent="signin">登入</button>
        <p>{{notSuccess}}</p>
      </div>
    </div>
  </form>
  <div class="result inner" v-else-if="changeComponent == `result`">
    <h2>恭喜您成功登入</h2>
    <button @click="toStart" class="btnResult">回首頁</button>
    <p class="pResult">or</p>
    <button @click="toSignout" class="btnResult">登出</button>
  </div>
  <div class="result loginout" v-else>
    <h2>已成功登出</h2>
    <button @click="toStart" class="btnResult">回首頁</button>
  </div>
</div>
</template>

<script>
export default{
  name:"Login",
  data(){
    return{
      user:{
        username:"",
        password:"",
      },
      changeComponent: "form",
      answer:"",
      notSuccess:"",
    }
  },
  methods:{
    signin(){
      const vm = this;
      vm.axios.post("https://vue-course-api.hexschool.io/signin",vm.user).then((result)=>{
        console.log(result.data.success);
        if(result.data.success == true){
          vm.changeComponent = "result";
          vm.answer = "恭喜您成功登入";
        } else if(result.data.success == false) {
          vm.notSuccess = "沒有登入成功";
        }
      })
    },
    toSignout(){
      const vm = this;
      vm.axios.post("https://vue-course-api.hexschool.io/logout").then((result)=>{
        this.changeComponent="";
      })
    },
    toStart(){
      const vm = this;
      this.$router.push("/");
    }
  }
}
</script>
<style scoped>
.form_outer{
  width:100vw;
  height:100vh;
  background-color:#2b2d42;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  margin: 0;
}
form,.result{
  width: 350px;
  background: #a5a58d;
  border-radius: 25px;
  padding: 25px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 8px black;
}
.result.inner,.result.loginout{
  flex-direction:column;
  align-items: center;
}
div{
  margin: 15px;
}
label{
  display: block;
  margin: 5px 0;
}
input{
  width: 250px;
  height: 25px;
  border:none;
  border-radius: 10px;
  outline: none;
  padding: 5px 15px;
}
button{
  display: block;
  width:100px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  margin-top: 25px; 
}
p{
  text-align: center;
  color: yellow;
}
h2{
  width:100%;
  text-align: center;
}
button.btnResult{
  width: 150px;
  height: 35px;
  margin: 0;
}
p.pResult{
  margin:10px;
}
</style>