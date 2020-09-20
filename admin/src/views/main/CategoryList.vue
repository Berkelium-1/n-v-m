<template>
  <div class="category-add">
    <h1>分类列表</h1>
    <el-table :data="listData" width="100%">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [] // 列表数据
    };
  },
  created() {
    this.getListData();
  },
  methods: {
    async getListData() {
      const res = await this.$request({
        url: 'categories',
        method: 'get'
      });
      this.listData = res.data;
    }
  }
};
</script>

<style lang="less" scoped>
</style>