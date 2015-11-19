/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import IgnoredInformations = require('../../../types/game/friend/ignored-informations');
declare class IgnoredAddedMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    ignoreAdded: IgnoredInformations;
    session: boolean;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_IgnoredAddedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_IgnoredAddedMessage(param1: ICustomDataInput): void;
}
export = IgnoredAddedMessage;
