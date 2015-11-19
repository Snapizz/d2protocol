/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTeamMemberCharacterInformations = require('./fight-team-member-character-informations');
import BasicAllianceInformations = require('../roleplay/basic-alliance-informations');
declare class FightTeamMemberWithAllianceCharacterInformations extends FightTeamMemberCharacterInformations implements INetworkType {
    static ID: number;
    allianceInfos: BasicAllianceInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataInput): void;
}
export = FightTeamMemberWithAllianceCharacterInformations;
