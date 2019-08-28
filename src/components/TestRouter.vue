<template>
  <div>
    <h1>test tree</h1>
    <div class="testDiv">
      <span>666</span>
      <span>7777</span>
    </div>
    <section class="treeBox">
      <div class="block">
          <p>使用 scoped slot</p>
          <el-tree
            :data="data5"
            node-key="id"
            default-expand-all
            :expand-on-click-node="true">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span v-if="data.children">
                <img src="./folder.png" alt="">
              </span>
              <span v-if="!data.children">
                <i class="el-icon-document"></i>
              </span>
              <span>{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
    </section>
  </div>
</template>
<script>
export default {
 data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
    }
}
</script>
<style scoped>
.treeBox {
  width: 300px;
}
  .custom-tree-node {
    /* flex: 1;
    display: flex; */
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    padding-right: 8px;
  }
  .custom-tree-node img {
    width: 20px;
    padding-right: 6px;
  }
  .custom-tree-node [class^=eleicon-] {
    width: 14px;
    padding-right: 6px;
  }
  .el-tree-node__content {
    height: 56px;
  }
</style>
