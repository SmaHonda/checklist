// 每次改動這個版本號，瀏覽器就會強制更新快取
const CACHE_VERSION = 'dailyquest-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 安裝：預先快取所有資源
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting(); // 立即接管，不等舊 SW 結束
});

// 啟動：清除所有舊版快取
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()) // 立即控制所有頁面
  );
});

// 請求攔截：網路優先，失敗才用快取（確保能拿到最新版）
self.addEventListener('fetch', e => {
  // 只處理同源請求
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // 網路成功：更新快取並回傳
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => {
        // 網路失敗（離線）：從快取回傳
        return caches.match(e.request)
          .then(cached => cached || caches.match('./index.html'));
      })
  );
});

// 收到主頁面指令時立即啟用新版
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
