<template>
  <div>
    <div style="display:flex">
      <a href="/#/demo1">
      <div style="width:400px;overflow:hidden;display:inline-block">
        <img src="../assets/demo1.png" style="width:100%">
      </div>
      <div>案例一</div>
    </a>
    <a href="/#/demo2">
      <div style="width:400px;overflow:hidden;display:inline-block">
        <img src="../assets/demo2.png" style="width:100%">
      </div>
      <div>案例二</div>
    </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'home'
}
</script>
<style>
img:hover{
  transform: scale(1.5);
}
a{
  color:#E6A23C;
  text-decoration: none;
  text-align: center;
  margin:10px;
  padding:10px;
  border:3px solid #DCDFE6;
}
</style>