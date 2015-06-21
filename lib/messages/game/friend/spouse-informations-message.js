var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var FriendSpouseInformations = require('../../../types/game/friend/friend-spouse-informations.js').FriendSpouseInformations;

var SpouseInformationsMessage = function() {
    this.spouse = new FriendSpouseInformations();
};

require('util').inherits(SpouseInformationsMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new SpouseInformationsMessage();
};

SpouseInformationsMessage.prototype.serialize = function(output) {
    this.serializeAs_SpouseInformationsMessage(output);
};

SpouseInformationsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SpouseInformationsMessage(input);
};

SpouseInformationsMessage.prototype.serializeAs_SpouseInformationsMessage = function(param1) {
    param1.writeShort(this.spouse.getTypeId());
    this.spouse.serialize(param1);
};

SpouseInformationsMessage.prototype.deserializeAs_SpouseInformationsMessage = function(param1) {
    var _loc2_ = param1.readUnsignedShort();
    this.spouse = ProtocolTypeManager.getInstance(FriendSpouseInformations, _loc2_);
    this.spouse.deserialize(param1);
};

SpouseInformationsMessage.prototype.getMessageId = function() {
    return 6356;
};

SpouseInformationsMessage.prototype.getClassName = function() {
    return 'SpouseInformationsMessage';
};

module.exports.id = 6356;
module.exports.SpouseInformationsMessage = SpouseInformationsMessage;