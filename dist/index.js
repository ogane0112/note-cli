#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
// コマンドラインツールのインスタンスを作成
const program = new commander_1.Command();
// ヘルプメッセージの部分的なカスタマイズ（日本語化）
program.configureHelp({
    optionTerm: (option) => `オプション: ${option.flags}`, // オプションの表記
    subcommandTerm: (cmd) => `コマンド: ${cmd.name()}`, // サブコマンドの表記
});
// CLIツールの基本情報を設定
program
    .name('note') // コマンド名
    .description('Noteとやり取りするためのCLIツール') // 説明文
    .version('1.0.0'); // バージョン
// サブコマンド1: 記事投稿
program
    .command('post')
    .description('新しい記事をNoteに投稿します')
    .requiredOption('-t, --title <title>', '記事のタイトル') // 必須オプション
    .requiredOption('-b, --body <body>', '記事の本文') // 必須オプション
    .action((options) => {
    console.log(`記事タイトル: ${options.title}`);
    console.log(`記事本文: ${options.body}`);
    // API呼び出しロジックをここに追加
    // Note APIにリクエストを送信する関数を呼び出すなど
});
// サブコマンド2: Cookie取得
program
    .command('get-cookies')
    .description('ログイン済みブラウザからCookie情報を取得します')
    .action(() => {
    console.log('ログイン済みブラウザからCookie情報を取得します...');
    // Cookie取得ロジックをここに追加
    // Puppeteerなどを使用してCookie情報を取得する処理を実装
});
// 引数解析と実行（ユーザーが入力した引数に基づいて適切な処理を実行）
program.parse(process.argv);
