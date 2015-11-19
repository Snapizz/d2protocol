/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServerSessionConstant = require('./server-session-constant');
var ServerSessionConstantInteger = (function (_super) {
    __extends(ServerSessionConstantInteger, _super);
    function ServerSessionConstantInteger() {
        this.value = 0;
        _super.call(this);
    }
    ServerSessionConstantInteger.prototype.getTypeId = function () {
        return ServerSessionConstantInteger.ID;
    };
    ServerSessionConstantInteger.prototype.reset = function () {
        this.value = 0;
    };
    ServerSessionConstantInteger.prototype.serialize = function (param1) {
        this.serializeAs_ServerSessionConstantInteger(param1);
    };
    ServerSessionConstantInteger.prototype.serializeAs_ServerSessionConstantInteger = function (param1) {
        _super.prototype.serializeAs_ServerSessionConstant.call(this, param1);
        param1.writeInt(this.value);
    };
    ServerSessionConstantInteger.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerSessionConstantInteger(param1);
    };
    ServerSessionConstantInteger.prototype.deserializeAs_ServerSessionConstantInteger = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readInt();
    };
    ServerSessionConstantInteger.ID = 433;
    return ServerSessionConstantInteger;
})(ServerSessionConstant);
module.exports = ServerSessionConstantInteger;
