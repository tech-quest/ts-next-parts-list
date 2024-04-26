import { PageContainer } from '@/app/shared/components/page-container';
import { PartsSampleContainer } from '@/app/shared/components/parts-sample-container';
import { Chip } from '@/components/elements/accessories/chip';
import { Pagination } from '@/components/elements/navigations/pagination';

export default function ActionPartsPage() {
  return (
    <PageContainer>
      <h1>その他一般パーツ</h1>
      <p>その他一般的なパーツをスタイルで作成してみましょう。</p>

      <section>
        <h2>チップ (タグ)</h2>
        <PartsSampleContainer>
          <Chip value="チップ (primary)" color="primary" />
          <Chip value="チップ (error)" color="error" />
          <Chip value="チップ (warning)" color="warning" />
          <Chip value="チップ (gray)" color="gray" />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>ページネーション</h2>
        <PartsSampleContainer>
          <Pagination length={10} />
          <Pagination length={10} offset={2} />
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
