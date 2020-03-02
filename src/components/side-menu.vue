 <template>
  <div>
    <div v-for="item in menuList">
      <div class="hasChildren" v-if="item.children">{{item.name}}
        <Icon  type="ios-arrow-down" />
      </div>
      <side-menu v-if="item.children" :menuList="item.children"></side-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideMenu",
  props: {
    //菜单集合
    menuList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
.hasChildren {
  background: #999;
  color: #fff;
  height: 40px;
  line-height: 40px;
}
</style>
