/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PaddockBuyableInformations = require('./paddock-buyable-informations');

class PaddockAbandonnedInformations extends PaddockBuyableInformations implements INetworkType {
    public static ID: number = 133;

    guildId: number;

    constructor() {
        this.guildId = 0;
        super();
    }

    public getTypeId(): number {
        return PaddockAbandonnedInformations.ID;
    }

    public reset(): void {
        this.guildId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PaddockAbandonnedInformations(param1);
    }

    public serializeAs_PaddockAbandonnedInformations(param1: ICustomDataOutput): void {
        super.serializeAs_PaddockBuyableInformations(param1);
        param1.writeInt(this.guildId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockAbandonnedInformations(param1);
    }

    public deserializeAs_PaddockAbandonnedInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guildId = param1.readInt();

    }
}

export = PaddockAbandonnedInformations;
