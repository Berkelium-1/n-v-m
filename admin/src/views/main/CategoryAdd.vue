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
    save() {
      this.$request();
    }
  }
};
</script>

<style lang="less" scoped>
</style>