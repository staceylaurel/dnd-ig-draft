import {Query} from '../index';

const find = (column: string, value: string | number) => 
Query("SELECT * FROM players_campaigns WHERE ?? =?", [column, value]);

const insert = (newPlayers_campaigns: { userid: number; campaignid: string}) => 
Query("INSERT INTO players_campaigns SET ?", newPlayers_campaigns);

export default {
    find, 
    insert
}