var QuestActiveDetailedInformations = function() {
    this.stepId = 0;
    this.objectives = [];
};

require('util').inherits(QuestActiveDetailedInformations, require('./quest-active-informations.js'));

module.exports = function() {
    return new QuestActiveDetailedInformations();
};

QuestActiveDetailedInformations.prototype.serialize = function(output) {
    this.serializeAs_QuestActiveDetailedInformations(output);
};

QuestActiveDetailedInformations.prototype.deserialize = function(input) {
    this.deserializeAs_QuestActiveDetailedInformations(input);
};

QuestActiveDetailedInformations.prototype.serializeAs_QuestActiveDetailedInformations = function(param1) {
    this.serializeAs_QuestActiveInformations(param1);
    if (this.stepId < 0) {
        throw new Error("Forbidden value (" + this.stepId + ") on element stepId.");
    } else {
        param1.writeVarShort(this.stepId);
        param1.writeShort(this.objectives.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectives.length) {
            param1.writeShort((this.objectives[_loc2_]).getTypeId());
            (this.objectives[_loc2_]).serialize(param1);
            _loc2_++;
        }
        return;
    }
};

QuestActiveDetailedInformations.prototype.deserializeAs_QuestActiveDetailedInformations = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    this.deserializeAs_QuestActiveInformations(param1);
    this.stepId = param1.readVarUhShort();
    if (this.stepId < 0) {
        throw new Error("Forbidden value (" + this.stepId + ") on element of QuestActiveDetailedInformations.stepId.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(QuestObjectiveInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.objectives.push(_loc5_);
            _loc3_++;
        }
        return;
    }
};

QuestActiveDetailedInformations.prototype.getTypeId = function() {
    return 382;
};

QuestActiveDetailedInformations.prototype.getClassName = function() {
    return 'QuestActiveDetailedInformations';
};

module.exports.id = 382;
module.exports.QuestActiveDetailedInformations = QuestActiveDetailedInformations;