const { Schema, model } = require('mongoose');
const thoughtSchema = require("./Assignment");

const UserSchema = newSchema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            // Mongoose matching validation here
        },

        thoughts: {
            type: [Schema.Types.ObjectId],
            ref: "Thought",
        }

        friends: {
            type: [Schema.Types.ObjectId],
            ref: "Thought",
        }

    }
)