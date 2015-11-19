/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class NamedPartyTeam implements INetworkType {
    public static ID: number = 469;

    teamId: number;
    partyName: string;

    constructor() {
        this.teamId = 2;
        this.partyName = '';
    }

    public getTypeId(): number {
        return NamedPartyTeam.ID;
    }

    public reset(): void {
        this.teamId = 2;
        this.partyName = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_NamedPartyTeam(param1);
    }

    public serializeAs_NamedPartyTeam(param1: ICustomDataOutput): void {
        param1.writeByte(this.teamId);
        param1.writeUTF(this.partyName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NamedPartyTeam(param1);
    }

    public deserializeAs_NamedPartyTeam(param1: ICustomDataInput): void {
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of NamedPartyTeam.teamId.');
        }
        this.partyName = param1.readUTF();

    }
}

export = NamedPartyTeam;
