// 資安職涯起點：2017/11（第一份資安工程師）
const CAREER_START = { year: 2017, month: 11 };

// 回傳目前累積的完整年資（無條件捨去），用於「N+ 年」呈現
export function yearsOfExperience() {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.year;
  // 尚未過當年的起始月份，代表該年還沒滿，減 1
  if (now.getMonth() + 1 < CAREER_START.month) {
    years -= 1;
  }
  return years;
}
