import { PageContainer } from '@/app/shared/components/page-container';
import { PartsSampleContainer } from '@/app/shared/components/parts-sample-container';
import { Button } from '@/components/elements/buttons/button';
import { CheckboxField } from '@/components/forms/selections/checkbox-field';
import { PulldownField } from '@/components/forms/selections/pulldown-field';
import { RadioField } from '@/components/forms/selections/radio-field';
import { TextField } from '@/components/forms/texts/text-field';
import { TextareaField } from '@/components/forms/texts/textarea-field';

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
          <Button type="button" value="ボタンパターン" />
          <Button type="button" value="ボタン (disabled) パターン" isDisabled />
          <Button type="link" href="/" value="リンクパターン" />
          <Button
            type="link"
            href="https://tech-quest.club/"
            value="別タブリンクパターン"
            target="_blank"
          />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>テキスト入力</h2>
        <PartsSampleContainer>
          <TextField type="text" name="text-field" />
          <TextField type="password" name="password-field" />
          <TextField type="email" name="email-field" />
          <TextField type="text" name="disabled-text-field" disabled />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>テキスト入力 (複数行)</h2>
        <PartsSampleContainer>
          <TextareaField name="textarea-field" />
          <TextareaField name="disabled-textarea-field" disabled />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>プルダウン</h2>
        <PartsSampleContainer>
          <PulldownField
            name="pulldown-field"
            items={[
              { value: '', label: '選択してください' },
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
          />
          <PulldownField
            name="selected-pulldown-field"
            defaultValue="apple"
            items={[
              { value: '', label: '選択してください' },
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
          />
          <PulldownField
            name="disabled-pulldown-field"
            items={[
              { value: '', label: '選択してください' },
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
            disabled
          />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>ラジオボタン</h2>
        <PartsSampleContainer>
          <RadioField
            name="radio-field"
            items={[
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
          />
          <RadioField
            name="selected-radio-field"
            defaultValue="apple"
            items={[
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
          />
          <RadioField
            name="disabled-radio-field"
            items={[
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
            disabled
          />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>チェックボックス</h2>
        <PartsSampleContainer>
          <CheckboxField
            name="checkbox-field"
            items={[
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
          />
          <CheckboxField
            name="selected-checkbox-field"
            defaultValue="apple"
            items={[
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
          />
          <CheckboxField
            name="disabled-checkbox-field"
            items={[
              { value: 'apple', label: 'りんご' },
              { value: 'banana', label: 'バナナ' },
            ]}
            disabled
          />
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
