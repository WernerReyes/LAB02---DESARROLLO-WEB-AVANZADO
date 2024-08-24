import { fileURLToPath } from 'url';
import path from 'path';

export class Controller {
    constructor() {
        this.__dirname = path.dirname(fileURLToPath(import.meta.url));
    }

    getHome = (req, res) => {
        res.sendFile(path.join(this.__dirname, '/static/index.html'));
    }

    getAbout = (req, res) => {
        res.sendFile(path.join(this.__dirname, '/static/about.html'));
    }

    getContact = (req, res) => {
        res.sendFile(path.join(this.__dirname, '/static/contact.html'));
    }
}
