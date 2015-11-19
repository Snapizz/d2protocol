declare class Binary64 {
    low: number;
    high: number;
    constructor(low?: number, high?: number);
    div(n: number): number;
    mul(n: number): void;
    add(n: number): void;
    bitwiseNot(n: number): void;
}
export = Binary64;
