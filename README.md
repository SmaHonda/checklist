# 每日任務 Daily Quest 🌟

每日例行任務管理 PWA — 像養成小遊戲一樣完成每天的任務！

## 功能

- **主畫面（任務）**：冒險者角色、XP條、連擊計數、每日進度環、任務卡點擊完成＋粒子特效
- **行事曆**：月曆檢視每天完成率（綠80%+／黃52-79%／紅50%-），點日期可查看＆修改紀錄
- **設定**：新增/編輯/刪除任務，支援每日例行 or 單日任務，資料匯出/匯入

## 部署到 GitHub Pages

1. 在 GitHub 建立新 repo（例如 `daily-quest`）
2. 把這個資料夾的所有檔案 push 上去：
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/你的帳號/daily-quest.git
git push -u origin main
```
3. 在 repo 的 **Settings → Pages → Source** 選擇 `main` branch
4. 幾分鐘後可用 `https://你的帳號.github.io/daily-quest/` 開啟

## 加入主畫面（像 App 一樣）

### iPhone (Safari)
1. 用 Safari 開啟網址
2. 點下方分享按鈕 `⬆`
3. 選「加入主畫面」
4. 之後從主畫面開啟就是全螢幕 App 模式，網址列自動隱藏！

### Android (Chrome)
1. 用 Chrome 開啟網址
2. 點右上角選單 `⋮`
3. 選「新增到主畫面」

## 資料儲存
所有資料存在瀏覽器的 `localStorage`，不需要後端！  
記得定期用設定頁的「匯出資料」備份。

## 檔案列表
```
index.html     主程式
manifest.json  PWA 設定
sw.js          Service Worker（離線快取）
icon-192.png   App 圖示
icon-512.png   App 圖示（大）
```
