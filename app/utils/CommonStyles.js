class CommonColors {
  static black = 'black';
  static grey400 = '#BDBDBD';
  static grey800 = '#424242';
  static grey900 = '#212121';
}

class CommonSize {
  static heightHeaderProfile = 208;
}

const CommonStyles = {
  bigCircleAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  mediumCircleAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  smallCircleAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  buttonSubmit: {
    paddingVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: CommonColors.grey400,
  }
}

export { CommonColors, CommonSize, CommonStyles}