/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class StatsUpgradeRequestMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    useAdditionnal: boolean;
    statId: number;
    boostPoint: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_StatsUpgradeRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_StatsUpgradeRequestMessage(param1: ICustomDataInput): void;
}
export = StatsUpgradeRequestMessage;
