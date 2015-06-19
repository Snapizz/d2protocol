var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ProtocolRequired = function() {
  this.requiredVersion = 0;
  this.currentVersion = 0;
};

util.inherits(ProtocolRequired, BaseMessage);

ProtocolRequired.prototype.serialize = function(output) {
  this.serializeAs_ProtocolRequired(output);
};

ProtocolRequired.prototype.deserialize = function(input) {
  this.deserializeAs_ProtocolRequired(input);
};

ProtocolRequired.prototype.serializeAs_ProtocolRequired = function(output) {
  if (this.requiredVersion < 0) {
    throw (new Error((("Forbidden value (" + this.requiredVersion) + ") on element requiredVersion.")));
  };
  output.writeInt(this.requiredVersion);
  if (this.currentVersion < 0) {
    throw (new Error((("Forbidden value (" + this.currentVersion) + ") on element currentVersion.")));
  };
  output.writeInt(this.currentVersion);
};

ProtocolRequired.prototype.deserializeAs_ProtocolRequired = function(input) {
  this.requiredVersion = input.readInt();
  if (this.requiredVersion < 0) {
    throw (new Error((("Forbidden value (" + this.requiredVersion) + ") on element of ProtocolRequired.requiredVersion.")));
  };
  this.currentVersion = input.readInt();
  if (this.currentVersion < 0) {
    throw (new Error((("Forbidden value (" + this.currentVersion) + ") on element of ProtocolRequired.currentVersion.")));
  };
};

ProtocolRequired.prototype.getMessageId = function() {
  return 1;
};

ProtocolRequired.prototype.getClassName = function() {
  return 'ProtocolRequired';
};

module.exports.id = 1;
module.exports.class = ProtocolRequired;