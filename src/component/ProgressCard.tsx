import React, { Component } from "react";
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

class ProgressCard extends Component<ProgressCardProps, State> {
  constructor(props: ProgressCardProps) {
    super(props);
    this.state = {
      percentage: 0,
      todaysTask: [],
      uniqueCategories: [],
    };
  }

  componentDidMount() {
    this.calculateProgress();
  }

  componentDidUpdate(prevProps: ProgressCardProps) {
    if (prevProps.tasks !== this.props.tasks) {
      this.calculateProgress();
    }
  }

  calculateProgress() {
    const { tasks } = this.props;
    const targetDate = getCurrentDate();
    const count = tasks.filter(
      (item) => item.date === targetDate && item.status === "completed"
    ).length;
    const todaysTask = tasks.filter((item) => item.date === targetDate);
    const percentage = (count / todaysTask.length) * 100;
    const uniqueCategories = Array.from(
      new Set(todaysTask.map((item) => item.category))
    );
    this.setState({
      percentage: parseFloat(percentage.toFixed(2)),
      todaysTask,
      uniqueCategories,
    });
  }

  render() {
    const { todaysTask, uniqueCategories, percentage } = this.state;

    return (
      <ProgressCardCon>
        <Card>
          <CardHeading>Today's Progress Summary</CardHeading>
          <Spacer />
          <InfoCon>
            <CategoriesCon>
              {todaysTask.length ? (
                uniqueCategories.map((data, index) => (
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
              {todaysTask.length && uniqueCategories.length < todaysTask.length ? (
                <Categories style={{ left: uniqueCategories.length * 20 }}>
                  +{todaysTask.length - uniqueCategories.length}
                </Categories>
              ) : null}
            </CategoriesCon>
            <ProgressCon>
              <Progress>
                <ProgressTitle>Progress</ProgressTitle>
                {todaysTask.length ? (
                  <Percentage>{percentage}%</Percentage>
                ) : null}
              </Progress>
              <Slider>
                <SliderBack />
                <SliderBar
                  style={{
                    width: todaysTask.length ? `${percentage}%` : "100%",
                  }}
                />
              </Slider>
            </ProgressCon>
          </InfoCon>
        </Card>
      </ProgressCardCon>
    );
  }
}

export default ProgressCard;
