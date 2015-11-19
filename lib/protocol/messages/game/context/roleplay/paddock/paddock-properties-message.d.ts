/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import PaddockInformations = require('../../../../../types/game/paddock/paddock-informations');
declare class PaddockPropertiesMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    properties: PaddockInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PaddockPropertiesMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PaddockPropertiesMessage(param1: ICustomDataInput): void;
}
export = PaddockPropertiesMessage;
