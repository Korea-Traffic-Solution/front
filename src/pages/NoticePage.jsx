import { Card, CardContent, Typography } from "@mui/material";

const notices = [
  {
    title: "전동 킥보드 속도 제한 및 구역 설정 안내",
    content: "2025년부터 전동 킥보드의 최고 속도는 25km/h로 제한되며, 특별 구역에서는 추가 제한이 적용됩니다. 관련 구역은 교통안전포털을 통해 확인 바랍니다.",
    date: "2025.03.12",
  },
  {
    title: "전동 킥보드 안전 규제 강화 안내",
    content: "2025년 4월부터 헬멧 착용 의무화 및 주차 구역 외 주차 시 벌금이 부과됩니다. 교통안전을 위해 반드시 규정 준수 바랍니다.",
    date: "2025.04.01",
  },
  {
    title: "PM 규제 관련 범칙금 부과 변경 사항 안내",
    content: "2025년 5월부터 PM 위반 관련 범칙금 항목이 일부 변경됩니다. 상세 내용은 교통안전공단 홈페이지 참고.",
    date: "2025.05.10",
  },
];

function NoticePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h5" gutterBottom>공지사항</Typography>
      {notices.map((notice, index) => (
        <Card key={index} style={{ marginBottom: "1rem" }}>
          <CardContent>
            <Typography variant="h6">{notice.title}</Typography>
            <Typography variant="body2" color="textSecondary">{notice.date}</Typography>
            <Typography variant="body1" style={{ marginTop: "0.5rem" }}>{notice.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default NoticePage;