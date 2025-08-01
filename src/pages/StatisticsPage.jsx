
import { useEffect, useState } from "react";
import { getStatistics } from "../api/report";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function StatisticsPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getStatistics()
      .then((res) => {
        if (res.data?.status?.code === 200) {
          setStats(res.data.results);
        } else {
          console.error("통계 응답 오류:", res.data.status.message);
        }
      })
      .catch(console.error);
  }, []);

  if (!stats) return <p>통계 불러오는 중...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h5" gutterBottom>신고 통계</Typography>
      <Grid container spacing={2}>
        {Object.entries(stats).map(([key, value], idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2">{key}</Typography>
                <Typography variant="h6">{value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default StatisticsPage;
