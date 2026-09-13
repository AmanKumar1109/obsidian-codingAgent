export function Header() {
    return (
        <box justifyContent="center" alignItems="center">
            <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
                <ascii-font font="tiny" text="Obsidian" color="red" />
                <ascii-font font="tiny" text="code" />
            </box>
        </box>
    )
}