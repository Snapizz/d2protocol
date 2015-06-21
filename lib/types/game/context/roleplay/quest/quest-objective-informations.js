var QuestObjectiveInformations = function() {
    this.objectiveId = 0;
    this.objectiveStatus = false;
    this.dialogParams = [];
};

QuestObjectiveInformations.prototype.serialize = function(output) {
    this.serializeAs_QuestObjectiveInformations(output);
};

QuestObjectiveInformations.prototype.deserialize = function(input) {
    this.deserializeAs_QuestObjectiveInformations(input);
};

QuestObjectiveInformations.prototype.serializeAs_QuestObjectiveInformations = function(param1) {
    if (this.objectiveId < 0) {
        throw new Error("Forbidden value (" + this.objectiveId + ") on element objectiveId.");
    } else {
        param1.writeVarShort(this.objectiveId);
        param1.writeBoolean(this.objectiveStatus);
        param1.writeShort(this.dialogParams.length);
        var _loc2_ = 0;
        while (_loc2_ < this.dialogParams.length) {
            param1.writeUTF(this.dialogParams[_loc2_]);
            _loc2_++;
        }
        return;
    }
};

QuestObjectiveInformations.prototype.deserializeAs_QuestObjectiveInformations = function(param1) {
    var _loc4_ = null;
    this.objectiveId = param1.readVarUhShort();
    if (this.objectiveId < 0) {
        throw new Error("Forbidden value (" + this.objectiveId + ") on element of QuestObjectiveInformations.objectiveId.");
    } else {
        this.objectiveStatus = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUTF();
            this.dialogParams.push(_loc4_);
            _loc3_++;
        }
        return;
    }
};

QuestObjectiveInformations.prototype.getTypeId = function() {
    return 385;
};

QuestObjectiveInformations.prototype.getClassName = function() {
    return 'QuestObjectiveInformations';
};

module.exports.id = 385;
module.exports.class = QuestObjectiveInformations;
module.exports.getInstance = function() {
    return new QuestObjectiveInformations;
};