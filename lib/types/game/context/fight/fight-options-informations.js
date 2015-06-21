var FightOptionsInformations = function() {
    this.isSecret = false;
    this.isRestrictedToPartyOnly = false;
    this.isClosed = false;
    this.isAskingForHelp = false;
};

module.exports = function() {
    return new FightOptionsInformations();
};

FightOptionsInformations.prototype.serialize = function(output) {
    this.serializeAs_FightOptionsInformations(output);
};

FightOptionsInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightOptionsInformations(input);
};

FightOptionsInformations.prototype.serializeAs_FightOptionsInformations = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isSecret);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isRestrictedToPartyOnly);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isClosed);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.isAskingForHelp);
    param1.writeByte(_loc2_);
};

FightOptionsInformations.prototype.deserializeAs_FightOptionsInformations = function(param1) {
    var _loc2_ = param1.readByte();
    this.isSecret = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.isRestrictedToPartyOnly = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.isClosed = BooleanByteWrapper.getFlag(_loc2_, 2);
    this.isAskingForHelp = BooleanByteWrapper.getFlag(_loc2_, 3);
};

FightOptionsInformations.prototype.getTypeId = function() {
    return 20;
};

FightOptionsInformations.prototype.getClassName = function() {
    return 'FightOptionsInformations';
};

module.exports.id = 20;
module.exports.FightOptionsInformations = FightOptionsInformations;