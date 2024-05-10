import { PageContainer } from '@/app/shared/components/page-container';
import { PartsSampleContainer } from '@/app/shared/components/parts-sample-container';

export default function ActionPartsPage() {
  return (
    <PageContainer>
      <h1>アクション系パーツ</h1>
      <p>
        ボタンやフォームアイテムなどのユーザー動作を促すパーツをスタイルで作成してみましょう。
      </p>
      <p>
        アクション系のパーツを作成する際は以下の点に注意して作成するのがコツです。
      </p>
      <ul>
        <li>通常の見た目だけでなくカーソルをあわせた際の動作なども考慮する</li>
        <li>無効化 (disabled) 状態なども考慮する</li>
        <li>
          適切なタグを考慮する
          <ul>
            <li>リンクは a タグを使用する</li>
            <li>
              JavaScript でクリック動作を実装する場合は button タグを使用する
              など
            </li>
          </ul>
        </li>
        <li>
          クリックできるエリアなど、動作の範囲は適切か
          <ul>
            <li>
              a タグに display: block;
              を適用すると意図せぬ余白部分がクリック範囲になってしまったりする
            </li>
          </ul>
        </li>
      </ul>

      <section>
        <h2>ボタン</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>テキスト入力</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>テキスト入力 (複数行)</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>プルダウン</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>ラジオボタン</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>チェックボックス</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
