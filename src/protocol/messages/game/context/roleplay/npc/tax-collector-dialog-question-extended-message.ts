/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TaxCollectorDialogQuestionBasicMessage = require('./tax-collector-dialog-question-basic-message');
import BasicGuildInformations = require('../../../../../types/game/context/roleplay/basic-guild-informations');

class TaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionBasicMessage {
    public static ID: number = 5615;

    maxPods: number;
    prospecting: number;
    wisdom: number;
    taxCollectorsCount: number;
    taxCollectorAttack: number;
    kamas: number;
    experience: number;
    pods: number;
    itemsValue: number;

    constructor() {
        this.maxPods = 0;
        this.prospecting = 0;
        this.wisdom = 0;
        this.taxCollectorsCount = 0;
        this.taxCollectorAttack = 0;
        this.kamas = 0;
        this.experience = 0;
        this.pods = 0;
        this.itemsValue = 0;
        super();
    }

    public getMessageId(): number {
        return TaxCollectorDialogQuestionExtendedMessage.ID;
    }

    public reset(): void {
        this.maxPods = 0;
        this.prospecting = 0;
        this.wisdom = 0;
        this.taxCollectorsCount = 0;
        this.taxCollectorAttack = 0;
        this.kamas = 0;
        this.experience = 0;
        this.pods = 0;
        this.itemsValue = 0;
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
        this.serializeAs_TaxCollectorDialogQuestionExtendedMessage(param1);
    }

    public serializeAs_TaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_TaxCollectorDialogQuestionBasicMessage(param1);
        if (this.maxPods < 0) {
            throw new Error('Forbidden value (' + this.maxPods + ') on element maxPods.');
        }
        param1.writeVarShort(this.maxPods);
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
        }
        param1.writeVarShort(this.prospecting);
        if (this.wisdom < 0) {
            throw new Error('Forbidden value (' + this.wisdom + ') on element wisdom.');
        }
        param1.writeVarShort(this.wisdom);
        if (this.taxCollectorsCount < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorsCount + ') on element taxCollectorsCount.');
        }
        param1.writeByte(this.taxCollectorsCount);
        param1.writeInt(this.taxCollectorAttack);
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
        }
        param1.writeVarInt(this.kamas);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeVarLong(this.experience);
        if (this.pods < 0) {
            throw new Error('Forbidden value (' + this.pods + ') on element pods.');
        }
        param1.writeVarInt(this.pods);
        if (this.itemsValue < 0) {
            throw new Error('Forbidden value (' + this.itemsValue + ') on element itemsValue.');
        }
        param1.writeVarInt(this.itemsValue);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorDialogQuestionExtendedMessage(param1);
    }

    public deserializeAs_TaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.maxPods = param1.readVarUhShort();
        if (this.maxPods < 0) {
            throw new Error('Forbidden value (' + this.maxPods + ') on element of TaxCollectorDialogQuestionExtendedMessage.maxPods.');
        }
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element of TaxCollectorDialogQuestionExtendedMessage.prospecting.');
        }
        this.wisdom = param1.readVarUhShort();
        if (this.wisdom < 0) {
            throw new Error('Forbidden value (' + this.wisdom + ') on element of TaxCollectorDialogQuestionExtendedMessage.wisdom.');
        }
        this.taxCollectorsCount = param1.readByte();
        if (this.taxCollectorsCount < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorsCount + ') on element of TaxCollectorDialogQuestionExtendedMessage.taxCollectorsCount.');
        }
        this.taxCollectorAttack = param1.readInt();
        this.kamas = param1.readVarUhInt();
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element of TaxCollectorDialogQuestionExtendedMessage.kamas.');
        }
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of TaxCollectorDialogQuestionExtendedMessage.experience.');
        }
        this.pods = param1.readVarUhInt();
        if (this.pods < 0) {
            throw new Error('Forbidden value (' + this.pods + ') on element of TaxCollectorDialogQuestionExtendedMessage.pods.');
        }
        this.itemsValue = param1.readVarUhInt();
        if (this.itemsValue < 0) {
            throw new Error('Forbidden value (' + this.itemsValue + ') on element of TaxCollectorDialogQuestionExtendedMessage.itemsValue.');
        }

    }
}

export = TaxCollectorDialogQuestionExtendedMessage;
