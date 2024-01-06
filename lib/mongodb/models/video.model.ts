import { model, models } from "mongoose";
import { Schema } from "mongoose";

const VideoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  //   creator: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
});

const Video = models.Video || model("Video", VideoSchema);

export default Video;
