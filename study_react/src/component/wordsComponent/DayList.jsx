import dummy from '../../db/data.json'

export default function DayList() {
    console.log(dummy);
    return <ul>
        {
            // dummy 안의 days 를 day 로 하나씩 가져온다
            // day 객체는 각각 id 와 day 를 가진다
        }
        {dummy.days.map(day=>(
            <li key={day.id}>Day {day.day}</li>
        ))}
    </ul>;
}