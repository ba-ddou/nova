import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class store {

    @observable
    fullname = '';
    @observable
    fullnameError = false;
    @action
    storeFullname(fullname) {
        this.fullname = fullname;
        if (fullname.length >= 5) this.fullnameError = false;
    }

    @observable
    email = ''
    @observable
    emailError = false;
    @observable
    emailValidate = false;
    emailValidationTimeout = false;
    @action
    storeEmail(email) {
        this.email = email;
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.length == 1 && !this.emailValidationTimeout) {
            setTimeout(() => {
                this.emailValidationTimeout = true;
                if (reg.test(this.email)) {
                    this.emailError = false;
                    this.emailValidate = true;
                } else {
                    this.emailError = "invalid email address";
                    this.emailValidate = false;
                }
            }, 10000);
        } else if (this.emailValidationTimeout) {
            if (reg.test(email)) {
                this.emailError = false;
                this.emailValidate = true;
            } else {
                this.emailError = "invalid email address";
                this.emailValidate = false;
            }
        }
    }


    @observable
    phone = ''
    @observable
    phoneError = ''
    @observable
    phoneValidate = false;
    phoneValidationTimeout = false;
    @action
    storePhone(phone) {
        this.phone = phone;

        if (phone.length == 1 && !this.phoneValidationTimeout) {
            setTimeout(() => {
                this.phoneValidationTimeout = true;
                if (this.validatePhone(this.phone)) {
                    this.phoneError = false;
                    this.phoneValidate = true;
                } else {
                    this.phoneError = "invalid phone number";
                    this.phoneValidate = false;
                }
            }, 5000);
        } else if (this.phoneValidationTimeout) {
            if (this.validatePhone(phone)) {
                this.phoneError = false;
                this.phoneValidate = true;
            } else {
                this.phoneError = "invalid phone number";
                this.phoneValidate = false;
            }
        }
    }

    validatePhone(phone) {
        var reg = /^\d{9}$/;
        if (phone.length >= 9) {
            if (reg.test(phone.substring(phone.length - 9, phone.length))) {
                if (phone.length == 9 && phone[0] != "0") return true
                else if (phone.length == 13 && phone.substring(0, 4) == "+212") return true
                else if (phone.length == 12 && phone.substring(0, 3) == "212") return true
                else if (phone.length == 10 && phone[0] == "0") return true
                else return false
            } else return false
        } else return false
    }

    @observable
    message = ''
    @observable
    messageError = false;
    @action
    storeMessage(message) {
        this.message = message;
        if (message.length >= 20) this.messageError = false;
    }

    @action
    validateForm() {
        this.emailValidationTimeout = true;
        this.storeEmail(this.email);

        this.phoneValidationTimeout = true;
        this.storePhone(this.phone);

        if (this.fullname.length == 0) this.fullnameError = "fullname is required"
        if (this.message.length == 0) this.messageError = "please write a valid message"
    }

    @computed get payload() {
        if (!this.fullnameError && !this.emailError && !this.phoneError && !this.messageError)
            return {
                fullname: this.fullname,
                email: this.email,
                phone: this.phone,
                message: this.message
            }
        else return false
    }

    @action
    reset() {
        this.fullname = '';
        this.fullnameError = false;
        this.email = ''
        this.emailError = false;
        this.emailValidate = false;
        this.emailValidationTimeout = false;
        this.phone = ''
        this.phoneError = ''
        this.phoneValidate = false;
        this.phoneValidationTimeout = false;
        this.message = '';
        this.messageError = false;
    }



    @observable
    loader = false;
    @observable
    requestStatus = false;
    @action
    destroyLoader() {
        this.loader = false;
        this.requestStatus = false;
    }

}

export default new store();
