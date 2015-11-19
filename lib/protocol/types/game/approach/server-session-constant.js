/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ServerSessionConstant = (function () {
    function ServerSessionConstant() {
        this.id = 0;
    }
    ServerSessionConstant.prototype.getTypeId = function () {
        return ServerSessionConstant.ID;
    };
    ServerSessionConstant.prototype.reset = function () {
        this.id = 0;
    };
    ServerSessionConstant.prototype.serialize = function (param1) {
        this.serializeAs_ServerSessionConstant(param1);
    };
    ServerSessionConstant.prototype.serializeAs_ServerSessionConstant = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
    };
    ServerSessionConstant.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerSessionConstant(param1);
    };
    ServerSessionConstant.prototype.deserializeAs_ServerSessionConstant = function (param1) {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of ServerSessionConstant.id.');
        }
    };
    ServerSessionConstant.ID = 430;
    return ServerSessionConstant;
})();
module.exports = ServerSessionConstant;
