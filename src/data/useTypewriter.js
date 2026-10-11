import { useState, useEffect, useRef } from 'react';

export function useTypewriter(
    texts,
    {
        typeSpeed = 25,
        deleteSpeed = 15,
        pauseAfterType = 2000,
        pauseAfterDelete = 400,
    } = {}
) {
    const [displayed, setDisplayed] = useState('');
    const timeoutRef = useRef(null);

    useEffect(() => {
        let textIndex = 0;
        let cancelled = false;

        const wait = (ms) => new Promise((resolve) => {
            timeoutRef.current = setTimeout(resolve, ms);
        });

        const run = async () => {
            while (!cancelled) {
                const text = texts[textIndex];

                for (let i = 1; i <= text.length; i++) {
                    if (cancelled) return;
                    setDisplayed(text.slice(0, i));
                    await wait(typeSpeed);
                }

                await wait(pauseAfterType);

                for (let i = text.length; i >= 0; i--) {
                    if (cancelled) return;
                    setDisplayed(text.slice(0, i));
                    await wait(deleteSpeed);
                }

                await wait(pauseAfterDelete);

                textIndex = (textIndex + 1) % texts.length;
            }
        };

        run();

        return () => {
            cancelled = true;
            clearTimeout(timeoutRef.current);
        };
    }, [texts, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

    return displayed;
}