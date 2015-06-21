var HumanOptionAlliance = function() {
    this.allianceInformations = new AllianceInformations();
    this.aggressable = 0;
};

require('util').inherits(HumanOptionAlliance, require('./human-option.js').HumanOption);

module.exports = function() {
    return new HumanOptionAlliance();
};

HumanOptionAlliance.prototype.serialize = function(output) {
    this.serializeAs_HumanOptionAlliance(output);
};

HumanOptionAlliance.prototype.deserialize = function(input) {
    this.deserializeAs_HumanOptionAlliance(input);
};

HumanOptionAlliance.prototype.serializeAs_HumanOptionAlliance = function(param1) {
    this.serializeAs_HumanOption(param1);
    this.allianceInformations.serializeAs_AllianceInformations(param1);
    param1.writeByte(this.aggressable);
};

HumanOptionAlliance.prototype.deserializeAs_HumanOptionAlliance = function(param1) {
    this.deserializeAs_HumanOption(param1);
    this.allianceInformations = new AllianceInformations();
    this.allianceInformations.deserialize(param1);
    this.aggressable = param1.readByte();
    if (this.aggressable < 0) {
        throw new Error("Forbidden value (" + this.aggressable + ") on element of HumanOptionAlliance.aggressable.");
    } else {
        return;
    }
};

HumanOptionAlliance.prototype.getTypeId = function() {
    return 425;
};

HumanOptionAlliance.prototype.getClassName = function() {
    return 'HumanOptionAlliance';
};

module.exports.id = 425;
module.exports.HumanOptionAlliance = HumanOptionAlliance;