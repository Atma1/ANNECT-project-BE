const z = require("zod");

const userEventsInsertSchema = z.object({
    user_id: z.string({ required_error: "user_id is required!" }).min(1, { message: "user_id must not be empty!" }),
    event_id: z.string({ required_error: "event_id is required!" }).min(1, { message: "event_id must not be empty!" }),
    tf_image: z.string({ required_error: "tf_image is required!" }).min(1, { message: "tf_image must not be empty!" }),
    status: z.boolean({ required_error: "user_events status is required!" })
})

module.exports = userEventsInsertSchema;