import { Schema, model } from 'mongoose';

const leaguesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: true,
  },
  live: {
    type: Boolean,
    default: false,
  },
  games: {
    type: [Number],
  },
});

const LeagueModel = model('League', leaguesSchema);

export default LeagueModel;
