/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import KrosmasterFigure = require('../../../types/web/krosmaster/krosmaster-figure');

class KrosmasterInventoryMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6350;

    figures: KrosmasterFigure[];

    constructor() {
        this.figures = [];
        super();
    }

    public getMessageId(): number {
        return KrosmasterInventoryMessage.ID;
    }

    public reset(): void {
        this.figures = [];
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
        this.serializeAs_KrosmasterInventoryMessage(param1);
    }

    public serializeAs_KrosmasterInventoryMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.figures.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.figures.length) {
            (this.figures[_loc2_]).serializeAs_KrosmasterFigure(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_KrosmasterInventoryMessage(param1);
    }

    public deserializeAs_KrosmasterInventoryMessage(param1: ICustomDataInput): void {
        var _loc4_: KrosmasterFigure = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new KrosmasterFigure();
            _loc4_.deserialize(param1);
            this.figures.push(_loc4_);
            _loc3_++;
        }

    }
}

export = KrosmasterInventoryMessage;
