var Binary64 = (function () {
    function Binary64(low, high) {
        if (low === void 0) { low = 0; }
        if (high === void 0) { high = 0; }
        this.high = high;
        this.low = low;
    }
    Binary64.prototype.div = function (n) {
        var modHigh = 0;
        modHigh = (this.high % n);
        var mod = (((this.low % n) + (modHigh * 6)) % n);
        this.high = (this.high / n);
        var newLow = (((modHigh * 4294967296) + this.low) / n);
        this.high = (this.high + Number((newLow / 4294967296)));
        this.low = newLow;
        return mod;
    };
    ;
    Binary64.prototype.mul = function (n) {
        var newLow = (Number(this.low) * n);
        this.high = (this.high * n);
        this.high = (this.high + Number((newLow / 4294967296)));
        this.low = (this.low * n);
    };
    ;
    Binary64.prototype.add = function (n) {
        var newLow = (Number(this.low) + n);
        this.high = (this.high + Number((newLow / 4294967296)));
        this.low = newLow;
    };
    ;
    Binary64.prototype.bitwiseNot = function (n) {
        this.low = ~(this.low);
        this.high = ~(this.high);
    };
    ;
    return Binary64;
})();
module.exports = Binary64;
