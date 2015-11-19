/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTeamLightInformations = require('./fight-team-light-informations');
import FightOptionsInformations = require('./fight-options-informations');
declare class FightExternalInformations implements INetworkType {
    static ID: number;
    fightId: number;
    fightType: number;
    fightStart: number;
    fightSpectatorLocked: boolean;
    fightTeams: FightTeamLightInformations[];
    fightTeamsOptions: FightOptionsInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightExternalInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightExternalInformations(param1: ICustomDataInput): void;
}
export = FightExternalInformations;
