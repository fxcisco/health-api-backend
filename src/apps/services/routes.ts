import express from 'express';
import { Doctors, News, Users } from './controllers';


const router = express.Router();

// GENERAL
router.get( '/news/recent', News.recentNews);

router.post('/users/subscribe', Users.subscribeEmail);
router.post('/users/contact', Users.contactRep);

router.get('/doctors', Doctors.getDoctors);
router.get('/doctors/:docId/schedule', Doctors.getDoctorApps);


export { router as drugRouter };
