/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildFactSheetInformations = require('../../../types/game/social/guild-fact-sheet-informations');
import CharacterMinimalInformations = require('../../../types/game/character/character-minimal-informations');
declare class GuildFactsMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    infos: GuildFactSheetInformations;
    creationDate: number;
    nbTaxCollectors: number;
    enabled: boolean;
    members: CharacterMinimalInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildFactsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildFactsMessage(param1: ICustomDataInput): void;
}
export = GuildFactsMessage;
