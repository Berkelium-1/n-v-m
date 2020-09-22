<template>
  <div class="category-add">
    <h1>分类列表</h1>
    <el-table :data="listData" width="100%">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template v-slot="item">
          <el-button type="text" size="small" @click="edit(item.row._id)">编辑</el-button>
          <el-button type="text" size="small" @click="del(item.row)">删除</el-button>
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
    // 获取列表数据
    async getListData() {
      const res = await this.$request({
        url: 'categories'
      });
      this.listData = res.data;
    },
    // 编辑
    edit(id) {
      this.$router.push(`CategoryAdd/edit/${id}`);
    },
    // 删除
    del(row) {
      const confirm_msg = `删除 "${row.name}" 后不可恢复, 是否继续?`; //弹框信息
      this.$confirm(confirm_msg, {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const res = await this.$request({
            url: 'categories',
            method: 'delete',
            params: { row }
          });
          // 消息提示
          this.$message({ type: 'success', message: '删除成功!' });
        })
        .catch(() => {
          // 消息提示
          this.$message({ type: 'info', message: '已取消' });
        });
    }
  }
};
</script>
