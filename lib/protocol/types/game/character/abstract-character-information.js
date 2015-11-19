/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AbstractCharacterInformation = (function () {
    function AbstractCharacterInformation() {
        this.id = 0;
    }
    AbstractCharacterInformation.prototype.getTypeId = function () {
        return AbstractCharacterInformation.ID;
    };
    AbstractCharacterInformation.prototype.reset = function () {
        this.id = 0;
    };
    AbstractCharacterInformation.prototype.serialize = function (param1) {
        this.serializeAs_AbstractCharacterInformation(param1);
    };
    AbstractCharacterInformation.prototype.serializeAs_AbstractCharacterInformation = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
    };
    AbstractCharacterInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractCharacterInformation(param1);
    };
    AbstractCharacterInformation.prototype.deserializeAs_AbstractCharacterInformation = function (param1) {
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of AbstractCharacterInformation.id.');
        }
    };
    AbstractCharacterInformation.ID = 400;
    return AbstractCharacterInformation;
})();
module.exports = AbstractCharacterInformation;
