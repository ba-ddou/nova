import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class store {

    @observable
    loader = false;
}

export default new store();
