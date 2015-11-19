/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../../custom-data-wrapper';
import GuildInformations = require('../../../../../../types/game/context/roleplay/guild-informations');
declare class HouseGuildRightsMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    houseId: number;
    guildInfo: GuildInformations;
    rights: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseGuildRightsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseGuildRightsMessage(param1: ICustomDataInput): void;
}
export = HouseGuildRightsMessage;
