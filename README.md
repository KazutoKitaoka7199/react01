React入門
https://www.youtube.com/playlist?list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13

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

  参考UPL：<br>
  https://zenn.dev/watarukun/articles/8f3e318bacf97cabf879  
  https://www.udemy.com/course-dashboard-redirect/?course_id=2820141  

- JSXの基本的な書き方<br>
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
  useStateは返り値として配列の1つ目の値を返し、2つ目の値は状態を変更するための関数、引数が初期値となっている。
```
const [description,setDescrition] = useState('クリック前の表示');
```

## 3回目
**やったこと**
- Class Componentsでのコンポーネントの書き方

**知識**
- Class ComponentsとFunction Componentsについて
  Class Componentsはclassを定義して、renderメソッドでHTMLを返す
  一方で、Function Componentsはfunctionを定義して、その返り値がHTML
- プロパティは
```
this.props
```
- ステートは
```
this.state
this.setState({ key: value })
```

## 4回目
**やったこと**
- 条件分岐と繰り返し
  
**知識**
- 条件分岐を行う際は、三項演算子を使用する
- 繰り返し処理はmap関数を使用する
  map関数は配列の各要素に対してコールバック関数を実行できる


