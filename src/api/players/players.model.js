import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const playersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  league: {
    type: ObjectId,
    ref: 'League',
  },
  email: {
    type: String,
  },
  notifications: {
    type: Boolean,
    default: false,
  },
  teams: {
    type: [String],
  },
  wildcard: {
    type: String,
  },
});

const PlayerModel = model('Player', playersSchema);

export default PlayerModel;
