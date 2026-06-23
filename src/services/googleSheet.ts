import { appConfig } from "../config/appConfig";
import type { AnswerRecord, Player, ResultRule } from "../types/quiz";

export type QuizSubmission = {
  player: Player;
  answers: AnswerRecord[];
  totalScore: number;
  result: ResultRule;
  status?: "Hoàn thành" | "Hết giờ";
};

type ParticipantCountResponse = {
  success?: boolean;
  participantCount?: number;
};

export async function fetchParticipantCount() {
  if (!appConfig.googleSheetUrl) {
    throw new Error("GOOGLE_SHEET_URL_NOT_CONFIGURED");
  }

  const response = await fetch(appConfig.googleSheetUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`GOOGLE_SHEET_COUNT_REQUEST_FAILED_${response.status}`);
  }

  const data = (await response.json()) as ParticipantCountResponse;

  if (data.success !== true || typeof data.participantCount !== "number") {
    throw new Error("GOOGLE_SHEET_COUNT_RESPONSE_INVALID");
  }

  return data.participantCount;
}

export async function submitQuizResult(submission: QuizSubmission) {
  if (!appConfig.googleSheetUrl) {
    return { ok: false, reason: "GOOGLE_SHEET_URL_NOT_CONFIGURED" as const };
  }

  const payload = {
    hoTen: submission.player.name,
    diemSo: submission.totalScore,
    nhomTinhCach: submission.result.title,
    trangThai: submission.status ?? "Hoàn thành",
    cauTraLoi: submission.answers.map((answer) => ({
      cauHoiId: answer.questionId,
      dapAn: answer.answerKey,
      diem: answer.score,
    })),
  };

  await fetch(appConfig.googleSheetUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  return { ok: true as const };
}
