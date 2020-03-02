<template>
  <div>
    <div v-for="item in tipList">
      <tip v-bind="item"></tip>
    </div>
  </div>
</template>

<script>
let i = 0;
const now = new Date().getTime();
function getUid() {
  return "tip" + now + "-" + i++;
}
import tip from "./tip.vue"
export default {
  name: "tipList",
  data() {
    return {
      tipList: []
    };
  },
  components:{
    tip
  },
  methods: {
    add(options) {
      let name = getUid;//tip的唯一标识
      let _options = Object.assign(
        {//默认属性
          name: name
        },
        options
      );
      this.tipList.push(_options)
    }
  }
};
</script>
