/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HumanOption = require('./human-option');

class HumanOptionTitle extends HumanOption implements INetworkType {
    public static ID: number = 408;

    titleId: number;
    titleParam: string;

    constructor() {
        this.titleId = 0;
        this.titleParam = '';
        super();
    }

    public getTypeId(): number {
        return HumanOptionTitle.ID;
    }

    public reset(): void {
        this.titleId = 0;
        this.titleParam = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanOptionTitle(param1);
    }

    public serializeAs_HumanOptionTitle(param1: ICustomDataOutput): void {
        super.serializeAs_HumanOption(param1);
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
        }
        param1.writeVarShort(this.titleId);
        param1.writeUTF(this.titleParam);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanOptionTitle(param1);
    }

    public deserializeAs_HumanOptionTitle(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.titleId = param1.readVarUhShort();
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element of HumanOptionTitle.titleId.');
        }
        this.titleParam = param1.readUTF();

    }
}

export = HumanOptionTitle;
