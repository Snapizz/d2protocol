/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CompassUpdateMessage = require('./compass-update-message');
declare class CompassUpdatePvpSeekMessage extends CompassUpdateMessage {
    static ID: number;
    memberId: number;
    memberName: string;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CompassUpdatePvpSeekMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CompassUpdatePvpSeekMessage(param1: ICustomDataInput): void;
}
export = CompassUpdatePvpSeekMessage;
