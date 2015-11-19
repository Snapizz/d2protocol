/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Idol = require('../../../types/game/idol/idol');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class IdolFightPreparationUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6586;

    idolSource: number;
    idols: Idol[];

    constructor() {
        this.idolSource = 0;
        this.idols = [];
        super();
    }

    public getMessageId(): number {
        return IdolFightPreparationUpdateMessage.ID;
    }

    public reset(): void {
        this.idolSource = 0;
        this.idols = [];
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
        this.serializeAs_IdolFightPreparationUpdateMessage(param1);
    }

    public serializeAs_IdolFightPreparationUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.idolSource);
        param1.writeShort(this.idols.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.idols.length) {
            param1.writeShort((this.idols[_loc2_]).getTypeId());
            (this.idols[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdolFightPreparationUpdateMessage(param1);
    }

    public deserializeAs_IdolFightPreparationUpdateMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: Idol = null;
        this.idolSource = param1.readByte();
        if (this.idolSource < 0) {
            throw new Error('Forbidden value (' + this.idolSource + ') on element of IdolFightPreparationUpdateMessage.idolSource.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <Idol>ProtocolTypeManager.getInstance(Idol, _loc4_);
            _loc5_.deserialize(param1);
            this.idols.push(_loc5_);
            _loc3_++;
        }

    }
}

export = IdolFightPreparationUpdateMessage;
