export function formatDateOrTime(timestamp: number) {
  const date = new Date(timestamp); // timestamp가 밀리초인 경우 직접 사용, UNIX 시간초인 경우 * 1000
  const now = new Date();

  // 현지 시간 포맷터
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 12시간제를 원하지 않으면 false
  });

  // 현지 날짜 포맷터
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
  });

  // 오늘인지 확인
  if (date.toLocaleDateString() === now.toLocaleDateString()) {
    // 오늘 날짜에 해당하면 시간만 반환
    return timeFormatter.format(date);
  } else {
    // 그렇지 않으면 날짜 반환
    return dateFormatter.format(date);
  }
}

export function formatDateYear(timestamp: number) {
  const date = new Date(timestamp); // timestamp가 밀리초인 경우 직접 사용, UNIX 시간초인 경우 * 1000
  const now = new Date();

  // 현지 날짜 포맷터
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return dateFormatter.format(date);
}
