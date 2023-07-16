import { s } from '../util';

export const Check = (className) => {
  return s.svg(
    {
      xmlns: 'http://www.w3.org/2000/svg',
      class: className || 'tw-h-5 tw-w-5',
      viewBox: '0 0 448 512',
      fill: 'currentColor',
      'aria-hidden': 'true',
    },
    [
      s.path({
        d: 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z',
      }),
    ]
  );
};
