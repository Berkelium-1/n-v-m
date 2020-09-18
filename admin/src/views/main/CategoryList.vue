<template>
  <div class="category-list">
    <h1>分类列表</h1>
    <el-table :data="listData">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格数据
      listData: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$request.get('categories');
      console.log(res);
      this.listData = res.data;
    }
  }
};
</script>

<style lang="less" scoped>
</style>