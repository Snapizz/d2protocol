/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamInformations = require('./fight-team-informations');

class FightAllianceTeamInformations extends FightTeamInformations implements INetworkType {
    public static ID: number = 439;

    relation: number;

    constructor() {
        this.relation = 0;
        super();
    }

    public getTypeId(): number {
        return FightAllianceTeamInformations.ID;
    }

    public reset(): void {
        this.relation = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightAllianceTeamInformations(param1);
    }

    public serializeAs_FightAllianceTeamInformations(param1: ICustomDataOutput): void {
        super.serializeAs_FightTeamInformations(param1);
        param1.writeByte(this.relation);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightAllianceTeamInformations(param1);
    }

    public deserializeAs_FightAllianceTeamInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.relation = param1.readByte();
        if (this.relation < 0) {
            throw new Error('Forbidden value (' + this.relation + ') on element of FightAllianceTeamInformations.relation.');
        }

    }
}

export = FightAllianceTeamInformations;
