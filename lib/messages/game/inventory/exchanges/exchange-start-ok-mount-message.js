var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var MountClientData = require('../../../../types/game/mount/mount-client-data.js').class;

var ExchangeStartOkMountMessage = module.exports = function() {
    this.paddockedMountsDescription = [];

    return this;
};

require('util').inherits(ExchangeStartOkMountMessage, require('./exchange-start-ok-mount-with-out-paddock-message.js'));

ExchangeStartOkMountMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartOkMountMessage(output);
};

ExchangeStartOkMountMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartOkMountMessage(input);
};

ExchangeStartOkMountMessage.prototype.serializeAs_ExchangeStartOkMountMessage = function(param1) {
    this.serializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1);
    param1.writeShort(this.paddockedMountsDescription.length);
    var _loc2_ = 0;
    while (_loc2_ < this.paddockedMountsDescription.length) {
        (this.paddockedMountsDescription[_loc2_]).serializeAs_MountClientData(param1);
        _loc2_++;
    }
};

ExchangeStartOkMountMessage.prototype.deserializeAs_ExchangeStartOkMountMessage = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new MountClientData();
        _loc4_.deserialize(param1);
        this.paddockedMountsDescription.push(_loc4_);
        _loc3_++;
    }
};

ExchangeStartOkMountMessage.prototype.getMessageId = function() {
    return 5979;
};

ExchangeStartOkMountMessage.prototype.getClassName = function() {
    return 'ExchangeStartOkMountMessage';
};

module.exports.id = 5979;