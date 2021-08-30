import s from './TaskInput.module.css';

function TaskInput(props) {
    const {
        containerClassName,
        label,
        inputId,
        value,
        handleChange
    } = props;

    return (
        <div className={containerClassName}>
            <label htmlFor={inputId}>{label}</label>
            <input id={inputId} className={s.taskInput} value={value} onChange={handleChange} type="time" />
        </div>
    )
}

export default TaskInput;