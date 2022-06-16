/* eslint-disable prettier/prettier */
import { User } from "./user.entity";
import { EntitySchema } from "typeorm";


// User Schema for making data null ( if it will be empty )
export const UserSchema = new EntitySchema<User>({
    name: 'user',
    target: User,
    columns: {
      uuid: {
        type: Number,
        primary: true,
        generated: true,
      },
      acc_type: {
        type: String,
      },
      name: {
        type: String,
      },
      email: {
        type: String,
        default: null,
      },

      phone: {
        type: Number,
        default: null,
      },

      country: {
        type: String,
        default: true,
      },

      dob: {
        type: String,
        default: true,
      },

      password: {
        type: String,
        default: true,
      },

    },

  });
  