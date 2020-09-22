<template>
  <div class="category-add">
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <!-- <el-form label-width="auto" @submit.native.prevent="save()"> -->
    <el-form label-width="auto">
      <el-form-item
        label="名称："
        :rules="[
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值',error:'11'}
        ]"
        show-message
        required
      >
        <el-input v-model="model.name" clearable></el-input>
        <div class="sub-title">不能有空格且不为空</div>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" native-type="submit">保存</el-button> -->
        <el-button type="primary" @click="save()">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        name: ''
      },
      edit_id: ''
    };
  },
  props: {
    id: {}
  },
  created() {
    this.id && this.getModel(); // 有id就执行函数
  },
  methods: {
    // 保存
    async save() {
      // 不能有空格且不为空
      if (/\s/.test(this.model.name) || this.model.name === '') {
        const msg = this.model.name ? '格式有误' : '请输入内容';
        // 消息提示
        this.$message({ type: 'error', message: msg });
        return false;
      }

      // 修改 : 新增
      const method = this.id ? 'put' : 'post';
      const url = this.id ? `categories/${this.id}` : 'categories';
      const res = await this.$request({ url, method, data: this.model });
      // console.log(res);

      // 消息提示
      this.$message({ type: 'success', message: res.data.msg });
      // console.log(res);

      this.id && this.$router.push({ name: 'CategoryList' }); // 在编辑分类保存则跳转

      this.model.name = '';
    },
    // 获取编辑详情
    async getModel() {
      const res = await this.$request({ url: `categories/${this.id}` });
      // console.log(res);
      this.model.name = res.data.name;
    }
  }
};
</script>

<style lang="less" scoped>
.sub-title {
  color: #909399;
}
</style>