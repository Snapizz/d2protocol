/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import NamedPartyTeam = require('./named-party-team');
declare class NamedPartyTeamWithOutcome implements INetworkType {
    static ID: number;
    team: NamedPartyTeam;
    outcome: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataInput): void;
}
export = NamedPartyTeamWithOutcome;
