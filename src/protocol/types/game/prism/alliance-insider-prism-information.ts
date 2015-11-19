/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PrismInformation = require('./prism-information');
import ObjectItem = require('../data/items/object-item');

class AllianceInsiderPrismInformation extends PrismInformation implements INetworkType {
    public static ID: number = 431;

    lastTimeSlotModificationDate: number;
    lastTimeSlotModificationAuthorGuildId: number;
    lastTimeSlotModificationAuthorId: number;
    lastTimeSlotModificationAuthorName: string;
    modulesObjects: ObjectItem[];

    constructor() {
        this.lastTimeSlotModificationDate = 0;
        this.lastTimeSlotModificationAuthorGuildId = 0;
        this.lastTimeSlotModificationAuthorId = 0;
        this.lastTimeSlotModificationAuthorName = '';
        this.modulesObjects = [];
        super();
    }

    public getTypeId(): number {
        return AllianceInsiderPrismInformation.ID;
    }

    public reset(): void {
        this.lastTimeSlotModificationDate = 0;
        this.lastTimeSlotModificationAuthorGuildId = 0;
        this.lastTimeSlotModificationAuthorId = 0;
        this.lastTimeSlotModificationAuthorName = '';
        this.modulesObjects = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AllianceInsiderPrismInformation(param1);
    }

    public serializeAs_AllianceInsiderPrismInformation(param1: ICustomDataOutput): void {
        super.serializeAs_PrismInformation(param1);
        if (this.lastTimeSlotModificationDate < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationDate + ') on element lastTimeSlotModificationDate.');
        }
        param1.writeInt(this.lastTimeSlotModificationDate);
        if (this.lastTimeSlotModificationAuthorGuildId < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorGuildId + ') on element lastTimeSlotModificationAuthorGuildId.');
        }
        param1.writeVarInt(this.lastTimeSlotModificationAuthorGuildId);
        if (this.lastTimeSlotModificationAuthorId < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorId + ') on element lastTimeSlotModificationAuthorId.');
        }
        param1.writeVarInt(this.lastTimeSlotModificationAuthorId);
        param1.writeUTF(this.lastTimeSlotModificationAuthorName);
        param1.writeShort(this.modulesObjects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.modulesObjects.length) {
            (this.modulesObjects[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceInsiderPrismInformation(param1);
    }

    public deserializeAs_AllianceInsiderPrismInformation(param1: ICustomDataInput): void {
        var _loc4_: ObjectItem = null;
        super.deserialize(param1);
        this.lastTimeSlotModificationDate = param1.readInt();
        if (this.lastTimeSlotModificationDate < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationDate + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationDate.');
        }
        this.lastTimeSlotModificationAuthorGuildId = param1.readVarUhInt();
        if (this.lastTimeSlotModificationAuthorGuildId < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorGuildId + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorGuildId.');
        }
        this.lastTimeSlotModificationAuthorId = param1.readVarUhInt();
        if (this.lastTimeSlotModificationAuthorId < 0) {
            throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorId + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorId.');
        }
        this.lastTimeSlotModificationAuthorName = param1.readUTF();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.modulesObjects.push(_loc4_);
            _loc3_++;
        }

    }
}

export = AllianceInsiderPrismInformation;
