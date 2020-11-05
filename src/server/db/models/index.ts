
export interface Campaigns {
    id?: string;
    userid?: number;
    name?: string;
    created_at?: string
    affectedRows: number,
    insertId: 0,
    serverStatus: 2,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    changedRows: 0
}

export interface Discussions {
    id?: number;
    userid?: number;
    campaignid?: string;
    image_url: string;
    caption?: string;
    created_at?: string
    affectedRows: 14,
    insertId: 0,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    changedRows: 0
  }
  

export interface Player {
    id?: number;
    userid?: string;
    email?: string;
    password: string;
    role: number;
    created_at?: string
    affectedRows: 14,
    insertId: 0,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    changedRows: 0
}

export interface Players_campaigns {
    id?: number;
    campaignid?: string;
    created_at?: string
    affectedRows: 14,
    insertId: 0,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    changedRows: 0
}

export interface cannedResponse {
    affectedRows: number,
    insertId: 0,
    serverStatus: 2,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    changedRows: 0
  }