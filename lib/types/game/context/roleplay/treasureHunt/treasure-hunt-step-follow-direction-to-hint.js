var TreasureHuntStepFollowDirectionToHint = module.exports = function() {
    this.direction = 1;
    this.npcId = 0;

    return this;
};

require('util').inherits(TreasureHuntStepFollowDirectionToHint, require('./treasure-hunt-step.js'));

TreasureHuntStepFollowDirectionToHint.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntStepFollowDirectionToHint(output);
};

TreasureHuntStepFollowDirectionToHint.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntStepFollowDirectionToHint(input);
};

TreasureHuntStepFollowDirectionToHint.prototype.serializeAs_TreasureHuntStepFollowDirectionToHint = function(param1) {
    this.serializeAs_TreasureHuntStep(param1);
    param1.writeByte(this.direction);
    if (this.npcId < 0) {
        throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
    } else {
        param1.writeVarShort(this.npcId);
        return;
    }
};

TreasureHuntStepFollowDirectionToHint.prototype.deserializeAs_TreasureHuntStepFollowDirectionToHint = function(param1) {
    this.deserializeAs_TreasureHuntStep(param1);
    this.direction = param1.readByte();
    if (this.direction < 0) {
        throw new Error("Forbidden value (" + this.direction + ") on element of TreasureHuntStepFollowDirectionToHint.direction.");
    } else {
        this.npcId = param1.readVarUhShort();
        if (this.npcId < 0) {
            throw new Error("Forbidden value (" + this.npcId + ") on element of TreasureHuntStepFollowDirectionToHint.npcId.");
        } else {
            return;
        }
    }
};

TreasureHuntStepFollowDirectionToHint.prototype.getTypeId = function() {
    return 472;
};

TreasureHuntStepFollowDirectionToHint.prototype.getClassName = function() {
    return 'TreasureHuntStepFollowDirectionToHint';
};

module.exports.id = 472;