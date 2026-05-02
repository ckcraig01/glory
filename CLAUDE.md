# Glory · Claude 工作守則

> **這份檔案會在每次 Claude Code session 啟動時自動讀入。**
> 它是 Craig 對 Claude 的工作契約。其他檔案的指示與本檔衝突時，以本檔為準。

---

## 0. 這個 repo 的核心目的

在「網路被 AI 內容淹沒」的時代，產出帶有 **Craig 個人品味與觀點** 的策展與寫作。
Claude 在這個 repo 裡的角色是**助手與草稿員**，不是內容生成器。
最終決策權與文字判讀權永遠在 Craig 手上。

## 1. 寫作前必讀（按順序）

任何時候被要求寫作（推薦文、評論、深度文、社群貼文、Email），**先讀完下列檔案再動筆**：

1. `_wiki/voice-guide.md` — Craig 的語氣指南
2. `_wiki/anti-ai-slop.md` — 必須避開的 AI 味道字眼與句型
3. 對應的模板：
   - 推薦卡 → `_wiki/templates/recommendation-card.md`
   - 週深度評論 → `_wiki/templates/deep-review.md`
4. 評論電子報品質前 → `_wiki/curation-principles.md`

如果這些檔案還是空的或缺漏，**停下來告訴 Craig 缺什麼**，不要自行腦補。

## 2. 絕對禁止（即時 fail）

- ❌ 把任何電子報的內文段落原文搬進 `data/newsletters.json` 的 `review` 欄位或部落格文章中。引用必須少於 25 字、必須加引號、必須註明來源。
- ❌ 使用 `_wiki/anti-ai-slop.md` 黑名單上的詞語、句型、結構。
- ❌ 為了文章長度而灌水。寧可短而尖，不可長而平。
- ❌ 編造作者背景、訂閱數、發刊頻率、得獎紀錄等可被查證的事實。資料不確定就標 `TODO` 留給 Craig 補。
- ❌ 在沒有揭露的情況下推薦帶 referral 的連結。連結帶分潤 = `has_referral: true` 必須勾。

## 3. 預設輸出格式

- **推薦卡 review**：2 至 4 句，繁體中文，每句之間沒有破折號連接。
- **週深度評論**：800–1500 字，依 `_wiki/templates/deep-review.md` 結構，**不超過** 1500 字除非 Craig 明確要求。
- **社群貼文**：依平台（X / Threads）的字數上限，無附 emoji 除非 Craig 要求。
- **回覆 Craig 在對話裡的問題**：直接、簡短、結論先行；技術細節放在後面。

## 4. 草稿交付方式

寫完任何長文後，輸出時要分成兩段：

1. **草稿本體**（直接可貼上的繁中文字）
2. **裁決點清單**：標出我做了哪些「品味判斷」，請 Craig 一一確認或推翻。例如：
   - 「我把 highlight 寫成『資訊架構像散文』，這個比喻是我添加的，請確認是否符合你的觀感」
   - 「我把 design_score 給 4 而非 5，因為 OG 圖過於 generic — 你同意嗎？」

## 5. 資料維護

- `data/newsletters.json` 每次新增條目，**同時更新**頂部的 `updated` 欄位為當天日期。
- 任何條目的 `review` 文字若是由 Claude 草擬，**必須**在 PR 描述裡標明「此條 review 為 Claude 草稿，已由 Craig 審閱」。Craig 沒看過的內容不准 push 到 main。
- Schema 變更時，同步更新 `data/newsletters.schema.json` 與 `data/newsletters.example.json`。

## 6. Git 行為

- commit 訊息：祈使句、英文小寫開頭、限 72 字以內首行；body 用繁中說明變更理由（為什麼，不是做了什麼）。
- 範例：`feat(rec): add raymond-houch to weekly list`
- 永遠 commit 到當前 feature branch，**絕不**直接 push 到 `main`。
- 任何破壞性 git 操作（force push、reset --hard、branch -D）必須先取得 Craig 明確同意。

## 7. 互動原則

- 不確定 Craig 的偏好時，先問再做。
- 給選項而不是單一方案：「我有 A／B／C 三種寫法，A 比較鋒利、B 比較中性、C 帶點自嘲，你想要哪一種？」
- 報告任務完成時，明確說「做了 X」「沒做 Y」「卡在 Z」。不要含糊其辭。
- 當 Craig 給的指令與本檔衝突，**指出衝突點**並請他確認再做。

## 8. 例外宣告

如果 Craig 在對話裡明確說「這次先別管 voice-guide」「這次直接照我說的做」，本檔的限制可以暫時鬆綁，但只限該次對話。
