---
layout: default
title: EnOcean IoTシステム開発コンテスト
description: 優秀作品の紹介
---

## ページ編集の方法

IoT ALGYANの公式WebサイトはGitHub Pagesで運用していて，本コンテストの優秀作品の紹介ページの編集も，GitHubのPull Requestで行いたいと思います．  
GitHubやMarkdownの編集に不慣れという方は，テキストやWordなどで紹介ページの原稿を作成し，メールにて送付してください．こちらでよしなに整形して掲載いたします．  
今回の大事なコトはGitHubを使いこなすことではなく，皆さんの素晴らしい！作品をひろく公開することだと思います．遠慮なくどうぞっ！！

また，GitHub Pagesで自分で編集するけど，分からないことや困ったこと，こうしたいんだけどどうしたら良いの？という相談も承ります．メールかリポジトリのIssueでお知らせください．

### 大まかな流れ

1. 公式WebサイトのGitHub Repositoryをforkする<br>[https://github.com/algyan/algyan.github.io](https://github.com/algyan/algyan.github.io)
1. フォーク先のご自身のリポジトリにある `algyan.github.io/EnOceanContest/<ご自身のファイル名>.md` を編集する
1. Pull Requestを作成する
1. Mergeされたら，思ったとおりに表示されているか確認する

ALGYANで以前に実施したGitHubハンズオンに参加されていて，その時にすでにGitHubリポジトリをfork済みの方もいらっしゃるかと思います．その場合は，いったんfork先のご自身のリポジトリを削除してからforkし直すのが手っ取り早いです．もしくは正しく綺麗にやりたい場合は，fork元のリポジトリ（本家のリポジトリ）の更新をfork先のご自身のリポジトリに[こんな感じで](https://qiita.com/taoki11111/items/6582dafeb971f66d1f79)取り込むと良いでしょう．

### 制約事項

- `./EnOceanContest/` 以下のみを編集してください．
  - .mdファイル（ページ）は，指定されたご自身のファイル１個のみとしてください．他のページにリンクを張っていただくのは差し支えありません．
  - 他の方の.mdやトップディレクトリ等は変更しないでください．
  - 画像など他のファイルを配置しても構いません．.jsもいけるかもしれません．
- 基本的にはMarkdown記法が良いですが，htmlベタ書きもいけます．
- 見出しは `###`と`####`（`<h3>`と`<h4>`）の２レベルのみとしてください．それ以上のレベルの見出しは使用しないでください．それ以下は使用しても見た目はあまり期待できません．
- コンテンツの内容や構成は自由ですが，一般的な社会通念や公序良俗に反するものはお避けください．Pull RequestのMergeの際に修正をお願いすることがあります（けど，みなさんオトナなので大丈夫ですよね^^;

### Tips：プレビューの方法

基本的にはMarkdownなので，一般的なビューワ（VS Codeのプレビューとか）で体裁や内容のプレビューができます．

実際のページの仕上がりを確認したい場合は，ご自身のフォーク先のリポジトリで Settings > Options > GitHub Pages を設定してやる方法もあります．ただしALGYAN公式Webサイトのクローンが大量発生することになるので，目的を満たしたらこの設定を戻すようにしてください．

Pull Requestは何度でも承ります．いったんMergeしてみて本番環境で見栄えを確認していただき，また修正を繰り返しても大丈夫です．ただしMerge作業は人力になりますので，タイムラグはご容赦ください．

### Markdownの記法

よく使われそうな記法とその見栄えをお示しします．  
このページの元ファイルと見比べていただくと把握できるかと思います．  
[https://raw.githubusercontent.com/algyan/algyan.github.io/master/EnOceanContest/howtoedit.md](https://raw.githubusercontent.com/algyan/algyan.github.io/master/EnOceanContest/howtoedit.md)

### h3レベルの見た目はこんな感じです

#### h4レベルの見た目はこんな感じです

##### h5レベル以下はあんまり見た目がよくないです

*いろい*ろMark**down記**法が使えます．  
改行は文末に空白スペース２個です．  

コードも`Hello!`と使えます．ブロックはこんな感じで，~~ちなみに下記はElixirです．~~

```
defmodule Hello do
  def hello do
    IO.puts "Hello Elixir!!!"
  end
end
```

htmlタグのベタ書きもいけます．  
<font color="red">文字の色を変えたい</font>とか<font size="5">大きくしたい</font>場合に使うと良いでしょう．<br>
ページ全体がhtmlでも大丈夫です．

リンクは[こんな感じ](https://gitpitch.com/takasehideki/ALGYAN-GitHub_PR-HandsOn/howto)です．
URLベタ書きだけだと下記みたいな残念な感じになります．  
https://algyan.connpass.com/

画像ファイルを貼り付けたい場合は，`./EnOceanContest/` 以下のみに`git add`してもらえればです．別サイトのURLでもリンクを貼れます．
イケメンの写真を貼り付けておきます．

![イケメン！](kogure.jpg)

![](https://techmode.co.jp/images/en_02.png)

画像サイズを変えたい場合はhtmlベタ書きにする必要があります．

<img src="/img/algyan.jpg" width="50%">


YouTubeとかSlideShareとかの埋め込み（`<iframe>`）も使えます．こんな感じです．

<iframe width="560" height="315" src="https://www.youtube.com/embed/MsU1QsmhNiU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe src="//www.slideshare.net/slideshow/embed_code/key/dw2GWOAJJCFUvE" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/takasehideki/nerves-elixir-iot-199668717" title="Nerves!? Elixir!?? 関数型言語でれっつIoT開発！！" target="_blank">Nerves!? Elixir!?? 関数型言語でれっつIoT開発！！</a> </strong> from <strong><a href="//www.slideshare.net/takasehideki" target="_blank">Hideki Takase</a></strong> </div>

他にこんなんだとどうなる？という質問など，遠慮なくお知らせください．



[homeに戻る](../index)
