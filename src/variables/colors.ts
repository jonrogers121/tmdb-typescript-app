enum PrimaryColorRange {
  CHARCOAL01 = '#2D2D2D',
  RED01 = '#EB0042',
  BLUE01 = '#FFD1C8',
  WHITE = '#FFF'
}

enum SecondaryColorRange {
  CHARCOAL02 = '#E0E0E0',
  CHARCOAL03 = '#F4F4F4'
}

enum UIStates {
  ERROR = '#EE0004',
  SUCCESS = '#21831C',
  WARNING = '#FF9901'
}

export const primaryColors = {
  c01: PrimaryColorRange.CHARCOAL01,
  b01: PrimaryColorRange.BLUE01,
  R01: PrimaryColorRange.RED01,
  w01: PrimaryColorRange.WHITE
};

export const secondaryColors = {
  c02: SecondaryColorRange.CHARCOAL02,
  c03: SecondaryColorRange.CHARCOAL03
};

export const uiStateColors = {
  error: UIStates.ERROR,
  success: UIStates.SUCCESS,
  warning: UIStates.WARNING
};
