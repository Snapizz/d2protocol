/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class TitlesAndOrnamentsListMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    titles: number[];
    ornaments: number[];
    activeTitle: number;
    activeOrnament: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TitlesAndOrnamentsListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TitlesAndOrnamentsListMessage(param1: ICustomDataInput): void;
}
export = TitlesAndOrnamentsListMessage;
