var Binary64 = require('./binary64.js'),
    util = require('util');

var UInt64 = function (low, high) {
  this.low = low || 0;
  this.high = high || 0;
};

var CHAR_CODE_0 = "0".charCodeAt(),
    CHAR_CODE_9 = "9".charCodeAt(),
    CHAR_CODE_A = "a".charCodeAt(),
    CHAR_CODE_Z = "z".charCodeAt();

util.inherits(UInt64, Binary64);

module.exports = UInt64;

module.exports.fromNumber = function (n) {
  return (new (UInt64)(n, Math.floor((n / 4294967296))));
};

module.exports.parseInt64 = function (str, radix) {
  radix = radix || 0;
  var digit = 0;
  var i = 0;
  if (radix == 0)
  {
    if (str.search(/^0x/) == 0)
    {
      radix = 16;
      i = 2;
    }
    else
    {
      radix = 10;
    };
  };
  if ((((radix < 2)) || ((radix > 36))))
  {
    throw (new ArgumentError());
  };
  str = str.toLowerCase();
  var result = new (UInt64)();
  while (i < str.length)
  {
    digit = str.charCodeAt(i);
    if ((((digit >= CHAR_CODE_0)) && ((digit <= CHAR_CODE_9))))
    {
      digit = (digit - CHAR_CODE_0);
    }
    else
    {
      if ((((digit >= CHAR_CODE_A)) && ((digit <= CHAR_CODE_Z))))
      {
        digit = (digit - CHAR_CODE_A);
        digit = (digit + 10);
      }
      else
      {
        throw (new ArgumentError());
      };
    };
    if (digit >= radix)
    {
      throw (new ArgumentError());
    };
    result.mul(radix);
    result.add(digit);
    i++;
  };
  return (result);
};

UInt64.prototype.toNumber = function () {
  return (((this.high * 4294967296) + this.low));
};

UInt64.prototype.toString = function (radix) {
  radix = radix || 10;
  var _local_4 = 0;
  if ((((radix < 2)) || ((radix > 36))))
  {
    throw (new ArgumentError());
  };
  if (this.high == 0)
  {
    return (low.toString(radix));
  };
  var digitChars = [];
  var copyOfThis = new UInt64(this.low, this.high);
  do
  {
    _local_4 = copyOfThis.div(radix);
    if (_local_4 < 10)
    {
      digitChars.push((_local_4 + CHAR_CODE_0));
    }
    else
    {
      digitChars.push(((_local_4 - 10) + CHAR_CODE_A));
    };
  } while (copyOfThis.high != 0);
  return ((copyOfThis.low.toString(radix) + String.fromCharCode.apply(String, digitChars.reverse())));
};
