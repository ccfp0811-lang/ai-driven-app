import React from 'react';
import './index.css';

// --- SVG Icons with Neon Effect ---
const NeonIcon = ({ d }: { d: string }) => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ filter: `drop-shadow(0 0 5px var(--neon-cyan))` }}>
    <path d={d} stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Components (normally in separate files) ---

const Header = () => (
  <header style={{ padding: '20px 0', position: 'fixed', width: '100%', background: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)', zIndex: 10 }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ fontSize: '24px', fontFamily: 'var(--font-en)' }}>CareerClara</h1>
      <nav>
        <a href="#features" style={{ margin: '0 15px', textDecoration: 'none', color: 'var(--text-slate)' }}>サービス</a>
        <a href="#trust" style={{ margin: '0 15px', textDecoration: 'none', color: 'var(--text-slate)' }}>実績</a>
        <a href="#campaign" className="neon-button" style={{ marginLeft: '15px' }}>無料体験を始める</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
    <div className="container" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', color: 'var(--neon-orange)', fontFamily: 'var(--font-jp)' }}>2ヶ月無料キャンペーン実施中</h2>
      <h1 style={{ fontSize: '4rem', margin: '10px 0', lineHeight: 1.2 }}>
        そのキャリア、<span className="neon-text">アップグレード</span>しませんか？
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-slate)', maxWidth: '600px', margin: '20px auto 40px' }}>
        『キャリクラ』は、あなたの市場価値を可視化し、最大化するプレミアム・キャリアプラットフォーム。今だけの特別な機会をお見逃しなく。
      </p>
      <a href="#campaign" className="neon-button" style={{ padding: '18px 36px', fontSize: '1.2rem' }}>
        価値を実感する（無料体験へ）
      </a>
    </div>
  </section>
);

const Features = () => {
  const services = [
    { title: '市場価値診断', description: 'AIがあなたのスキルと経験を分析し、リアルな市場価値を算出。', icon: 'M3 13.182C3 12.08 3.47394 11.022 4.29289 10.203L10.203 4.29289C11.022 3.47394 12.08 3 13.182 3H15M9 21V15M15 21V15M3 7.81802C3 6.71603 3.47394 5.65805 4.29289 4.8391L10.203 14.8391C11.022 15.658 12.08 16.132 13.182 16.132H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z' },
    { title: 'スキルマップ最適化', description: '目標キャリアから逆算し、次に習得すべきスキルをロードマップで提示。', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'パーソナルコーチング', description: '業界トップのプロフェッショナルが1on1であなたのキャリアを伴走。', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M12 14a4 4 0 100-8 4 4 0 000 8z' },
    { title: '限定求人アクセス', description: '一般には公開されない、あなたの価値を正当に評価する企業とのマッチング。', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  ];

  return (
    <section id="features" className="container" style={{ padding: '100px 0' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>
        あなたの価値を最大化する<span className="neon-text">4つの機能</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {services.map(service => (
          <div key={service.title} className="glass-card">
            <div style={{ marginBottom: '20px' }}><NeonIcon d={service.icon} /></div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-slate)' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Trust = () => (
  <section id="trust" style={{ padding: '100px 0', background: 'var(--dark-charcoal)' }}>
    <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>
          なぜ<span className="neon-text">選ばれる</span>のか？
        </h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', marginBottom: '60px' }}>
        <div>
          <h3 className="neon-text" style={{ fontSize: '3rem' }}>15,000+</h3>
          <p style={{ color: 'var(--text-slate)' }}>累計利用者数</p>
        </div>
        <div>
          <h3 className="neon-text" style={{ fontSize: '3rem' }}>平均120%</h3>
          <p style={{ color: 'var(--text-slate)' }}>年収アップ率</p>
        </div>
        <div>
          <h3 className="neon-text" style={{ fontSize: '3rem' }}>98%</h3>
          <p style={{ color: 'var(--text-slate)' }}>ユーザー満足度</p>
        </div>
      </div>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ marginBottom: '20px' }}>自信に満ちたビジネスパーソンへ</h3>
        <p style={{ color: 'var(--text-slate)' }}>
        「先進的なデザインは魅力的だが、本当に信頼できるのか？」 そのようなご懸念は当然です。キャリクラは、感覚的な成功体験ではなく、データと論理に基づいたキャリア形成を支援します。上記の数値は、我々のメソッドが再現性高く、多くのビジネスパーソンの成功に貢献してきた論理的帰結です。ご安心ください、あなたのキャリアを預かるに足る信頼性がここにあります。
        </p>
      </div>
    </div>
  </section>
);

const Campaign = () => (
  <section id="campaign" className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2.5rem' }}>
      2ヶ月後、市場価値で差をつける<span className="neon-text">最後のチャンス</span>
    </h2>
    <p style={{ fontSize: '1.2rem', color: 'var(--text-slate)', maxWidth: '700px', margin: '20px auto 40px' }}>
      この価値あるプラットフォームを、なぜ無料で提供するのか？それは、我々があなたの成功に絶対の自信を持っているからです。しかし、この特別なキャンペーンは永続的ではありません。2ヶ月後、今のままでいる自分と、新たな価値を手にした自分。どちらを選びますか？
    </p>
    <a href="#" className="neon-button" style={{ padding: '18px 36px', fontSize: '1.2rem', background: 'var(--neon-orange)', color: 'var(--dark-navy)' }}>
      今すぐ、損失を回避する
    </a>
    <p style={{ marginTop: '15px', color: 'var(--text-slate)', fontSize: '0.9rem' }}>
      ※キャンペーンは予告なく終了する場合がございます。
    </p>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid var(--dark-charcoal)' }}>
    <div className="container">
      <p style={{ color: 'var(--text-slate)', fontSize: '0.9rem' }}>© 2023 CareerClara Inc. All Rights Reserved.</p>
    </div>
  </footer>
);

function App() {
  // A simple Intersection Observer implementation could be added here
  // to add the 'is-visible' class to sections as they scroll into view.

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Trust />
        <Campaign />
      </main>
      <Footer />
    </>
  );
}

export default App;
