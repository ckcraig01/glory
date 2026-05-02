# `_wiki/` — 個人 LLM 思考框架

這個資料夾用來放你個人的 LLM wiki：思考框架、術語表、寫作模板、人物清單等。
push 到這個 repo 之後，Claude 在每次 session 都能 `Read` 到這些內容，作為寫作與評論的參考。

## 建議結構

```
_wiki/
├── README.md                  # 本檔
├── curation-principles.md     # 策展原則細則（比首頁宣言更詳細）
├── voice-guide.md             # 你的語氣／風格指南
├── glossary.md                # 慣用術語表
├── people/                    # 你關注的作者、品牌速寫
│   └── <name>.md
├── frameworks/                # 思考框架（像卡片盒）
│   ├── design-evaluation.md
│   └── tech-insight-criteria.md
└── templates/                 # 寫作模板
    ├── recommendation-card.md
    └── deep-review.md
```

## 怎麼把家裡電腦的內容搬上來

```bash
# 在你家裡電腦
cd path/to/your/llm-wiki
cp -r . /path/to/glory/_wiki/
cd /path/to/glory
git add _wiki/
git commit -m "wiki: import LLM thinking framework"
git push
```

或，如果你想保留隱私，這個 repo 可以整個設成 **private**，wiki 只有你自己跟有授權的 Claude session 看得到。

## 給 Claude 的提示

當你在 Claude Code 裡寫作或評論時，可以這樣開頭：

> 寫作前先讀 `_wiki/curation-principles.md` 與 `_wiki/voice-guide.md`，
> 嚴格依其中的標準與語氣輸出。

Claude 會優先採用 wiki 中的框架，而不是自行想像。
