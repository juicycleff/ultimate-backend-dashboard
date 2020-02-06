// @flow
const CryptoJS = require('crypto-js');

const secKey =
  'ygque2t34r7i6wtrfgc47wtirt8347wytbv78yt8bg7e45ybfs8iey47t78yfis';

export const SkeletonsCrypt = (value: string) => {
  // const logger = new Logger(this.constraint.name);
  try {
    const bytes = CryptoJS.AES.decrypt(value, secKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    // logger.error(e);
    console.log(e);
  }
};

export const SkeletonsEncrypt = (value: string) => {
  try {
    return CryptoJS.AES.encrypt(value, secKey).toString();
  } catch (e) {
    // logger.error(e);
    console.log(e);
  }
};
