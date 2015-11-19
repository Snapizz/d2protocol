/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightJoinMessage = require('./game-fight-join-message');
import NamedPartyTeam = require('../../../../types/game/context/roleplay/party/named-party-team');
declare class GameFightSpectatorJoinMessage extends GameFightJoinMessage {
    static ID: number;
    namedPartyTeams: NamedPartyTeam[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightSpectatorJoinMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightSpectatorJoinMessage(param1: ICustomDataInput): void;
}
export = GameFightSpectatorJoinMessage;
