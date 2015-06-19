var BaseMessage = require('./human-option.js').class,
  util = require('util');

var HumanOptionTitle = function() {
  this.titleId = 0;
  this.titleParam = "";
};

util.inherits(HumanOptionTitle, BaseMessage);

HumanOptionTitle.prototype.serialize = function(output) {
  this.serializeAs_HumanOptionTitle(output);
};

HumanOptionTitle.prototype.deserialize = function(input) {
  this.deserializeAs_HumanOptionTitle(input);
};

HumanOptionTitle.prototype.serializeAs_HumanOptionTitle = function(output) {
  this.serializeAs_HumanOption(output);
  if (this.titleId < 0) {
    throw (new Error((("Forbidden value (" + this.titleId) + ") on element titleId.")));
  };
  output.writeVarShort(this.titleId);
  output.writeUTF(this.titleParam);
};

HumanOptionTitle.prototype.deserializeAs_HumanOptionTitle = function(input) {
  this.deserialize(input);
  this.titleId = input.readVarUhShort();
  if (this.titleId < 0) {
    throw (new Error((("Forbidden value (" + this.titleId) + ") on element of HumanOptionTitle.titleId.")));
  };
  this.titleParam = input.readUTF();
};

HumanOptionTitle.prototype.getTypeId = function() {
  return 408;
};

HumanOptionTitle.prototype.getClassName = function() {
  return 'HumanOptionTitle';
};

module.exports.id = 408;
module.exports.class = HumanOptionTitle;