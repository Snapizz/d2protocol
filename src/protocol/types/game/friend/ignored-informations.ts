/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AbstractContactInformations = require('./abstract-contact-informations');

class IgnoredInformations extends AbstractContactInformations implements INetworkType {
    public static ID: number = 106;



    constructor() {

        super();
    }

    public getTypeId(): number {
        return IgnoredInformations.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_IgnoredInformations(param1);
    }

    public serializeAs_IgnoredInformations(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractContactInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IgnoredInformations(param1);
    }

    public deserializeAs_IgnoredInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = IgnoredInformations;
