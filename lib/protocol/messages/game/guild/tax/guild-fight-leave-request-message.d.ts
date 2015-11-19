/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class GuildFightLeaveRequestMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    taxCollectorId: number;
    characterId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildFightLeaveRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildFightLeaveRequestMessage(param1: ICustomDataInput): void;
}
export = GuildFightLeaveRequestMessage;
