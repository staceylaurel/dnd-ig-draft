import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as passport from 'passport';
import routes from './routes';

import './middlewares/passport-strategies';

const app = express();

app.use(helmet());
app.use(cors());// whitelist specific origins domains or requests
app.use(compression());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
  
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
