const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

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

        thoughts: [ {
            type: Schema.Types.ObjectId,
            ref: "thought",
        } ],

        friends: [ {
            type: Schema.Types.ObjectId,
            ref: "thought",
        } ],



    }
);

// Virtual here

const User=model("user", userSchema);
module.exports=User;