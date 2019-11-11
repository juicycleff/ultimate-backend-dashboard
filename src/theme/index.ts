import { base } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const themeGrommet = deepMerge(base, {
  button: {
    border: {
      radius: '5px'
    },
    padding: {
      vertical: '10px'
    }
  },
  formField: {
    border: false,
    height: 30,
    label: {
      color: 'dark-3',
      margin: { vertical: '0', bottom: 'small', horizontal: '0' },
      size: 'xsmall',
    },
    margin: 0,
  },
  global: {
    elevation: {
      light: {
        // tslint:disable-next-line:max-line-length
        medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      },
    },
    family: 'Roboto',
    height: '40px',
    input: {
      height: 70
    },
    size: '14px'
  },
});
