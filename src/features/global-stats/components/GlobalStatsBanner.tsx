import getGlobalStats from "../queries/GetGlobalStats";
import StatisticHighLight from "@/components/shared/StatisticHighlight";

export default async function GlobalStatsBanner() {
    const globalStats = await getGlobalStats();

    return (
        <div className="w-full flex justify-between">
            <StatisticHighLight statistic={globalStats.totalGamesPlayed} name="Games Played"></StatisticHighLight>
            <StatisticHighLight statistic={globalStats.totalUsers} name="Different Users"></StatisticHighLight>
            <StatisticHighLight statistic={globalStats.totalWordsGuessed} name="Words Guessed"></StatisticHighLight>
        </div>
    );
}