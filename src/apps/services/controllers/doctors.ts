import { __prod__ } from '@/config';
import { asyncHandler } from '@/common';

const dbDoctors: any = {
  doc1: {
    id: 'doc1',
    firstName: 'Julius',
    lastName: 'Marx',
    email: 'julius@healthrx.com',
    honorific: 'Dr.',
  },
  doc2: {
    id: 'doc2',
    firstName: 'Ally',
    lastName: 'Kabel',
    email: 'ally@healthrx.com',
    honorific: 'Dr.',
  },
  doc3: {
    id: 'doc3',
    firstName: 'Randall',
    lastName: 'Johnson',
    email: 'randall@healthrx.com',
    honorific: 'Dr.',
  },
};

const dbAppointments: any = {
  doc1: {
    appointments: [
      {
        name: 'Ray Gilette',
        time: '9:00AM',
        kind: 'Follow-up',
      },
      {
        name: 'Lana Kane',
        time: '9:30AM',
        kind: 'New Patient',
      },
    ],
  },
  doc2: {
    appointments: [
      {
        name: 'Stearling Archer',
        time: '8:00AM',
        kind: 'New Patient',
      },
      {
        name: 'Cyril Figis',
        time: '8:30AM',
        kind: 'Follow-up',
      },
      {
        name: 'Ray Gilette',
        time: '9:00AM',
        kind: 'Follow-up',
      },
      {
        name: 'Lana Kane',
        time: '9:30AM',
        kind: 'New Patient',
      },
      {
        name: 'Carl Dawson',
        time: '10:00AM',
        kind: 'New Patient',
      },
    ],
  },
  doc3: {
    appointments: [],
  },
};

// @desc      Query for a drug
export const getDoctors = [
  asyncHandler(async (req, res, next) => {
    try {
      const doctors = Object.values(dbDoctors);
      res.json({ doctors: doctors });
    } catch (error) {
      next(error);
    }
  }),
];

export const getDoctorApps = [
  asyncHandler(async (req, res, next) => {
    try {
      const { docId } = req.params;
      const doctor = dbDoctors[docId];
      const apps = dbAppointments[doctor.id];

      res.json({
        doctor,
        appointments: apps?.appointments,
      });
    } catch (error) {
      next(error);
    }
  }),
];
