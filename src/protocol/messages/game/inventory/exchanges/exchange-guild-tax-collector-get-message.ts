/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItemGenericQuantity = require('../../../../types/game/data/items/object-item-generic-quantity');

class ExchangeGuildTaxCollectorGetMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5762;

    collectorName: string;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    userName: string;
    experience: number;
    objectsInfos: ObjectItemGenericQuantity[];

    constructor() {
        this.collectorName = '';
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.userName = '';
        this.experience = 0;
        this.objectsInfos = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeGuildTaxCollectorGetMessage.ID;
    }

    public reset(): void {
        this.collectorName = '';
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.userName = '';
        this.experience = 0;
        this.objectsInfos = [];
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
        this.serializeAs_ExchangeGuildTaxCollectorGetMessage(param1);
    }

    public serializeAs_ExchangeGuildTaxCollectorGetMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.collectorName);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeUTF(this.userName);
        if (this.experience < -9.007199254740992E15 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeDouble(this.experience);
        param1.writeShort(this.objectsInfos.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItemGenericQuantity(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeGuildTaxCollectorGetMessage(param1);
    }

    public deserializeAs_ExchangeGuildTaxCollectorGetMessage(param1: ICustomDataInput): void {
        var _loc4_: ObjectItemGenericQuantity = null;
        this.collectorName = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of ExchangeGuildTaxCollectorGetMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of ExchangeGuildTaxCollectorGetMessage.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of ExchangeGuildTaxCollectorGetMessage.subAreaId.');
        }
        this.userName = param1.readUTF();
        this.experience = param1.readDouble();
        if (this.experience < -9.007199254740992E15 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of ExchangeGuildTaxCollectorGetMessage.experience.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItemGenericQuantity();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeGuildTaxCollectorGetMessage;
