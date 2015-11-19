/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeStartOkMountWithOutPaddockMessage = require('./exchange-start-ok-mount-with-out-paddock-message');
import MountClientData = require('../../../../types/game/mount/mount-client-data');
declare class ExchangeStartOkMountMessage extends ExchangeStartOkMountWithOutPaddockMessage {
    static ID: number;
    paddockedMountsDescription: MountClientData[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeStartOkMountMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeStartOkMountMessage(param1: ICustomDataInput): void;
}
export = ExchangeStartOkMountMessage;
