React入門（復習もかねて詳細に行ったことを記録）

## 1回目
**やったこと**
- Reactのプロジェクトの作成と立ち上げ
```
  npx create-react-app アプリ名
  npm run start
```

- フォルダの構成について
  基本的にpublicフォルダのindex.htmlかsrcフォルダのApp.jsかindex.jsをいじる

- FirebaseのHostingサービス
  Hostingサービスを使用すると、簡単にアプリがデプロイできる<br>
  URL:https://reactapp01-listapp.web.app/  
  <工程><br>
  (1)firebaseで新しいプロジェクトを作成する<br>
  (2)コマンドを使用してfirebase Hostingサービスでアプリをデプロイ<br>

  参考UPL：
  https://zenn.dev/watarukun/articles/8f3e318bacf97cabf879  
  https://www.udemy.com/course-dashboard-redirect/?course_id=2820141  

- JSXの基本的な書き方
  class → className<br>
  {}を使用することでJavaScriptの要素を代入できる<br>
  onclickのような2つの言葉の属性はcamelCaseで記述する(onClick)<br>

## 2回目
**やったこと**
- コンポーネンの作り方
- 親コンポーネントから子コンポーネントへの値の渡し方
- 子コンポーネントから値を参照する方法
- stateによるコンポーネントの状態の変更
- React Developer Toolの使い方


**知識**
- propsとstate
  propsは親コンポーネントから子供のコンポーネントを呼び出すときに使用する。読み取り専用。
- stateはコンポーネントの状態を表す。変更可能。
  Reactには useState という関数が用意されていてそれを利用することで state を定義できる。

