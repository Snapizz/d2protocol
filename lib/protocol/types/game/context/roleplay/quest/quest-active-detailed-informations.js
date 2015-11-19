/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var QuestObjectiveInformations = require('./quest-objective-informations');
var QuestActiveInformations = require('./quest-active-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var QuestActiveDetailedInformations = (function (_super) {
    __extends(QuestActiveDetailedInformations, _super);
    function QuestActiveDetailedInformations() {
        this.stepId = 0;
        this.objectives = [];
        _super.call(this);
    }
    QuestActiveDetailedInformations.prototype.getTypeId = function () {
        return QuestActiveDetailedInformations.ID;
    };
    QuestActiveDetailedInformations.prototype.reset = function () {
        this.stepId = 0;
        this.objectives = [];
    };
    QuestActiveDetailedInformations.prototype.serialize = function (param1) {
        this.serializeAs_QuestActiveDetailedInformations(param1);
    };
    QuestActiveDetailedInformations.prototype.serializeAs_QuestActiveDetailedInformations = function (param1) {
        _super.prototype.serializeAs_QuestActiveInformations.call(this, param1);
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element stepId.');
        }
        param1.writeVarShort(this.stepId);
        param1.writeShort(this.objectives.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectives.length) {
            param1.writeShort((this.objectives[_loc2_]).getTypeId());
            (this.objectives[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    QuestActiveDetailedInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestActiveDetailedInformations(param1);
    };
    QuestActiveDetailedInformations.prototype.deserializeAs_QuestActiveDetailedInformations = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.stepId = param1.readVarUhShort();
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element of QuestActiveDetailedInformations.stepId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(QuestObjectiveInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.objectives.push(_loc5_);
            _loc3_++;
        }
    };
    QuestActiveDetailedInformations.ID = 382;
    return QuestActiveDetailedInformations;
})(QuestActiveInformations);
module.exports = QuestActiveDetailedInformations;
