/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PrismInformation = require('./prism-information');
import PrismSubareaEmptyInfo = require('./prism-subarea-empty-info');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class PrismGeolocalizedInformation extends PrismSubareaEmptyInfo implements INetworkType {
    public static ID: number = 434;

    worldX: number;
    worldY: number;
    mapId: number;
    prism: PrismInformation;

    constructor() {
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.prism = new PrismInformation();
        super();
    }

    public getTypeId(): number {
        return PrismGeolocalizedInformation.ID;
    }

    public reset(): void {
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.prism = new PrismInformation();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PrismGeolocalizedInformation(param1);
    }

    public serializeAs_PrismGeolocalizedInformation(param1: ICustomDataOutput): void {
        super.serializeAs_PrismSubareaEmptyInfo(param1);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        param1.writeShort(this.prism.getTypeId());
        this.prism.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismGeolocalizedInformation(param1);
    }

    public deserializeAs_PrismGeolocalizedInformation(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PrismGeolocalizedInformation.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PrismGeolocalizedInformation.worldY.');
        }
        this.mapId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        this.prism = <PrismInformation>ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
        this.prism.deserialize(param1);

    }
}

export = PrismGeolocalizedInformation;
