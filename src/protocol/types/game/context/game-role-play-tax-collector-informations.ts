/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import TaxCollectorStaticInformations = require('./tax-collector-static-informations');
import GameRolePlayActorInformations = require('./roleplay/game-role-play-actor-informations');
import EntityLook = require('../look/entity-look');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class GameRolePlayTaxCollectorInformations extends GameRolePlayActorInformations implements INetworkType {
    public static ID: number = 148;

    identification: TaxCollectorStaticInformations;
    guildLevel: number;
    taxCollectorAttack: number;

    constructor() {
        this.identification = new TaxCollectorStaticInformations();
        this.guildLevel = 0;
        this.taxCollectorAttack = 0;
        super();
    }

    public getTypeId(): number {
        return GameRolePlayTaxCollectorInformations.ID;
    }

    public reset(): void {
        this.identification = new TaxCollectorStaticInformations();
        this.guildLevel = 0;
        this.taxCollectorAttack = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayTaxCollectorInformations(param1);
    }

    public serializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayActorInformations(param1);
        param1.writeShort(this.identification.getTypeId());
        this.identification.serialize(param1);
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
        }
        param1.writeByte(this.guildLevel);
        param1.writeInt(this.taxCollectorAttack);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayTaxCollectorInformations(param1);
    }

    public deserializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        this.identification = <TaxCollectorStaticInformations>ProtocolTypeManager.getInstance(TaxCollectorStaticInformations, _loc2_);
        this.identification.deserialize(param1);
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element of GameRolePlayTaxCollectorInformations.guildLevel.');
        }
        this.taxCollectorAttack = param1.readInt();

    }
}

export = GameRolePlayTaxCollectorInformations;
