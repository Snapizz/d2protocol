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

ProtocolRequired.prototype.serializeAs_ProtocolRequired = function(param1) {
  if (this.requiredVersion < 0) {
    throw new Error("Forbidden value (" + this.requiredVersion + ") on element requiredVersion.");
  } else {
    param1.writeInt(this.requiredVersion);
    if (this.currentVersion < 0) {
      throw new Error("Forbidden value (" + this.currentVersion + ") on element currentVersion.");
    } else {
      param1.writeInt(this.currentVersion);
      return;
    }
  }
};

ProtocolRequired.prototype.deserializeAs_ProtocolRequired = function(param1) {
  this.requiredVersion = param1.readInt();
  if (this.requiredVersion < 0) {
    throw new Error("Forbidden value (" + this.requiredVersion + ") on element of ProtocolRequired.requiredVersion.");
  } else {
    this.currentVersion = param1.readInt();
    if (this.currentVersion < 0) {
      throw new Error("Forbidden value (" + this.currentVersion + ") on element of ProtocolRequired.currentVersion.");
    } else {
      return;
    }
  }
};

ProtocolRequired.prototype.getMessageId = function() {
  return 1;
};

ProtocolRequired.prototype.getClassName = function() {
  return 'ProtocolRequired';
};

module.exports.id = 1;
module.exports.class = ProtocolRequired;