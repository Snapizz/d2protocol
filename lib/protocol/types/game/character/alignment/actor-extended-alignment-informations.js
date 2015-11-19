/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ActorAlignmentInformations = require('./actor-alignment-informations');
var ActorExtendedAlignmentInformations = (function (_super) {
    __extends(ActorExtendedAlignmentInformations, _super);
    function ActorExtendedAlignmentInformations() {
        this.honor = 0;
        this.honorGradeFloor = 0;
        this.honorNextGradeFloor = 0;
        this.aggressable = 0;
        _super.call(this);
    }
    ActorExtendedAlignmentInformations.prototype.getTypeId = function () {
        return ActorExtendedAlignmentInformations.ID;
    };
    ActorExtendedAlignmentInformations.prototype.reset = function () {
        this.honor = 0;
        this.honorGradeFloor = 0;
        this.honorNextGradeFloor = 0;
        this.aggressable = 0;
    };
    ActorExtendedAlignmentInformations.prototype.serialize = function (param1) {
        this.serializeAs_ActorExtendedAlignmentInformations(param1);
    };
    ActorExtendedAlignmentInformations.prototype.serializeAs_ActorExtendedAlignmentInformations = function (param1) {
        _super.prototype.serializeAs_ActorAlignmentInformations.call(this, param1);
        if (this.honor < 0 || this.honor > 20000) {
            throw new Error('Forbidden value (' + this.honor + ') on element honor.');
        }
        param1.writeVarShort(this.honor);
        if (this.honorGradeFloor < 0 || this.honorGradeFloor > 20000) {
            throw new Error('Forbidden value (' + this.honorGradeFloor + ') on element honorGradeFloor.');
        }
        param1.writeVarShort(this.honorGradeFloor);
        if (this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000) {
            throw new Error('Forbidden value (' + this.honorNextGradeFloor + ') on element honorNextGradeFloor.');
        }
        param1.writeVarShort(this.honorNextGradeFloor);
        param1.writeByte(this.aggressable);
    };
    ActorExtendedAlignmentInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_ActorExtendedAlignmentInformations(param1);
    };
    ActorExtendedAlignmentInformations.prototype.deserializeAs_ActorExtendedAlignmentInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.honor = param1.readVarUhShort();
        if (this.honor < 0 || this.honor > 20000) {
            throw new Error('Forbidden value (' + this.honor + ') on element of ActorExtendedAlignmentInformations.honor.');
        }
        this.honorGradeFloor = param1.readVarUhShort();
        if (this.honorGradeFloor < 0 || this.honorGradeFloor > 20000) {
            throw new Error('Forbidden value (' + this.honorGradeFloor + ') on element of ActorExtendedAlignmentInformations.honorGradeFloor.');
        }
        this.honorNextGradeFloor = param1.readVarUhShort();
        if (this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000) {
            throw new Error('Forbidden value (' + this.honorNextGradeFloor + ') on element of ActorExtendedAlignmentInformations.honorNextGradeFloor.');
        }
        this.aggressable = param1.readByte();
        if (this.aggressable < 0) {
            throw new Error('Forbidden value (' + this.aggressable + ') on element of ActorExtendedAlignmentInformations.aggressable.');
        }
    };
    ActorExtendedAlignmentInformations.ID = 202;
    return ActorExtendedAlignmentInformations;
})(ActorAlignmentInformations);
module.exports = ActorExtendedAlignmentInformations;
