const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745612717";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_13_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM4LFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAzMixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1RYmxIRHo4WDQvNXZkQUlnNUUvQ2JiZk45aTUwRCs1TWJucS9iakdOVlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkh6VVdYWlEtUVN1S2FqazZuVkdSY0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDU1ZmRlOWEtOWYyYS00Zjc0LTgwNjAtYjg3YzYwMTNjMmJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAyMCxcbiAgICAgIDE4NixcbiAgICAgIDIwNixcbiAgICAgIDE4OCxcbiAgICAgIDExMixcbiAgICAgIDY0LFxuICAgICAgMTYwLFxuICAgICAgMjQ2LFxuICAgICAgMTY1LFxuICAgICAgMTcyLFxuICAgICAgMjMzLFxuICAgICAgMjAyLFxuICAgICAgMTk4LFxuICAgICAgNTIsXG4gICAgICAxMjAsXG4gICAgICAyMDYsXG4gICAgICAxNyxcbiAgICAgIDIwMCxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMTcxLFxuICAgICAgMjgsXG4gICAgICAxOTMsXG4gICAgICAxMzMsXG4gICAgICAyNTIsXG4gICAgICAxNTgsXG4gICAgICAxNDUsXG4gICAgICA5OCxcbiAgICAgIDEyMyxcbiAgICAgIDE2NCxcbiAgICAgIDE2MSxcbiAgICAgIDE2MCxcbiAgICAgIDgxLFxuICAgICAgMjQzLFxuICAgICAgMTgyLFxuICAgICAgMjM2LFxuICAgICAgMjMsXG4gICAgICAxMjIsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1c0NzRTNEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0NTYxMjcxNzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA2MzA4ODM3OTg2MzYxOjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xZHRvQUhFTWlHeHJzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnRNbC85VlF6VkNTSGZRQlhOMEpQcnp5emliekd3Qkg5eGI0bHpYeG4xcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMdSt3VStRU0VnTEowalJsVjNyQk5rOEswTXQxNHMwdXVTNDhkdUhianJLT2s5YkZQL280WGFJeVVMZ3ZPWnJwSi82bFFJRko4UUhOZE9OVmNKQ0NCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBd0tmYk5lUHc5NFJ3NzZwamZRdXhIdnNrMTMxdmtmUDFidFRFSjZvTXVqRDd6ZDEvNytjUDJHSjBadmQwTVB0OHdwNldBTm9ib1hYcmoxWVM5UURBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU2MTI3MTc6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NDkyNDI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUthXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJS2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvYlNhbDA2cmZKOCtMQjFIWEh5OW9LWXB1UW5zTDh3TG5uTkJQWHRMeno0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4Nzk5MzY3NDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTQ3NTE0NzMyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
