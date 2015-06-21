var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var MountClientData = require('../../../../types/game/mount/mount-client-data.js').class;

var ExchangeMountsStableBornAddMessage = module.exports = function() {


    return this;
};

require('util').inherits(ExchangeMountsStableBornAddMessage, require('./exchange-mounts-stable-add-message.js'));

ExchangeMountsStableBornAddMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeMountsStableBornAddMessage(output);
};

ExchangeMountsStableBornAddMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeMountsStableBornAddMessage(input);
};

ExchangeMountsStableBornAddMessage.prototype.serializeAs_ExchangeMountsStableBornAddMessage = function(param1) {
    this.serializeAs_ExchangeMountsStableAddMessage(param1);
};

ExchangeMountsStableBornAddMessage.prototype.deserializeAs_ExchangeMountsStableBornAddMessage = function(param1) {
    this.deserializeAs_ExchangeMountsStableAddMessage(param1);
};

ExchangeMountsStableBornAddMessage.prototype.getMessageId = function() {
    return 6557;
};

ExchangeMountsStableBornAddMessage.prototype.getClassName = function() {
    return 'ExchangeMountsStableBornAddMessage';
};

module.exports.id = 6557;