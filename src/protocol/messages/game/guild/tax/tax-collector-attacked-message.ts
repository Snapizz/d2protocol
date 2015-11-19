/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import BasicGuildInformations = require('../../../../types/game/context/roleplay/basic-guild-informations');

class TaxCollectorAttackedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5918;

    firstNameId: number;
    lastNameId: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    guild: BasicGuildInformations;

    constructor() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.guild = new BasicGuildInformations();
        super();
    }

    public getMessageId(): number {
        return TaxCollectorAttackedMessage.ID;
    }

    public reset(): void {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.guild = new BasicGuildInformations();
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
        this.serializeAs_TaxCollectorAttackedMessage(param1);
    }

    public serializeAs_TaxCollectorAttackedMessage(param1: ICustomDataOutput): void {
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
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
        this.guild.serializeAs_BasicGuildInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorAttackedMessage(param1);
    }

    public deserializeAs_TaxCollectorAttackedMessage(param1: ICustomDataInput): void {
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of TaxCollectorAttackedMessage.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorAttackedMessage.lastNameId.');
        }
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of TaxCollectorAttackedMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of TaxCollectorAttackedMessage.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of TaxCollectorAttackedMessage.subAreaId.');
        }
        this.guild = new BasicGuildInformations();
        this.guild.deserialize(param1);

    }
}

export = TaxCollectorAttackedMessage;
