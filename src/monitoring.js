// @flow
import {createPlugin} from 'fusion-core';

export default __NODE__ &&
  createPlugin({
    provides() {
      return (e, captureType) => {
        if (captureType === 'browser') {
          const {message, source, line, col, error} = e;
          console.log({message, source, line, col, error});
        } else if (captureType === 'server') {
          console.log('UNCAUGHT EXCEPTION', e);
        } else if (captureType === 'request') {
          console.log('REQUEST ERROR');
        }
      };
    },
  });
