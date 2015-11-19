/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractSocialGroupInfos = require('../../social/abstract-social-group-infos');

class BasicAllianceInformations extends AbstractSocialGroupInfos implements INetworkType {
    public static ID: number = 419;

    allianceId: number;
    allianceTag: string;

    constructor() {
        this.allianceId = 0;
        this.allianceTag = '';
        super();
    }

    public getTypeId(): number {
        return BasicAllianceInformations.ID;
    }

    public reset(): void {
        this.allianceId = 0;
        this.allianceTag = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_BasicAllianceInformations(param1);
    }

    public serializeAs_BasicAllianceInformations(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractSocialGroupInfos(param1);
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);
        param1.writeUTF(this.allianceTag);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicAllianceInformations(param1);
    }

    public deserializeAs_BasicAllianceInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of BasicAllianceInformations.allianceId.');
        }
        this.allianceTag = param1.readUTF();

    }
}

export = BasicAllianceInformations;
