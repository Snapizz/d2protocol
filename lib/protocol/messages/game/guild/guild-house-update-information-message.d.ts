/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import HouseInformationsForGuild = require('../../../types/game/house/house-informations-for-guild');
declare class GuildHouseUpdateInformationMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    housesInformations: HouseInformationsForGuild;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildHouseUpdateInformationMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildHouseUpdateInformationMessage(param1: ICustomDataInput): void;
}
export = GuildHouseUpdateInformationMessage;
