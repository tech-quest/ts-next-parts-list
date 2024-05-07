import { PageContainer } from '@/app/shared/components/page-container';
import { PartsSampleContainer } from '@/app/shared/components/parts-sample-container';
import { Card } from '@/components/containers/cards/card';
import SampleImage from './assets/images/sample-image.jpg';
import { Button } from '@/components/elements/buttons/button';
import { Heading } from '@/components/elements/headings/heading';
import { Panel } from '@/components/containers/panels/panel';
import { TextField } from '@/components/forms/texts/text-field';
import { Accordion } from '@/components/containers/accordions/accordion';
import { RowGrid } from '@/components/containers/grids/row-grid';

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
          <Card>
            <Card.Header heading="カードのタイトル" sub="サブタイトル" />
            <Card.Body>
              <p>:first-child で margin-top を無効化することで頭の余白が揃う</p>
              <p>コンテンツ</p>
              <p>
                :last-child で margin-bottom を無効化することで底の余白が揃う
              </p>
            </Card.Body>
            <Card.Footer>
              <div style={{ textAlign: 'right' }}>
                <Button type="button" value="ボタン" />
              </div>
            </Card.Footer>
          </Card>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 320px)',
              gap: '1rem',
              margin: '2rem 0',
            }}
          >
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>
                  :first-child で margin-top
                  を無効化することで、横並び時に頭の余白が揃う
                </p>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <Heading variant="h6" value="見出し" />
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
          </div>
          <Card>
            <Card.Body>
              <p>
                コンテンツのみでも使用できますが、その場合はシンプルな Panel
                コンポーネントを用意して使用すると良いでしょう。
                <br />
                コンテンツコンテンツコンテンツ
              </p>
            </Card.Body>
          </Card>
          <div style={{ margin: '2rem 0' }} />
          <Card maxWidth={345}>
            <Card.Header heading="画像付きカード" sub="サブタイトル" />
            <Card.Image src={SampleImage} />
            <Card.Body>
              <p>
                コンテンツ
                <br />
                コンテンツコンテンツコンテンツ
              </p>
            </Card.Body>
          </Card>
          <div style={{ margin: '2rem 0' }} />
          <Card maxWidth={345}>
            <Card.Image src={SampleImage} />
            <Card.Body>
              <p>
                ヘッダーなしのカード
                <br />
                コンテンツコンテンツコンテンツ
              </p>
            </Card.Body>
            <Card.Footer>
              <div style={{ textAlign: 'right' }}>
                <Button type="button" value="ボタン" />
              </div>
            </Card.Footer>
          </Card>
        </PartsSampleContainer>
      </section>

      <section>
        <h2>パネル</h2>
        <PartsSampleContainer>
          <Panel>
            <Heading variant="h5" value="パネルのタイトル" />
            <p>シンプルなパネル</p>
            <p>
              カードコンポーネントは横幅などの制限を追加して用途を限定しているが、制限のない自由な用途のパーツも用意しておくと柔軟に対応できます。
            </p>
            <TextField type="text" name="text-field" />
            <p style={{ textAlign: 'right' }}>
              <Button type="button" value="ボタン" />
            </p>
          </Panel>
        </PartsSampleContainer>
      </section>

      <section>
        <h2>アコーディオン</h2>
        <PartsSampleContainer>
          <Accordion heading="アコーディオン1">
            <Heading variant="h5" value="アコーディオンコンテンツ" />
            <p>アコーディオンコンテンツ</p>
            <TextField type="text" name="text-field" />
            <p style={{ textAlign: 'right' }}>
              <Button type="button" value="ボタン" />
            </p>
          </Accordion>
          <Accordion heading="アコーディオン2">
            <p>アコーディオンコンテンツ</p>
          </Accordion>
        </PartsSampleContainer>
      </section>

      <section>
        <h2>カラムレイアウト</h2>
        <PartsSampleContainer>
          <RowGrid columns={2}>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>2カラム</p>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
          </RowGrid>
          <RowGrid columns={3}>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>3カラム</p>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
          </RowGrid>
          <RowGrid columns={4}>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>4カラム</p>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
          </RowGrid>
          <RowGrid columns={2} align="start">
            <Card>
              <Card.Header heading="上下位置の指定" sub="align start" />
              <Card.Body>
                <p>
                  コンテンツの上下位置を指定できるように props
                  を用意しとくといいでしょう
                </p>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
          </RowGrid>
          <RowGrid columns={2} align="center">
            <Card>
              <Card.Header heading="上下位置の指定" sub="align center" />
              <Card.Body>
                <p>
                  コンテンツの上下位置を指定できるように props
                  を用意しとくといいでしょう
                </p>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
          </RowGrid>
          <RowGrid columns={2} align="end">
            <Card>
              <Card.Header heading="上下位置の指定" sub="align end" />
              <Card.Body>
                <p>
                  コンテンツの上下位置を指定できるように props
                  を用意しとくといいでしょう
                </p>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header heading="カードのタイトル" sub="サブタイトル" />
              <Card.Body>
                <p>コンテンツ</p>
              </Card.Body>
            </Card>
          </RowGrid>
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
