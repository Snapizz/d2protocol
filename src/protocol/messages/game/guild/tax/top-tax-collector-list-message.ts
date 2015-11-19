/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractTaxCollectorListMessage = require('./abstract-tax-collector-list-message');
import TaxCollectorInformations = require('../../../../types/game/guild/tax/tax-collector-informations');

class TopTaxCollectorListMessage extends AbstractTaxCollectorListMessage {
    public static ID: number = 6565;

    isDungeon: boolean;

    constructor() {
        this.isDungeon = false;
        super();
    }

    public getMessageId(): number {
        return TopTaxCollectorListMessage.ID;
    }

    public reset(): void {
        this.isDungeon = false;
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
        this.serializeAs_TopTaxCollectorListMessage(param1);
    }

    public serializeAs_TopTaxCollectorListMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractTaxCollectorListMessage(param1);
        param1.writeBoolean(this.isDungeon);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TopTaxCollectorListMessage(param1);
    }

    public deserializeAs_TopTaxCollectorListMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.isDungeon = param1.readBoolean();

    }
}

export = TopTaxCollectorListMessage;
