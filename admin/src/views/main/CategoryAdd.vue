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
      const res = await this.$request.post('categories', this.model);
      this.$router.push({ name: 'CategoryList' }); // 跳转到分类列表
      this.$message({
        // 提示
        type: 'success',
        message: '保存成功'
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>