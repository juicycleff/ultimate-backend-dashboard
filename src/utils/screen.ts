export const screen = {
  lg: 1600,
  md: 1024,
  sm: 768,
  xs: 500,
  xxs: 375,

  get xxsMax() {
    return this.xxs - 1;
  },
  get xsMin() {
    return this.xs;
  },
  get xsMax() {
    return this.sm - 1;
  },
  get smMin() {
    return this.sm;
  },
  get smMax() {
    return this.md - 1;
  },
  get mdMin() {
    return this.md;
  },
  get mdMax() {
    return this.lg - 1;
  },
  get lgMin() {
    return this.lg;
  }
};
