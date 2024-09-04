const z = require("zod");

const eventInsertSchema = z.object({
    channel_id: z.string(),
    category_id: z.string(),
    tag_id: z.string(),
    name: z.string(),
    description: z.string(),
    image: z.string().url(),
    location: z.string(),
    is_paid: z.boolean(),
    price: z.number().gt(-1),
    status: z.enum(["PENDING", "ONGOING", "DONE"]),
    link_group: z.string(),
    event_date: z.coerce.date(),
})

module.exports = eventInsertSchema;