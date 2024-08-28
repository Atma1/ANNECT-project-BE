const categories = require('./categories.json');
const user = require('./users.json');
const follows = require('./follows.json');
const tags = require('./tags.json');
const events = require('./events.json');
const channels = require('./channels.json');
const chats = require('./chats.json');
const favorites = require('./favorites.json');
const prisma = require('../src/db/index');


const main = async () => {
    console.log("Truncating all table...");

    await prisma.favorites.deleteMany();
    console.log("Truncated table favories...");
    await prisma.follows.deleteMany();
    console.log("Truncated table follows...");
    await prisma.channels.deleteMany();
    console.log("Truncated table channels...");
    await prisma.categories.deleteMany();
    console.log("Truncated table categories...");
    await prisma.tags.deleteMany();
    console.log("Truncated table tags...");
    await prisma.chats.deleteMany();
    console.log("Truncated table chats...");
    await prisma.events.deleteMany();
    console.log("Truncated table events...");
    await prisma.users.deleteMany();
    console.log("Truncated table users...");
    console.log("Truncated all tables.");

    console.log("Seeding all tables");

    await prisma.users.createMany({
        data: user
    })

    await prisma.tags.createMany({
        data: tags
    })

    await prisma.categories.createMany({
        data: categories
    })

    await prisma.channels.createMany({
        data: channels
    })

    await prisma.events.createMany({
        data: events
    })

    await prisma.follows.createMany({
        data: follows
    })

    await prisma.chats.createMany({
        data: chats
    })

    await prisma.favorites.createMany({
        data: favorites
    })

    console.log("Seeded all table!");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })