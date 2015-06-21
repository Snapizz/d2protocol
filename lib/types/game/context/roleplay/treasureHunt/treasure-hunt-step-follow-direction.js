var TreasureHuntStepFollowDirection = function() {
    this.direction = 1;
    this.mapCount = 0;
};

require('util').inherits(TreasureHuntStepFollowDirection, require('./treasure-hunt-step.js'));

module.exports = function() {
    return new TreasureHuntStepFollowDirection();
};

TreasureHuntStepFollowDirection.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntStepFollowDirection(output);
};

TreasureHuntStepFollowDirection.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntStepFollowDirection(input);
};

TreasureHuntStepFollowDirection.prototype.serializeAs_TreasureHuntStepFollowDirection = function(param1) {
    this.serializeAs_TreasureHuntStep(param1);
    param1.writeByte(this.direction);
    if (this.mapCount < 0) {
        throw new Error("Forbidden value (" + this.mapCount + ") on element mapCount.");
    } else {
        param1.writeVarShort(this.mapCount);
        return;
    }
};

TreasureHuntStepFollowDirection.prototype.deserializeAs_TreasureHuntStepFollowDirection = function(param1) {
    this.deserializeAs_TreasureHuntStep(param1);
    this.direction = param1.readByte();
    if (this.direction < 0) {
        throw new Error("Forbidden value (" + this.direction + ") on element of TreasureHuntStepFollowDirection.direction.");
    } else {
        this.mapCount = param1.readVarUhShort();
        if (this.mapCount < 0) {
            throw new Error("Forbidden value (" + this.mapCount + ") on element of TreasureHuntStepFollowDirection.mapCount.");
        } else {
            return;
        }
    }
};

TreasureHuntStepFollowDirection.prototype.getTypeId = function() {
    return 468;
};

TreasureHuntStepFollowDirection.prototype.getClassName = function() {
    return 'TreasureHuntStepFollowDirection';
};

module.exports.id = 468;
module.exports.TreasureHuntStepFollowDirection = TreasureHuntStepFollowDirection;