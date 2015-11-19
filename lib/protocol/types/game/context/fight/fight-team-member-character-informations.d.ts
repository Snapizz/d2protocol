/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTeamMemberInformations = require('./fight-team-member-informations');
declare class FightTeamMemberCharacterInformations extends FightTeamMemberInformations implements INetworkType {
    static ID: number;
    name: string;
    level: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataInput): void;
}
export = FightTeamMemberCharacterInformations;
