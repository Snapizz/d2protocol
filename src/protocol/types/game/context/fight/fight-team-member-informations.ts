/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class FightTeamMemberInformations implements INetworkType {
    public static ID: number = 44;

    id: number;

    constructor() {
        this.id = 0;
    }

    public getTypeId(): number {
        return FightTeamMemberInformations.ID;
    }

    public reset(): void {
        this.id = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTeamMemberInformations(param1);
    }

    public serializeAs_FightTeamMemberInformations(param1: ICustomDataOutput): void {
        param1.writeInt(this.id);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTeamMemberInformations(param1);
    }

    public deserializeAs_FightTeamMemberInformations(param1: ICustomDataInput): void {
        this.id = param1.readInt();

    }
}

export = FightTeamMemberInformations;
