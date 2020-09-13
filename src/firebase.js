import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

import 'firebase/auth';

const app = firebase.initializeApp(firebaseConfig);

export default app;
