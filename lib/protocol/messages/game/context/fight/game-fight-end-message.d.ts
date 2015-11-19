/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightResultListEntry = require('../../../../types/game/context/fight/fight-result-list-entry');
import NamedPartyTeamWithOutcome = require('../../../../types/game/context/roleplay/party/named-party-team-with-outcome');
declare class GameFightEndMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    duration: number;
    ageBonus: number;
    lootShareLimitMalus: number;
    results: FightResultListEntry[];
    namedPartyTeamsOutcomes: NamedPartyTeamWithOutcome[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightEndMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightEndMessage(param1: ICustomDataInput): void;
}
export = GameFightEndMessage;
