import TipList from "./tipList.vue";
import Vue from 'vue';
console.log(TipList);

TipList.newInstance = props => {
    const _props = props || {};
    const div = document.createElement('div');
    document.body.appendChild(div);
    
    const tip = new Vue({
        el: div,
        render (h) {
            return h(TipList, {
                props: _props
            });
        }
    }).$children[0];
    console.log(tip);
    return {
        show (options) {
            tip.show(options);
        },
        component: tip
    }
};
export default TipList;