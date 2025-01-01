# 非公式NoteCLI(未完成)
非公式APIを利用してNoteCLIを作ってみました！

## 使い方
### 前提
node.jsが必要です。推奨バージョンは20.18.0ですが、多分他のバージョンでも動くはず！！！
###  

# ディレクトリ構成
```
project/
├── src/
│   ├── commands/          # 各コマンドのロジックを格納
│   │   ├── init.ts        # note init コマンドのロジック
│   │   ├── post.ts        # note post コマンドのロジック
│   │   └── getCookies.ts  # note get-cookies コマンドのロジック
│   ├── utils/             # ヘルパー関数や共通ロジック
│   │   └── fileUtils.ts   # ファイル操作などのユーティリティ関数
│   └── index.ts           # CLIエントリーポイント
├── dist/                  # コンパイル後のJavaScriptファイル
├── package.json           # npm設定ファイル
├── tsconfig.json          # TypeScript設定ファイル
└── node_modules/          # npm依存パッケージ

```# note-cli
