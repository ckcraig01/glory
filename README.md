# Glory

一個獨立的華語電子報策展站。
不轉貼內容，只做選書與導讀，每週新增一份推薦。

> 若這是你第一次看到這份 README，建議先讀首頁的「策展宣言」，會比讀規格清楚得多。

---

## 結構

```
.
├── index.html               # 首頁（含品味宣言）
├── recommendations.html     # 推薦榜單（從 JSON 渲染）
├── disclosure.html          # 揭露聲明
├── data/
│   ├── newsletters.json         # 真實榜單（單一資料來源）
│   ├── newsletters.example.json # 帶兩個範例條目，給人類與 LLM 參考
│   └── newsletters.schema.json  # JSON Schema（欄位定義）
├── assets/
│   ├── css/style.css            # 設計系統
│   └── js/app.js                # 渲染與篩選
├── docs/                        # 寫作筆記、變現實驗紀錄
└── _wiki/                       # 個人 LLM wiki（思考框架、術語、模板）
```

## 部署到 GitHub Pages

1. 把這個 branch merge 回 `main`。
2. Repo Settings → Pages → Source 選「Deploy from a branch」、Branch 選 `main` / `/ (root)`。
3. 等待 Pages 構建（會看到綠勾），訪問 `https://<user>.github.io/glory/`。
4. 自有網域：在 Settings → Pages 填 `Custom domain`，並把根目錄 `CNAME` 文件加上你的網域。

> 本站使用純靜態 HTML + JSON，**沒有 build step**。`.nojekyll` 讓 GitHub 不要跑 Jekyll 處理。

## 新增一份推薦（每週流程）

1. 編輯 `data/newsletters.json`，在 `items` 陣列加一個物件。
2. 必填欄位：`id`、`name`、`author`、`url`、`subscribe_url`、`language`、`frequency`、`topics`、`review`、`added`。
3. 若連結含 referral 分潤，**務必** 把 `has_referral` 設成 `true`，前端會自動標示「合作」徽章。
4. 若是付費贊助，把 `sponsored` 設成 `true`，並在卡片上會顯示「合作」徽章。
5. 把 `data.updated` 改成今天日期。
6. commit 訊息建議格式：`feat(rec): add <newsletter-name>`。
7. push，Pages 會自動部署。

完整欄位定義見 [`data/newsletters.schema.json`](data/newsletters.schema.json)。

## 用 Claude 輔助維護

最值得讓 Claude 做的事情：
- 從一篇你貼的訪談／自我介紹擷取出 `author / url / platform / frequency` 等欄位
- 依 `_wiki/` 裡的「策展原則」幫你給出設計分數與深度分數初評
- 草擬 `review` 欄位的 2–4 句推薦文（由你做最終裁決）
- 維護 `data/newsletters.json` 的格式正確性

範例 prompt（在 Claude Code 裡）：

```
讀 _wiki/curation-principles.md，依其中標準幫我為 https://example.com 這份電子報
草擬一個 newsletters.json 條目。設計分與深度分先給你的初評，附理由。
review 欄位 3 句，繁體中文，不要轉貼原文。
```

## 變現位置（已預留）

- **首頁 `subscribe-embed`**：放 Beehiiv／Substack 訂閱嵌入碼
- **卡片 subscribe button**：天然的 affiliate 出口，URL 直接帶 referral 參數
- **未來可加**：贊助榜位（在 `recommendations.html` 加一段 sponsored slot）、Gumroad 數位產品連結（首頁加新區塊）、付費社群入口

## 法規重點（台灣）

- 推薦條目若帶分潤或贊助，**必須** 在前端顯示「合作」徽章（見 `disclosure.html`）。
- 月銷售勞務 > NT$40,000 或銷售貨物 > NT$80,000 即需辦營業登記、開統一發票。
- 跨境收入透過 Stripe／PayPal 收 USD，年度仍需在所得申報。
- 不收集訪客個資；訂閱表單嵌入第三方平台（Beehiiv／Substack），個資由平台保管。

## License

程式碼採 MIT License。所有評論文字、策展宣言、推薦文等內容版權保留 © 站方。
