import { useEffect, useState } from "react";
import { ProgressCardProps } from "../types/ProgressCard";
import { Task } from "../types/task";
import {
  Card,
  CardHeading,
  CardMessage,
  Categories,
  CategoriesCon,
  CategoriesIcon,
  InfoCon,
  Percentage,
  Progress,
  ProgressCardCon,
  ProgressCon,
  ProgressTitle,
  Slider,
  SliderBack,
  SliderBar,
  Spacer,
} from "../styles/ProgressCard";
import { getCurrentDate } from "../utils/getCurrentDate";

type category = "work" | "personal" | "health" | "learning" | "social";

type State = {
  percentage: number;
  todaysTask: Task[];
  uniqueCategories: category[];
};

function ProgressCard({ tasks }: ProgressCardProps) {
  const [state, setState] = useState<State>({
    percentage: 0,
    todaysTask: [],
    uniqueCategories: [],
  });
  useEffect(() => {
    const targetDate = getCurrentDate();
    const count = tasks.filter(
      (item) => item.date === targetDate && item.status === "completed"
    ).length;
    const todaysTask = tasks.filter((item) => item.date === targetDate);
    const percentage = (count / todaysTask.length) * 100;
    const uniqueCategories = Array.from(
      new Set(todaysTask.map((item) => item.category))
    );
    setState((prev) => ({
      ...prev,
      percentage: parseFloat(percentage.toFixed(2)),
      todaysTask,
      uniqueCategories,
    }));
  }, [tasks]);
  return (
    <ProgressCardCon>
      <Card>
        <CardHeading>Today's Progress Summary</CardHeading>
        <Spacer />
        <InfoCon>
          <CategoriesCon>
            {state.todaysTask.length ? (
              state.uniqueCategories.map((data, index) => (
                <Categories
                  key={index}
                  style={{
                    left: index === 0 ? 5 : index * 20,
                  }}
                >
                  <CategoriesIcon className={data} />
                </Categories>
              ))
            ) : (
              <CardMessage>You have no task for today!</CardMessage>
            )}
            {state.todaysTask.length &&
            state.uniqueCategories.length < state.todaysTask.length ? (
              <Categories style={{ left: state.uniqueCategories.length * 20 }}>
                +{state.todaysTask.length - state.uniqueCategories.length}
              </Categories>
            ) : null}
          </CategoriesCon>
          <ProgressCon>
            <Progress>
              <ProgressTitle>Progress</ProgressTitle>
              {state.todaysTask.length ? (
                <Percentage>{state.percentage}%</Percentage>
              ) : null}
            </Progress>
            <Slider>
              <SliderBack />
              <SliderBar
                style={{
                  width: state.todaysTask.length
                    ? `${state.percentage}%`
                    : "100%",
                }}
              />
            </Slider>
          </ProgressCon>
        </InfoCon>
      </Card>
    </ProgressCardCon>
  );
}

export default ProgressCard;
