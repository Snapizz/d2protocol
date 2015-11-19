/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HumanOption = require('./human-option');

class HumanOptionOrnament extends HumanOption implements INetworkType {
    public static ID: number = 411;

    ornamentId: number;

    constructor() {
        this.ornamentId = 0;
        super();
    }

    public getTypeId(): number {
        return HumanOptionOrnament.ID;
    }

    public reset(): void {
        this.ornamentId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanOptionOrnament(param1);
    }

    public serializeAs_HumanOptionOrnament(param1: ICustomDataOutput): void {
        super.serializeAs_HumanOption(param1);
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element ornamentId.');
        }
        param1.writeVarShort(this.ornamentId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanOptionOrnament(param1);
    }

    public deserializeAs_HumanOptionOrnament(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.ornamentId = param1.readVarUhShort();
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element of HumanOptionOrnament.ornamentId.');
        }

    }
}

export = HumanOptionOrnament;
