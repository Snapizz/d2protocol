var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var UpdateMountBoostMessage = function() {
  this.rideId = 0;
  this.boostToUpdateList = [];
};

util.inherits(UpdateMountBoostMessage, BaseMessage);

UpdateMountBoostMessage.prototype.serialize = function(output) {
  this.serializeAs_UpdateMountBoostMessage(output);
};

UpdateMountBoostMessage.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateMountBoostMessage(input);
};

UpdateMountBoostMessage.prototype.serializeAs_UpdateMountBoostMessage = function(output) {
  if ((((this.rideId < -9007199254740992)) || ((this.rideId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.rideId) + ") on element rideId.")));
  };
  output.writeDouble(this.rideId);
  output.writeShort(this.boostToUpdateList.length);
  var _i2 = 0;
  while (_i2 < this.boostToUpdateList.length) {
    output.writeShort((this.boostToUpdateList[_i2]).getTypeId());
    (this.boostToUpdateList[_i2]).serialize(output);
    _i2++;
  };
};

UpdateMountBoostMessage.prototype.deserializeAs_UpdateMountBoostMessage = function(input) {
  var _id2 = 0;
  var _item2;
  this.rideId = input.readDouble();
  if ((((this.rideId < -9007199254740992)) || ((this.rideId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.rideId) + ") on element of UpdateMountBoostMessage.rideId.")));
  };
  var _boostToUpdateListLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _boostToUpdateListLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(UpdateMountBoost, _id2);
    _item2.deserialize(input);
    this.boostToUpdateList.push(_item2);
    _i2++;
  };
};

UpdateMountBoostMessage.prototype.getMessageId = function() {
  return 6179;
};

UpdateMountBoostMessage.prototype.getClassName = function() {
  return 'UpdateMountBoostMessage';
};

module.exports.id = 6179;
module.exports.class = UpdateMountBoostMessage;