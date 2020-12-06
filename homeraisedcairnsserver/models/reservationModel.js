import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    clientName: { type: String, required: true},
    clientLocation:{ type: String, required: true},
    gender:{ type: String, required: true},
    litter:{ type: String, required: true},
    litterETA:{ type: String, required: true},
    reservationModel: {type: String, required: false}
});

const reservationModel = mongoose.model("Reservation", reservationSchema);

export default reservationModel;

