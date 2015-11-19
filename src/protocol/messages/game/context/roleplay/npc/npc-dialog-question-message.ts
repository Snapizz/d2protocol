/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class NpcDialogQuestionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5617;

    messageId: number;
    dialogParams: string[];
    visibleReplies: number[];

    constructor() {
        this.messageId = 0;
        this.dialogParams = [];
        this.visibleReplies = [];
        super();
    }

    public getMessageId(): number {
        return NpcDialogQuestionMessage.ID;
    }

    public reset(): void {
        this.messageId = 0;
        this.dialogParams = [];
        this.visibleReplies = [];
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
        this.serializeAs_NpcDialogQuestionMessage(param1);
    }

    public serializeAs_NpcDialogQuestionMessage(param1: ICustomDataOutput): void {
        if (this.messageId < 0) {
            throw new Error('Forbidden value (' + this.messageId + ') on element messageId.');
        }
        param1.writeVarShort(this.messageId);
        param1.writeShort(this.dialogParams.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.dialogParams.length) {
            param1.writeUTF(this.dialogParams[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.visibleReplies.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.visibleReplies.length) {
            if (this.visibleReplies[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.visibleReplies[_loc3_] + ') on element 3 (starting at 1) of visibleReplies.');
            }
            param1.writeVarShort(this.visibleReplies[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NpcDialogQuestionMessage(param1);
    }

    public deserializeAs_NpcDialogQuestionMessage(param1: ICustomDataInput): void {
        var _loc6_: string = null;
        var _loc7_: number = 0;
        this.messageId = param1.readVarUhShort();
        if (this.messageId < 0) {
            throw new Error('Forbidden value (' + this.messageId + ') on element of NpcDialogQuestionMessage.messageId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUTF();
            this.dialogParams.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of visibleReplies.');
            }
            this.visibleReplies.push(_loc7_);
            _loc5_++;
        }

    }
}

export = NpcDialogQuestionMessage;
