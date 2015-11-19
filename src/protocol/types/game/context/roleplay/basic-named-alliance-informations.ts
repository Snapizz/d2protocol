/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import BasicAllianceInformations = require('./basic-alliance-informations');

class BasicNamedAllianceInformations extends BasicAllianceInformations implements INetworkType {
    public static ID: number = 418;

    allianceName: string;

    constructor() {
        this.allianceName = '';
        super();
    }

    public getTypeId(): number {
        return BasicNamedAllianceInformations.ID;
    }

    public reset(): void {
        this.allianceName = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_BasicNamedAllianceInformations(param1);
    }

    public serializeAs_BasicNamedAllianceInformations(param1: ICustomDataOutput): void {
        super.serializeAs_BasicAllianceInformations(param1);
        param1.writeUTF(this.allianceName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicNamedAllianceInformations(param1);
    }

    public deserializeAs_BasicNamedAllianceInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceName = param1.readUTF();

    }
}

export = BasicNamedAllianceInformations;
