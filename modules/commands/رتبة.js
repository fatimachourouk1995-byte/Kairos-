const fs = require("fs-extra");
const path = require("path");

// مسار تخزين البيانات
const ranksPath = path.join(__dirname, "cache", "ranks.json");
const settingsPath = path.join(__dirname, "cache", "ranksSettings.json");
const interactionsPath = path.join(__dirname, "cache", "interactions.json");

// قائمة الرتب الـ 20
const RANK_LIST = [
  { id: 1, name: "مستجد", icon: "🟢", minInteractions: 0 },
  { id: 2, name: "عضو فعال", icon: "🔵", minInteractions: 10 },
  { id: 3, name: "عضو مميز", icon: "💠", minInteractions: 25 },
  { id: 4, name: "نشيط", icon: "⭐", minInteractions: 50 },
  { id: 5, name: "متقدم", icon: "🌟", minInteractions: 100 },
  { id: 6, name: "محترف", icon: "🔥", minInteractions: 200 },
  { id: 7, name: "مخضرم", icon: "💪", minInteractions: 350 },
  { id: 8, name: "مشرف مساعد", icon: "🛡️", minInteractions: 500 },
  { id: 9, name: "مشرف", icon: "⚔️", minInteractions: 750 },
  { id: 10, name: "مشرف أول", icon: "🗡️", minInteractions: 1000 },
  { id: 11, name: "نائب مدير", icon: "👑", minInteractions: 1500 },
  { id: 12, name: "مدير", icon: "💎", minInteractions: 2000 },
  { id: 13, name: "مدير عام", icon: "🔱", minInteractions: 3000 },
  { id: 14, name: "مسؤول القسم", icon: "📋", minInteractions: 4000 },
  { id: 15, name: "مسؤول أول", icon: "📌", minInteractions: 5000 },
  { id: 16, name: "نائب المطور", icon: "⚡", minInteractions: 7500 },
  { id: 17, name: "مساعد المطور", icon: "💫", minInteractions: 10000 },
  { id: 18, name: "مطور مساعد", icon: "✨", minInteractions: 15000 },
  { id: 19, name: "المطور", icon: "👨‍💻", minInteractions: 25000 },
  { id: 20, name: "مالك البوت", icon: "👑", minInteractions: 50000 }
];

// دوال مساعدة
function getRanks() {
  if (!fs.existsSync(ranksPath)) fs.writeJsonSync(ranksPath, {});
  return fs.readJsonSync(ranksPath);
}

function saveRanks(data) {
  fs.writeJsonSync(ranksPath, data);
}

function getSettings() {
  if (!fs.existsSync(settingsPath)) fs.writeJsonSync(settingsPath, {});
  return fs.readJsonSync(settingsPath);
}

function saveSettings(data) {
  fs.writeJsonSync(settingsPath, data);
}

function getInteractions() {
  if (!fs.existsSync(interactionsPath)) fs.writeJsonSync(interactionsPath, {});
  return fs.readJsonSync(interactionsPath);
}

function saveInteractions(data) {
  fs.writeJsonSync(interactionsPath, data);
}

function getUserRank(interactions) {
  let userRank = RANK_LIST[0]; // الرتبة الافتراضية
  for (const rank of RANK_LIST) {
    if (interactions >= rank.minInteractions) {
      userRank = rank;
    }
  }
  return userRank;
}

module.exports.config = {
  name: "رتبة",
  version: "1.0.0",
