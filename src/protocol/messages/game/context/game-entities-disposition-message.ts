/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import IdentifiedEntityDispositionInformations = require('../../../types/game/context/identified-entity-disposition-informations');

class GameEntitiesDispositionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5696;

    dispositions: IdentifiedEntityDispositionInformations[];

    constructor() {
        this.dispositions = [];
        super();
    }

    public getMessageId(): number {
        return GameEntitiesDispositionMessage.ID;
    }

    public reset(): void {
        this.dispositions = [];
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
        this.serializeAs_GameEntitiesDispositionMessage(param1);
    }

    public serializeAs_GameEntitiesDispositionMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.dispositions.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.dispositions.length) {
            (this.dispositions[_loc2_]).serializeAs_IdentifiedEntityDispositionInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameEntitiesDispositionMessage(param1);
    }

    public deserializeAs_GameEntitiesDispositionMessage(param1: ICustomDataInput): void {
        var _loc4_: IdentifiedEntityDispositionInformations = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new IdentifiedEntityDispositionInformations();
            _loc4_.deserialize(param1);
            this.dispositions.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GameEntitiesDispositionMessage;
