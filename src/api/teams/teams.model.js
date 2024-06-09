import { Schema, model } from 'mongoose';

const teamsSchema = new Schema({
  apiId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  played: {
    type: Number,
    default: 0,
  },
  group: {
    won: {
      type: Number,
      default: 0,
    },
    drawn: {
      type: Number,
      default: 0,
    },
    lost: {
      type: Number,
      default: 0,
    },
    GF: {
      type: Number,
      default: 0,
    },
    GA: {
      type: Number,
      default: 0,
    },
  },
  KO: {
    won: {
      type: Number,
      default: 0,
    },
    drawn: {
      type: Number,
      default: 0,
    },
    lost: {
      type: Number,
      default: 0,
    },
    GF: {
      type: Number,
      default: 0,
    },
    GA: {
      type: Number,
      default: 0,
    },
  },
  active: {
    type: Boolean,
    default: true,
  },
  note: {
    type: String,
  },
  ranking: {
    type: Number,
  },
});

const TeamModel = model('Team', teamsSchema);

export default TeamModel;
