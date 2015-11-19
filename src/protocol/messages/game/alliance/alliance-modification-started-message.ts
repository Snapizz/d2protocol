/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceModificationStartedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6444;

    canChangeName: boolean;
    canChangeTag: boolean;
    canChangeEmblem: boolean;

    constructor() {
        this.canChangeName = false;
        this.canChangeTag = false;
        this.canChangeEmblem = false;
        super();
    }

    public getMessageId(): number {
        return AllianceModificationStartedMessage.ID;
    }

    public reset(): void {
        this.canChangeName = false;
        this.canChangeTag = false;
        this.canChangeEmblem = false;
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
        this.serializeAs_AllianceModificationStartedMessage(param1);
    }

    public serializeAs_AllianceModificationStartedMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.canChangeName);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canChangeTag);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.canChangeEmblem);
        param1.writeByte(_loc2_);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceModificationStartedMessage(param1);
    }

    public deserializeAs_AllianceModificationStartedMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.canChangeName = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.canChangeTag = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.canChangeEmblem = BooleanByteWrapper.getFlag(_loc2_, 2);

    }
}

export = AllianceModificationStartedMessage;
