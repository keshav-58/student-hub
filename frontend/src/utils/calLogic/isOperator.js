export function isOperator(val) {
  if (
    val === "+" ||
    val === "-" ||
    val === "*" ||
    val === "/" ||
    val === "(" ||
    val === ")"
  ) {
    return true;
  }
  return false;
}
