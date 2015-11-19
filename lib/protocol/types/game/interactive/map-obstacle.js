/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var MapObstacle = (function () {
    function MapObstacle() {
        this.obstacleCellId = 0;
        this.state = 0;
    }
    MapObstacle.prototype.getTypeId = function () {
        return MapObstacle.ID;
    };
    MapObstacle.prototype.reset = function () {
        this.obstacleCellId = 0;
        this.state = 0;
    };
    MapObstacle.prototype.serialize = function (param1) {
        this.serializeAs_MapObstacle(param1);
    };
    MapObstacle.prototype.serializeAs_MapObstacle = function (param1) {
        if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
            throw new Error('Forbidden value (' + this.obstacleCellId + ') on element obstacleCellId.');
        }
        param1.writeVarShort(this.obstacleCellId);
        param1.writeByte(this.state);
    };
    MapObstacle.prototype.deserialize = function (param1) {
        this.deserializeAs_MapObstacle(param1);
    };
    MapObstacle.prototype.deserializeAs_MapObstacle = function (param1) {
        this.obstacleCellId = param1.readVarUhShort();
        if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
            throw new Error('Forbidden value (' + this.obstacleCellId + ') on element of MapObstacle.obstacleCellId.');
        }
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of MapObstacle.state.');
        }
    };
    MapObstacle.ID = 200;
    return MapObstacle;
})();
module.exports = MapObstacle;
