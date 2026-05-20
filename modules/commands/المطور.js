/**
 * @تحسين وتطوير: ᎠᎯᏁᎢᎬᏚᎮᎯᏒᎠᎯ
 * @النسخة: V7.0.0 [ULTRA]
 * @الوصف: كود عرض معلومات المطور والبوت بتنسيق فخم
 */

export const config = {
    name: "المطور",
    version: "7.0.0",
    hasPermssion: 0,
    credits: "ドウ シャ ",
    description: "عرض معلومات مطور نظام اريا",
    commandCategory: "النظام",
    usages: "",
    cooldowns: 5
};

export async function run({ api, event, Currencies }) {
    const { threadID, messageID } = event;

    // إعداد الرسالة بتنسيق الخطوط الرفيعة الذي اخترته
    const infoMessage = 
`  ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ 
         ✧ اريا | ARIA ✧
  ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ 

   𓏲 نـظـام الـتـشـغـيـل
   ⊹ الإصـدار: V7.0.0 [ULTRA]
   ⊹ الـبـريـفـكـس: /
   ⊹ الـخـوادم: نشط في المجموعات

   𓏲 الـعـقـل الـمـدبـر
   ⊹ الـمـصـمم: ドウ シャ 
   ⊹ الـعـمـر: 16 عاماً
   ⊹ الـمـكـانـة: الـقـائـد الأعلى

   𓏲 الـتـواصـل الـرسـمـي
   ⊹ فـيـسـبـوك:
   https://www.facebook.com/profile.php?id=61584139807683

  — — — — — — — — — — — — — — — — 
    『 اريا: الـسـيـادة الـمـطـلـقـة 』`;

    // إرسال الرسالة مع صورة المطور إذا أردت (يمكنك وضع رابط صورتك هنا)
    return api.sendMessage({
        body: infoMessage,
    }, threadID, messageID);
}
