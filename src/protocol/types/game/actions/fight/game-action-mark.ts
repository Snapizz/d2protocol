/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameActionMarkedCell = require('./game-action-marked-cell');

class GameActionMark implements INetworkType {
    public static ID: number = 351;

    markAuthorId: number;
    markTeamId: number;
    markSpellId: number;
    markSpellLevel: number;
    markId: number;
    markType: number;
    markimpactCell: number;
    cells: GameActionMarkedCell[];
    active: boolean;

    constructor() {
        this.markAuthorId = 0;
        this.markTeamId = 2;
        this.markSpellId = 0;
        this.markSpellLevel = 0;
        this.markId = 0;
        this.markType = 0;
        this.markimpactCell = 0;
        this.cells = [];
        this.active = false;
    }

    public getTypeId(): number {
        return GameActionMark.ID;
    }

    public reset(): void {
        this.markAuthorId = 0;
        this.markTeamId = 2;
        this.markSpellId = 0;
        this.markSpellLevel = 0;
        this.markId = 0;
        this.markType = 0;
        this.markimpactCell = 0;
        this.cells = [];
        this.active = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameActionMark(param1);
    }

    public serializeAs_GameActionMark(param1: ICustomDataOutput): void {
        param1.writeInt(this.markAuthorId);
        param1.writeByte(this.markTeamId);
        if (this.markSpellId < 0) {
            throw new Error('Forbidden value (' + this.markSpellId + ') on element markSpellId.');
        }
        param1.writeInt(this.markSpellId);
        if (this.markSpellLevel < 1 || this.markSpellLevel > 6) {
            throw new Error('Forbidden value (' + this.markSpellLevel + ') on element markSpellLevel.');
        }
        param1.writeByte(this.markSpellLevel);
        param1.writeShort(this.markId);
        param1.writeByte(this.markType);
        if (this.markimpactCell < -1 || this.markimpactCell > 559) {
            throw new Error('Forbidden value (' + this.markimpactCell + ') on element markimpactCell.');
        }
        param1.writeShort(this.markimpactCell);
        param1.writeShort(this.cells.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.cells.length) {
            (this.cells[_loc2_]).serializeAs_GameActionMarkedCell(param1);
            _loc2_++;
        }
        param1.writeBoolean(this.active);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionMark(param1);
    }

    public deserializeAs_GameActionMark(param1: ICustomDataInput): void {
        var _loc4_: GameActionMarkedCell = null;
        this.markAuthorId = param1.readInt();
        this.markTeamId = param1.readByte();
        if (this.markTeamId < 0) {
            throw new Error('Forbidden value (' + this.markTeamId + ') on element of GameActionMark.markTeamId.');
        }
        this.markSpellId = param1.readInt();
        if (this.markSpellId < 0) {
            throw new Error('Forbidden value (' + this.markSpellId + ') on element of GameActionMark.markSpellId.');
        }
        this.markSpellLevel = param1.readByte();
        if (this.markSpellLevel < 1 || this.markSpellLevel > 6) {
            throw new Error('Forbidden value (' + this.markSpellLevel + ') on element of GameActionMark.markSpellLevel.');
        }
        this.markId = param1.readShort();
        this.markType = param1.readByte();
        this.markimpactCell = param1.readShort();
        if (this.markimpactCell < -1 || this.markimpactCell > 559) {
            throw new Error('Forbidden value (' + this.markimpactCell + ') on element of GameActionMark.markimpactCell.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new GameActionMarkedCell();
            _loc4_.deserialize(param1);
            this.cells.push(_loc4_);
            _loc3_++;
        }
        this.active = param1.readBoolean();

    }
}

export = GameActionMark;
