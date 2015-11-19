/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class TreasureHuntFlag implements INetworkType {
    public static ID: number = 473;

    mapId: number;
    state: number;

    constructor() {
        this.mapId = 0;
        this.state = 0;
    }

    public getTypeId(): number {
        return TreasureHuntFlag.ID;
    }

    public reset(): void {
        this.mapId = 0;
        this.state = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TreasureHuntFlag(param1);
    }

    public serializeAs_TreasureHuntFlag(param1: ICustomDataOutput): void {
        param1.writeInt(this.mapId);
        param1.writeByte(this.state);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntFlag(param1);
    }

    public deserializeAs_TreasureHuntFlag(param1: ICustomDataInput): void {
        this.mapId = param1.readInt();
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of TreasureHuntFlag.state.');
        }

    }
}

export = TreasureHuntFlag;
