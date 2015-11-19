/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ActorOrientation = (function () {
    function ActorOrientation() {
        this.id = 0;
        this.direction = 1;
    }
    ActorOrientation.prototype.getTypeId = function () {
        return ActorOrientation.ID;
    };
    ActorOrientation.prototype.reset = function () {
        this.id = 0;
        this.direction = 1;
    };
    ActorOrientation.prototype.serialize = function (param1) {
        this.serializeAs_ActorOrientation(param1);
    };
    ActorOrientation.prototype.serializeAs_ActorOrientation = function (param1) {
        param1.writeInt(this.id);
        param1.writeByte(this.direction);
    };
    ActorOrientation.prototype.deserialize = function (param1) {
        this.deserializeAs_ActorOrientation(param1);
    };
    ActorOrientation.prototype.deserializeAs_ActorOrientation = function (param1) {
        this.id = param1.readInt();
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of ActorOrientation.direction.');
        }
    };
    ActorOrientation.ID = 353;
    return ActorOrientation;
})();
module.exports = ActorOrientation;
