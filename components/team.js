export default function Team({name, children}) {
    return (
        <div className="team">
            <strong>
                {name}
            </strong>
            {(() => {
                if (children != undefined) {
                    return(
                        <div className="team-boards">
                            {children}
                        </div>
                    )
                }
            })()}
        </div>
    )
}