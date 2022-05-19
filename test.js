const { AdvancedLogger } = require('./dist/index');

const logConfig = {
    webhook: {
        discord: "https://discord.com/api/webhooks/939451269737775104/idWirmnFJ3CCyWx9KBF-3VyS8aMY9w3jTl_1X9fkxaX62o2J0fGviMi2xkLo169Icr1v"
    },
    success: {
        logFileLocation: './logs/success.log',
        color: "green",
        webhook: {
            discord: "https://discord.com/api/webhooks/939451269737775104/idWirmnFJ3CCyWx9KBF-3VyS8aMY9w3jTl_1X9fkxaX62o2J0fGviMi2xkLo169Icr1v"
        }
    },
    info: false
}
const log = new AdvancedLogger(logConfig);


log.success("hello")
log.info("hello")
log.warn("hello")
log.error("hello")
log.crash("hello")