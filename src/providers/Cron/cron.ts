import nodeSchedule from "node-schedule";

import getArticlesUpdatedList from "../../database/dailyDbUpdate";

// Considerado UTC - 3 horas para horário de Brasília: 9am = 12 UTC
export default function cron() {
  nodeSchedule.scheduleJob("0 12 * * * ", () => {
    getArticlesUpdatedList();
  });
}
