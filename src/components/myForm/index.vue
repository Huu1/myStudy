<template>
  <div>
    <my-form :data="user" :rules="rules" ref="Form">
      <Form-item label="姓名" prop="username">
        <!-- v-modle语法糖 -->
        <my-input v-model="user.username" />
      </Form-item>
      <Form-item label="密码" prop="password">
        <my-input v-model="user.password" type="password" />
      </Form-item>
      <Form-item>
        <button @click="isLogin">提交</button>
      </Form-item>
    </my-form>
    {{user}}
  </div>
</template>
<script>
/**
 * 问题1  $event 什么玩意？
 * 问题2  Promise.all
 */

import FormItem from "./FormItem";
import myInput from "./myInput";
import myForm from "./myForm";
import create from "@/utils/create";
import Notice from "../Notice";
export default {
  components: {
    myInput,
    FormItem,
    myForm
  },
  data() {
    return {
      user: {
        username: "top",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "不能为空" }],
        password: [{ required: true, message: "不能为空" }]
      }
    };
  },
  methods: {
    handle(e) {
      this.user.username = e;
    },
    isLogin() {
      let notice;
      this.$refs.Form.validate(e => {
        if (e) {
          // alert("校验成功！");
          notice = create(Notice, {
            title: "提醒",
            message: "成功",
            duration: 1000
          });
        } else {
          // alert("校验失败！");
          notice = create(Notice, {
            title: "提醒",
            message: "失败",
            duration: 1000
          });
        }
        notice.show();
      });
    }
  }
};
</script>

<style>
</style>