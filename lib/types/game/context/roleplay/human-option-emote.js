var BaseMessage = require('./human-option.js').class,
  util = require('util');

var HumanOptionEmote = function() {
  this.emoteId = 0;
  this.emoteStartTime = 0;
};

util.inherits(HumanOptionEmote, BaseMessage);

HumanOptionEmote.prototype.serialize = function(output) {
  this.serializeAs_HumanOptionEmote(output);
};

HumanOptionEmote.prototype.deserialize = function(input) {
  this.deserializeAs_HumanOptionEmote(input);
};

HumanOptionEmote.prototype.serializeAs_HumanOptionEmote = function(output) {
  this.serializeAs_HumanOption(output);
  if ((((this.emoteId < 0)) || ((this.emoteId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.emoteId) + ") on element emoteId.")));
  };
  output.writeByte(this.emoteId);
  if ((((this.emoteStartTime < -9007199254740992)) || ((this.emoteStartTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.emoteStartTime) + ") on element emoteStartTime.")));
  };
  output.writeDouble(this.emoteStartTime);
};

HumanOptionEmote.prototype.deserializeAs_HumanOptionEmote = function(input) {
  this.deserialize(input);
  this.emoteId = input.readUnsignedByte();
  if ((((this.emoteId < 0)) || ((this.emoteId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.emoteId) + ") on element of HumanOptionEmote.emoteId.")));
  };
  this.emoteStartTime = input.readDouble();
  if ((((this.emoteStartTime < -9007199254740992)) || ((this.emoteStartTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.emoteStartTime) + ") on element of HumanOptionEmote.emoteStartTime.")));
  };
};

HumanOptionEmote.prototype.getTypeId = function() {
  return 407;
};

HumanOptionEmote.prototype.getClassName = function() {
  return 'HumanOptionEmote';
};

module.exports.id = 407;
module.exports.class = HumanOptionEmote;