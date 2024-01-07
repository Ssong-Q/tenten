import { SetStateAction } from 'react';
import {
  incorrectEmail,
  voidEmail,
  voidPassword,
  incorrectPassword,
  doubleCheckPassword,
  voidTitle,
  voidDueDate,
  voidName,
  voidUrl,
  voidEtc,
} from '../constants/inputErrorMsg';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const isEmailValid = (email: string) => {
  return new RegExp(EMAIL_REGEX).test(email);
};

export const validateEmailInput = (email: string) => {
  let errMsg = '';
  if (email === '') {
    errMsg = voidEmail;
    return errMsg;
  } else if (!isEmailValid(email)) {
    errMsg = incorrectEmail;
    return errMsg;
  }
  return errMsg;
};

const isPasswordValid = (password: string) => {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter = password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
};

export const validatePasswordInput = (password: string) => {
  let errMsg = '';
  if (password === '') {
    errMsg = voidPassword;
    return errMsg;
  } else if (!isPasswordValid(password)) {
    errMsg = incorrectPassword;
    return errMsg;
  }
  return errMsg;
};

export const validatePasswordConfirmInput = (passwordCheck: string, passwordConfirm: string) => {
  let errMsg = '';
  if (passwordConfirm === '') {
    errMsg = voidPassword;
    return errMsg;
  } else if (!isPasswordValid(passwordConfirm)) {
    errMsg = incorrectPassword;
    return errMsg;
  } else if (passwordCheck !== passwordConfirm) {
    errMsg = doubleCheckPassword;
  }
  return errMsg;
};

export const validateEtc = (type: string, value: string) => {
  let errMsg = '';
  if (type === 'title' && value === '') {
    errMsg = voidTitle;
    return errMsg;
  } else if (type === 'name' && value === '') {
    errMsg = voidName;
    return errMsg;
  } else if (type === 'imgUrl' && value === '') {
    errMsg = voidUrl;
    return errMsg;
  } else if (type === 'etc' && value === '') {
    errMsg = voidEtc;
    return errMsg;
  }
  return errMsg;
};

export const validateSignInput = (
  type: string,
  value: string,
  setErrorMessage: (value: SetStateAction<string>) => void,
) => {
  const errorMsg = validateEtc(type, value);
  if (errorMsg) {
    setErrorMessage(errorMsg);
  }
};
