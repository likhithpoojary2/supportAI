import mongoose, { model, Schema } from "mongoose";
import { StringXor } from "next/dist/compiled/webpack/webpack";

interface ISettings{
    ownerId:string
    businessName:string
    supportEmail:string
    knowledge:string
}

const settingsSchema = new Schema<ISettings>(
  {
    ownerId: {
      type: String,
      required: true,
      unique:true
    },

      businessName: {
      type: String
    },

      supportEmail: {
      type: StringXor
    },

      knowledge: {
      type: String
    },
  },
  { timestamps: true },
);

const Settings = mongoose.models.Settings || model("Settings", settingsSchema)
export default Settings