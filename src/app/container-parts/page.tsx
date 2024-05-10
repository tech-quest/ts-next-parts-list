import { PageContainer } from '@/app/shared/components/page-container';
import { PartsSampleContainer } from '@/app/shared/components/parts-sample-container';

export default function ActionPartsPage() {
  return (
    <PageContainer>
      <h1>コンテナ系パーツ</h1>
      <p>
        複数の要素を子要素にとってページのレイアウトを作成する要素をスタイルで作成してみましょう。
      </p>
      <p>
        コンテナ系のパーツを作る際は以下の点に注意して作成するのがコツです。
      </p>
      <ul>
        <li>
          複数の要素を子要素に持つため、レイアウトが崩れないようにする
          <ul>
            <li>
              子要素の要素が増減してもレイアウトがなるべく崩れないようにする
            </li>
            <li>
              最初や最後の子要素についている margin
              無効化することで、異なる子要素でも上下の位置や余白感が崩れないようにする
            </li>
          </ul>
        </li>
      </ul>

      <section>
        <h2>カード</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>パネル</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>アコーディオン</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>カラムレイアウト</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>テーブル</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
