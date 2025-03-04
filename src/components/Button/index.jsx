export default function Button({text, href}) {
    return(
        <>
        <a href={href}>
            <span className="p-3 bg-green-backg text-black rounded-lg border-4 border-green-border">{text}</span>
        </a>
        </>
    )
}