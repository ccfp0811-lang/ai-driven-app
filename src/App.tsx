import React, { useState } from 'react';

const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="logo">
        キャリクラ
        <span>0円から始めるSNS副業スクール</span>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="hero">
    <div className="container">
      <h1>
        0円から始められる、<br />
        <span className="highlight">失敗しにくい</span>SNS副業
      </h1>
      <p>「知識ゼロ・実績ゼロ」のあなたでも大丈夫。<br />新しい働き方、ここから始めよう。</p>
      <a href="#cta" className="btn">まずは無料で診断してみる</a>
    </div>
  </section>
);

const Features: React.FC = () => {
  const features = [
    { title: "初期費用0円", description: "リスクなく始められるから安心。高額な教材やツールは一切不要です。" },
    { title: "未経験者向けカリキュラム", description: "専門用語を使わず、一から丁寧に解説。自分のペースで学べます。" },
    { title: "AIとテンプレートで効率化", description: "最新AIツールと豊富なテンプレートで、面倒な作業時間を大幅に短縮します。" },
    { title: "個別サポートあり", description: "一人で悩まない。プロの講師がマンツーマンであなたの副業をサポートします。" }
  ];

  return (
    <section id="features">
      <div className="container">
        <div className="section-header">
          <h2>キャリクラの特徴</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results: React.FC = () => {
  const testimonials = [
    { quote: "半信半疑でしたが、始めて3ヶ月で月5万円を達成！本業以外の収入がある安心感は大きいです。", user: "30代・会社員" },
    { quote: "育児のスキマ時間だけで収入が得られるなんて驚きです。在宅で働けるのが嬉しい！", user: "20代・主婦" },
    { quote: "SNS運用代行の案件を初めて獲得できました。フリーランスとしての一歩を踏み出せたのはここのおかげです。", user: "20代・フリーランス" }
  ];

  return (
    <section id="results" className="results">
      <div className="container">
        <div className="section-header">
          <h2>受講者の声</h2>
        </div>
        <div className="results-grid">
          {testimonials.map((testimonial, index) => (
            <div className="result-card" key={index}>
              <p>"{testimonial.quote}"</p>
              <div className="user-info">{testimonial.user}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface FaqItemProps {
  faq: { q: string; a: string };
  index: number;
  toggleFAQ: (index: number) => void;
  activeIndex: number | null;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, index, toggleFAQ, activeIndex }) => {
  const isActive = index === activeIndex;
  
  return (
    <div className="faq-item">
      <button 
        className="faq-question" 
        onClick={() => toggleFAQ(index)}
        aria-expanded={isActive}
        aria-controls={`faq-answer-${index}`}
      >
        {faq.q}
      </button>
      <div 
        id={`faq-answer-${index}`}
        className="faq-answer"
        style={{ maxHeight: isActive ? '200px' : '0' }}
      >
        <p>{faq.a}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { q: "Q. 本当に0円ですか？", a: "はい、入学金や月額費用は一切かかりません。LINEの無料診断から安心して始めていただけます。" },
    { q: "Q. スマホだけでもできますか？", a: "はい、カリキュラムの多くはスマートフォンで完結できるように設計されています。パソコンがあればより効率的に作業を進められます。" },
    { q: "Q. 副業が会社にバレませんか？", a: "ご安心ください。住民税の納付方法を「普通徴収」に切り替えるなど、会社に知られずに副業を行うためのノウハウも提供しています。" }
  ];

  return (
    <section id="faq">
      <div className="container">
        <div className="section-header">
          <h2>よくある質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              faq={faq} 
              index={index}
              toggleFAQ={toggleFAQ}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA: React.FC = () => (
  <section id="cta" className="cta">
    <div className="container">
      <div className="section-header">
        <h2>まずは無料で診断</h2>
      </div>
      <p>LINEで簡単な質問に答えるだけ！<br />あなたにピッタリのSNS副業タイプがわかります。</p>
      <a href="https://lin.ee/5CUrUE3" target="_blank" rel="noopener noreferrer" className="btn">
        LINEで副業タイプを診断する
      </a>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2024 キャリクラ. All Rights Reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Results />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
