const fs = require("fs-extra");
const path = require("path");

// مسار تخزين الحالة
const lockPath = path.join(__dirname, "cache", "devOnly.json");

module.exports.config = {
  name: "تقييد",
  version: "1.0.0",
  credits: "ᎠᎯᏁᎢᎬ ᏚᎮᎯᏒᎠᎯ",
  hasPermssion: 2,
  description: "جعل البوت يرد فقط على المطور",
  commandCategory: "المطور",
  usages: "[تشغيل/ايقاف]",
  cooldowns: 5
};

// جلب الحالة
function getStatus() {
  if (!fs.existsSync(lockPath)) fs.writeJsonSync(lockPath, false);
  return fs.readJsonSync(lockPath);
}

// حفظ الحالة
function setStatus(data) {
  fs.writeJsonSync(lockPath, data, { spaces: 2 });
}

// تشغيل الأمر
module.exports.run = async function({ api, event, args }) {
  const developerID = "100081948980908";
  if (String(event.senderID) !== developerID)
    return api.sendMessage("❌ هذا الأمر للمطور فقط.", event.threadID, event.messageID);

  if (args[0] === "تشغيل") {
    setStatus(true);
    return api.sendMessage("🔒 تم تفعيل وضع المطور فقط.\n🤖 البوت لن يرد إلا عليك.", event.threadID);
  }

  if (args[0] === "ايقاف") {
    setStatus(false);
    return api.sendMessage("🔓 تم إيقاف وضع المطور.\n✅ البوت يرد على الجميع الآن.", event.threadID);
  }

  return api.sendMessage("📌 الاستخدام:\nتقييد تشغيل\nتقييد ايقاف", event.threadID);
};

// منع البوت من الرد على غير المطور
module.exports.handleEvent = async function({ event }) {
  const developerID = "100081948980908";
  const isLocked = getStatus();

  if (!isLocked) return;

  // إذا مو المطور → تجاهل
  if (String(event.senderID) !== developerID) {
    event.body = ""; // يمنع الأوامر من الاشتغال
  }
};
