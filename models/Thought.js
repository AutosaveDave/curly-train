const { Schema, model } = require('mongoose');
const userSchema = require("./User");
const reactionSchema = require("./Reaction");

const UserSchema = newSchema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            // Getter? Format?
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [ {
            type: Schema.Types.ObjectId,
            ref: "thought",
        } ],


    }
);
// Virtual Here-ish

const Thought = model("thought", thoughtSchema);

module.exports=Thought;