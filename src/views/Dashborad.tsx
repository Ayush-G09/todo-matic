import { DashboradView } from "../styles/Dashboard";
import Header from "../component/Header";
import ProgressCard from "../component/ProgressCard";
import TaskList from "../component/TaskList";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../styles/themes";
import { rootState } from "../store/type";

function Dashborad() {
  const theme = useSelector((state: rootState) => state.data.theme);
  const tasks = useSelector((state: rootState) => state.data.tasks);
  return (
    <DashboradView className="hidescrollbar" bg={theme === 'light' ? lightTheme.backgroundColor : darkTheme.backgroundColor}>
      <Header />
      <ProgressCard tasks={tasks} />
      <TaskList tasks={tasks}/>
    </DashboradView>
  );
}

export default Dashborad;
