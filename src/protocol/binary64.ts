class Binary64 {
	low: number;
	high: number;

	constructor(low: number = 0, high: number = 0) {
		this.high = high;
		this.low = low;
	}

	div(n: number): number {
		var modHigh = 0;
		modHigh = (this.high % n);
		var mod = (((this.low % n) + (modHigh * 6)) % n);
		this.high = (this.high / n);
		var newLow = (((modHigh * 4294967296) + this.low) / n);
		this.high = (this.high + Number((newLow / 4294967296)));
		this.low = newLow;
		return mod;
	};

	mul(n: number): void {
		var newLow = (Number(this.low) * n);
		this.high = (this.high * n);
		this.high = (this.high + Number((newLow / 4294967296)));
		this.low = (this.low * n);
	};

	add(n: number): void {
		var newLow = (Number(this.low) + n);
		this.high = (this.high + Number((newLow / 4294967296)));
		this.low = newLow;
	};

	bitwiseNot(n: number): void {
		this.low = ~(this.low);
		this.high = ~(this.high);
	};
}

export = Binary64;
