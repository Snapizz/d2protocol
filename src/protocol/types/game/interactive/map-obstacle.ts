/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class MapObstacle implements INetworkType {
    public static ID: number = 200;

    obstacleCellId: number;
    state: number;

    constructor() {
        this.obstacleCellId = 0;
        this.state = 0;
    }

    public getTypeId(): number {
        return MapObstacle.ID;
    }

    public reset(): void {
        this.obstacleCellId = 0;
        this.state = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_MapObstacle(param1);
    }

    public serializeAs_MapObstacle(param1: ICustomDataOutput): void {
        if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
            throw new Error('Forbidden value (' + this.obstacleCellId + ') on element obstacleCellId.');
        }
        param1.writeVarShort(this.obstacleCellId);
        param1.writeByte(this.state);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapObstacle(param1);
    }

    public deserializeAs_MapObstacle(param1: ICustomDataInput): void {
        this.obstacleCellId = param1.readVarUhShort();
        if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
            throw new Error('Forbidden value (' + this.obstacleCellId + ') on element of MapObstacle.obstacleCellId.');
        }
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of MapObstacle.state.');
        }

    }
}

export = MapObstacle;
