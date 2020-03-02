import Vue from 'vue'
import Tip from './tipList.vue'
let tip, initialization;
Tip.newInstance = () => {
    //使用基础 Vue 构造器，创建一个包含tip组件的“子类”
    tip = Vue.extend(Tip)
    const messageInstance = new tip();
    const div = document.createElement('div');
    document.body.appendChild(div);
    //挂载到新创建的div
    messageInstance.$mount(div)
    return {
      prompt(props) {
        messageInstance.show(props);
      }
    }
}
initialization=function(){
  if(!tip){
    tip=Tip.newInstance()
  }
  return tip
}
export default initialization
