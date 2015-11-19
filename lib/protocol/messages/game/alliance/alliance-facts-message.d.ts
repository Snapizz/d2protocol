/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations');
import GuildInAllianceInformations = require('../../../types/game/context/roleplay/guild-in-alliance-informations');
declare class AllianceFactsMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    infos: AllianceFactSheetInformations;
    guilds: GuildInAllianceInformations[];
    controlledSubareaIds: number[];
    leaderCharacterId: number;
    leaderCharacterName: string;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceFactsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceFactsMessage(param1: ICustomDataInput): void;
}
export = AllianceFactsMessage;
