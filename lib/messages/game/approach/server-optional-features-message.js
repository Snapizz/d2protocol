var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ServerOptionalFeaturesMessage = function() {
  this.features = [];
};

util.inherits(ServerOptionalFeaturesMessage, BaseMessage);

ServerOptionalFeaturesMessage.prototype.serialize = function(output) {
  this.serializeAs_ServerOptionalFeaturesMessage(output);
};

ServerOptionalFeaturesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServerOptionalFeaturesMessage(input);
};

ServerOptionalFeaturesMessage.prototype.serializeAs_ServerOptionalFeaturesMessage = function(output) {
  output.writeShort(this.features.length);
  var _i1 = 0;
  while (_i1 < this.features.length) {
    if (this.features[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.features[_i1]) + ") on element 1 (starting at 1) of features.")));
    };
    output.writeByte(this.features[_i1]);
    _i1++;
  };
};

ServerOptionalFeaturesMessage.prototype.deserializeAs_ServerOptionalFeaturesMessage = function(input) {
  var _val1 = 0;
  var _featuresLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _featuresLen) {
    _val1 = input.readByte();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of features.")));
    };
    this.features.push(_val1);
    _i1++;
  };
};

ServerOptionalFeaturesMessage.prototype.getMessageId = function() {
  return 6305;
};

ServerOptionalFeaturesMessage.prototype.getClassName = function() {
  return 'ServerOptionalFeaturesMessage';
};

module.exports.id = 6305;
module.exports.class = ServerOptionalFeaturesMessage;