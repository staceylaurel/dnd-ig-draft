import { Query } from "../index";

const all = () => Query('SELECT campaigns.*, player.id FROM campaigns JOIN player ON player.id = campaigns.userid');

const one = (id: string) => Query('SELECT * FROM campaigns WHERE id = ?', [id]);

const insert = (newCampaign: {id: string, userid: string, name: string, created_at: string}) => Query('INSERT INTO campaigns SET ?', [newCampaign]);

const destroy = (id: string) => Query('DELETE FROM campaigns WHERE id = ?', [id]);


export default {
    all, 
    one,
    insert,
    destroy
}