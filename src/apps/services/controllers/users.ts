import { __prod__ } from '@/config';
import { asyncHandler, BadRequestError } from '@/common';

const subscribers: string[] = [];

// @desc      Query for a drug
export const subscribeEmail = [
  asyncHandler(async (req, res, next) => {
    try {
      const email: string = req.body.email;
      if(!email.includes('@')) {
        throw new BadRequestError('Please provide a valid email');
      }
      if(subscribers.includes(email.trim().toLocaleLowerCase('en-US'))){
        res.json({ success: true, message: "You're already subscribed."})
      }

      res.json({ success: true, message: 'Thanks, you will be notified of our events.' });
    } catch (error) {
      next(error);
    }
  }),
];


// @desc      Query for a drug
export const contactRep = [
  asyncHandler(async (req, res, next) => {
    try {
      const email: string = req.body.email;

      if(!email.includes('@')) {
        throw new BadRequestError('Please provide a valid email');
      }

      res.json({ success: true, message: 'Thanks, You should hear from us soon.' });
    } catch (error) {
      next(error);
    }
  }),
];