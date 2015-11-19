/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTeamMemberInformations = require('./fight-team-member-informations');
import AbstractFightTeamInformations = require('./abstract-fight-team-informations');
declare class FightTeamInformations extends AbstractFightTeamInformations implements INetworkType {
    static ID: number;
    teamMembers: FightTeamMemberInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTeamInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTeamInformations(param1: ICustomDataInput): void;
}
export = FightTeamInformations;
