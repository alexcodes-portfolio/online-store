import UserAPI from '../../API/UserAPI';

const Auth = {
    isAuthenticated: localStorage.getItem('userId')? true : false,
    authenticate(params, signal) {
        return UserAPI.authenticate(params, signal).then(
            user => {
                this.isAuthenticated = true;
                localStorage.setItem('userId', user.id);
                return user;
            },
            err => err
        );       
        
    },
    signOut() {
        localStorage.removeItem('userId');
        localStorage.setItem('cart', JSON.stringify([]));   
        this.isAuthenticated = false;
    }
};

export default Auth;