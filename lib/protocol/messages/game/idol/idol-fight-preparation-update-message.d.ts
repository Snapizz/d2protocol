/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import Idol = require('../../../types/game/idol/idol');
declare class IdolFightPreparationUpdateMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    idolSource: number;
    idols: Idol[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_IdolFightPreparationUpdateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_IdolFightPreparationUpdateMessage(param1: ICustomDataInput): void;
}
export = IdolFightPreparationUpdateMessage;
