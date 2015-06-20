var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TitlesAndOrnamentsListMessage = function() {
  this.titles = [];
  this.ornaments = [];
  this.activeTitle = 0;
  this.activeOrnament = 0;
};

util.inherits(TitlesAndOrnamentsListMessage, BaseMessage);

TitlesAndOrnamentsListMessage.prototype.serialize = function(output) {
  this.serializeAs_TitlesAndOrnamentsListMessage(output);
};

TitlesAndOrnamentsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TitlesAndOrnamentsListMessage(input);
};

TitlesAndOrnamentsListMessage.prototype.serializeAs_TitlesAndOrnamentsListMessage = function(param1) {
  param1.writeShort(this.titles.length);
  var _loc2_ = 0;
  while (_loc2_ < this.titles.length) {
    if (this.titles[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.titles[_loc2_] + ") on element 1 (starting at 1) of titles.");
    } else {
      param1.writeVarShort(this.titles[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeShort(this.ornaments.length);
  var _loc3_ = 0;
  while (_loc3_ < this.ornaments.length) {
    if (this.ornaments[_loc3_] < 0) {
      throw new Error("Forbidden value (" + this.ornaments[_loc3_] + ") on element 2 (starting at 1) of ornaments.");
    } else {
      param1.writeVarShort(this.ornaments[_loc3_]);
      _loc3_++;
      continue;
    }
  }
  if (this.activeTitle < 0) {
    throw new Error("Forbidden value (" + this.activeTitle + ") on element activeTitle.");
  } else {
    param1.writeVarShort(this.activeTitle);
    if (this.activeOrnament < 0) {
      throw new Error("Forbidden value (" + this.activeOrnament + ") on element activeOrnament.");
    } else {
      param1.writeVarShort(this.activeOrnament);
      return;
    }
  }
};

TitlesAndOrnamentsListMessage.prototype.deserializeAs_TitlesAndOrnamentsListMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readVarUhShort();
    if (_loc6_ < 0) {
      throw new Error("Forbidden value (" + _loc6_ + ") on elements of titles.");
    } else {
      this.titles.push(_loc6_);
      _loc3_++;
      continue;
    }
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readVarUhShort();
    if (_loc7_ < 0) {
      throw new Error("Forbidden value (" + _loc7_ + ") on elements of ornaments.");
    } else {
      this.ornaments.push(_loc7_);
      _loc5_++;
      continue;
    }
  }
  this.activeTitle = param1.readVarUhShort();
  if (this.activeTitle < 0) {
    throw new Error("Forbidden value (" + this.activeTitle + ") on element of TitlesAndOrnamentsListMessage.activeTitle.");
  } else {
    this.activeOrnament = param1.readVarUhShort();
    if (this.activeOrnament < 0) {
      throw new Error("Forbidden value (" + this.activeOrnament + ") on element of TitlesAndOrnamentsListMessage.activeOrnament.");
    } else {
      return;
    }
  }
};

TitlesAndOrnamentsListMessage.prototype.getMessageId = function() {
  return 6367;
};

TitlesAndOrnamentsListMessage.prototype.getClassName = function() {
  return 'TitlesAndOrnamentsListMessage';
};

module.exports.id = 6367;
module.exports.class = TitlesAndOrnamentsListMessage;