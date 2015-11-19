/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractTaxCollectorListMessage = require('./abstract-tax-collector-list-message');
import TaxCollectorFightersInformation = require('../../../../types/game/guild/tax/tax-collector-fighters-information');
import TaxCollectorInformations = require('../../../../types/game/guild/tax/tax-collector-informations');

class TaxCollectorListMessage extends AbstractTaxCollectorListMessage {
    public static ID: number = 5930;

    nbcollectorMax: number;
    fightersInformations: TaxCollectorFightersInformation[];

    constructor() {
        this.nbcollectorMax = 0;
        this.fightersInformations = [];
        super();
    }

    public getMessageId(): number {
        return TaxCollectorListMessage.ID;
    }

    public reset(): void {
        this.nbcollectorMax = 0;
        this.fightersInformations = [];
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
        this.serializeAs_TaxCollectorListMessage(param1);
    }

    public serializeAs_TaxCollectorListMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractTaxCollectorListMessage(param1);
        if (this.nbcollectorMax < 0) {
            throw new Error('Forbidden value (' + this.nbcollectorMax + ') on element nbcollectorMax.');
        }
        param1.writeByte(this.nbcollectorMax);
        param1.writeShort(this.fightersInformations.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.fightersInformations.length) {
            (this.fightersInformations[_loc2_]).serializeAs_TaxCollectorFightersInformation(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorListMessage(param1);
    }

    public deserializeAs_TaxCollectorListMessage(param1: ICustomDataInput): void {
        var _loc4_: TaxCollectorFightersInformation = null;
        super.deserialize(param1);
        this.nbcollectorMax = param1.readByte();
        if (this.nbcollectorMax < 0) {
            throw new Error('Forbidden value (' + this.nbcollectorMax + ') on element of TaxCollectorListMessage.nbcollectorMax.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new TaxCollectorFightersInformation();
            _loc4_.deserialize(param1);
            this.fightersInformations.push(_loc4_);
            _loc3_++;
        }

    }
}

export = TaxCollectorListMessage;
