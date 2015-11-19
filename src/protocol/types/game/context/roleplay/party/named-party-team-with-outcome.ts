/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import NamedPartyTeam = require('./named-party-team');

class NamedPartyTeamWithOutcome implements INetworkType {
    public static ID: number = 470;

    team: NamedPartyTeam;
    outcome: number;

    constructor() {
        this.team = new NamedPartyTeam();
        this.outcome = 0;
    }

    public getTypeId(): number {
        return NamedPartyTeamWithOutcome.ID;
    }

    public reset(): void {
        this.team = new NamedPartyTeam();
        this.outcome = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_NamedPartyTeamWithOutcome(param1);
    }

    public serializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataOutput): void {
        this.team.serializeAs_NamedPartyTeam(param1);
        param1.writeVarShort(this.outcome);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NamedPartyTeamWithOutcome(param1);
    }

    public deserializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataInput): void {
        this.team = new NamedPartyTeam();
        this.team.deserialize(param1);
        this.outcome = param1.readVarUhShort();
        if (this.outcome < 0) {
            throw new Error('Forbidden value (' + this.outcome + ') on element of NamedPartyTeamWithOutcome.outcome.');
        }

    }
}

export = NamedPartyTeamWithOutcome;
