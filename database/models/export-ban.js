import mongoose from 'mongoose';

const ExportBanSchema = new mongoose.Schema({
  steamID: { type: String, require: true },
  exportBanList: {
    type: mongoose.Types.ObjectId,
    ref: 'ExportBanList',
    require: true
  },

  battlemetricsStatus: {
    type: String,
    enum: [
      'disabled',
      'queued',
      'completed',
      'deleted',
      'queued-errored',
      'deleted-errored'
    ],
    require: true,
    default: 'disabled'
  }
});

export default mongoose.model('ExportBan', ExportBanSchema);