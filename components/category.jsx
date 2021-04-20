
export default function Category({name, tasks}) {
    return (
        <div className="category">
            <div className="category_title">
                {name}
            </div>    
            <div className="category_tasks">
                {tasks}
            </div>
        </div>
    )
}