/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PrismInformation implements INetworkType {
    public static ID: number = 428;

    typeId: number;
    state: number;
    nextVulnerabilityDate: number;
    placementDate: number;
    rewardTokenCount: number;

    constructor() {
        this.typeId = 0;
        this.state = 1;
        this.nextVulnerabilityDate = 0;
        this.placementDate = 0;
        this.rewardTokenCount = 0;
    }

    public getTypeId(): number {
        return PrismInformation.ID;
    }

    public reset(): void {
        this.typeId = 0;
        this.state = 1;
        this.nextVulnerabilityDate = 0;
        this.placementDate = 0;
        this.rewardTokenCount = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PrismInformation(param1);
    }

    public serializeAs_PrismInformation(param1: ICustomDataOutput): void {
        if (this.typeId < 0) {
            throw new Error('Forbidden value (' + this.typeId + ') on element typeId.');
        }
        param1.writeByte(this.typeId);
        param1.writeByte(this.state);
        if (this.nextVulnerabilityDate < 0) {
            throw new Error('Forbidden value (' + this.nextVulnerabilityDate + ') on element nextVulnerabilityDate.');
        }
        param1.writeInt(this.nextVulnerabilityDate);
        if (this.placementDate < 0) {
            throw new Error('Forbidden value (' + this.placementDate + ') on element placementDate.');
        }
        param1.writeInt(this.placementDate);
        if (this.rewardTokenCount < 0) {
            throw new Error('Forbidden value (' + this.rewardTokenCount + ') on element rewardTokenCount.');
        }
        param1.writeVarInt(this.rewardTokenCount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismInformation(param1);
    }

    public deserializeAs_PrismInformation(param1: ICustomDataInput): void {
        this.typeId = param1.readByte();
        if (this.typeId < 0) {
            throw new Error('Forbidden value (' + this.typeId + ') on element of PrismInformation.typeId.');
        }
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of PrismInformation.state.');
        }
        this.nextVulnerabilityDate = param1.readInt();
        if (this.nextVulnerabilityDate < 0) {
            throw new Error('Forbidden value (' + this.nextVulnerabilityDate + ') on element of PrismInformation.nextVulnerabilityDate.');
        }
        this.placementDate = param1.readInt();
        if (this.placementDate < 0) {
            throw new Error('Forbidden value (' + this.placementDate + ') on element of PrismInformation.placementDate.');
        }
        this.rewardTokenCount = param1.readVarUhInt();
        if (this.rewardTokenCount < 0) {
            throw new Error('Forbidden value (' + this.rewardTokenCount + ') on element of PrismInformation.rewardTokenCount.');
        }

    }
}

export = PrismInformation;
