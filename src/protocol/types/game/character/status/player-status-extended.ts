/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import PlayerStatus = require('./player-status');

class PlayerStatusExtended extends PlayerStatus implements INetworkType {
    public static ID: number = 414;

    message: string;

    constructor() {
        this.message = '';
        super();
    }

    public getTypeId(): number {
        return PlayerStatusExtended.ID;
    }

    public reset(): void {
        this.message = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PlayerStatusExtended(param1);
    }

    public serializeAs_PlayerStatusExtended(param1: ICustomDataOutput): void {
        super.serializeAs_PlayerStatus(param1);
        param1.writeUTF(this.message);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PlayerStatusExtended(param1);
    }

    public deserializeAs_PlayerStatusExtended(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.message = param1.readUTF();

    }
}

export = PlayerStatusExtended;
