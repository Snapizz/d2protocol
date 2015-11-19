/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ShowCellMessage = require('./show-cell-message');
declare class ShowCellSpectatorMessage extends ShowCellMessage {
    static ID: number;
    playerName: string;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ShowCellSpectatorMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ShowCellSpectatorMessage(param1: ICustomDataInput): void;
}
export = ShowCellSpectatorMessage;
