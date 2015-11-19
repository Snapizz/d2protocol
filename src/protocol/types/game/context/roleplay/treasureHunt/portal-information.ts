/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class PortalInformation implements INetworkType {
    public static ID: number = 466;

    portalId: number;
    areaId: number;

    constructor() {
        this.portalId = 0;
        this.areaId = 0;
    }

    public getTypeId(): number {
        return PortalInformation.ID;
    }

    public reset(): void {
        this.portalId = 0;
        this.areaId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PortalInformation(param1);
    }

    public serializeAs_PortalInformation(param1: ICustomDataOutput): void {
        if (this.portalId < 0) {
            throw new Error('Forbidden value (' + this.portalId + ') on element portalId.');
        }
        param1.writeVarShort(this.portalId);
        param1.writeShort(this.areaId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PortalInformation(param1);
    }

    public deserializeAs_PortalInformation(param1: ICustomDataInput): void {
        this.portalId = param1.readVarUhShort();
        if (this.portalId < 0) {
            throw new Error('Forbidden value (' + this.portalId + ') on element of PortalInformation.portalId.');
        }
        this.areaId = param1.readShort();

    }
}

export = PortalInformation;
