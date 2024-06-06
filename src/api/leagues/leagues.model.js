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
});

const LeagueModel = model('League', leaguesSchema);

export default LeagueModel;
