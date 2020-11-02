import { Query } from "../index";

const all = () => Query('SELECT discussions.*, player.id FROM discussions JOIN player ON player.id = discussions.userid');

const one = (id: number) => Query('SELECT discussions.*, player.id FROM discussions JOIN player ON player.id = discussions.userid WHERE discussions.id = ?', [id]);

const insert = (newDiscussion: {userid: string, image_url: string, caption: string, created_at: string}) => Query('INSERT INTO discussions SET ?', [newDiscussion]);

const update = (editedDiscussion: {userid?: string, image_url?: string, caption?: string, created_at?: string}, id: number) => Query('UPDATE discussions SET ? WHERE id = ?', [editedDiscussion, id]);

const destroy = (id: number) => Query('DELETE FROM discussions WHERE id = ?', [id]);


export default {
    all, 
    one,
    insert,
    update,
    destroy
}