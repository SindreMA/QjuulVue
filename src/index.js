import h from './components/h.vue'
import h1 from './components/h1.vue'
import h2 from './components/h2.vue'
import h3 from './components/h3.vue'
import h4 from './components/h4.vue'
import h5 from './components/h5.vue'
import h6 from './components/h6.vue'
import spacer from './components/spacer.vue'
import main from './components/main.vue'
import p from './components/p.vue'
import div from './components/div.vue'
import header from './components/header.vue'
import section from './components/section.vue'
import cssp from './components/cssp.vue'
import p1 from './components/p1.vue'
import p2 from './components/p2.vue'
import p3 from './components/p3.vue'
import p4 from './components/p4.vue'
import p5 from './components/p5.vue'
import p6 from './components/p6.vue'
import a from './components/a.vue'
import ins from './components/ins.vue'
import li from './components/li.vue'
import ul from './components/ul.vue'


export default {
    install (Vue, options) {
        Vue.component('q.h', h);
        Vue.component('q.h1', h1);
        Vue.component('q.h2', h2);
        Vue.component('q.h3', h3);
        Vue.component('q.h4', h4);
        Vue.component('q.h5', h5);
        Vue.component('q.h6', h6);
        Vue.component('q.spacer', spacer);
        Vue.component('q.main', main);
        Vue.component('q.p', p);
        Vue.component('q.div', div);
        Vue.component('q.header', header);
        Vue.component('q.section', section);
        Vue.component('q.cssp', cssp);
        Vue.component('q.p1', p1);
        Vue.component('q.p2', p2);
        Vue.component('q.p3', p3);
        Vue.component('q.p4', p4);
        Vue.component('q.p5', p5);
        Vue.component('q.p6', p6);
        Vue.component('q.a', a);
        Vue.component('q.ins', ins);
        Vue.component('q.li', li);
        Vue.component('q.ul', ul);
    }
}
