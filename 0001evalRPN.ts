function evalRPN(tokens: string[]): number {
    const stack = <number[]>[]

    for (let tok of tokens) {
        let n = parseInt(tok);
        if (n) {
            stack.push(n);
        } else {
            const b = stack.pop() as number;
            const a = stack.pop() as number;

            let res: number
            switch (tok) {
                case '+':
                    res = a + b;
                    break;
                case '-':
                    res = a - b;
                    break;
                case '*':
                    res = a * b;
                    break;
                case '/':
                    res = Math.trunc(a / b);
                    break;
                default:
                    throw 'Operation not supported'
            }
            stack.push(res);
        }
    }

    return stack.pop() as number;
};
