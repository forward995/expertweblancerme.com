import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../history';

export const userActions = {
    login,
    register
}

function login(username, password) {
    return dispatch => {
        dispatch(request({username}))
        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user))
                    history.push('/')
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };
    function request(user) {
        return {
            type: userConstants.LOGIN_REQUEST,
            user
        }
    }
    function success(user) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            user
        }
    }
    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE,
            error
        }
    }
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                user => {
                    dispatch(success(user))
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request(user) {
        return {
            type: userConstants.REGISTER_REQUEST,
            user
        }
    }

    function success(user) {
        return {
            type: userConstants.REGISTER_SUCCESS,
            user
        }
    }

    function failure(error) {
        return {
            type: userConstants.REGISTER_FAILURE,
            error
        }
    }
}