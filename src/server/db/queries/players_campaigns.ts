import { Query } from "../index";

const all = () => Query('SELECT players_campaigns.*, player.id FROM players_campaigns JOIN player ON player.id = players_campaigns.userid');

const one = (id: string) => Query('SELECT * FROM players_campaigns WHERE id = ?', [id]);

const insert = (newPlayer_Campaign: {campaignid: string, userid: string, created_at: string}) => Query('INSERT INTO players_campaigns SET ?', [newPlayer_Campaign]);

const destroy = (id: string) => Query('DELETE FROM players_campaigns WHERE id = ?', [id]);


export default {
    all, 
    one,
    insert,
    destroy
}