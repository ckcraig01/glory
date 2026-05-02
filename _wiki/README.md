# `_wiki/` — 個人 LLM 思考框架

這個資料夾用來放你個人的 LLM wiki：思考框架、術語表、寫作模板、人物清單等。
push 到這個 repo 之後，Claude 在每次 session 都能 `Read` 到這些內容，作為寫作與評論的參考。

## 目前已建立的檔案

```
_wiki/
├── README.md                  # 本檔
├── voice-guide.md             # 【待 Craig 填寫】語氣指南，含「我用的字／我不用的字」
├── anti-ai-slop.md            # 【已備好】AI 味道黑名單，可直接用
├── curation-principles.md     # 【已備好】策展原則 + 設計分／深度分評分錨點
└── templates/
    ├── recommendation-card.md  # 【已備好】推薦卡寫作模板
    └── deep-review.md          # 【已備好】週深度評論寫作模板
```

## 你之後可以加的檔案（建議結構）

```
_wiki/
├── glossary.md                # 慣用術語表（你常用的詞 → 你的定義）
├── people/                    # 你關注的作者、品牌速寫
│   └── <name>.md
├── frameworks/                # 你的思考框架（像卡片盒）
│   ├── design-evaluation.md
│   ├── tech-insight-criteria.md
│   └── <你既有的 wiki 結構>
├── samples/                   # 你過去寫得好的段落（給 voice-guide 引用）
│   └── <slug>.md
└── private/                   # （在 .gitignore 中）真正不能公開的筆記
```

## 啟用順序（重要）

Claude 每次寫作會依下列順序讀檔：

1. **`/CLAUDE.md`**（repo 根目錄）— 工作守則
2. **`_wiki/voice-guide.md`** — 你的語氣（**沒填 = AI 預設口氣**，這是優先級最高的）
3. **`_wiki/anti-ai-slop.md`** — 必避字眼
4. **`_wiki/curation-principles.md`** — 評論電子報時的標準
5. **對應任務模板**（templates/ 下的檔案）

所以你回家做的第一件事，**強烈建議是填 `voice-guide.md`**——其他檔案都已經是可運作的草稿。

## 怎麼把家裡電腦的 wiki 搬上來

### 方案 A：全部覆蓋（你的家裡 wiki 結構優於這份骨架）

```bash
# 在你家裡電腦
cd path/to/your/existing-llm-wiki
cp -r * /path/to/glory/_wiki/
cd /path/to/glory
git add _wiki/
git commit -m "wiki: import existing LLM thinking framework"
git push
```

### 方案 B：合併（保留我預先建好的骨架，新增你既有的內容）

```bash
# 把家裡 wiki 的子目錄逐個複製進來
cp -r ~/path/to/wiki/people /path/to/glory/_wiki/
cp -r ~/path/to/wiki/frameworks /path/to/glory/_wiki/
cp ~/path/to/wiki/glossary.md /path/to/glory/_wiki/

# 你既有的 voice-guide 可以覆蓋我建的骨架
cp ~/path/to/wiki/my-voice.md /path/to/glory/_wiki/voice-guide.md

git add _wiki/ && git commit -m "wiki: merge existing framework" && git push
```

如果想保留隱私，這個 repo 可以整個設成 **private**，
或把敏感檔案放到 `_wiki/private/`（已在 `.gitignore`）。

## 用 Claude 的標準開場（不需要每次重述）

`/CLAUDE.md` 已經幫 Claude 設好預設行為——你**不需要**每次都說「請先讀 voice-guide」。
只要直接下指令：

> 「幫我寫一張 raymond-houch 的推薦卡。」

Claude 會自動先讀 `voice-guide.md`、`anti-ai-slop.md`、`curation-principles.md`、
`templates/recommendation-card.md`，然後才動筆。

如果你發現它沒照做，提醒它讀 `CLAUDE.md`。
