/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityDispositionInformations = require('./entity-disposition-informations');

class FightEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
    public static ID: number = 217;

    carryingCharacterId: number;

    constructor() {
        this.carryingCharacterId = 0;
        super();
    }

    public getTypeId(): number {
        return FightEntityDispositionInformations.ID;
    }

    public reset(): void {
        this.carryingCharacterId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightEntityDispositionInformations(param1);
    }

    public serializeAs_FightEntityDispositionInformations(param1: ICustomDataOutput): void {
        super.serializeAs_EntityDispositionInformations(param1);
        param1.writeInt(this.carryingCharacterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightEntityDispositionInformations(param1);
    }

    public deserializeAs_FightEntityDispositionInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.carryingCharacterId = param1.readInt();

    }
}

export = FightEntityDispositionInformations;
