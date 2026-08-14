import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { readFileSync } from "node:fs";
import path from "node:path";
import { isEgeOnlyGrade } from "@/lib/grades";
import { profiles } from "@/lib/profiles";
import {
  codeDescription,
  rankedScores,
  resultScoreItems,
  scoreDescription,
  scoreGrowthAdvice,
  type MainScoreKey,
} from "@/lib/resultDescriptions";
import { egeRecommendation, ogeRecommendation } from "@/lib/scoring";
import type { ResultPayload } from "@/lib/types";

const TRIAL_LESSON_URL = "https://planerka.app/ilandroxy";
const TELEGRAM_CHANNEL_URL = "https://t.me/informatika_kege_itpy";
const RESULT_SITE_URL = "https://itpy-proftest.vercel.app";
const LOGO_DATA_URI = `data:image/png;base64,${readFileSync(
  path.join(process.cwd(), "public", "branding", "itpy-logo.png"),
).toString("base64")}`;

Font.register({
  family: "Inter",
  fonts: [
    { src: path.join(process.cwd(), "public", "fonts", "Inter-Regular.ttf"), fontWeight: 400 },
    { src: path.join(process.cwd(), "public", "fonts", "Inter-SemiBold.ttf"), fontWeight: 600 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

const colors = {
  ink: "#233d35",
  muted: "#66736d",
  green: "#3d705e",
  dark: "#315e50",
  lime: "#c2c797",
  limeSoft: "#f0f0df",
  paper: "#fffdf8",
  line: "#d8d8ce",
  soft: "#efeee7",
  white: "#fffdf8",
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    color: colors.ink,
    backgroundColor: colors.paper,
    fontFamily: "Inter",
    fontSize: 9,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  brandRow: { flexDirection: "row", alignItems: "center" },
  logo: { width: 46, height: 46, marginRight: 12, objectFit: "contain" },
  brandCopy: { color: colors.muted, fontSize: 8 },
  brandTitle: { color: colors.ink, fontSize: 11, fontWeight: 400, marginBottom: 3 },
  socialBlock: { alignItems: "flex-end" },
  socialLink: { alignItems: "flex-end", textDecoration: "none" },
  socialHint: { marginBottom: 3, color: colors.muted, fontSize: 7.5 },
  socialHandle: { color: colors.green, fontSize: 8.5, fontWeight: 400 },
  date: { marginTop: 4, color: colors.muted, fontSize: 8, textAlign: "right" },
  hero: {
    marginTop: 17,
    padding: 20,
    borderRadius: 16,
    color: colors.white,
    backgroundColor: colors.dark,
  },
  eyebrow: {
    color: colors.lime,
    fontSize: 8.5,
    fontWeight: 400,
  },
  heroTitle: { marginTop: 9, fontSize: 22, fontWeight: 400, lineHeight: 1.18 },
  heroLead: { marginTop: 10, maxWidth: 470, color: "#e0e4dc", fontSize: 9.5, lineHeight: 1.55 },
  meta: { flexDirection: "row", marginTop: 14, color: "#e0e4dc", fontSize: 8 },
  metaItem: { marginRight: 24 },
  metaLabel: { color: colors.white, fontWeight: 600 },
  section: {
    marginTop: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  sectionTitle: { fontSize: 12, fontWeight: 400, marginBottom: 7 },
  body: { color: colors.muted, fontSize: 9, lineHeight: 1.5 },
  examRow: { flexDirection: "row", marginTop: 12 },
  examCard: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 92,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  examCardGap: { marginRight: 10 },
  examAccent: { borderColor: "#c8c9ab", backgroundColor: colors.limeSoft },
  examHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  kicker: { color: colors.green, fontSize: 7.5, fontWeight: 400 },
  examTitle: { marginTop: 3, fontSize: 12, fontWeight: 400 },
  examScore: { color: colors.green, fontSize: 20, fontWeight: 600 },
  examBody: { marginTop: 8, color: colors.muted, fontSize: 8, lineHeight: 1.42 },
  scoreGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 6, marginHorizontal: -4 },
  scoreCard: {
    width: "33.333%",
    padding: 4,
  },
  scoreCardInner: {
    minHeight: 83,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 11,
    backgroundColor: colors.white,
  },
  scoreHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  scoreLabel: { maxWidth: 105, fontSize: 8, fontWeight: 600 },
  scoreValue: { color: colors.green, fontSize: 12, fontWeight: 600 },
  scoreTrack: { height: 5, marginTop: 7, borderRadius: 5, backgroundColor: "#e6e5de" },
  scoreFill: { height: 5, borderRadius: 5, backgroundColor: colors.green },
  scoreText: { marginTop: 7, color: colors.muted, fontSize: 6.5, lineHeight: 1.35 },
  smallHeaderName: { fontSize: 11, fontWeight: 400 },
  smallHeaderCopy: { color: colors.muted, fontSize: 9 },
  insightRow: { flexDirection: "row", marginTop: 16 },
  insightCard: {
    flexGrow: 1,
    flexBasis: 0,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  insightGap: { marginRight: 11 },
  insightAccent: { borderColor: "#c8c9ab", backgroundColor: colors.limeSoft },
  insightItem: { marginTop: 12, paddingTop: 10, borderTopWidth: 1, borderTopColor: "#d9e2dc" },
  firstInsightItem: { borderTopWidth: 0, paddingTop: 0 },
  insightHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  insightLabel: { maxWidth: 175, fontSize: 9, fontWeight: 600 },
  insightValue: { color: colors.green, fontSize: 13, fontWeight: 600 },
  insightText: { marginTop: 6, color: colors.muted, fontSize: 7.5, lineHeight: 1.42 },
  codeCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    padding: 16,
    borderRadius: 14,
    color: colors.white,
    backgroundColor: colors.dark,
  },
  codeCopy: { width: 430 },
  codeKicker: { color: colors.lime },
  codeTitle: { marginTop: 5, fontSize: 13, fontWeight: 400 },
  codeBody: { marginTop: 7, color: "#e0e4dc", fontSize: 8, lineHeight: 1.45 },
  codeScore: { color: colors.lime, fontSize: 24, fontWeight: 600 },
  trialCard: {
    marginTop: 14,
    padding: 17,
    borderWidth: 1,
    borderColor: "#c8c9ab",
    borderRadius: 14,
    backgroundColor: colors.limeSoft,
  },
  trialTitle: { marginTop: 5, fontSize: 14, fontWeight: 400 },
  trialCopy: { marginTop: 7, color: colors.muted, fontSize: 8.5 },
  trialLink: { marginTop: 6, color: colors.green, fontSize: 11, fontWeight: 600, textDecoration: "none" },
  interests: { marginTop: 14, padding: 13, borderLeftWidth: 5, borderLeftColor: colors.lime, backgroundColor: colors.soft },
  interestsText: { marginTop: 5, color: colors.muted, fontSize: 8.5 },
  notice: {
    marginTop: 14,
    padding: 13,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 11,
    backgroundColor: colors.white,
  },
  noticeTitle: { marginBottom: 5, color: colors.green, fontSize: 8.5, fontWeight: 600 },
  noticeText: { width: "100%", color: colors.muted, fontSize: 7.5, lineHeight: 1.45 },
  footer: {
    position: "absolute",
    left: 40,
    right: 40,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    color: colors.muted,
    fontSize: 7,
  },
  footerLink: { color: colors.green, textDecoration: "none" },
});

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Дата не указана";
  return new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "long", year: "numeric" }).format(date);
}

function gradeLabel(grade: string) {
  return grade === "other" ? "Другой класс" : `${grade} класс`;
}

function ScoreCard({ label, value, scoreKey }: { label: string; value: number; scoreKey: MainScoreKey }) {
  return (
    <View style={styles.scoreCard}>
      <View style={styles.scoreCardInner}>
        <View style={styles.scoreHead}>
          <Text style={styles.scoreLabel}>{label}</Text>
          <Text style={styles.scoreValue}>{value}</Text>
        </View>
        <View style={styles.scoreTrack}>
          <View style={[styles.scoreFill, { width: `${value}%` }]} />
        </View>
        <Text style={styles.scoreText}>{scoreDescription(scoreKey, value)}</Text>
      </View>
    </View>
  );
}

export default function ResultPdfDocument({ payload }: { payload: ResultPayload }) {
  const profile = profiles[payload.profileId];
  const egeOnly = isEgeOnlyGrade(payload.participant.grade);
  const egeCopy = egeRecommendation(payload.scores, payload.participant.grade);
  const ranked = rankedScores(payload.scores);
  const strengths = ranked.slice(0, 2);
  const growth = ranked.slice(-2).reverse();
  const displayName = payload.participant.nickname.trim() || "Участник теста";
  const interests = payload.participant.interests.length > 0
    ? payload.participant.interests.join(", ")
    : "Пока не выбраны";
  return (
    <Document title={`Результат itpy - ${displayName}`} author="itpy" subject="Результат теста по информатике">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <Image src={LOGO_DATA_URI} style={styles.logo} />
            <View style={styles.brandCopy}>
              <Text style={styles.brandTitle}>Персональный результат</Text>
              <Text>{egeOnly ? "Информатика · ЕГЭ" : "Информатика · ОГЭ · ЕГЭ"}</Text>
            </View>
          </View>
          <View style={styles.socialBlock}>
            <Link src={TELEGRAM_CHANNEL_URL} style={styles.socialLink}>
              <Text style={styles.socialHint}>Ссылка на наш Telegram-канал ↓</Text>
              <Text style={styles.socialHandle}>t.me/informatika_kege_itpy</Text>
            </Link>
            <Text style={styles.date}>{formatDate(payload.completedAt)}</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>Результат для {displayName}</Text>
          <Text style={styles.heroTitle}>{profile.title}</Text>
          <Text style={styles.heroLead}>{profile.lead}</Text>
          <View style={styles.meta}>
            <Text style={styles.metaItem}><Text style={styles.metaLabel}>Класс: </Text>{gradeLabel(payload.participant.grade)}</Text>
            <Text><Text style={styles.metaLabel}>Опыт: </Text>{payload.participant.experience}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Что означает результат</Text>
          <Text style={styles.body}>{profile.student}</Text>
        </View>

        <View style={styles.examRow}>
          {!egeOnly && (
            <View style={[styles.examCard, styles.examCardGap, styles.examAccent]}>
              <View style={styles.examHead}>
                <View><Text style={styles.kicker}>ОГЭ</Text><Text style={styles.examTitle}>Рекомендация</Text></View>
                <Text style={styles.examScore}>{payload.scores.ogeIndex}</Text>
              </View>
              <Text style={styles.examBody}>{ogeRecommendation(payload.scores)}</Text>
            </View>
          )}
          <View style={[styles.examCard, egeOnly ? styles.examAccent : {}]}>
            <View style={styles.examHead}>
              <View><Text style={styles.kicker}>ЕГЭ</Text><Text style={styles.examTitle}>{egeOnly ? "Рекомендация" : "Перспектива"}</Text></View>
              <Text style={styles.examScore}>{payload.scores.egeIndex}</Text>
            </View>
            <Text style={styles.examBody}>{egeCopy}</Text>
          </View>
        </View>

        <View style={styles.scoreGrid}>
          {resultScoreItems.map((item) => (
            <ScoreCard key={item.key} label={item.shortLabel} value={Number(payload.scores[item.key])} scoreKey={item.key} />
          ))}
        </View>

        <View style={styles.footer}>
          <Text>© itpy, 2026</Text><Text>1 / 2</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <Image src={LOGO_DATA_URI} style={[styles.logo, { width: 38, height: 38 }]} />
            <View><Text style={styles.smallHeaderName}>{displayName}</Text><Text style={styles.smallHeaderCopy}>Подробный разбор результата</Text></View>
          </View>
          <Link src={TELEGRAM_CHANNEL_URL} style={styles.socialLink}>
            <Text style={styles.socialHint}>Ссылка на наш Telegram-канал ↓</Text>
            <Text style={styles.socialHandle}>t.me/informatika_kege_itpy</Text>
          </Link>
        </View>

        <View style={styles.insightRow}>
          <View style={[styles.insightCard, styles.insightGap, styles.insightAccent]}>
            <Text style={styles.kicker}>Сильные стороны</Text>
            {strengths.map((item, index) => (
              <View key={item.key} style={[styles.insightItem, index === 0 ? styles.firstInsightItem : {}]}>
                <View style={styles.insightHead}><Text style={styles.insightLabel}>{item.label}</Text><Text style={styles.insightValue}>{item.value}</Text></View>
                <Text style={styles.insightText}>{scoreDescription(item.key, item.value)}</Text>
              </View>
            ))}
          </View>
          <View style={styles.insightCard}>
            <Text style={styles.kicker}>Что стоит развивать</Text>
            {growth.map((item, index) => (
              <View key={item.key} style={[styles.insightItem, index === 0 ? styles.firstInsightItem : {}]}>
                <View style={styles.insightHead}><Text style={styles.insightLabel}>{item.label}</Text><Text style={styles.insightValue}>{item.value}</Text></View>
                <Text style={styles.insightText}>{scoreGrowthAdvice(item.key)}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.codeCard}>
          <View style={styles.codeCopy}>
            <Text style={[styles.kicker, styles.codeKicker]}>Дополнительный показатель</Text>
            <Text style={styles.codeTitle}>Понимание программного кода</Text>
            <Text style={styles.codeBody}>{codeDescription(payload.scores.code)}</Text>
          </View>
          <Text style={styles.codeScore}>{payload.scores.code}</Text>
        </View>

        <View style={styles.trialCard}>
          <Text style={styles.kicker}>Следующий шаг</Text>
          <Text style={styles.trialTitle}>Записаться на пробное занятие</Text>
          <Text style={styles.trialCopy}>Выбрать удобное время можно по ссылке:</Text>
          <Link src={TRIAL_LESSON_URL} style={styles.trialLink}>planerka.app/ilandroxy</Link>
        </View>

        <View style={styles.interests}>
          <Text style={styles.kicker}>Интересы внутри IT</Text>
          <Text style={styles.interestsText}>{interests}</Text>
        </View>

        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Важно</Text>
          <Text style={styles.noticeText}>Этот отчёт не измеряет интеллект и не является экзаменационной оценкой. Он отражает текущее прохождение, интерес, учебные привычки и выполнение небольшого набора заданий.</Text>
        </View>

        <View style={styles.footer}>
          <Text>Результат сформирован на сайте <Link src={RESULT_SITE_URL} style={styles.footerLink}>itpy-proftest.vercel.app</Link></Text>
          <Text>2 / 2</Text>
        </View>
      </Page>
    </Document>
  );
}
