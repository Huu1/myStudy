<template>
  <div>
    打搅好 我是about页面 你们好啊
    <button v-permission="['admin']">管理员</button>
    <button v-permission="['admin', 'editor']">编辑者</button>
    
  </div>
</template>

<script>
export default {};
</script>

<style></style>
