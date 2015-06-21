var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PaddockContentInformations = require('../../../types/game/paddock/paddock-content-informations.js').class;

var GuildInformationsPaddocksMessage = function() {
    this.nbPaddockMax = 0;
    this.paddocksInformations = [];
};

require('util').inherits(GuildInformationsPaddocksMessage, d2com.NetworkMessage.class);

GuildInformationsPaddocksMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInformationsPaddocksMessage(output);
};

GuildInformationsPaddocksMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInformationsPaddocksMessage(input);
};

GuildInformationsPaddocksMessage.prototype.serializeAs_GuildInformationsPaddocksMessage = function(param1) {
    if (this.nbPaddockMax < 0) {
        throw new Error("Forbidden value (" + this.nbPaddockMax + ") on element nbPaddockMax.");
    } else {
        param1.writeByte(this.nbPaddockMax);
        param1.writeShort(this.paddocksInformations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.paddocksInformations.length) {
            (this.paddocksInformations[_loc2_]).serializeAs_PaddockContentInformations(param1);
            _loc2_++;
        }
        return;
    }
};

GuildInformationsPaddocksMessage.prototype.deserializeAs_GuildInformationsPaddocksMessage = function(param1) {
    var _loc4_ = null;
    this.nbPaddockMax = param1.readByte();
    if (this.nbPaddockMax < 0) {
        throw new Error("Forbidden value (" + this.nbPaddockMax + ") on element of GuildInformationsPaddocksMessage.nbPaddockMax.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new PaddockContentInformations();
            _loc4_.deserialize(param1);
            this.paddocksInformations.push(_loc4_);
            _loc3_++;
        }
        return;
    }
};

GuildInformationsPaddocksMessage.prototype.getMessageId = function() {
    return 5959;
};

GuildInformationsPaddocksMessage.prototype.getClassName = function() {
    return 'GuildInformationsPaddocksMessage';
};

module.exports.id = 5959;
module.exports.class = GuildInformationsPaddocksMessage;
module.exports.getInstance = function() {
    return new GuildInformationsPaddocksMessage;
};