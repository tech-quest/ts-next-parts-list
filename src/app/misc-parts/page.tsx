import { PageContainer } from '@/app/shared/components/page-container';
import { PartsSampleContainer } from '@/app/shared/components/parts-sample-container';

export default function ActionPartsPage() {
  return (
    <PageContainer>
      <h1>その他一般パーツ</h1>
      <p>その他一般的なパーツをスタイルで作成してみましょう。</p>

      <section>
        <h2>チップ (タグ)</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>ページネーション</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>リキッド画像</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>コメントコンポーネント</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
