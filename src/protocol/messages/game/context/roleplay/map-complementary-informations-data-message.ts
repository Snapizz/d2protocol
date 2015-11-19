/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HouseInformations = require('../../../../types/game/house/house-informations');
import GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations');
import InteractiveElement = require('../../../../types/game/interactive/interactive-element');
import StatedElement = require('../../../../types/game/interactive/stated-element');
import MapObstacle = require('../../../../types/game/interactive/map-obstacle');
import FightCommonInformations = require('../../../../types/game/context/fight/fight-common-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class MapComplementaryInformationsDataMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 226;

    subAreaId: number;
    mapId: number;
    houses: HouseInformations[];
    actors: GameRolePlayActorInformations[];
    interactiveElements: InteractiveElement[];
    statedElements: StatedElement[];
    obstacles: MapObstacle[];
    fights: FightCommonInformations[];

    constructor() {
        this.subAreaId = 0;
        this.mapId = 0;
        this.houses = [];
        this.actors = [];
        this.interactiveElements = [];
        this.statedElements = [];
        this.obstacles = [];
        this.fights = [];
        super();
    }

    public getMessageId(): number {
        return MapComplementaryInformationsDataMessage.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
        this.mapId = 0;
        this.houses = [];
        this.actors = [];
        this.interactiveElements = [];
        this.statedElements = [];
        this.obstacles = [];
        this.fights = [];
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
        this.serializeAs_MapComplementaryInformationsDataMessage(param1);
    }

    public serializeAs_MapComplementaryInformationsDataMessage(param1: ICustomDataOutput): void {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
        param1.writeShort(this.houses.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.houses.length) {
            param1.writeShort((this.houses[_loc2_]).getTypeId());
            (this.houses[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.actors.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.actors.length) {
            param1.writeShort((this.actors[_loc3_]).getTypeId());
            (this.actors[_loc3_]).serialize(param1);
            _loc3_++;
        }
        param1.writeShort(this.interactiveElements.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.interactiveElements.length) {
            param1.writeShort((this.interactiveElements[_loc4_]).getTypeId());
            (this.interactiveElements[_loc4_]).serialize(param1);
            _loc4_++;
        }
        param1.writeShort(this.statedElements.length);
        var _loc5_: number = 0;
        while (_loc5_ < this.statedElements.length) {
            (this.statedElements[_loc5_]).serializeAs_StatedElement(param1);
            _loc5_++;
        }
        param1.writeShort(this.obstacles.length);
        var _loc6_: number = 0;
        while (_loc6_ < this.obstacles.length) {
            (this.obstacles[_loc6_]).serializeAs_MapObstacle(param1);
            _loc6_++;
        }
        param1.writeShort(this.fights.length);
        var _loc7_: number = 0;
        while (_loc7_ < this.fights.length) {
            (this.fights[_loc7_]).serializeAs_FightCommonInformations(param1);
            _loc7_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapComplementaryInformationsDataMessage(param1);
    }

    public deserializeAs_MapComplementaryInformationsDataMessage(param1: ICustomDataInput): void {
        var _loc14_: number = 0;
        var _loc15_: HouseInformations = null;
        var _loc16_: number = 0;
        var _loc17_: GameRolePlayActorInformations = null;
        var _loc18_: number = 0;
        var _loc19_: InteractiveElement = null;
        var _loc20_: StatedElement = null;
        var _loc21_: MapObstacle = null;
        var _loc22_: FightCommonInformations = null;
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of MapComplementaryInformationsDataMessage.subAreaId.');
        }
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of MapComplementaryInformationsDataMessage.mapId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc14_ = param1.readUnsignedShort();
            _loc15_ = <HouseInformations>ProtocolTypeManager.getInstance(HouseInformations, _loc14_);
            _loc15_.deserialize(param1);
            this.houses.push(_loc15_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc16_ = param1.readUnsignedShort();
            _loc17_ = <GameRolePlayActorInformations>ProtocolTypeManager.getInstance(GameRolePlayActorInformations, _loc16_);
            _loc17_.deserialize(param1);
            this.actors.push(_loc17_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc18_ = param1.readUnsignedShort();
            _loc19_ = <InteractiveElement>ProtocolTypeManager.getInstance(InteractiveElement, _loc18_);
            _loc19_.deserialize(param1);
            this.interactiveElements.push(_loc19_);
            _loc7_++;
        }
        var _loc8_: number = param1.readUnsignedShort();
        var _loc9_: number = 0;
        while (_loc9_ < _loc8_) {
        _loc20_ = new StatedElement();
            _loc20_.deserialize(param1);
            this.statedElements.push(_loc20_);
            _loc9_++;
        }
        var _loc10_: number = param1.readUnsignedShort();
        var _loc11_: number = 0;
        while (_loc11_ < _loc10_) {
        _loc21_ = new MapObstacle();
            _loc21_.deserialize(param1);
            this.obstacles.push(_loc21_);
            _loc11_++;
        }
        var _loc12_: number = param1.readUnsignedShort();
        var _loc13_: number = 0;
        while (_loc13_ < _loc12_) {
        _loc22_ = new FightCommonInformations();
            _loc22_.deserialize(param1);
            this.fights.push(_loc22_);
            _loc13_++;
        }

    }
}

export = MapComplementaryInformationsDataMessage;
