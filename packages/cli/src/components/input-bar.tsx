import type { KeyBinding } from "@opentui/core";
import { StatusBar } from "./status-bar";

type Props = {
    onSubmit: (text: string) => void;
    disabled?: boolean;
};

export const TEXTAREA_KEY_BINDINGS: KeyBinding[] = [
    { name: "return", shift: true, action: "newline" },
    { name: "enter", shift: true, action: "newline" },
    { name: "return", meta: true, action: "newline" },
    { name: "enter", meta: true, action: "newline" },
    { name: "linefeed", action: "newline" },
    { name: "return", action: "submit" },
    { name: "enter", action: "submit" },
];

export function InputBar({ onSubmit, disabled = false }: Props) {
    return (
        <box
            flexDirection="row"
            width="100%"
            backgroundColor="#16161F"
        >
            {/* Left Accent Bar */}
            <box width={1} backgroundColor="#E53935" />

            {/* Input Content Container */}
            <box
                flexDirection="column"
                flexGrow={1}
                paddingX={2}
                paddingY={1}
                gap={1}
            >
                <textarea
                    focused={!disabled}
                    keyBindings={TEXTAREA_KEY_BINDINGS}
                    placeholder="Ask anything... for example fix a bug"
                />

                {/* Bottom Row: Status Bar & Key Hints */}
                <box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                >
                    <StatusBar />

                    <box flexDirection="row" gap={1} alignItems="center">
                        <text fg="#6B7280">↵ send</text>
                        <text fg="#4B5563">·</text>
                        <text fg="#6B7280">⇧↵ newline</text>
                    </box>
                </box>
            </box>
        </box>
    );
}