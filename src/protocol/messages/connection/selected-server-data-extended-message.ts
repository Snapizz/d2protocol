/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import SelectedServerDataMessage = require('./selected-server-data-message');

class SelectedServerDataExtendedMessage extends SelectedServerDataMessage {
    public static ID: number = 6469;

    serverIds: number[];

    constructor() {
        this.serverIds = [];
        super();
    }

    public getMessageId(): number {
        return SelectedServerDataExtendedMessage.ID;
    }

    public reset(): void {
        this.serverIds = [];
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
        this.serializeAs_SelectedServerDataExtendedMessage(param1);
    }

    public serializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_SelectedServerDataMessage(param1);
        param1.writeShort(this.serverIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.serverIds.length) {
            if (this.serverIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.serverIds[_loc2_] + ') on element 1 (starting at 1) of serverIds.');
            }
            param1.writeVarShort(this.serverIds[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SelectedServerDataExtendedMessage(param1);
    }

    public deserializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of serverIds.');
            }
            this.serverIds.push(_loc4_);
            _loc3_++;
        }

    }
}

export = SelectedServerDataExtendedMessage;
