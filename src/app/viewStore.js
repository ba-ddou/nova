import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class viewStore {

    @observable
    splashScreen = true;
}

export default new viewStore();
