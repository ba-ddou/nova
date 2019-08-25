import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class store {

    @observable
    fullname = '';

    @observable
    email = ''

    @observable
    phone = ''

    @observable
    message = ''
}

export default new store();
