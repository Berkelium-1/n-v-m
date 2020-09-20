<template>
  <div class="category-add">
    <h1>新建分类</h1>
    <el-form label-width="auto">
      <el-form-item label="名称：">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
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
      }
    };
  },
  methods: {
    async save() {
      const res = await this.$request({
        url: 'categories',
        method: 'post',
        data: this.model
      });

      this.$message({
        // 消息提示
        type: 'success',
        message: res.data.msg
      });

      // console.log(res);
    }
  }
};
</script>

<style lang="less" scoped>
</style>