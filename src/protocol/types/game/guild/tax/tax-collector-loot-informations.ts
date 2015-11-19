/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');

class TaxCollectorLootInformations extends TaxCollectorComplementaryInformations implements INetworkType {
    public static ID: number = 372;

    kamas: number;
    experience: number;
    pods: number;
    itemsValue: number;

    constructor() {
        this.kamas = 0;
        this.experience = 0;
        this.pods = 0;
        this.itemsValue = 0;
        super();
    }

    public getTypeId(): number {
        return TaxCollectorLootInformations.ID;
    }

    public reset(): void {
        this.kamas = 0;
        this.experience = 0;
        this.pods = 0;
        this.itemsValue = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TaxCollectorLootInformations(param1);
    }

    public serializeAs_TaxCollectorLootInformations(param1: ICustomDataOutput): void {
        super.serializeAs_TaxCollectorComplementaryInformations(param1);
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
        }
        param1.writeVarInt(this.kamas);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeVarLong(this.experience);
        if (this.pods < 0) {
            throw new Error('Forbidden value (' + this.pods + ') on element pods.');
        }
        param1.writeVarInt(this.pods);
        if (this.itemsValue < 0) {
            throw new Error('Forbidden value (' + this.itemsValue + ') on element itemsValue.');
        }
        param1.writeVarInt(this.itemsValue);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorLootInformations(param1);
    }

    public deserializeAs_TaxCollectorLootInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.kamas = param1.readVarUhInt();
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element of TaxCollectorLootInformations.kamas.');
        }
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of TaxCollectorLootInformations.experience.');
        }
        this.pods = param1.readVarUhInt();
        if (this.pods < 0) {
            throw new Error('Forbidden value (' + this.pods + ') on element of TaxCollectorLootInformations.pods.');
        }
        this.itemsValue = param1.readVarUhInt();
        if (this.itemsValue < 0) {
            throw new Error('Forbidden value (' + this.itemsValue + ') on element of TaxCollectorLootInformations.itemsValue.');
        }

    }
}

export = TaxCollectorLootInformations;
