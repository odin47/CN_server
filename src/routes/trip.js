import express from 'express';
import {
	createTrip,
	createPlace,
	createAttraction,
	createTransport,
} from '../controllers';
import {
	validate,
	createTripValidate,
	createPlaceValidate,
	createAttractionValidate,
	createTransportValidate,
} from '../middleware';

const tripRouter = express.Router();

tripRouter.post('/create-trip', createTripValidate(), validate, createTrip);
tripRouter.post('/create-place', createPlaceValidate(), validate, createPlace);
tripRouter.post(
	'/create-attraction',
	createAttractionValidate(),
	validate,
	createAttraction
);
tripRouter.post(
	'/create-transport',
	createTransportValidate(),
	validate,
	createTransport
);

export default tripRouter;
