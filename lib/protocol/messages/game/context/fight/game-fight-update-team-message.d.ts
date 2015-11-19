/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTeamInformations = require('../../../../types/game/context/fight/fight-team-informations');
declare class GameFightUpdateTeamMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    fightId: number;
    team: FightTeamInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightUpdateTeamMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightUpdateTeamMessage(param1: ICustomDataInput): void;
}
export = GameFightUpdateTeamMessage;
