/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServerSessionConstant = require('./server-session-constant');
var ServerSessionConstantString = (function (_super) {
    __extends(ServerSessionConstantString, _super);
    function ServerSessionConstantString() {
        this.value = '';
        _super.call(this);
    }
    ServerSessionConstantString.prototype.getTypeId = function () {
        return ServerSessionConstantString.ID;
    };
    ServerSessionConstantString.prototype.reset = function () {
        this.value = '';
    };
    ServerSessionConstantString.prototype.serialize = function (param1) {
        this.serializeAs_ServerSessionConstantString(param1);
    };
    ServerSessionConstantString.prototype.serializeAs_ServerSessionConstantString = function (param1) {
        _super.prototype.serializeAs_ServerSessionConstant.call(this, param1);
        param1.writeUTF(this.value);
    };
    ServerSessionConstantString.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerSessionConstantString(param1);
    };
    ServerSessionConstantString.prototype.deserializeAs_ServerSessionConstantString = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readUTF();
    };
    ServerSessionConstantString.ID = 436;
    return ServerSessionConstantString;
})(ServerSessionConstant);
module.exports = ServerSessionConstantString;
