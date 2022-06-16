# ブランチの見方
master → 添削後のコード
dev → テスト環境
20220617_beforeCodeReview_01 → 添削前のコード（動作OK）

# js-tic-tac-toe

このリポジトリ はHTML, CSS(SASS), JavaScriptの練習用リポジトリです。

デモ: https://version1-workspace.github.io/ws-0300-js-tic-tac-toe/

デモをみながら同じようなアプリを実装してください。

## 準備

課題に取り組む前にnode.jsのインストールが必要です。下記記事にしたがってインストールをしてください。

- [nvm +  Node.js + npmのインストール - Qiita](https://qiita.com/sansaisoba/items/242a8ba95bf70ba179d3#mac%E3%81%AE%E5%A0%B4%E5%90%88)


## 課題で身に着けること

- yarn でのパッケージ管理
- 関数型プログラミングの基礎
- データと振る舞いの分離
- EventListenerの使い方
- HTML, CSS, JSの分離

## 課題の進め方

#### 準備

また、下記概念を理解して課題を行うようにしてください。

#### DOMについて

- [MDN | DOM の紹介](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Introduction)
- [MDN | ドキュメントの操作](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [ライブラリを使わない素のJavaScriptでDOM操作](https://qiita.com/kouh/items/dfc14d25ccb4e50afe89)
- [JavaScript DOM操作再入門①](https://qiita.com/tfrcm/items/8173977de75da1b0e5e9#:~:text=DOM%E3%81%AE%E6%93%8D%E4%BD%9C%E3%81%A8%E3%81%AF,%E3%81%9F%E3%82%8A%E3%81%99%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E4%BA%8B%E3%81%A7%E3%81%99%E3%80%82)
- [JavaScript DOM操作再入門②](https://qiita.com/tfrcm/items/1d7c3f443e235d70c73a)

#### イベントについて

- [MDN | イベントの紹介](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events)
- [EventTarget.addEventListener() - Web APIs | MDN](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)

#### 関数型プログラミングについて

- [関数型プログラミングはまず考え方から理解しよう - Qiita](https://qiita.com/stkdev/items/5c021d4e5d54d56b927c)
- [関数型プログラミング入門 | POSTD](https://postd.cc/an-introduction-to-functional-programming/)

#### yarnについて

- [npmとは、yarnとは](https://qiita.com/Hai-dozo/items/90b852ac29b79a7ea02b)


#### 0. 課題を始める前にリポジトリ をフォーク

- [GitHubフォークのやり方](https://version-1workspace.gitbook.io/github/how-to-fork)

#### 1. フォークしてリポジトリ をクローンして課題をスタート

Gitが初めての方は下記を参照ください。

- [プログラミングを学ぶ前に始めるGit入門](https://version-1workspace.gitbook.io/git/)

```
git clone https://github.com/version-1/js-tic-tac-toe.git
```

#### 2. 留意事項を確認する

1. JavaScriptでのイベントの実装はaddEventListenerを利用することhtml内でのイベントの登録は行わない。

英語: [EventTarget.addEventListener() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

日本語: [EventTarget.addEventListener() - Web APIs | MDN](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)

2. htmlのDOMに直接スタイルをあてない、またはjsでDOMのスタイルを書き換えるのではなく、クラスを付与することでスタイルを変化させること。
3. 関数型プログラミングの考え方にのっとって、状態と振る舞いを分離させること
4. 成果物はGithub Pagesにて公開する。(gh-pagesブランチをつくってPUSHするだけ）
5. cssのスタイルはSASS記法でSMACCSSの考えに則って実装する
6. 上記ルールに則りながら必要に応じて自分でファイルを追加・編集する


#### 3. sassのコンパイル

```
cd [クローンしたディレクトリ]
yarn install
yarn run compile:css
```

サーバが起動していることを確認して、HTMLを開く。以降はnodeのサーバを起動しながら開発を行う。

#### 4. github pagesにてサイトを公開

作業が終わったら変更をコミット & pushしてリモートリポジトリ に変更を反映させます。 masterへの変更が終わったら下記手順でサイトをgithub ページ上に公開してください。

https://help.github.com/ja/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

