/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class AdditionalTaxCollectorInformations implements INetworkType {
    public static ID: number = 165;

    collectorCallerName: string;
    date: number;

    constructor() {
        this.collectorCallerName = '';
        this.date = 0;
    }

    public getTypeId(): number {
        return AdditionalTaxCollectorInformations.ID;
    }

    public reset(): void {
        this.collectorCallerName = '';
        this.date = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AdditionalTaxCollectorInformations(param1);
    }

    public serializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataOutput): void {
        param1.writeUTF(this.collectorCallerName);
        if (this.date < 0) {
            throw new Error('Forbidden value (' + this.date + ') on element date.');
        }
        param1.writeInt(this.date);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AdditionalTaxCollectorInformations(param1);
    }

    public deserializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataInput): void {
        this.collectorCallerName = param1.readUTF();
        this.date = param1.readInt();
        if (this.date < 0) {
            throw new Error('Forbidden value (' + this.date + ') on element of AdditionalTaxCollectorInformations.date.');
        }

    }
}

export = AdditionalTaxCollectorInformations;
