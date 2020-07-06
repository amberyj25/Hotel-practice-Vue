<template>
    <li>
      <img :src="item.imageUrl">
      <h2>{{item.name}}</h2>
      <p>平日：{{item.normalDayPrice}}元 / 假日：{{item.holidayPrice}}元</p>
    </li>
</template>

<script>
export default{
  props:["item"],
}
</script>
<style scoped>
li{
  list-style: none;
  margin-top: 25px;
  background-color: #fffffc;
  padding: 15px;
}
li img{
  width: 350px;
  height: 250px;
}
</style>