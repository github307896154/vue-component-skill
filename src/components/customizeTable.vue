<template>
  <div>
    <Table v-bind="{...mergeProps}"></Table>
  </div>
</template>
<script>
import { Table } from 'iview';
export default {
  name: "customizeTable",
  props:{
    ...Table.props,
    test:{
      type:[String],
      default:"扩展属性"
    }
  },
  computed: {
    mergeProps:function(){
      return Object.assign({...this._props},this.defaultProps)
    }
  },
  data() {
    return {
      defaultProps:{
        border:true,//默认显示纵向边框
        stripe:true//默认显示间隔斑马纹
      }
    }
  },
  // render(h) {
  //   var  props=Object.assign({...this._props},this.defaultProps)
  //   return h(Table, {
  //     props:props
  //   });
  // }
};
</script>

<style scoped>
</style>
