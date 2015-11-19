/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ActorAlignmentInformations = (function () {
    function ActorAlignmentInformations() {
        this.alignmentSide = 0;
        this.alignmentValue = 0;
        this.alignmentGrade = 0;
        this.characterPower = 0;
    }
    ActorAlignmentInformations.prototype.getTypeId = function () {
        return ActorAlignmentInformations.ID;
    };
    ActorAlignmentInformations.prototype.reset = function () {
        this.alignmentSide = 0;
        this.alignmentValue = 0;
        this.alignmentGrade = 0;
        this.characterPower = 0;
    };
    ActorAlignmentInformations.prototype.serialize = function (param1) {
        this.serializeAs_ActorAlignmentInformations(param1);
    };
    ActorAlignmentInformations.prototype.serializeAs_ActorAlignmentInformations = function (param1) {
        param1.writeByte(this.alignmentSide);
        if (this.alignmentValue < 0) {
            throw new Error('Forbidden value (' + this.alignmentValue + ') on element alignmentValue.');
        }
        param1.writeByte(this.alignmentValue);
        if (this.alignmentGrade < 0) {
            throw new Error('Forbidden value (' + this.alignmentGrade + ') on element alignmentGrade.');
        }
        param1.writeByte(this.alignmentGrade);
        if (this.characterPower < 0) {
            throw new Error('Forbidden value (' + this.characterPower + ') on element characterPower.');
        }
        param1.writeVarInt(this.characterPower);
    };
    ActorAlignmentInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_ActorAlignmentInformations(param1);
    };
    ActorAlignmentInformations.prototype.deserializeAs_ActorAlignmentInformations = function (param1) {
        this.alignmentSide = param1.readByte();
        this.alignmentValue = param1.readByte();
        if (this.alignmentValue < 0) {
            throw new Error('Forbidden value (' + this.alignmentValue + ') on element of ActorAlignmentInformations.alignmentValue.');
        }
        this.alignmentGrade = param1.readByte();
        if (this.alignmentGrade < 0) {
            throw new Error('Forbidden value (' + this.alignmentGrade + ') on element of ActorAlignmentInformations.alignmentGrade.');
        }
        this.characterPower = param1.readVarUhInt();
        if (this.characterPower < 0) {
            throw new Error('Forbidden value (' + this.characterPower + ') on element of ActorAlignmentInformations.characterPower.');
        }
    };
    ActorAlignmentInformations.ID = 201;
    return ActorAlignmentInformations;
})();
module.exports = ActorAlignmentInformations;
