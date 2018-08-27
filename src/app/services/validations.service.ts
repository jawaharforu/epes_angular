import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  isEmpty(input: any) {
    if (input === undefined ||
      input === null ||
      (typeof input === 'object' && Object.keys(input).length === 0) ||
      (typeof input === 'string' && input.trim().length === 0)) {
      return true;
    } else {
      return false;
    }
  }

  isEmail(email: any) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  isMobile(mobile: any) {
    const mob = /[0-9]+/;/[^0-9]/g
    if (!mob.test(mobile)) {
      return 'Mobile field shoud have only number';
    } else if (mobile.length !== 10) {
      return 'Mobile field should contain only 10 numbers';
    } else {
      return true;
    }
  }

  isDigit(digit: any) {
    const dig = /[^0-9]/g;
    if (!dig.test(digit)) {
      return false;
    } else {
      return true;
    }
  }

  isPassword(digit: any) {
    // const dig = /[^0-9]/g;
    const regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
    if (!regpassword.test(digit)) {
      return true;
    } else {
      return false;
    }
  }

  isMinimum(mobile: any) {
    if (mobile.length >= 10) {
      return false;
    } else {
      return true;
    }
  }

  isMaximum(mobile: any) {
    if (mobile.length <= 13) {
      return false;
    } else {
      return true;
    }
  }

  isNumber(input: any) {
    if (typeof Number(input) === 'number') {
      return true;
    } else {
      return false;
    }
  }

  isPercentage(input: any) {
    if (typeof Number(input) === 'number') {
      if (input <= 100) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
