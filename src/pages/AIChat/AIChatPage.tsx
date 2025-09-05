import { useState } from "react";
import styles from './AIChatPage.module.scss';
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/Card";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ScrollArea } from "../../components/ScrollArea";

interface Message { id: string; text: string; isUser: boolean; timestamp: Date }

export function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([{ id: '1', text: 'こんにちは！私はAI夢解析師のユメシです。🌙 あなたの見た夢について詳しく教えていただけますか？夢の内容、感情、印象的だった場面など、どんな些細なことでも構いません。', isUser: false, timestamp: new Date() }]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const dreamResponses = [
    'とても興味深い夢ですね。その夢の中で最も印象に残った要素は何でしたか？',
    'その夢は現在のあなたの心理状態を反映している可能性があります。最近、何か変化はありましたか？',
  ];

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const userMessage: Message = { id: Date.now().toString(), text: inputText, isUser: true, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputText(''); setIsTyping(true);
    setTimeout(() => { setMessages(prev => [...prev, { id: (Date.now()+1).toString(), text: dreamResponses[Math.floor(Math.random()*dreamResponses.length)], isUser: false, timestamp: new Date() }]); setIsTyping(false); }, 1200);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>AI夢解析師</h1>
          <p className={styles.lead}>あなたの夢を一緒に探求しましょう。どんな夢でもお聞かせください。</p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <Card className={styles.chatCard}>
            <CardContent className={styles.chatContent}>
              <ScrollArea className={styles.scrollArea}>
                <div className={styles.messagesList}>
                  {messages.map(m => (
                    <motion.div key={m.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`${styles.messageRow} ${m.isUser ? styles.justifyEnd : styles.justifyStart}`}>
                      <div className={m.isUser ? styles.messageBubbleUser : styles.messageBubbleAI}>
                        <p className={styles.msgText}>{m.text}</p>
                        <p className={styles.msgTime}>{m.timestamp.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
              <div className={styles.inputRow}>
                <Input value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={e => e.key === 'Enter' && sendMessage()} placeholder="あなたの夢について教えてください..." className={styles.inputField} disabled={isTyping} />
                <Button onClick={sendMessage} disabled={!inputText.trim() || isTyping} className={styles.sendButton} aria-label="送信">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="currentColor" />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={styles.infoSection}
        >
          <Card className={styles.hintCard}>
            <h3 className={styles.cardTitle}>💡 ヒント</h3>
            <div className={styles.cardGrid}>
              <div>
                • 夢の詳細を具体的に描写してください •
                夢の中での感情も重要です<br />
                • 印象に残ったシンボルがあれば教えてください •
                最近の出来事との関連も考えてみましょう
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 注意事項 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={styles.infoSection}
        >
          <Card className={styles.noticeCard}>
            <div className={styles.noticeInner}>
              <div className={styles.noticeContent}>
                <h3 className={styles.cardTitle}>❗️ ご注意</h3>
                <div className={styles.cardGrid}>
          <div>
            AI夢解析師は参考情報を提供するものです。
            深刻な悪夢やトラウマに関連する夢については、専門のカウンセラーや医師にご相談することをお勧めします。
            また、個人情報や機密情報は入力しないようお願いします。
          </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
