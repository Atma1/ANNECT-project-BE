const z = require("zod");

const favoriteInsertSchema = z.object({
    user_id: z.string({
        required_error: "user_id is required!"
    }).min(1, "user_id must not be empty!"),
    event_id: z.string({
        required_error: "event_id is required!"
    }).min(1, "event_id must not be empty!"),
});

module.exports = favoriteInsertSchema;