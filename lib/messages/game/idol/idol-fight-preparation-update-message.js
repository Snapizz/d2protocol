var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var Idol = require('../../../types/game/idol/idol.js').Idol;

var IdolFightPreparationUpdateMessage = function() {
    this.idolSource = 0;
    this.idols = [];
};

require('util').inherits(IdolFightPreparationUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdolFightPreparationUpdateMessage();
};

IdolFightPreparationUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_IdolFightPreparationUpdateMessage(output);
};

IdolFightPreparationUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdolFightPreparationUpdateMessage(input);
};

IdolFightPreparationUpdateMessage.prototype.serializeAs_IdolFightPreparationUpdateMessage = function(param1) {
    param1.writeByte(this.idolSource);
    param1.writeShort(this.idols.length);
    var _loc2_ = 0;
    while (_loc2_ < this.idols.length) {
        param1.writeShort((this.idols[_loc2_]).getTypeId());
        (this.idols[_loc2_]).serialize(param1);
        _loc2_++;
    }
};

IdolFightPreparationUpdateMessage.prototype.deserializeAs_IdolFightPreparationUpdateMessage = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    this.idolSource = param1.readByte();
    if (this.idolSource < 0) {
        throw new Error("Forbidden value (" + this.idolSource + ") on element of IdolFightPreparationUpdateMessage.idolSource.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(Idol, _loc4_);
            _loc5_.deserialize(param1);
            this.idols.push(_loc5_);
            _loc3_++;
        }
        return;
    }
};

IdolFightPreparationUpdateMessage.prototype.getMessageId = function() {
    return 6586;
};

IdolFightPreparationUpdateMessage.prototype.getClassName = function() {
    return 'IdolFightPreparationUpdateMessage';
};

module.exports.id = 6586;
module.exports.IdolFightPreparationUpdateMessage = IdolFightPreparationUpdateMessage;