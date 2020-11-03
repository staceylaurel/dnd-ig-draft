import {Query} from '../index';

const find = (column: string, value: string | number) => 
Query("SELECT * FROM player WHERE ?? =?", [column, value]);

const insert = (newPlayer: { id: number; username: string; role: number}) => 
Query("INSERT INTO player SET ?", newPlayer);

export default {
    find, 
    insert
}