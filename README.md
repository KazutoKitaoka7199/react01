React入門（復習もかねて詳細に行ったことを記録）

**1回目**
・Reactのプロジェクトの作成と立ち上げ<br>
```
  npx create-react-app アプリ名
  npm run start
```

・フォルダの構成について<br>
  基本的にpublicフォルダのindex.htmlかsrcフォルダのApp.jsかindex.jsをいじる

・FirebaseのHostingサービス<br>
  Hostingサービスを使用すると、簡単にアプリがデプロイできる<br>
  URL:https://reactapp01-listapp.web.app/  
  <工程><br>
  (1)firebaseで新しいプロジェクトを作成する<br>
  (2)コマンドを使用してfirebase Hostingサービスでアプリをデプロイ<br>
  参考UPL：<br>
  https://zenn.dev/watarukun/articles/8f3e318bacf97cabf879  
  https://www.udemy.com/course-dashboard-redirect/?course_id=2820141  

・JSXの基本的な書き方
  class → className<br>
  {}を使用することでJavaScriptの要素を代入できる<br>
  onclickのような2つの言葉の属性はcamelCaseで記述する(onClick)<br>

**2回目**
・propsとstate  
  propsは親コンポーネントから子供のコンポーネントを呼び出すときに使用する。読み取り専用。<br>
・stateはコンポーネントの状態を表す。変更可能。<br>


