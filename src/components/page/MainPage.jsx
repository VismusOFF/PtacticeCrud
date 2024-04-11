import { useState } from "react";
import "./MainPage.css";

const MainPage = () => {
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [editNumber, setEditNumber] = useState("");
    const [editDate, setEditDate] = useState("");
    const [editTools, setEditTools] = useState("");
    const [editWarning, setEditWarning] = useState("");
    const [editText, setEditText] = useState("");
    const [editClient, setEditClient] = useState("");
    const [editStatus, setEditStatus] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        if (editIndex === -1) {
            setData([
                ...data,
                {
                    number: editNumber,
                    date: editDate,
                    tools: editTools,
                    warning: editWarning,
                    text: editText,
                    client: editClient,
                    status: editStatus,
                }
            ]);
        } else {
            const newData = [...data];
            newData[editIndex] = {
                number: editNumber,
                date: editDate,
                tools: editTools,
                warning: editWarning,
                text: editText,
                client: editClient,
                status: editStatus,
            };
            setData(newData);
            setEditIndex(-1);
        }
        setEditNumber("");
        setEditDate("");
        setEditTools("");
        setEditWarning("");
        setEditText("");
        setEditClient("");
        setEditStatus("");
    };

    return (
        <div className="auth">
            <form onSubmit={handleOnSubmit} className="form">
                <label htmlFor=""> Добавить заявку</label>
                <input type="number" placeholder="Номер" value={editNumber} onChange={(e) => setEditNumber(e.target.value)} />
                <input type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                <input type="text" placeholder="Оборудование" value={editTools} onChange={(e) => setEditTools(e.target.value)} />
                <input type="text" placeholder="Тип неисправности" value={editWarning} onChange={(e) => setEditWarning(e.target.value)} />
                <input type="text" placeholder="Описание проблемы" value={editText} onChange={(e) => setEditText(e.target.value)} />
                <input type="text" placeholder="Клиент" value={editClient} onChange={(e) => setEditClient(e.target.value)} />
                <input type="text" placeholder="Статус" value={editStatus} onChange={(e) => setEditStatus(e.target.value)} />
                <input type="submit" />
            </form>
            <div className="container">
            <label htmlFor="">Заявки</label>
            <ul className="spisok">
                {data.map((item, index) => (
                    <li key={index}>
                        номер: {item.number} | дата: {item.date} | оборудование: {item.tools} | тип неисправности: {item.warning} | описание проблемы: {item.text} | клиент: {item.client} | статус: {item.status}
                        <button onClick={() => {
                            setEditIndex(index);
                            setEditNumber(item.number);
                            setEditDate(item.date);
                            setEditTools(item.tools);
                            setEditWarning(item.warning);
                            setEditText(item.text);
                            setEditClient(item.client);
                            setEditStatus(item.status);
                        }}>Редактировать</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default MainPage;