'use client';
import { PageContainer } from './shared/components/page-container';
import { links } from './components/default-layout';

export default function Home() {
  return (
    <PageContainer>
      <h1>パーツリストを作成しよう！</h1>
      <p>
        CSSのスキルを高めるには様々なパターンの見た目をとにかく作成していくことが大事です。
        <br />
        そこで今回はサイトを構成する様々なパーツを作成していきましょう！
        <br />
        作成するパーツは主に Web
        サイト向けのパーツになりますが、CSSの基本を抑えていくことで Web
        アプリケーション向けのパーツも作成できるようになります。
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
