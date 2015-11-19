/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PrismFightersInformation = require('../../../types/game/prism/prism-fighters-information');
declare class PrismFightAddedMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    fight: PrismFightersInformation;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PrismFightAddedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PrismFightAddedMessage(param1: ICustomDataInput): void;
}
export = PrismFightAddedMessage;
