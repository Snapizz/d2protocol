/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class StartupActionFinishedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1304;

    success: boolean;
    actionId: number;
    automaticAction: boolean;

    constructor() {
        this.success = false;
        this.actionId = 0;
        this.automaticAction = false;
        super();
    }

    public getMessageId(): number {
        return StartupActionFinishedMessage.ID;
    }

    public reset(): void {
        this.success = false;
        this.actionId = 0;
        this.automaticAction = false;
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_StartupActionFinishedMessage(param1);
    }

    public serializeAs_StartupActionFinishedMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.success);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.automaticAction);
        param1.writeByte(_loc2_);
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeInt(this.actionId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StartupActionFinishedMessage(param1);
    }

    public deserializeAs_StartupActionFinishedMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.success = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.automaticAction = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.actionId = param1.readInt();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of StartupActionFinishedMessage.actionId.');
        }

    }
}

export = StartupActionFinishedMessage;
