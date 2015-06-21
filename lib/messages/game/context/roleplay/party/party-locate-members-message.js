var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyMemberGeoPosition = require('../../../../../types/game/context/roleplay/party/party-member-geo-position.js').class;

var PartyLocateMembersMessage = module.exports = function() {
    this.geopositions = [];

    return this;
};

require('util').inherits(PartyLocateMembersMessage, require('./abstract-party-message.js'));

PartyLocateMembersMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyLocateMembersMessage(output);
};

PartyLocateMembersMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyLocateMembersMessage(input);
};

PartyLocateMembersMessage.prototype.serializeAs_PartyLocateMembersMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeShort(this.geopositions.length);
    var _loc2_ = 0;
    while (_loc2_ < this.geopositions.length) {
        (this.geopositions[_loc2_]).serializeAs_PartyMemberGeoPosition(param1);
        _loc2_++;
    }
};

PartyLocateMembersMessage.prototype.deserializeAs_PartyLocateMembersMessage = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_AbstractPartyMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new PartyMemberGeoPosition();
        _loc4_.deserialize(param1);
        this.geopositions.push(_loc4_);
        _loc3_++;
    }
};

PartyLocateMembersMessage.prototype.getMessageId = function() {
    return 5595;
};

PartyLocateMembersMessage.prototype.getClassName = function() {
    return 'PartyLocateMembersMessage';
};

module.exports.id = 5595;