function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree > 0) {
    let powNum = pow(num, degree - 1);
    return num * powNum;
  } else {
    let powNum = pow(num, -degree - 1);
    return 1 / (num * powNum);
  }
}
