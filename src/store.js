import { observable, action, computed, toJS } from 'mobx'



class store {

@observable value = 0;

}

export default new store();