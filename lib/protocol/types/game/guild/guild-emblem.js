/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var GuildEmblem = (function () {
    function GuildEmblem() {
        this.symbolShape = 0;
        this.symbolColor = 0;
        this.backgroundShape = 0;
        this.backgroundColor = 0;
    }
    GuildEmblem.prototype.getTypeId = function () {
        return GuildEmblem.ID;
    };
    GuildEmblem.prototype.reset = function () {
        this.symbolShape = 0;
        this.symbolColor = 0;
        this.backgroundShape = 0;
        this.backgroundColor = 0;
    };
    GuildEmblem.prototype.serialize = function (param1) {
        this.serializeAs_GuildEmblem(param1);
    };
    GuildEmblem.prototype.serializeAs_GuildEmblem = function (param1) {
        if (this.symbolShape < 0) {
            throw new Error('Forbidden value (' + this.symbolShape + ') on element symbolShape.');
        }
        param1.writeVarShort(this.symbolShape);
        param1.writeInt(this.symbolColor);
        if (this.backgroundShape < 0) {
            throw new Error('Forbidden value (' + this.backgroundShape + ') on element backgroundShape.');
        }
        param1.writeByte(this.backgroundShape);
        param1.writeInt(this.backgroundColor);
    };
    GuildEmblem.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildEmblem(param1);
    };
    GuildEmblem.prototype.deserializeAs_GuildEmblem = function (param1) {
        this.symbolShape = param1.readVarUhShort();
        if (this.symbolShape < 0) {
            throw new Error('Forbidden value (' + this.symbolShape + ') on element of GuildEmblem.symbolShape.');
        }
        this.symbolColor = param1.readInt();
        this.backgroundShape = param1.readByte();
        if (this.backgroundShape < 0) {
            throw new Error('Forbidden value (' + this.backgroundShape + ') on element of GuildEmblem.backgroundShape.');
        }
        this.backgroundColor = param1.readInt();
    };
    GuildEmblem.ID = 87;
    return GuildEmblem;
})();
module.exports = GuildEmblem;
