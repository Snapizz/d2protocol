/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class TreasureHuntShowLegendaryUIMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6498;

    availableLegendaryIds: number[];

    constructor() {
        this.availableLegendaryIds = [];
        super();
    }

    public getMessageId(): number {
        return TreasureHuntShowLegendaryUIMessage.ID;
    }

    public reset(): void {
        this.availableLegendaryIds = [];
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
        this.serializeAs_TreasureHuntShowLegendaryUIMessage(param1);
    }

    public serializeAs_TreasureHuntShowLegendaryUIMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.availableLegendaryIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.availableLegendaryIds.length) {
            if (this.availableLegendaryIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.availableLegendaryIds[_loc2_] + ') on element 1 (starting at 1) of availableLegendaryIds.');
            }
            param1.writeVarShort(this.availableLegendaryIds[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntShowLegendaryUIMessage(param1);
    }

    public deserializeAs_TreasureHuntShowLegendaryUIMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of availableLegendaryIds.');
            }
            this.availableLegendaryIds.push(_loc4_);
            _loc3_++;
        }

    }
}

export = TreasureHuntShowLegendaryUIMessage;
