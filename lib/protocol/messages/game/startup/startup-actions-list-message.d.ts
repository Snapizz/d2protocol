/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import StartupActionAddObject = require('../../../types/game/startup/startup-action-add-object');
declare class StartupActionsListMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    actions: StartupActionAddObject[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_StartupActionsListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_StartupActionsListMessage(param1: ICustomDataInput): void;
}
export = StartupActionsListMessage;
