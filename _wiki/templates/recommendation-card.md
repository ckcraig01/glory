# Template · 推薦卡（newsletters.json 條目）

> 用法：Claude 收到「幫我寫一張推薦卡」時，依此模板提問與草擬。
> 寫作前必讀：`_wiki/voice-guide.md`、`_wiki/anti-ai-slop.md`、`_wiki/curation-principles.md`。

---

## 第一步：資料蒐集（Claude 向 Craig 提問）

逐項問 Craig，直到全部答齊（不要自行腦補）：

1. 電子報名稱與 URL？
2. 你訂閱多久了？讀過幾期？
3. 訂閱連結是否帶 referral 分潤？（影響 `has_referral`）
4. 是否為付費贊助？（影響 `sponsored`）
5. 你會給設計分幾分？理由？
6. 你會給深度分幾分？理由？
7. 一句話告訴我這份電子報「跟同類型的別份不一樣在哪」？
8. 為什麼你想推薦它？（不要說「值得讀」，說具體事件）
9. 想標 featured 嗎？

## 第二步：撰寫 review（2–4 句草稿）

依下列結構寫**三個版本**讓 Craig 選：

### 結構建議
- 句 1：點出該電子報「最不一樣的那一件事」
- 句 2：為什麼這件事重要 / 對什麼讀者特別有用
- 句 3（選用）：一個具體例子（一期主題、一個專欄、一個習慣）
- 句 4（選用）：一個誠實的限制或保留

### 三版本變奏
| 版本 | 風格 | 適用 |
|---|---|---|
| **鋒利版** | 帶判斷、有立場、敢得罪人 | Craig 想表達品味的核心推薦 |
| **中性版** | 客觀描述、低風險 | 合作條目、新接觸的電子報 |
| **自嘲版** | 從自己「為什麼會訂這種東西」切入 | 偏冷門、需要降低門檻的推薦 |

## 第三步：撰寫 highlight（選填）

> 看 `_wiki/curation-principles.md` 的 F 節規範。

寫 2 個版本讓 Craig 選：
- 版本 A：金句型（短、有節奏）
- 版本 B：反差型（違反直覺的觀察）

## 第四步：產出 JSON 草稿

用下列格式輸出，Craig 可直接複製貼到 `data/newsletters.json` 的 `items` 陣列：

```json
{
  "id": "<kebab-case-唯一識別碼>",
  "name": "<電子報名稱>",
  "author": "<作者名>",
  "url": "<官網或主頁>",
  "subscribe_url": "<訂閱連結>",
  "platform": "<beehiiv | substack | convertkit | ghost | mailerlite | self-hosted | other>",
  "language": "<zh-Hant | zh-Hans | en | ja | mixed>",
  "frequency": "<daily | weekly | biweekly | monthly | irregular>",
  "topics": ["<design | tech | ai | creator | business | ...>"],
  "design_score": <1-5>,
  "depth_score": <1-5>,
  "review": "<2-4 句繁中推薦理由>",
  "highlight": "<一句話亮點，選填>",
  "has_referral": <true | false>,
  "sponsored": <true | false>,
  "added": "<YYYY-MM-DD>",
  "featured": <true | false>,
  "active": true
}
```

## 第五步：交付清單（裁決點）

輸出時附上：

```
草稿完成。請 Craig 裁決：

1. review 我選了「鋒利版」第二段——「他把卡片盒筆記講到最白話」。
   這個比喻是我添加的，請確認是否符合你的觀感。
2. design_score 我給 4，依據是排版有自己的節奏但 OG 圖太通用。
   你同意 4 還是該給 5？
3. highlight 我選「為什麼是這份、不是別份」這個切角，第二版反差感更強。
   你選哪個？

確認後我會把 JSON 直接寫進 data/newsletters.json 並 commit。
```

## 第六步：commit 訊息

```
feat(rec): add <id> to weekly list

簡述為什麼這週選這份。
不是描述電子報內容，是說「為什麼是這個時機推它」。
```

## 反例：不要這樣寫 review

❌ 過長空話：
> 「在這個資訊爆炸的時代，這份電子報以其獨到的視角和深度的內容，
> 為讀者提供了寶貴的見解，無論你是初學者還是專家，都能從中受益。」

❌ 過短無料：
> 「值得訂閱。」

❌ 搬運原文：
> 「他在第 32 期寫到：『真正的設計不是裝飾，而是溝通...』（接下來複製整段）」

## 正例：這樣寫

✅
> 「他寫科技新聞的方式，是先告訴你『這事為什麼半年後會變成另一種樣子』，
> 然後才講當下發生了什麼。我訂的所有英文科技電子報裡，這是唯一一份我會把
> 連結轉給設計師朋友的。設計分中等，但深度分頂格——你不會記得它的視覺，
> 但會記得它的判斷。」
