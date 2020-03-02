<template>
  <div class="hello">
    <customizeTable :columns="columns" :data="data"></customizeTable>
    <model>
      自定义内容
      <div slot="fotter">
        <Button>确认</Button>
        <Button>取消</Button>
      </div>
    </model>
    <functionnal value="函数组件" style="width:100px" @click="showTip()">
      <div>slot内容</div>
    </functionnal>
    <functionnalScript domType="customizeTable" style="width:100%"></functionnalScript>
    <inlineChildren inline-template>
      <div>
        <h3>
          {{tip}}
        </h3>
      </div>
    </inlineChildren>

    <sideMenu :menuList="menuList"></sideMenu>
    <vOnce v-once></vOnce>
  </div>
</template>

<script>
import customizeTable from "../components/customizeTable.vue";
import model from "../components/model.vue";
import functionnal from "../components/functionnal.vue";
import functionnalScript from "../components/functionnal.js";
import inlineChildren from "../components/inlineChildren.vue";
import sideMenu from "../components/side-menu.vue";
import vOnce from "../components/vOnce.vue";
export default {
  name: "pageA",
  components: {
    customizeTable,
    model,
    functionnal,
    functionnalScript: functionnalScript,
    inlineChildren,
    sideMenu,
    vOnce,
  },
  data() {
    return {
      menuList: [
        {
          name: "side1",
          children: [
            {
              name:'side1-1',
            },
            {
              name:'side1-2'
            }
          ]
        },{
          name: "side2",
          children: [
            {
              name:'side2-1',   
            },
            {
              name:'side2-2',
               children:[
                {
                  name:'side2-2-1'
                }
              ]
            }
          ]
        }
      ],
      columns: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      tip: "我是父组件的数据"
    };
  },
  methods: {
    showTip() {
      alert(1);
    }
  },
  mounted() {
    console.log(2);
    
   this.$tip({
     title:"提示",
     content:"你有一条最新消息"
   });

   setTimeout(()=>{
     this.$tip({
     title:"提示",
     content:"你有一条最新消息2"
   },1000);

   })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
