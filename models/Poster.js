const mongoose = require('mongoose');

const PosterSchema = new mongoose.Schema({
  startRings: [
    {
      input: {
        type: Number,
      },
    },
  ],
  rawInput: [
    {
      input: {
        type: Number,
      },
      ring: {
        type: Number,
      },
      shims: {
        type: Number,
      },
      shims2: {
        type: Number,
      },
      shims3: {
        type: Number,
      },
    },
  ],
  endRings: [
    {
      input: {
        type: Number,
      },
    },
  ],
  blades: {
    bladStamme: {
      type: Number,
    },
  },
  header: {
    type: String,
  },
});

module.exports = mongoose.models.Posts || mongoose.model('Posts', PosterSchema);
