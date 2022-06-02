import logToFile from './logtoFile'
import logToConsole from './console.log'
import logToWebhook from './webhook'
export class BasicLogger {
    logFilePath: any
    allowDebugLogs: boolean
    constructor(logFilePath?: string, allowDebugLogs?: boolean) {
        this.logFilePath = logFilePath
        this.allowDebugLogs = allowDebugLogs ? true : false
    }
    log(text: string) {
        process.stdout.write(text + "\n")
    }
    debug(text: string) {
        if (!this.allowDebugLogs) return
        if (this.logFilePath) {
            logToFile("debug", text, this.logFilePath, true)
        }
        logToConsole("debug", text, "blue", "blue", true)
    }
    success(text: string) {
        if (this.logFilePath) {
            logToFile("success", text, this.logFilePath, true)
        }
        logToConsole("success", text, "green", "white", true)
        return
    }
    info(text: string) {
        if (this.logFilePath) {
            logToFile("info", text, this.logFilePath, true)
        }
        logToConsole("info", text, "grey", "white", true)
        return
    }
    warn(text: string) {
        if (this.logFilePath) {
            logToFile("error", text, this.logFilePath, true)
        }
        logToConsole("warn", text, "yellow", "white", true)
        return
    }
    error(text: string) {
        if (this.logFilePath) {
            logToFile("error", text, this.logFilePath, true)
        }
        logToConsole("error", text, "red", "white", true)
        return
    }
    crash(text: string) {
        if (this.logFilePath) {
            logToFile("crash", text, this.logFilePath, true)
        }
        logToConsole("crash", text, "red", "red", true)
        return
    }
}

type Webhook = {
    googleChat: string
    discord: string
}
type ConfigFunction = {
    textColor: string
    webhook: Webhook
    logPath: string
    color: string
}
type Config = {
    success?: ConfigFunction | false
    error?: ConfigFunction | false
    debug?: ConfigFunction | false
    crash?: ConfigFunction | false
    info?: ConfigFunction | false
    warn?: ConfigFunction | false
    webhook: Webhook
    logPath: string
    log?: boolean
}

const colours: Array<string> = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "grey"]
export class AdvancedLogger {
    config: any
    constructor(config: Config) {
        if (config.success) {
            if (config.success.color && colours.indexOf(config.success.color) < 0) {
                throw "Error: success color must be a valid color"
            }
            if (config.success.textColor && colours.indexOf(config.success.textColor) < 0) {
                throw "Error: success text color must be a valid color"
            }
        }
        if (config.info) {
            if (config.info.color && colours.indexOf(config.info.color) < 0) {
                throw "Error: info color must be a valid color"
            }
            if (config.info.textColor && colours.indexOf(config.info.textColor) < 0) {
                throw "Error: info color must be a valid color"
            }
        }
        if (config.warn) {
            if (config.warn.color && colours.indexOf(config.warn.color) < 0) {
                throw "Error: warn color must be a valid color"
            }
            if (config.warn.textColor && colours.indexOf(config.warn.textColor) < 0) {
                throw "Error: warn color must be a valid color"
            }
        }
        if (config.error) {
            if (config.error.color && colours.indexOf(config.error.color) < 0) {
                throw "Error: error color must be a valid color"
            }
            if (config.error.textColor && colours.indexOf(config.error.textColor) < 0) {
                throw "Error: error color must be a valid color"
            }
        }
        if (config.debug) {
            if (config.debug.color && colours.indexOf(config.debug.color)) {
                throw "Error: debug color must be a valid color"
            }
            if (config.debug.textColor && colours.indexOf(config.debug.textColor)) {
                throw "Error: debug color must be a valid color"
            }
        }
        this.config = config
    }

    log(text: string) {
        process.stdout.write(text + "\n")
    }
    debug(text: string) {
        if (this.config.debug == false) return
        if (this.config.debug) {
            if (this.config.debug.logPath) {
                logToFile("debug", text, this.config.debug.logPath, true)
            } else if (this.config.logPath) {
                logToFile("debug", text, this.config.logPath, true)
            }
            if (this.config.debug.webhook) {
                if (this.config.debug.webhook.discord) {
                    logToWebhook("discord", this.config.debug.webhook.discord, "debug", text.slice(0, 4096), this.config.debug.color || "yellow")
                }
                if (this.config.debug.webhook.googleChat) {
                    logToWebhook("google", this.config.debug.webhook.googleChat, "debug", text.slice(0, 4096), this.config.debug.color || "yellow")
                }
            }
            logToConsole("debug", text, this.config.debug.color || "yellow", this.config.debug.textColor || "yellow", true)
            return
        }
        if (this.config.logPath) {
            logToFile("debug", text, this.config.logPath, true)
        }
        if (this.config.webhook) {
            if (this.config.webhook.discord) {
                logToWebhook("discord", this.config.webhook.discord, "debug", text.slice(0, 4096), "yellow")
            }
            if (this.config.webhook.googleChat) {
                logToWebhook("google", this.config.webhook.googleChat, "debug", text.slice(0, 4096), "yellow")
            }
        }
        logToConsole("debug", text, "yellow", "yellow", true)
        return
    }
    success(text: string) {
        if (this.config.success == false) return
        if (this.config.success) {
            if (this.config.success.logPath) {
                logToFile("success", text, this.config.success.logPath, true)
            } else if (this.config.logPath) {
                logToFile("success", text, this.config.logPath, true)
            }
            if (this.config.success.webhook) {
                if (this.config.success.webhook.discord) {
                    logToWebhook("discord", this.config.success.webhook.discord, "success", text.slice(0, 4096), this.config.success.color || "green")
                }
                if (this.config.success.webhook.googleChat) {
                    logToWebhook("google", this.config.success.webhook.googleChat, "success", text.slice(0, 4096), this.config.success.color || "green")
                }
            }
            logToConsole("success", text, this.config.success.color || "green", this.config.success.textColor || "white", true)
            return
        }
        if (this.config.logPath) {
            logToFile("success", text, this.config.logPath, true)
        }
        if (this.config.webhook) {
            if (this.config.webhook.discord) {
                logToWebhook("discord", this.config.webhook.discord, "success", text.slice(0, 4096), "green")
            }
            if (this.config.webhook.googleChat) {
                logToWebhook("google", this.config.webhook.googleChat, "success", text.slice(0, 4096), "greem")
            }
        }
        logToConsole("success", text, "green", "white", true)
        return
    }
    info(text: string) {
        if (this.config.info) {
            if (this.config.info.logPath) {
                logToFile("info", text, this.config.info.logPath, true)
            } else if (this.config.logPath) {
                logToFile("info", text, this.config.logPath, true)
            }
            if (this.config.info.webhook) {
                if (this.config.info.webhook.discord) {
                    logToWebhook("discord", this.config.info.webhook.discord, "info", text.slice(0, 4096), this.config.info.color || "grey")
                }
                if (this.config.info.webhook.googleChat) {
                    logToWebhook("google", this.config.info.webhook.googleChat, "info", text.slice(0, 4096), this.config.info.color || "grey")
                }
            }
            logToConsole("info", text, this.config.info.color || "grey", this.config.info.textColor || "white", true)
            return
        }
        if (this.config.logPath) {
            logToFile("info", text, this.config.logPath, true)
        }
        if (this.config.webhook) {
            if (this.config.webhook.discord) {
                logToWebhook("discord", this.config.webhook.discord, "info", text.slice(0, 4096), "grey")
            }
            if (this.config.webhook.googleChat) {
                logToWebhook("google", this.config.webhook.googleChat, "info", text.slice(0, 4096), "grey")
            }
        }
        logToConsole("info", text, "grey", "white", true)
        return
    }
    warn(text: string) {
        if (this.config.warn == false) return
        if (this.config.warn) {
            if (this.config.warn.logPath) {
                logToFile("warn", text, this.config.warn.logPath, true)
            } else if (this.config.logPath) {
                logToFile("warn", text, this.config.logPath, true)
            }
            if (this.config.warn.webhook) {
                if (this.config.warn.webhook.discord) {
                    logToWebhook("discord", this.config.warn.webhook.discord, "warn", text.slice(0, 4096), this.config.warn.color || "yellow")
                }
                if (this.config.warn.webhook.googleChat) {
                    logToWebhook("google", this.config.warn.webhook.googleChat, "warn", text.slice(0, 4096), this.config.warn.color || "yellow")
                }
            }
            logToConsole("warn", text, this.config.warn.color || "yellow", this.config.warn.textColor || "white", true)
            return
        }
        if (this.config.logPath) {
            logToFile("warn", text, this.config.logPath, true)
        }
        if (this.config.webhook) {
            if (this.config.webhook.discord) {
                logToWebhook("discord", this.config.webhook.discord, "warn", text.slice(0, 4096), "yellow")
            }
            if (this.config.webhook.googleChat) {
                logToWebhook("google", this.config.webhook.googleChat, "warn", text.slice(0, 4096), "yellow")
            }
        }
        logToConsole("warn", text, "yellow", "white", true)
        return
    }
    error(text: string) {
        if (this.config.error == false) return
        if (this.config.error) {
            if (this.config.error.logPath) {
                logToFile("error", text, this.config.error.logPath, true)
            } else if (this.config.logPath) {
                logToFile("error", text, this.config.logPath, true)
            }
            if (this.config.error.webhook) {
                if (this.config.error.webhook.discord) {
                    logToWebhook("discord", this.config.error.webhook.discord, "error", text.slice(0, 4096), this.config.error.color || "red")
                }
                if (this.config.error.webhook.googleChat) {
                    logToWebhook("google", this.config.error.webhook.googleChat, "error", text.slice(0, 4096), this.config.error.color || "red")
                }
            }
            logToConsole("error", text, this.config.error.color || "red", this.config.error.textColor || "white", true)
            return
        }
        if (this.config.logPath) {
            logToFile("error", text, this.config.logPath, true)
        }
        if (this.config.webhook) {
            if (this.config.webhook.discord) {
                logToWebhook("discord", this.config.webhook.discord, "error", text.slice(0, 4096), "red")
            }
            if (this.config.webhook.googleChat) {
                logToWebhook("google", this.config.webhook.googleChat, "error", text.slice(0, 4096), "red")
            }
        }
        logToConsole("error", text, "red", "white", true)
        return
    }
    crash(text: string) {
        if (this.config.crash == false) return
        if (this.config.crash) {
            if (this.config.crash.logPath) {
                logToFile("crash", text, this.config.crash.logPath, true)
            } else if (this.config.logPath) {
                logToFile("crash", text, this.config.logPath, true)
            }
            if (this.config.crash.webhook) {
                if (this.config.crash.webhook.discord) {
                    logToWebhook("discord", this.config.crash.webhook.discord, "crash", text.slice(0, 4096), this.config.crash.color || "red")
                }
                if (this.config.crash.webhook.googleChat) {
                    logToWebhook("google", this.config.crash.webhook.googleChat, "crash", text.slice(0, 4096), this.config.crash.color || "red")
                }
            }
            logToConsole("crash", text, this.config.crash.color || "red", this.config.crash.textColor || "red", true)
            return
        }
        if (this.config.logPath) {
            logToFile("crash", text, this.config.logPath, true)
        }
        if (this.config.webhook) {
            if (this.config.webhook.discord) {
                logToWebhook("discord", this.config.webhook.discord, "crash", text.slice(0, 4096), "red")
            }
            if (this.config.webhook.googleChat) {
                logToWebhook("google", this.config.webhook.googleChat, "crash", text.slice(0, 4096), "red")
            }
        }
        logToConsole("crash", text, "red", "red", true)
        return
    }
}