/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceVersatileInformations implements INetworkType {
    public static ID: number = 432;

    allianceId: number;
    nbGuilds: number;
    nbMembers: number;
    nbSubarea: number;

    constructor() {
        this.allianceId = 0;
        this.nbGuilds = 0;
        this.nbMembers = 0;
        this.nbSubarea = 0;
    }

    public getTypeId(): number {
        return AllianceVersatileInformations.ID;
    }

    public reset(): void {
        this.allianceId = 0;
        this.nbGuilds = 0;
        this.nbMembers = 0;
        this.nbSubarea = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AllianceVersatileInformations(param1);
    }

    public serializeAs_AllianceVersatileInformations(param1: ICustomDataOutput): void {
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);
        if (this.nbGuilds < 0) {
            throw new Error('Forbidden value (' + this.nbGuilds + ') on element nbGuilds.');
        }
        param1.writeVarShort(this.nbGuilds);
        if (this.nbMembers < 0) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
        }
        param1.writeVarShort(this.nbMembers);
        if (this.nbSubarea < 0) {
            throw new Error('Forbidden value (' + this.nbSubarea + ') on element nbSubarea.');
        }
        param1.writeVarShort(this.nbSubarea);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceVersatileInformations(param1);
    }

    public deserializeAs_AllianceVersatileInformations(param1: ICustomDataInput): void {
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of AllianceVersatileInformations.allianceId.');
        }
        this.nbGuilds = param1.readVarUhShort();
        if (this.nbGuilds < 0) {
            throw new Error('Forbidden value (' + this.nbGuilds + ') on element of AllianceVersatileInformations.nbGuilds.');
        }
        this.nbMembers = param1.readVarUhShort();
        if (this.nbMembers < 0) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element of AllianceVersatileInformations.nbMembers.');
        }
        this.nbSubarea = param1.readVarUhShort();
        if (this.nbSubarea < 0) {
            throw new Error('Forbidden value (' + this.nbSubarea + ') on element of AllianceVersatileInformations.nbSubarea.');
        }

    }
}

export = AllianceVersatileInformations;
