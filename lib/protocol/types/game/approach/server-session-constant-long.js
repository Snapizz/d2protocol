/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServerSessionConstant = require('./server-session-constant');
var ServerSessionConstantLong = (function (_super) {
    __extends(ServerSessionConstantLong, _super);
    function ServerSessionConstantLong() {
        this.value = 0;
        _super.call(this);
    }
    ServerSessionConstantLong.prototype.getTypeId = function () {
        return ServerSessionConstantLong.ID;
    };
    ServerSessionConstantLong.prototype.reset = function () {
        this.value = 0;
    };
    ServerSessionConstantLong.prototype.serialize = function (param1) {
        this.serializeAs_ServerSessionConstantLong(param1);
    };
    ServerSessionConstantLong.prototype.serializeAs_ServerSessionConstantLong = function (param1) {
        _super.prototype.serializeAs_ServerSessionConstant.call(this, param1);
        if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.value + ') on element value.');
        }
        param1.writeDouble(this.value);
    };
    ServerSessionConstantLong.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerSessionConstantLong(param1);
    };
    ServerSessionConstantLong.prototype.deserializeAs_ServerSessionConstantLong = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readDouble();
        if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.value + ') on element of ServerSessionConstantLong.value.');
        }
    };
    ServerSessionConstantLong.ID = 429;
    return ServerSessionConstantLong;
})(ServerSessionConstant);
module.exports = ServerSessionConstantLong;
