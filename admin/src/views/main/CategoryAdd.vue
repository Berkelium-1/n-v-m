<template>
  <div class="category-add">
    <h1>新建分类</h1>
    <el-form label-width="auto" @submit.native.prevent="save()">
      <el-form-item label="名称：">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
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
      if (this.model.name) {
        const res = await this.$request.post('categories', this.model);
        this.$router.push({ name: 'CategoryList' }); // 跳转到分类列表
        this.$message({
          // 提示
          type: 'success',
          message: '保存成功'
        });
      } else {
        this.$message({
          // 提示
          type: 'error',
          message: '请输入正确的名称'
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>