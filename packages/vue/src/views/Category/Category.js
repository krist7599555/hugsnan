import Vue from 'vue';
import ls from "local-storage";
import * as _ from 'lodash'
const vis = num => `v${num}` 
const que = num => `q${num}` 

class Category {
  
  constructure() {}
  get nrow() {return Number(ls.get('nrow')) || 5}
  get ncol() {return Number(ls.get('ncol')) || 5}
  set nrow(val) {ls.set('nrow', val)}
  set ncol(val) {ls.set('ncol', val)}

  get n() {return this.nrow * this.ncol;}

  visible(num, v) {
    if (v === null || v === undefined) {
      return ls.get(vis(num)) || false
    } else {
      ls.set(vis(num), v)
    }
  }
  question(num, v) {
    if (v === null || v === undefined) {
      return ls.get(que(num)) || ""
    } else {
      ls.set(que(num), v)
    }
  }
  questions() {
    console.log("TCL: Category -> questions -> this.n", this, this.n)
    const list = _.range(1, this.n + 1).map(num => (
      {[num]: this.question(num)}
    ))
    return _.assign({}, ...list)
  }
  

}

export default Vue.observable(new Category());