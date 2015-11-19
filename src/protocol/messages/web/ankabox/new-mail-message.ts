/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import MailStatusMessage = require('./mail-status-message');

class NewMailMessage extends MailStatusMessage {
    public static ID: number = 6292;

    sendersAccountId: number[];

    constructor() {
        this.sendersAccountId = [];
        super();
    }

    public getMessageId(): number {
        return NewMailMessage.ID;
    }

    public reset(): void {
        this.sendersAccountId = [];
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
        this.serializeAs_NewMailMessage(param1);
    }

    public serializeAs_NewMailMessage(param1: ICustomDataOutput): void {
        super.serializeAs_MailStatusMessage(param1);
        param1.writeShort(this.sendersAccountId.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.sendersAccountId.length) {
            if (this.sendersAccountId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.sendersAccountId[_loc2_] + ') on element 1 (starting at 1) of sendersAccountId.');
            }
            param1.writeInt(this.sendersAccountId[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NewMailMessage(param1);
    }

    public deserializeAs_NewMailMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of sendersAccountId.');
            }
            this.sendersAccountId.push(_loc4_);
            _loc3_++;
        }

    }
}

export = NewMailMessage;
