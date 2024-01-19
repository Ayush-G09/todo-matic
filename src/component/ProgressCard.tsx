import { useEffect, useState } from "react"
import { ProgressCardProps } from "../types/ProgressCard"
import { Task } from "../types/task";
import { Card } from "../styles/ProgressCard";
import { getCurrentDate } from "../utils/getCurrentDate";

type category = 'work' | 'personal' | 'health' | 'learning' | 'social';

type State = {
    percentage: number;
    todaysTask: Task[];
    uniqueCategories: category[];
}

function ProgressCard({tasks}: ProgressCardProps) {
    const [state, setState] = useState<State>({
        percentage: 0,
        todaysTask: [],
        uniqueCategories: [],
    });
   useEffect(() => {
    const targetDate = getCurrentDate();
    console.log({targetDate});
    const count = tasks.filter(item => item.date === targetDate && item.status === 'completed').length;
    console.log({count})
    const todaysTask = tasks.filter(item => item.date === targetDate);
    console.log({todaysTask})
    console.log({tasks})
    const percentage = count / todaysTask.length * 100;
    const uniqueCategories = Array.from(new Set(todaysTask.map(item => item.category)));
    setState((prev) => ({ ...prev, percentage: parseFloat(percentage.toFixed(2)), todaysTask, uniqueCategories}));
   }, [tasks]);
  return (
    <div style={{width: '100%', height: '30%', display:' flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', color: 'white'}}>
        <Card>
            <div style={{fontWeight: 'bold', fontSize: '2rem', color: 'white', height: '20%'}}>Today's Progress Summary</div>
            <div style={{height: '10%'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', height: '70%', width: '100%', justifyContent: 'center'}}>
                <div style={{width: '100%', height: '40%', display: 'flex', alignItems: 'center', position: 'relative'}}>
                    {state.todaysTask.length ? state.uniqueCategories.map((data, index) => (
                        <div key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '50%', boxShadow: '0x 0px 5px rgba(0, 0, 0, 0.5)', position: 'absolute', left: index === 0 ? 5 : index * 20, color: 'black'}}>
                            <div style={{width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className={data}/>
                        </div>
                    )) : <div>You have no task for today!</div>}
                    {state.todaysTask.length && state.uniqueCategories.length < state.todaysTask.length ? (
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 500, backgroundColor: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '50%', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)', position: 'absolute', left: state.uniqueCategories.length * 20}}>
                            +{state.todaysTask.length - state.uniqueCategories.length}
                        </div>
                    ) : null}
                </div>
                <div style={{width: '40%', height: '50%', gap: '10px', display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 500}}>
                        <div>Progress</div>
                        {state.todaysTask.length ? <div>{state.percentage}%</div> : null}
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', width: '100%', height: '20%', borderRadius: '8px', overflow: 'hidden', position: 'relative'}}>
                        <div style={{width: '100%', height: '100%', backgroundColor: 'white', position: 'absolute', opacity: 0.5}}/>
                        <div style={{width: state.todaysTask.length ? `${state.percentage}%` : '100%', height: '100%', backgroundColor: 'white', position: 'absolute'}}/>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default ProgressCard