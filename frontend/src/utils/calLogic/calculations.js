import { isOperator } from "./isOperator.js";
import { precedence } from "./precedence.js";
import { solve } from "./solve.js";

export function calculation(nums, i) {
  let numStack = [];
  let opStack = [];

  const n = nums.length;
  while (i < n) {
    if (isOperator(nums[i])) {
      if (nums[i] === "(") {
        const res = calculation(nums, i + 1);
        if (typeof res === "string") return res;
        const [ans, newI] = res;
        numStack.push(ans);
        i = newI;
        continue;
      } else if (nums[i] === ")") {
        while (opStack.length) {
          let numRight = Number(numStack.pop());
          let numLeft = Number(numStack.pop());
          let op = opStack.pop();
          let ans = solve(numLeft, numRight, op);
          if (typeof ans === "string") return ans;
          numStack.push(ans);
        }
        return [numStack[0], i + 1];
      } else {
        while (
          precedence[nums[i]] <= precedence[opStack[opStack.length - 1]] &&
          opStack.length
        ) {
          let numRight = Number(numStack.pop());
          let numLeft = Number(numStack.pop());
          let op = opStack.pop();
          let ans = solve(numLeft, numRight, op);
          if (typeof ans === "string") return ans;
          numStack.push(ans);
        }
        opStack.push(nums[i]);
      }
    } else numStack.push(nums[i]);
    i++;
  }
  while (opStack.length) {
    let numRight = Number(numStack.pop());
    let numLeft = Number(numStack.pop());
    let op = opStack.pop();
    let ans = solve(numLeft, numRight, op);
    if (typeof ans === "string") return ans;
    numStack.push(ans);
  }

  return numStack[0];
}
