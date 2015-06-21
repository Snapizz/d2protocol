var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var TaxCollectorBasicInformations = require('../../../../types/game/guild/tax/tax-collector-basic-informations.js').TaxCollectorBasicInformations;

var TaxCollectorMovementMessage = function() {
    this.hireOrFire = false;
    this.basicInfos = new TaxCollectorBasicInformations();
    this.playerId = 0;
    this.playerName = "";
};

require('util').inherits(TaxCollectorMovementMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new TaxCollectorMovementMessage();
};

TaxCollectorMovementMessage.prototype.serialize = function(output) {
    this.serializeAs_TaxCollectorMovementMessage(output);
};

TaxCollectorMovementMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TaxCollectorMovementMessage(input);
};

TaxCollectorMovementMessage.prototype.serializeAs_TaxCollectorMovementMessage = function(param1) {
    param1.writeBoolean(this.hireOrFire);
    this.basicInfos.serializeAs_TaxCollectorBasicInformations(param1);
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        return;
    }
};

TaxCollectorMovementMessage.prototype.deserializeAs_TaxCollectorMovementMessage = function(param1) {
    this.hireOrFire = param1.readBoolean();
    this.basicInfos = new TaxCollectorBasicInformations();
    this.basicInfos.deserialize(param1);
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of TaxCollectorMovementMessage.playerId.");
    } else {
        this.playerName = param1.readUTF();
        return;
    }
};

TaxCollectorMovementMessage.prototype.getMessageId = function() {
    return 5633;
};

TaxCollectorMovementMessage.prototype.getClassName = function() {
    return 'TaxCollectorMovementMessage';
};

module.exports.id = 5633;
module.exports.TaxCollectorMovementMessage = TaxCollectorMovementMessage;