var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var MapCoordinates = require('../../../../types/game/context/map-coordinates.js').MapCoordinates;

var CompassUpdatePvpSeekMessage = function() {
    this.memberId = 0;
    this.memberName = "";
};

require('util').inherits(CompassUpdatePvpSeekMessage, require('./compass-update-message.js').CompassUpdateMessage);

module.exports = function() {
    return new CompassUpdatePvpSeekMessage();
};

CompassUpdatePvpSeekMessage.prototype.serialize = function(output) {
    this.serializeAs_CompassUpdatePvpSeekMessage(output);
};

CompassUpdatePvpSeekMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CompassUpdatePvpSeekMessage(input);
};

CompassUpdatePvpSeekMessage.prototype.serializeAs_CompassUpdatePvpSeekMessage = function(param1) {
    this.serializeAs_CompassUpdateMessage(param1);
    if (this.memberId < 0) {
        throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
    } else {
        param1.writeVarInt(this.memberId);
        param1.writeUTF(this.memberName);
        return;
    }
};

CompassUpdatePvpSeekMessage.prototype.deserializeAs_CompassUpdatePvpSeekMessage = function(param1) {
    this.deserializeAs_CompassUpdateMessage(param1);
    this.memberId = param1.readVarUhInt();
    if (this.memberId < 0) {
        throw new Error("Forbidden value (" + this.memberId + ") on element of CompassUpdatePvpSeekMessage.memberId.");
    } else {
        this.memberName = param1.readUTF();
        return;
    }
};

CompassUpdatePvpSeekMessage.prototype.getMessageId = function() {
    return 6013;
};

CompassUpdatePvpSeekMessage.prototype.getClassName = function() {
    return 'CompassUpdatePvpSeekMessage';
};

module.exports.id = 6013;
module.exports.CompassUpdatePvpSeekMessage = CompassUpdatePvpSeekMessage;