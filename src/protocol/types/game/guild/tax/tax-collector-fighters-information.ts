/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterMinimalPlusLookInformations = require('../../character/character-minimal-plus-look-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class TaxCollectorFightersInformation implements INetworkType {
    public static ID: number = 169;

    collectorId: number;
    allyCharactersInformations: CharacterMinimalPlusLookInformations[];
    enemyCharactersInformations: CharacterMinimalPlusLookInformations[];

    constructor() {
        this.collectorId = 0;
        this.allyCharactersInformations = [];
        this.enemyCharactersInformations = [];
    }

    public getTypeId(): number {
        return TaxCollectorFightersInformation.ID;
    }

    public reset(): void {
        this.collectorId = 0;
        this.allyCharactersInformations = [];
        this.enemyCharactersInformations = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TaxCollectorFightersInformation(param1);
    }

    public serializeAs_TaxCollectorFightersInformation(param1: ICustomDataOutput): void {
        param1.writeInt(this.collectorId);
        param1.writeShort(this.allyCharactersInformations.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.allyCharactersInformations.length) {
            param1.writeShort((this.allyCharactersInformations[_loc2_]).getTypeId());
            (this.allyCharactersInformations[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.enemyCharactersInformations.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.enemyCharactersInformations.length) {
            param1.writeShort((this.enemyCharactersInformations[_loc3_]).getTypeId());
            (this.enemyCharactersInformations[_loc3_]).serialize(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorFightersInformation(param1);
    }

    public deserializeAs_TaxCollectorFightersInformation(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: CharacterMinimalPlusLookInformations = null;
        var _loc8_: number = 0;
        var _loc9_: CharacterMinimalPlusLookInformations = null;
        this.collectorId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedShort();
            _loc7_ = <CharacterMinimalPlusLookInformations>ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc6_);
            _loc7_.deserialize(param1);
            this.allyCharactersInformations.push(_loc7_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc8_ = param1.readUnsignedShort();
            _loc9_ = <CharacterMinimalPlusLookInformations>ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc8_);
            _loc9_.deserialize(param1);
            this.enemyCharactersInformations.push(_loc9_);
            _loc5_++;
        }

    }
}

export = TaxCollectorFightersInformation;
