/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class GuildInformationsGeneralMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    enabled: boolean;
    abandonnedPaddock: boolean;
    level: number;
    expLevelFloor: number;
    experience: number;
    expNextLevelFloor: number;
    creationDate: number;
    nbTotalMembers: number;
    nbConnectedMembers: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInformationsGeneralMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInformationsGeneralMessage(param1: ICustomDataInput): void;
}
export = GuildInformationsGeneralMessage;
