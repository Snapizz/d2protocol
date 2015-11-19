/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GuildFightJoinRequestMessage = require('./guild-fight-join-request-message');
declare class GuildFightTakePlaceRequestMessage extends GuildFightJoinRequestMessage {
    static ID: number;
    replacedCharacterId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildFightTakePlaceRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildFightTakePlaceRequestMessage(param1: ICustomDataInput): void;
}
export = GuildFightTakePlaceRequestMessage;
