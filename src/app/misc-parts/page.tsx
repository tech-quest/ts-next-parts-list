import { PageContainer } from '@/app/shared/components/page-container';
import { PartsSampleContainer } from '@/app/shared/components/parts-sample-container';
import { AvatarMedia } from '@/components/containers/media-objects/avatar-media';
import { Chip } from '@/components/elements/accessories/chip';
import { FluidImage } from '@/components/elements/images/fluid-image';
import { Pagination } from '@/components/elements/navigations/pagination';
import sampleImage960 from './assets/images/sample960x540.png';
import sampleImage100 from './assets/images/sample100x100.png';

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

      <section>
        <h2>リキッド画像</h2>
        <PartsSampleContainer>
          <FluidImage src={sampleImage960} />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>コメントコンポーネント</h2>
        <PartsSampleContainer>
          <AvatarMedia src={sampleImage100}>
            <p>
              コメントの本文が入ります。
              <br />
              コメントの本文が入ります。コメントの本文が入ります。コメントの本文が入ります。コメントの本文が入ります。
            </p>
          </AvatarMedia>
          <AvatarMedia>
            <p>
              プロフィール画像がない場合は、デフォルトの画像が表示されるようにしましょう。
            </p>
          </AvatarMedia>
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
